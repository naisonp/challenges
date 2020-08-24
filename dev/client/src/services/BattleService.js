import api from '.';

export async function list() {
  try {
    const response = await api.get('/battles');
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function finish(id) {
  try {
    const response = await api.put(`/battles${id}`);
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function start(occurrence) {
  try {
    const response = await api.post(`/battles`, occurrence);
    return response.data;
  } catch (error) {
    throw error.data;
  }
}
