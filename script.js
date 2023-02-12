const btn = document.querySelector('#btn'),
      form = document.querySelector('#calc-form'),
      inp = document.querySelectorAll('input');
      

btn.addEventListener('click', () => {
    let sideA = +(document.querySelector('#side-a').value),
        sideB = +(document.querySelector('#side-b').value);

    let result = document.querySelector('.result');
    result.textContent = `${sideA * sideB}`;
    
    for (let i = 0;  i < 2; i++) {
        inp[i].value = '';
      }
    
    console.log(result);
});

