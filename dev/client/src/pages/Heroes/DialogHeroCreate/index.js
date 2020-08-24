import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Dialog, Button } from '../../../components';
import { Container, Title } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  classe: Yup.string().required('A classe é obrigatório'),
  latitude: Yup.string().required('A latitude é obrigatório'),
  longitude: Yup.string().required('A longitude é obrigatório'),
});

function DialogHeroCreate({ onSubmit, open, onOpenChange }) {

  const handleSubmit = ({ name, classe, latitude, longitude }) => {
    onSubmit({
      name, class: classe, latitude, longitude,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Container>
        <Title>Cadastro de Herói</Title>
        <Form schema={schema} onSubmit={handleSubmit} >
          <Input label='Nome do herói' name='name' type="text" />
          <Input label='Classe do herói' name='classe' type="text" />
          <Input label='Latitude' name='latitude' type="number" step='0' />
          <Input label='Longitude' name='longitude' type="number" step='0' />
          <Button type='submit' text='Cadastrar' />
        </Form>
      </Container>
    </Dialog>
  )
}

export default DialogHeroCreate;
