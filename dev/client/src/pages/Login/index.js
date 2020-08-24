import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, ContentContainer, Title } from './styles';
import { Button } from '../../components';

import * as Auth from '../../services/AuthService';

const schema = Yup.object().shape({
  login: Yup.string().required('O usuário é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

function Login() {
  const history = useHistory();

  const handlerSubmit = async ({ login, password }) => {
    try {
      const { token } = await Auth.login(login, password);

      localStorage.setItem('@ZRPapp:token', token);

      history.push('/heroes');

    } catch (err) {
      toast.error(err.mensage);
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Title>iHeros</Title>
        <Form schema={schema} onSubmit={handlerSubmit}>
          <Input type='text' name='login' placeholder='Usuário' />
          <Input type='password' name='password' placeholder='Senha' />
          <Button type='submit' text='Entrar' />
        </Form>
      </ContentContainer>
    </Container>
  )
}

export default Login;
