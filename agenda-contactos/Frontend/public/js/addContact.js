const containerForm = document.querySelector(".containerForm");
const sendButton = document.querySelector("#sendButton");

sendButton.addEventListener('click', (e)=>{
    e.preventDefault();

    let inputName = document.querySelector(".inputName").value;
    let inputEmail = document.querySelector(".inputEmail").value;
    let inputPhone = document.querySelector(".inputPhone").value;

    const data = {
        name: inputName,
        email: inputEmail,
        phone: inputPhone
    };

    fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resJSON => {
        containerForm.innerHTML += `<span>${resJSON.msg}</span>`
        inputName = "";
        inputEmail = "";
        inputPhone = "";
    });

});