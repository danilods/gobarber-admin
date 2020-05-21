const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("./database.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));
const uuidv4 = require("uuid/v4");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

// Create a token from a payload
const createToken = (email, name) => jwt.sign({ email, name }, SECRET_KEY, { expiresIn });

// Verify the token
const verifyToken = token => jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));

// Check if the user exists in database
const getUser = (email, password) => userdb.users.find(user => user.email === email && user.password === password);

// Register New User
server.post("/auth/register", (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);

  const { email, password, name } = req.body;
  let user = getUser(email, password);

  if (user) {
    const status = 400;
    const message = "Email already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    data = JSON.parse(data.toString());

    //Add new user
    user = {
      id: uuidv4(),
      email: email,
      name: name,
      password: password
    };

    data.users.push(user);

    fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });

    // Create token for new user
    const access_token = createToken(email, name);

    res.status(200).json({ access_token, user: { id: user.id, name: user.name, email: user.email } });
  });
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;

  const user = getUser(email, password);

  if (!user) {
    const status = 400;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }

  const access_token = createToken(user.email, user.name);
  console.log("Access Token:" + access_token);

  res.status(200).json({ token: access_token, user: { id: user.id, name: user.name, email: user.email } });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(" ")[0] !== "Bearer") {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    const verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3333, () => {
  console.log("Run Auth API Server");
});
