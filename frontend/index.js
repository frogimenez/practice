var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getDataNombresTelefono() {
    fetch("http://localhost/practice/backend/playas.php")
        .then(response => response.text())
        .then(myRawData => {
            const myJsonData = JSON.parse(myRawData)
            let string = "";
            for (let i = 0; i < myJsonData.length; i++) {
                let obj = myJsonData[i];

                string += obj.nombres_playas + ' - ' + obj.telefono + '<br/>';

            }
            document.getElementById("contenido").innerHTML = string;

        })
        .catch(error => console.log('error', error));
}
document.getElementById("myBtn1").addEventListener("click", getDataNombresTelefono);

function getMail() {
    fetch("http://localhost/practice/backend/playas.php")
        .then(response => response.text())
        .then(myRawData => {
            const myJsonData = JSON.parse(myRawData)
            let string = "";
            for (let i = 0; i < myJsonData.length; i++) {
                let obj = myJsonData[i];

                string += obj.mail + '<br/>';
            }

            document.getElementById("myBtn2").addEventListener("click", function() {
                document.getElementById("contenido2").innerHTML = string;
                let v = document.getElementById("contenido2");
                if (v.style.display === "none") {
                    v.style.display = "block";
                } else {
                    v.style.display = "none";
                }
            });

        })
        .catch(error => console.log('error', error));
}
getMail();

var PostOptions = {
    method: 'POST'
};

function postTest() {
    fetch('https://example.com/profile', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: 123 }),
    })
}