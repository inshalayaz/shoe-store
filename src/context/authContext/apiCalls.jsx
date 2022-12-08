import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const login = async (data, setUser) => {
  try {
    const res = await axios.post('http://localhost:3001/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });
    setUser(res.data);
    return true
    // localStorage.setItem('email', JSON.stringify(res.data));
  } catch (error) {
    return false
    // localStorage.setItem('error', JSON.stringify(error));
  }
};

export const register = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(
      'http://localhost:3001/register',
      data,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }
    );
    console.log(res.data);
    localStorage.setItem('message', JSON.stringify(res.data));
    alert('Registered Successfully');
  } catch (error) {
    localStorage.setItem('message', JSON.stringify(error.response.data.message));
    alert(error.response.data.message)
  }
};
