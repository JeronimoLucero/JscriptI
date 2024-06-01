

const precio = 400000;



const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


let contador = 0;
const cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = contador;



const btnplus = document.querySelector("#btnplus");
const btnminus = document.querySelector("#btnminus");

btnplus.addEventListener("click", ()=> {
    contador += 1
    cantidadSpan.innerHTML = contador
    valortotalSpan.innerHTML = contador * precio 
   

})

btnminus.addEventListener("click", ()=> {
    if(contador > 0)
    contador -= 1
    cantidadSpan.innerHTML = contador
    valortotalSpan.innerHTML = contador * precio 
})

const valortotalSpan = document.querySelector(".valortotal");
valortotalSpan.innerHTML = 0






