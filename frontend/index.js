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
//document.getElementById("myBtn1").addEventListener("click", getDataNombresTelefono);

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

function testeo() {

    fetch("http://localhost/practice/backend/playas.php")
        .then(response => response.text())
        .then(myRawData => {
            var myJsonData = JSON.parse(myRawData)
            const contenido = document.getElementById("contenido");
            contenido.innerHTML = ""; // Reseteando

            for (let i = 0; i < myJsonData.length; i++) {
                var templateCopy = document.getElementById("template").cloneNode(true);

                templateCopy.removeAttribute("id");
                templateCopy.getElementsByTagName("H1")[0].innerText = myJsonData[i].nombres_playas;
                templateCopy.getElementsByTagName("H2")[0].innerText = myJsonData[i].telefono;
                templateCopy.getElementsByTagName("SPAN")[0].innerText = myJsonData[i].mail;
                templateCopy.getElementsByTagName("BUTTON")[0].addEventListener("click", (event) => {

                    event.target.parentNode.style.display = "none"
                });

                contenido.appendChild(templateCopy)
            }

        })
        .catch(error => console.log('error', error));

}
document.getElementById("show").addEventListener("click", testeo);

var PostOptions = {
    method: 'POST'
};

function postTest() {
    fetch("http://localhost/practice/backend/playas_post.php", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: 123 }),
    })
}
/* otra manera de hacer un POST??
function postTest2() {
    fetch("http://localhost/practice/backend/playas_post.php", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}*/