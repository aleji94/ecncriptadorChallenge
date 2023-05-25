
/*======================================
 || Variables
=========================================*/


const textArea = document.querySelector(".textarea-contenido");
const mensaje = document.querySelector(".textarea-mensaje");
const valueTextArea = textArea.value;
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-deencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const alerta = document.querySelector(".alert");
const information = document.querySelector(".information");



/*======================================
|| Eventos del mouse y el teclado
=========================================*/

btnEncriptar.addEventListener('click', () => {

    let reg =  /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var textAreaValue = textArea.value;

    if (textArea.value === "" || textArea.value == 0) {
        mostrarErrorVacio();
        textArea.focus();

    } else if (textAreaValue.match(reg)) {
        mostrarErrorCaracteres();
    } else {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }
});


btnDesencriptar.addEventListener('click', () => {

    if (textArea.value === "" || textArea.value == 0) {
        mostrarErrorVacio();
        textArea.focus();
    } else {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }
});

btnCopiar.addEventListener('click', () => {
    copiar();
    textArea.focus();
});



/*======================================
 || Funciones Encriptar y Desencriptar
=========================================*/

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}



function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

function copiar() {
    if (mensaje.value == "") {
        mostrarErrorVacio();
    } else {
        mensaje.select();
        document.execCommand("copy");
        mensaje.value = "";
    }

}



function mostrarErrorVacio() {
    
    alerta.style.display = 'block';

    /*var sonido = new Audio();
    sonido.src = "img/mars.m4a";
    sonido.play();*/


    setTimeout(function () {
        alerta.style.display = 'none';
    }, 2000)
}

function mostrarErrorCaracteres(){
    information.classList.add("informationError");

    setTimeout(function () {
        information.classList.remove("informationError");

    }, 1000)

    textArea.value = "";
    textArea.focus();
}

