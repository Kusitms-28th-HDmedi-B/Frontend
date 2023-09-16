import Axios from '..';

export const getAuthToken = (id: string, password: string) =>
  Axios.post('/auth/login', {
    loginId: id,
    password,
  });
