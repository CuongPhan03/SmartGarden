import { webAxios } from '../utils/axios';

const login = async (username, password) => {
    return await webAxios.post('/user/login', { username, password });
};

const logout = async () => {
    return await webAxios.get('/user/logout');
};

export { login, logout };
