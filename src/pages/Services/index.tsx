import React, {useCallback, useRef} from 'react';

import {FiSettings, FiDollarSign} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {Link, useHistory } from 'react-router-dom';

import {useAuth} from '../../hooks/AuthContext';

import {useToast} from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErrors';


import Input from '../../components/Input';

import Button from '../../components/Button';

import {Container, Actions } from './styles';

import {TableContainer} from '../_layouts/styles';

import edit from '../../assets/edit.svg';
import remove from '../../assets/delete.svg';

interface SignInFormData  {
  email: string;
  password: string;
}

const Services: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { signIn} = useAuth();

  const { addToast } = useToast();
  const history = useHistory();


  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          tipo: Yup.string()
          .required('Tipo de serviço obrigatório'),

          valor: Yup.number()
          .required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });


        history.push('/dashboard');



      } catch(err) {

        if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro. Cheque os dados.'
        });

      }

    }, [signIn, addToast, history],
  );

      return (
        <Container>
           <Actions>
              <h1>Gerenciando Serviços</h1>
              <Form ref={formRef} onSubmit={handleSubmit}>
                  <Input
                  name="tipo"
                  icon={FiSettings}
                  placeholder="Tipo de serviço"
                  />
                  <Input
                  name="valor"
                  icon={FiDollarSign}
                  placeholder="Valor do serviço"
                  />
                <Button type="submit"> + Cadastrar serviço</Button>
              </Form>
            </Actions>

            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Nome do serviço</th>
                    <th>Valor do Serviço</th>
                    <th>Ações</th>

                  </tr>
                </thead>

                <tbody>

                    <tr >
                      <td className="title">Corte Degradê</td>
                      <td className="">R$ 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>

                    <tr >
                      <td className="title">Corte Moicano</td>
                      <td className="">R$ 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                    <tr >
                      <td className="title">Corte Militar</td>
                      <td className="">R$ 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                    <tr >
                      <td className="title">Corte Social</td>
                      <td className="">R$ 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                    <tr >
                      <td className="title">Barba</td>
                      <td className="">R$ 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                    <tr >
                      <td className="title">Sobrancelha</td>
                      <td className="">R% 35,00</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>


                </tbody>
              </table>
            </TableContainer>

        </Container>

     );
  }


export default Services;
