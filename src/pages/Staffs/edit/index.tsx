import React, {useCallback, useRef} from 'react';

import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {Link, useHistory} from 'react-router-dom';

import api from '../../../services/api';

import {useToast} from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../../components/Input';

import Button from '../../../components/Button';

import {Container, Content, AnimationContainer, Background} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const EditStaff: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer seu login'
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

    <Content>

      <img src={logoImg} alt="4Men"/>

          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Cadastrar novo colaborador</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Input name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>

          </Form>
          <Link to="/">
            <FiArrowLeft />
            Criar uma conta
          </Link>

    </Content>
  </Container>
  );

}



export default EditStaff;
