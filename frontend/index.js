var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
console.log(1);
fetch("http://localhost/practice/backend/playas.php")
    .then(response => response.text())
    .then(myRawData => {
        const myJsonData = JSON.parse(myRawData)
        console.log(myJsonData);
    })

.catch(error => console.log('error', error));
console.log(2);

document.getElementById("contenido").innerHTML = "hola";
$("#contenido").innerHTML = "sdgdsfg"