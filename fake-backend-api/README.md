# JSON Server + JWT Auth

A Fake REST API using json-server with JWT authentication.

Implemented endpoint: login,register

## Install

```bash
$ yarn or npm install
$ yarn start or npm run start
```

## How to create a new user?

Sending a POST request to

```
POST http://localhost:3333/auth/register
```

with the following data

```
{
  "name": "Admin",
  "email": "admin@admin.com",
  "password":"admin"
}
```

## How to login?

Sending a POST request to

```
POST http://localhost:3333/auth/login
```

with the following data

```
{
  "email": "admin@admin.com",
  "password":"admin"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
}
```

You should send this authorization with any request to the protected endpoints

```
Authorization: Bearer <ACCESS_TOKEN>
```
