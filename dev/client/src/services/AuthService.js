
import api from '.';

export async function login(login, password) {
  try {
    const response = await api.post('/sessions', { login, password, });
    return response.data;
  } catch (error) {
    throw error.data;
  }
}
