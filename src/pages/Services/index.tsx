import React, {useCallback, useRef, useEffect, useState} from 'react';

import {FiSettings, FiDollarSign} from 'react-icons/fi';

import * as firebase from "firebase/app";

import "firebase/firestore";

import app from '../../services/firebaseApi';

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
  tipo: string;
  valor: number;
}

interface imageProps {
  path_image: string;
  name: string;
}

interface serviceProps {
  id: string;
  tipo_servico: string;
  valor: number;
  provider_id: string;
  images: [] | null;
}



const Services: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const {userFire} = useAuth();

  const { addToast } = useToast();
  const history = useHistory();

  const [serviceData, setServiceData] =
  useState<firebase.firestore.DocumentData>(() => {
    return [] as firebase.firestore.DocumentData;
  });

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

        const dataService = {
          tipo_servico: data.tipo,
          valor: data.valor,
          provider_id: userFire.uid,
          images: []
        }

        firebase.firestore().collection('servicos')
          .add(dataService);

          addToast({
            type: 'success',
            title: 'Cadastro realizado com sucesso',
            description: 'Serviço cadastrado'
          });

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

    }, [addToast, history],
  );

  useEffect(() => {
    firebase
    //Accesses your Firestore database
      .firestore()
    //Access the "items" collection
      .collection("servicos")
    //You can "listen" to a document with the Firebase onSnapshot() method.
      .onSnapshot(snapshot => {
    /*
    The returned snapshot sends us back the id and the document data. So we map through it.
     */
        const listItems = snapshot.docs.map(doc => ({
        /*
        Map each document into snapshot
        id and data are pushed into items array
        spread operator merges data to id. What is happening is the JavaScript object is being called.
        */
             id: doc.id,
          ...doc.data(),
        }))
    //Now we set items equal to items we read from the Firestore
        setServiceData(listItems);
      })

    }, [])

    const handleDelete = useCallback((id) => {
      try {
        firebase.firestore().collection('servicos')
        .doc(id)
        .delete();
        addToast({
          type: 'success',
          title: 'Registro removido com sucesso',
          description: 'Serviço excluído'
        });
      } catch(err) {
        addToast({
          type: 'error',
          title: 'Erro ao remover registro',
          description: 'Erro de exclusão'
        });
      }

    },[]);

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
                  {serviceData.map((items: serviceProps) => (

                      <tr >
                      <td className="title">{items.tipo_servico}</td>
                      <td className="">R$ {items.valor}</td>

                      <td><div><Link to="/staffs/new">
                        <img src={edit} alt=""/>
                      </Link>
                      <Link to="/services" onClick={() => handleDelete(items.id)}>
                        <img src={remove} alt=""/>
                      </Link></div>
                      </td>
                    </tr>

                  ))}

                </tbody>
              </table>
            </TableContainer>

        </Container>

     );
  }


export default Services;
