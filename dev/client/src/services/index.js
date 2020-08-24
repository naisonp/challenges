import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001',
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});


api.addAsyncRequestTransform(async (request) => {
  const token = await localStorage.getItem('@ZRPapp:token');

  if (token) { request.headers.Authorization = `Bearer ${token}`; }
});

export default api;
