import { Agenda } from '../Models/Agenda.js';

let agenda = new Agenda();

document.getElementById("btn_add").addEventListener("click", function() {
    let contactName = document.getElementById("contactName").value;
    let number = document.getElementById("number").value;
    
    if(contactName !=='' && number !==''){
        if(number.length != 10){
            alert("Ingrese un número de teléfono de 10 dígitos");
        } else {
            if (agenda.isDuplicate(contactName, number)) {
                alert("El nombre o el número de teléfono ya están en la lista");
            } else {
                agenda.addContact(contactName, number);
                agenda.displayContacts();
            }
        }
    } else {
        alert("Llene todos los campos");
    }
});

document.getElementById("btn_delete").addEventListener("click", function() {
    agenda.deleteContact();
    agenda.displayContacts();
});
