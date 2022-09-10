const generos = document.querySelector('#generos')
const input = document.querySelector('input')

generos.addEventListener('change', (event) => {
    input.value = event.target.value
})

