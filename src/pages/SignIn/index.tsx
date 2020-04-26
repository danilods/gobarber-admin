import React, {useCallback, useRef} from 'react';

import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {useAuth} from '../../hooks/AuthContext';

import {useToast} from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import {Container, Content, Background} from './styles';

interface SignInFormData  {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const {user, signIn} = useAuth();

  const { addToast } = useToast();

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    }
     catch (err) {

      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      addToast();
    }

   await signIn({
      email: data.email,
      password: data.password,
    });
  }, [signIn, addToast]);

  return (
    <Container>

     <Content>
      <img src={logoImg} alt="4Men"/>

       <Form ref={formRef} onSubmit={handleSubmit}>

        <h1>Faça seu Login</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input name="password"
        icon={FiLock}
        type="password"
        placeholder="Senha" />

        <Button type="submit">Entrar</Button>

      <a href="">
        Esqueci minha senha
      </a>

      </Form>

      <a href="">
        <FiLogIn />
        Criar uma conta
      </a>

    </Content>
    <Background />
  </Container>
  );

}



export default SignIn;
