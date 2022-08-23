//variables
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const email = document.querySelector('.email');
const phone = document.getElementById('phone');

const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.mclose');

var qemail = "email@email.com";
var qphone = "52+ 771 111 1111";

console.log(qemail);

//funciones
card1.onclick = function() {
    window.location.href = "whatsapp";
}

card2.onclick = function() {
    window.location.href = "facebook";
}

email.addEventListener('click', (e) => {
    //mostrar
    document.querySelector('.mtitle').innerHTML = "Correo electronico copiado";
    e.preventDefault();
    modal.classList.add('mshow');

    //portapales
    var temp = document.createElement("input");
    document.getElementsByTagName("body")[0].appendChild(temp);
    temp.value = qemail;
    temp.select();

    document.execCommand("copy");
    document.getElementsByTagName("body")[0].removeChild(temp);

    //cerrar
    setTimeout(function() {
        e.preventDefault();
        modal.classList.remove('mshow');
    }, 2000);
});

//email.addEventListener('click', function(this) {});

phone.addEventListener('click', (e) => {
    //mostrar
    document.querySelector('.mtitle').innerHTML = "Numero de telefono copiado";
    e.preventDefault();
    modal.classList.add('mshow');

    //portapales
    var temp = document.createElement("input");
    document.getElementsByTagName("body")[0].appendChild(temp);
    temp.value = qphone;
    temp.select();

    document.execCommand("copy");
    document.getElementsByTagName("body")[0].removeChild(temp);

    //cerrar
    setTimeout(function() {
        e.preventDefault();
        modal.classList.remove('mshow');
    }, 2000);
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('mshow');
});
