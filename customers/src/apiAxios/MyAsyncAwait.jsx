import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function MyAsyncAwait() {
  const [list, setList] = useState();

  const listUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/menu');
      //console.log(res.data.docs);
      const data = res.data.docs;
      setList(JSON.stringify(data));

      //console.log(data);

      //captura a div root
      const root = document.getElementById("root");

      //cria um elemento lista
      const ul = document.createElement('ul')
      ul.textContent = list;


      root.appendChild(ul);



    } catch (err) {
      console.error(err);
    }
  };
  listUsers();

  return (
    <div>
      <p>Teste de Async/Await com API Axios</p>

    </div>

  );
}
export default MyAsyncAwait;
