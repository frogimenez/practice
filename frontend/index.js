var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://localhost/practice/backend/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

console.log(requestOptions);

document.write(requestOptions);