const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
// const { prodottiServices } = require('./src/services/prodotti.service');

const app = express();
app.use(cors());

//servono solo se non hai databasenp
const PRODUCT_DATA_FILE = path.join('./server-prodotti.json');
const USER_DATA_FILE = path.join('./server-utenti.json');
const CART_DATA_FILE = path.join('./server-carrello.json');

//libreria che parsa il body di ogni chiamata e lo trasforma in json
app.set('port', process.env.PORT || 9999);
app.use(bodyParser.json());



/* Servizio REST GET utenti  */
app.get('/utenti', (req,res)=>{
   fs.readFile(USER_DATA_FILE, (err, data)=>{
    res.json(JSON.parse(data));
   });
});

/* Servizio REST GET prodotti  */
app.get('/prodotti', (req,res)=>{
    fs.readFile(PRODUCT_DATA_FILE, (err, data)=>{
     res.json(JSON.parse(data));
    });
 });

 /* Servizio REST POST prodotti  */

 app.post('/prodotti', (req,res)=>{

    fs.readFile(PRODUCT_DATA_FILE, (err,data)=>{
        const listaProdotti = JSON.parse(data);
        const nuovoProdotto = {
            id : req.body.id,
            titolo : req.body.titolo,
            prezzo : req.body.prezzo
        };
        listaProdotti.push(nuovoProdotto);
        fs.writeFile(PRODUCT_DATA_FILE, JSON.stringify(listaProdotti), ()=> {
            res.json(listaProdotti);
        });
    });

 });

 /* Servizio REST POST login utenti  */

 app.post('/login', (req,res)=>{

    fs.readFile(USER_DATA_FILE, (err,data)=>{
        
        const listaUtenti = JSON.parse(data);  
      
        var utenteLogin = { success:false};

        listaUtenti.map(utente => {

            if(utente.username === req.body.username &&
               utente.password === req.body.password )
               {
                utenteLogin = {...utente, success:true};
                
               }
               

               return null;
       });
       
           res.json(utenteLogin)
    });

 });

 /* Servizio REST DELETE prodotti , nelle delete passiamo per 
 paramentro l'id dato che non può contenere nel body i parametri */

 app.delete('/prodotti/:id', (req,res)=>{

    fs.readFile(PRODUCT_DATA_FILE, (err,data)=>{
        const listaProdotti = JSON.parse(data);
        var nuovaLista = listaProdotti.filter(persona => req.params.id !== persona.id);

         fs.writeFile(PRODUCT_DATA_FILE, JSON.stringify(nuovaLista), ()=> {
            res.json(nuovaLista);
        });
      });
    });

 /* Servizio REST POST carrello (ADD) */

 app.post('/carrello', (req,res)=>{

    fs.readFile(CART_DATA_FILE, (err,data)=>{
        
        const listaProdotti = JSON.parse(data);  
    
        var prodottoPresente = listaProdotti.filter(prodotto => prodotto.id === req.body.id)[0];
    
        if(prodottoPresente){

            prodottoPresente = {
                ...prodottoPresente,
                quantita: prodottoPresente.quantita++
            };

        }else{

                var nuovoProdotto = {
                    id : req.body.id,
                    titolo : req.body.titolo,
                    prezzo : req.body.prezzo,
                    quantita: 1
                };

                console.log(nuovoProdotto)
                listaProdotti.push(nuovoProdotto)
            }

                fs.writeFile(CART_DATA_FILE, JSON.stringify(listaProdotti), ()=> {       
                    res.json(listaProdotti)
                });
    });

 });


 /* Servizio REST GET carrello  */
app.get('/carrello', (req,res)=>{
    fs.readFile(CART_DATA_FILE, (err, data)=>{ 
     res.json(JSON.parse(data));
    });
 });

/* Servizio REST DELETE carrello , nelle delete passiamo per 
 paramentro l'id dato che non può contenere nel body i parametri */

 app.delete('/carrello/:id', (req,res)=>{

    fs.readFile(CART_DATA_FILE, (err,data)=>{
        const listaProdotti = JSON.parse(data);
        var nuovaLista = listaProdotti.filter(prodotto => req.params.id !== prodotto.id);

         fs.writeFile(CART_DATA_FILE, JSON.stringify(nuovaLista), ()=> {
            res.json(nuovaLista);
        });
      });
    });


    app.listen(app.get('port'), ()=>{
        console.log((`Find the server at: http://localhost:${app.get('port')}/`))
    
    });
