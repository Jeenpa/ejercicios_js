let contador = 0;

const $contador = document.querySelector(".contador");
$contador.innerText = contador;

document.addEventListener('click', (e) => {
    if (e.target.matches('#suma')) {
        contador++;
        $contador.innerText = contador;
    }

    if (e.target.matches('#resta')) {
        if(contador > 0){
            contador--;
            $contador.innerText = contador;
        }
    }
});


