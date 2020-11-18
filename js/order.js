const contactBtn = document.querySelector('#contactbtn');
const orderForm = document.querySelector('.order-form');
const inpname = document.querySelector('.inp-namez');
const requestNow = document.querySelector('.requestnow');
const requestCookie = document.querySelector('.requestcookie');
const backMessage = document.querySelector('#form-backbtn');
const sendMessage = document.querySelector('#form-sendbtn');
const inp = document.querySelectorAll('input');


contactBtn.addEventListener('click', () =>{
orderForm.style.display = "flex";
})
requestNow.addEventListener('click', () =>{
orderForm.style.display = "flex";
})
requestCookie.addEventListener('click', () =>{
orderForm.style.display = "flex";
})
        
backMessage.addEventListener('click', (e) => {
e.preventDefault();
    orderForm.style.display = "none";
})

sendMessage.addEventListener('click', (e) => {
e.preventDefault();
console.log(inpname.value)

})
