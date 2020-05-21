import React, {useCallback, useEffect} from 'react';
import * as firebase from "firebase/app";

import "firebase/firestore";

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

const handleList = useCallback((collection: string, data: object) => {
  firebase
    .firestore()
    .collection("servicos")
    .onSnapshot(snapshot => {

      const listItems = snapshot.docs.map(doc => ({

           id: doc.id,
        ...doc.data(),
      }))
      return listItems;
    })

  }, []);

  const handleDelete = useCallback((id) => {
    try {
      firebase.firestore().collection('servicos')
      .doc(id)
      .delete();

      } catch(err) {
        throw(err);
    }

  },[]);

  const handleEdit = useCallback((id, data: serviceProps) => {
    try {
      firebase.firestore().collection('servicos')
      .doc(id)
      .delete();

    } catch(err) {
      throw(err);
    }

  },[]);

  export {handleList, handleDelete, handleEdit};
