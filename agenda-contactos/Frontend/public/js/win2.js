const tableBody = document.querySelector("#tableBody");

const getAndPrintContacts = () =>{
    fetch('http://localhost:8080/api/contacts')
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON.contacts[0].name);
            for(let i = 0; i < resJSON.contacts.length; i++){
                tableBody.innerHTML += `
                    <tr>
                        <td>${resJSON.contacts[i].name}</td>
                        <td>${resJSON.contacts[i].phone}</td>
                        <td>${resJSON.contacts[i].email}</td>
                    </tr>
                `
            }
        })
};

getAndPrintContacts();