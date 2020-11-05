const URL_BACKEND = 'http://localhost:9999';

export const utenteServices = {

    loginUtente,
    
};

function loginUtente(req){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(req)
    };
    return fetch(URL_BACKEND + '/login', requestOptions)
           .then(response=>response.json()).catch(err=>console.log(err))
};