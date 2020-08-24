import React, { useState, useEffect } from 'react';

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

function DialogHeroUpdate({ onSubmit, open, onOpenChange, record }) {
  const [recordHero, setRecordHero] = useState({});

  useEffect(() => {
    setRecordHero({ classe: record.class, ...record });
  }, [record])

  const handleSubmit = ({ name, classe, latitude, longitude }) => {
    onSubmit({
      name, class: classe, latitude, longitude, _id: record._id
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Container>
        <Title>Cadastro de Herói</Title>
        <Form schema={schema} initialData={recordHero} onSubmit={handleSubmit}>
          <Input label='Nome do herói' name='name' type="text" />
          <Input label='Classe do herói' name='classe' type="text" />
          <Input label='Latitude' name='latitude' step='0' />
          <Input label='Longitude' name='longitude' step='0' />
          <Button type='submit' text='Cadastrar' />
        </Form>
      </Container>
    </Dialog>
  )
}

export default DialogHeroUpdate;
