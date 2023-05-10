import { useState } from 'react'
import './App.css'
import { UserProvider } from './components/UserContext';
import HomePage from './components/HomePage';
import HookForm from './components/HookForm';
import Router from './components/Router';

import MyPost from './apiAxios/MyPost';
import MyDelete from './apiAxios/MyDelete';
import MyAsyncAwait from './apiAxios/MyAsyncAwait';

function App() {

  //user.name sera utilizado dentro de App
  const user = { name: 'Tania', loggedIn: true }


  return (
    <div>
      {/* <UserProvider value={user}>
        <HomePage />
      </UserProvider>
      <HookForm />
      <Router /> */}
      <button onClick={() => {
        MyPost()


        console.log('clic')
      }
      }>
        create new item
      </button>

      <button onClick={() => {
        MyDelete();

        console.log('clic')
      }
      }>
        Delete item
      </button>

      <button onClick={() => {

        MyAsyncAwait();


        console.log('clic')
      }
      }>
        Atualizar
      </button>


      <MyAsyncAwait />
    </div>


  );
}

export default App
