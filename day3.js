// const user = {
//     email: "ms9103663@gmail.com",
//     password: "password"
// }



const contact_form = document.getElementById("contact-form");

contact_form.addEventListener('submit', (event) => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    event.preventDefault();
    alert(name);
    alert(email);
    alert(age);
    
});

