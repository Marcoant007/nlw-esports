import express from 'express';

const app = express();

app.get('/ads', ()=> {
    console.log('Acesso ads')
})

app.listen(3333);