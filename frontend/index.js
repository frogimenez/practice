var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


fetch("http://localhost/practice/backend/playas.php")
    .then(response => response.text())
    .then(myRawData => {
        const myJsonData = JSON.parse(myRawData)
        console.log(myJsonData);
        document.getElementById("contenido").innerHTML = myRawData;
    })

.catch(error => console.log('error', error));
console.log(2);



document.getElementById("contenido").innerHTML = "hola";
$("#contenido").innerHTML = "sdgdsfg"

function changeColor(newColor) {
    let elem = document.getElementById("test");
    elem.style.color = newColor;
}