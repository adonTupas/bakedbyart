const contactBtn = document.querySelector('#contactbtn');
const orderForm = document.querySelector('.order-form');
const inpname = document.querySelector('.inp-namez');
const requestNow = document.querySelector('.requestnow');
const requestCookie = document.querySelector('.requestcookie');
const backMessage = document.querySelector('#form-backbtn');
const sendMessage = document.querySelector('#form-sendbtn');
const mobiReq = document.getElementById('mobi-req');
const inp = document.querySelectorAll('input');
const openCon = document.querySelectorAll('.opencon')

openCon.forEach( (openCo) => {
    openCo.addEventListener('click',  (e) => {
    e.preventDefault();
    orderForm.style.display = "flex";
    })
    })
    

contactBtn.addEventListener('click', () =>{
orderForm.style.display = "flex";
})
mobiReq.addEventListener('click', () =>{
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


// THIS IS FOR THE MOBILE RESPONSIVE EFFECTS
const moboBx = document.querySelector('.mobo-bx');
const mobiMenuBx = document.querySelector('.mobi-menuzbx');
const shut = document.querySelectorAll('.shut');

let moboOpen = false;
moboBx.addEventListener('click', () => {

if(!moboOpen){
moboBx.classList.add('mobo-slide');
mobiMenuBx.classList.add('slide-right');
moboOpen = true
}else{
moboBx.classList.remove('mobo-slide');
mobiMenuBx.classList.remove('slide-right');
moboOpen = false;
}
})

shut.forEach( (shu) => {
shu.addEventListener('click', () => {

moboBx.classList.remove('mobo-slide');
mobiMenuBx.classList.remove('slide-right');
moboOpen = false;

})
})
