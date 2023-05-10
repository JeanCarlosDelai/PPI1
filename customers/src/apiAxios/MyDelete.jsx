import React from 'react';
import axios from 'axios';
import MyAsyncAwait from './MyAsyncAwait';


const MyDelete = () => {

  const URL = 'http://localhost:3000/api/menu/'


  async function Get() {
    const resposta = await axios.get(URL)

    return resposta.data;
  };

  const data = Get();

  //console.log(data)
  data.then((data) => {
    //console.log(JSON.stringify(data))
    const el = JSON.stringify(data.docs[0]._id).replace(/"/g, '');
    //console.log(JSON.stringify(data.docs[0]._id).replace(/"/g, ''))

    axios.delete(URL + el);

    MyAsyncAwait

    //apaga todos
    // data.docs.map((i) => {
    //   el = i._id;
    //   //JSON.parse(el.docs);
    //   console.log("Excluindo: ", el)
    //   console.log(URL + el)



    //   axios.delete(URL + el);

    // })




  }
  );

  //const id = el.then()._id;
  //console.log(id)
  //console.log(URL + id)

  //axios.delete(URL + id);

  // .then(res => console.log(res.data));
  return (
    <p>Teste de DELETE ID com API Axios</p>
  );
}
export default MyDelete;
