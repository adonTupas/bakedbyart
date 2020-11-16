let logoTitle = document.querySelector('.logo-title');
const seemorebx = document.querySelector('.seemore');
const otherbred = document.querySelectorAll('.breads.breadzz');
const seeless = document.querySelector('.seeless');
// Event Listeners
logoTitle.addEventListener('click', () => {
location.reload();
alert('ready')
})

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
