const URL_BACKEND = 'http://localhost:9999';

export const prodottiServices = {

    getAllProdotti,
    //aggiungiNuovoProdotto,
    eliminaProdotto
};

function getAllProdotti(){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
    };
    return fetch(URL_BACKEND + '/prodotti', requestOptions)
           .then(response=>response.json()).catch(err=>console.log(err))
};

function eliminaProdotto(id){
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
    };
    return fetch(URL_BACKEND + `/prodotti/${id}`, requestOptions)
           .then(response=>response.json()).catch(err=>console.log(err))
};