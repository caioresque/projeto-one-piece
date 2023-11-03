const botaoluffy = document.querySelector('.botaoluffy'); 
const botaozoro = document.querySelector('.botaozoro');
const botaochopper = document.querySelector('.botaochopper');
const botaonami = document.querySelector('.botaonami');
const botaosanji = document.querySelector('.botaosanji');

const chopper = document.getElementById('chopper');
const zoro = document.getElementById('zoro');
const nami = document.getElementById('nami');
const sanji = document.getElementById('sanji');
const luffy = document.getElementById('luffy');

botaoluffy.addEventListener('click', function() {
    luffy.classList.add('selecionado');
    chopper.classList.remove('selecionado');
    zoro.classList.remove('selecionado');
    nami.classList.remove('selecionado');
    sanji.classList.remove('selecionado');
});

botaozoro.addEventListener('click', function() {
    luffy.classList.remove('selecionado');
    chopper.classList.remove('selecionado');
    zoro.classList.add('selecionado');
    nami.classList.remove('selecionado');
    sanji.classList.remove('selecionado');
});

botaochopper.addEventListener('click', function() {
    luffy.classList.remove('selecionado');
    chopper.classList.add('selecionado');
    zoro.classList.remove('selecionado');
    nami.classList.remove('selecionado');
    sanji.classList.remove('selecionado');
});

botaonami.addEventListener('click', function() {
    luffy.classList.remove('selecionado');
    chopper.classList.remove('selecionado');
    zoro.classList.remove('selecionado');
    nami.classList.add('selecionado');
    sanji.classList.remove('selecionado');
});

botaosanji.addEventListener('click', function() {
    luffy.classList.remove('selecionado');
    chopper.classList.remove('selecionado');
    zoro.classList.remove('selecionado');
    nami.classList.remove('selecionado');
    sanji.classList.add('selecionado');
});

const personagemselecionado = document.querySelector(".personagem.selecionado");

