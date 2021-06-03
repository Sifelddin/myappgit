const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) =>{
 let messages = [];

 if(name.value == "" || name.value == null){
     messages.push("name is required");
 } 
 if(password.value == "" || password.value == null){
     messages.push('password is required');
 }
 if(password.value.length <= 6 ){
     messages.push("password should cantain more than 6 characters")
 }
 if(password.value.length >= 20){
     messages.push("password must not be more than 20 characters")
 }
 
    if(messages.length > 0){
        e.preventDefault();
    error.innerText = messages.join(', ');
    }
    console.log(messages)
})