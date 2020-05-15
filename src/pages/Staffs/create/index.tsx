import React, {useCallback, useRef, useState, useEffect} from 'react';

import * as firebase from "firebase/app";

import "firebase/firestore";

import { FiMail, FiUser, FiPhoneCall} from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import {useHistory} from 'react-router-dom';

import api from '../../../services/api';

import {useToast} from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';

import Button from '../../../components/Button';

import CheckBox from '../../../components/Checkbox';

import {Container, DataCard, CardItem, User} from './styles';

import {TableContainer} from '../../_layouts/styles';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface serviceProps {
  id: string;
  tipo_servico: string;
  valor: number;
  provider_id: string;
  images: [] | null;
  favorite: boolean | undefined;
}

interface newService {
  id: string;
}

const CreateStaff: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [stateService, setStateService] =
  useState<firebase.firestore.DocumentData>(() => {
    return [] as firebase.firestore.DocumentData;
  });
  const [serviceStaff, setServiceStaff] = useState<serviceProps>();


  useEffect(() => {
    firebase
      .firestore()
      .collection("servicos")
      .onSnapshot(snapshot => {
      const listItems = snapshot.docs.map(doc => ({

             id: doc.id,
          ...doc.data(),
        }))
        setStateService(listItems);
      })

    }, [])

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

  useEffect(() => {
    const filtered = stateService.filter((repo:serviceProps) => repo.favorite);
    console.log(filtered);
    setServiceStaff(filtered);
  }, [stateService])

  function handleServices(id: string) {

    const addService = stateService.map((repo:serviceProps) => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;
    });

    setStateService(addService);

    console.log(stateService);
  }

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
                  <h1>Marque os serviços do profissional</h1>

                </div>

                <TableContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome do serviço</th>
                        <th>Valor</th>
                        <th>Atribuído</th>
                      </tr>
                  </thead>

                <tbody>
                  {stateService.map((items: serviceProps) => (

                      <tr key={items.id}>
                      <td className="title">{items.tipo_servico}</td>
                      <td className="">R$ {items.valor}</td>
                      <td><div>

                        <CheckBox
                        onChange={() => handleServices(items.id)}
                        defaultChecked={items.favorite}
                        />

                      </div>
                      </td>
                    </tr>

                  ))}

                </tbody>
              </table>
            </TableContainer>

              </CardItem>


        </DataCard>


  </Container>
  );

}



export default CreateStaff;
