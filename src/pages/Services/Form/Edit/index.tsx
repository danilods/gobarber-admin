import React, {useCallback, useRef, useState, ChangeEvent, useEffect} from 'react';

import * as firebase from "firebase/app";

import "firebase/firestore";

import { FiDollarSign, FiSettings} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import { useHistory, useParams} from 'react-router-dom';

import {useToast} from '../../../../hooks/ToastContext';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/Input';

import Button from '../../../../components/Button';

import {Container, DataCard, CardItem, User} from './styles';


import remove from '../../../assets/delete.svg';


interface ServiceFormData {
  tipo: string;
  valor: number;

}

interface serviceProps {
  id: string;
  tipo_servico: string;
  valor: number;
  provider_id: string;
  images: [] | null;
}


const EditService: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [stateService, setStateService] = useState<firebase.firestore.DocumentData>(() => {
    return [] as firebase.firestore.DocumentData;
  });

  const {docId} = useParams();

  const handleModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);


  useEffect(() => {
    async function getServices() {
      try {
       const response: firebase.firestore.DocumentData = await firebase
          .firestore()
          .collection('servicos')
          .doc(docId)
          .get();

          if(response) {
            setStateService(response.data());
          }

      } catch(err){
        console.log(err);
      }
    }
      getServices();

  }, [])


  const handleSubmit = useCallback(async (data: ServiceFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        tipo_servico: Yup.string().required('Nome obrigatório'),
        valor: Yup.number().required('Valor obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      firebase.firestore().collection('servicos')
      .doc(docId).update(data);

      addToast({
        type: 'success',
        title: 'Registro atualizado com sucesso',
        description: 'Base de dados atualizada'
      });

      history.push('/services');

    }
    catch(err) {

      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer o cadastro.'
        });
        console.log(err);

    }

    }, [history, addToast],
  );



  return (
    <Container>
        <DataCard>

            <CardItem>

                <h1>Atualizar serviço</h1>
                <Form ref={formRef} onSubmit={handleSubmit} initialData={stateService}>

                <Input name="tipo_servico" icon={FiSettings} placeholder="Tipo de serviço" />

                <Input name="valor" icon={FiDollarSign} placeholder="Valor do serviço" />

                  <div>
                      <Button type="submit">Salvar</Button>
                  </div>
                  </Form>
            </CardItem>

              <CardItem>
                <h1>Imagens</h1>
              </CardItem>
        </DataCard>
  </Container>
  );

}



export default EditService;
