const root = document.querySelector(':root');
const white = document.querySelector('.white');
const black = document.querySelector('.black');
const blue = document.querySelector('.blue');
const gray = document.querySelector('.gray');
const red = document.querySelector('.red');
const range = document.querySelector('input[type="range"]');

white.addEventListener('click', () => {
root.style.setProperty('--bg-color', 'white')
root.style.setProperty('--text-color', "black")
})

black.addEventListener('click', () => {
    root.style.setProperty('--bg-color', 'black')
    root.style.setProperty('--text-color', "white")
})

blue.addEventListener('click', () => {
    root.style.setProperty('--bg-color', 'blue')
    root.style.setProperty('--text-color', "white")
})

gray.addEventListener('click', () => {
        root.style.setProperty('--bg-color', 'gray')
        root.style.setProperty('--text-color', "white")
})

red.addEventListener('click', () => {
    root.style.setProperty('--bg-color', 'red')
    root.style.setProperty('--text-color', "white")
})

range.addEventListener('change', (e) => {
    console.log(e.target.value)
    root.style.setProperty('--font-size', `${e.target.value}px`)
})