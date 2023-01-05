const searchHeight = document.querySelector(".search").clientHeight;
const mainBackground = document.querySelector(".crop_background");
const windowHeight = window.innerHeight;


// Set background waves of main component according to percentage of screensize
const offsetBackground = ((100/windowHeight)*searchHeight);
console.log(offsetBackground);
//mainBackground.style.top = `${offsetBackground}%`;


