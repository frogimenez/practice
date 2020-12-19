var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getData() {
    fetch("http://localhost/practice/backend/playas.php")
        .then(response => response.text())
        .then(myRawData => {
            var myJsonData = JSON.parse(myRawData)
            let string = "";
            for (let i = 0; i < myJsonData.length; i++) {
                var obj = myJsonData[i];

                string += obj.nombres_playas + ' - ' + obj.telefono + '<br/>';
            }
            document.getElementById("contenido").innerHTML = string;

        })

    .catch(error => console.log('error', error));


}
getData();