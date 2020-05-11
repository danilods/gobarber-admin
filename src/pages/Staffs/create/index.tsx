import React, {useCallback, useRef, useState, ChangeEvent} from 'react';


import { FiMail, FiUser, FiPhoneCall} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {Link, useHistory} from 'react-router-dom';

import api from '../../../services/api';

import {useToast} from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';

import Modal from '../../../components/Modal';

import Button from '../../../components/Button';

import {Container, DataCard, CardItem, User} from './styles';

import {TableContainer} from '../../_layouts/styles';

import remove from '../../../assets/delete.svg';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const CreateStaff: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);



  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        telefone: Yup.string().min(8, 'No mínimo 8 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Colaborador inserido na sua empresa'
      });

      history.push('/');

    }
    catch(err) {

      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

    }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer o cadastro.'
        });
    }, [history, addToast],
  );



  return (
    <Container>
        <DataCard>

            <CardItem>

                <h1>Cadastrar novo colaborador</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <User>

                        <img src="https://avatars0.githubusercontent.com/u/13861600?v=4" alt=""/>
                        <h1>Avatar</h1>

                  </User>

                <Input name="name" icon={FiUser} placeholder="Nome" />

                <Input name="email" icon={FiMail} placeholder="Email" />

                <Input name="telefone"
                icon={FiPhoneCall}
                type="text"
                placeholder="Telefone" />

                  <div>
                      <Button type="submit">Salvar</Button>
                      <Button type="button">Cancelar</Button>
                  </div>
                  </Form>
            </CardItem>

              <CardItem>
                <div>
                  <h1>Serviços</h1>
                  <Button type="button" onClick={handleModal}>Adicionar serviços</Button>
                        {isModalVisible ? (
                          <Modal id="modal" onClose={() => setIsModalVisible(false)}>
                            <h2>Modal App</h2>
                          </Modal>
                        ) : null}
                </div>

                <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Tipo de serviço</th>
                    <th>Valor (R$)</th>
                    <th></th>

                 </tr>
                </thead>

                <tbody>
                    <tr >
                      <td className="title">Corte de cabelo</td>
                      <td className="">55,00</td>
                      <td>
                      <div>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                    <tr >
                      <td className="title">Tratamento de barba</td>
                      <td className="">20,00</td>
                      <td>
                      <div>
                      <Link to="/staffs/delete">
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>
                </tbody>
              </table>
            </TableContainer>

              </CardItem>


        </DataCard>


  </Container>
  );

}



export default CreateStaff;
