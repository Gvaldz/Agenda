import { Contact } from './Contact.js';
import { Queue } from './Queue.js';

export class Agenda {
    constructor() {
        this.queue = new Queue();
    }

    addContact(name, number) {
        let contact = new Contact(name, number);
        this.queue.enqueue(contact);
    }

    isDuplicate(contactName, number) {
        let currentContact = this.queue.top;
        while (currentContact) {
            if (currentContact.value.name === contactName || currentContact.value.number === number) {
                return true;
            }
            currentContact = currentContact.next;
        }
        return false;
    }

    deleteContact() {
        this.queue.dequeue();
    }

    displayContacts() {
        let contactListDiv = document.getElementById("contactList");
        contactListDiv.innerHTML = "";
        let currentContact = this.queue.top;
        while (currentContact) {
            let contactItem = document.createElement("div");
            contactItem.textContent = `Nombre: ${currentContact.value.name}, Número: ${currentContact.value.number}`;
            contactListDiv.appendChild(contactItem);
            currentContact = currentContact.next;
        }
    }
}
