import api from '.';

export async function list() {
  try {
    const response = await api.get('/heros');
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function find(id) {
  try {
    const response = await api.get(`/heros/${id}`);
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function create(hero) {
  try {
    const response = await api.post('/heros', { ...hero });
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function update(hero) {
  try {
    const response = await api.put(`/heros/${hero._id}`, { ...hero });
    return response.data;
  } catch (error) {
    throw error.data;
  }
}

export async function remove(id) {
  try {
    const response = await api.delete(`heros/${id}`);
    return response.data;
  } catch (error) {
    throw error.data;
  }
}
