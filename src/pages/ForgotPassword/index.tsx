import React, {useCallback, useRef} from 'react';

import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import {useToast} from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import {Container, Content, AnimationContainer, Background} from './styles';

interface ForgotFormData {
  email: string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: ForgotFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);

      addToast({
        type: 'success',
        title: 'Envio realizado com sucesso',
        description: 'Verifique seu e-mail e siga as instruções de recuperação'
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
    <Background />
    <Content>
      <AnimationContainer>
      <img src={logoImg} alt="4Men"/>

          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Esqueceu sua senha?</h1>

            <Input name="email" icon={FiMail} placeholder="Digite seu Email" />

            <Button type="submit">Enviar email de recuperação</Button>

          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
      </AnimationContainer>
    </Content>
  </Container>
  );

}



export default SignUp;
