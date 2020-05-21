import React, {useCallback, useRef} from 'react';

import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import app from '../../services/firebaseApi';

import * as firebase from "firebase/app"

import "firebase/firestore"

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {Link, useHistory} from 'react-router-dom';

//import api from '../../services/api';

import {useToast} from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import {Container, Content, AnimationContainer, Background} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {

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

     // await api.post('users', data);

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer seu login'
      });

      history.push('/');

    } catch(err) {

      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login. Cheque suas credenciais.'
      });

    }

  }, [addToast, history],
);

  const handleSubmitFirebase =
      useCallback(async(data: SignUpFormData) => {
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
          const userCreated = await app.auth()
          .createUserWithEmailAndPassword(data.email, data.password);

          const dataCollection = {
            nome: data.name,
            email: data.email,
            cidade: "",
            estado: "",
            cep: "",
            latitude: "",
            longitude: "",
            role_user: "provedor",
            ativo: false,
            aberto: false
          }

          firebase.firestore().collection('provedores')
          .doc(userCreated.user?.uid).set(dataCollection);

          addToast({
            type: 'success',
            title: 'Cadastro realizado com sucesso',
            description: 'Em breve entraremos em contato'
          });

          history.push('/');

        }catch(err) {

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

          <Form ref={formRef} onSubmit={handleSubmitFirebase}>

            <h1>Faça seu cadastro</h1>

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
      </AnimationContainer>
    </Content>
  </Container>
  );

}



export default SignUp;
