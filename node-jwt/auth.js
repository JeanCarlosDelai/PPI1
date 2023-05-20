//Importando módulo Express
const express = require('express');
//Criando uma aplicação express
const app = express();

const jwt = require('jsonwebtoken');



app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const accessTokenSecret = 'youraccesstokensecret';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

app.post('/login', (req, res) => {
    // Lê o nome de usuário e a senha no corpo da requisição
    const { username, password } = req.body;
    // Filtra o usuário(user) do array de usuários(users) por nome de usuário e senha
   
    const user = users.find(u => {
        return u.username === username &&
            u.password === password
    });
    
    if (user) {
        // Gera um token de acesso
        const accessToken = jwt.sign({
            username: user.username, 
            role: user.role
        }, accessTokenSecret, { expiresIn: '2m' });
        res.json({
            accessToken
        });
    } else {
        res.send('Nome de usuário ou senha incorretos');
    }
});

app.listen(3000, () => {
    console.log('Serviço de autenticação iniciado na porta 3000');
});