function enviar(){
    var nombre=document.getElementById("nombre").value;
    var correo=document.getElementById("correo").value;
    localStorage.setItem("name",nombre);
    localStorage.setItem("email",correo);
    var saludo=`Hola ${nombre}!
    te has registrado con el siguiente correo: ${correo}`
    alert(saludo)
}