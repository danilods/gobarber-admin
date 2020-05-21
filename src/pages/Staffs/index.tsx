import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Container, Actions } from './styles';
import { TableContainer } from '../_layouts/styles';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import img from '../../assets/edward.jpg';
import img1 from '../../assets/deadpool-1.jpg';
import img2 from '../../assets/rocky.jpg';
import img3 from '../../assets/stark.jpg';
import edit from '../../assets/edit.svg';
import remove from '../../assets/delete.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0),
      },
    },
  }),
);

const Staffs: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Actions>
        <h1>Meus Profissionais</h1>
        <Link to="/staffs/new">
          <Button> + Cadastrar Profissional</Button>
        </Link>
      </Actions>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="title">
                <div>
                  <img src={img} alt="" />
                  Edward Mãos de Tesoura
                </div>
              </td>
              <td className="">edward@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>
                <div className={classes.root}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </td>
              <td>
                <div>
                  <Link to="/staffs/new">
                    <img src={edit} alt="" />
                  </Link>
                  <Link to="/staffs/delete">
                    <img src={remove} alt="" />
                  </Link>
                </div>
              </td>
            </tr>

            <tr>
              <td className="title">
                <div>
                  <img src={img1} alt="" />
                  Deadpool
                </div>
              </td>
              <td className="">dead@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>
                <div className={classes.root}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </td>
              <td>
                <div>
                  <Link to="/staffs/new">
                    <img src={edit} alt="" />
                  </Link>
                  <Link to="/staffs/delete">
                    <img src={remove} alt="" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="title">
                <div>
                  <img src={img2} alt="" />
                  Rocky Balboa
                </div>
              </td>
              <td className="">rocky@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>
                <div className={classes.root}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </td>
              <td>
                <div>
                  <Link to="/staffs/new">
                    <img src={edit} alt="" />
                  </Link>
                  <Link to="/staffs/delete">
                    <img src={remove} alt="" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="title">
                <div>
                  <img src={img3} alt="" />
                  Tony Stark
                </div>
              </td>
              <td className="">stark@gobarber.com</td>
              <td>+55-11-32145-8754</td>
              <td>
                <div className={classes.root}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </td>
              <td>
                <div>
                  <Link to="/staffs/new">
                    <img src={edit} alt="" />
                  </Link>
                  <Link to="/staffs/delete">
                    <img src={remove} alt="" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default Staffs;
