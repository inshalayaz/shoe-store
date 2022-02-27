import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const login = async (data, setUser) => {
  try {
    const res = await axios.post('http://localhost:3001/api/auth/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });
    setUser(res.data);
    localStorage.setItem('email', JSON.stringify(res.data));
  } catch (error) {
    setUser(error);
    localStorage.setItem('error', JSON.stringify(error));
  }
};
