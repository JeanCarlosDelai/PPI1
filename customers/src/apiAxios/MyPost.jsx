import React from 'react';
import axios from 'axios';

function MyPost() {
  // Cria os dados para serem enviados
  const obj = {
    diaDaSemana: 'Sexta-Feira'
  };

  axios.post('http://localhost:3000/api/menu/', obj)
    .then(res => console.log(res.data));
  return (
    <p>Teste de POST com API Axios</p>
  );
}
export default MyPost;
