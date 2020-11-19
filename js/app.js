let logoTitle = document.querySelector('.logo-title');
const seemorebx = document.querySelector('.seemore');
const otherbred = document.querySelectorAll('.breads.breadzz');
const seeless = document.querySelector('.seeless');
// Event Listeners
seemorebx.addEventListener("click", (e) => {
otherbred.forEach((other) => {
other.style.display="grid";
})
seemorebx.style.display="none"
seeless.style.display="block"
});

seeless.addEventListener('click', () => {
    otherbred.forEach((other) => {
        other.style.display="none";
        })
        seemorebx.style.display="block"
        seeless.style.display="none"
                
});


// FOR POP UP CONTACT FORM

const orderForm = document.querySelector('.order-form');
const openCon = document.querySelectorAll('.opencon')
const backMessage = document.querySelector('#form-backbtn');



//event listeners
openCon.forEach( (openCo) => {
openCo.addEventListener('click',  (e) => {
e.preventDefault();
orderForm.style.display = "flex";
})
})

backMessage.addEventListener('click', (e) => {
    e.preventDefault();
        orderForm.style.display = "none";
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