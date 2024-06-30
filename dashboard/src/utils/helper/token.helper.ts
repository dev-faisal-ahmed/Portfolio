import { jwtDecode } from 'jwt-decode';
import { TUser } from '../types';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const userInfo = jwtDecode(token);
  return userInfo as TUser;
};
