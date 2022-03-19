//setting up the constants
const section = document.querySelector('section');
const scoreCount = document.querySelector('span');
let lives = 8;
scoreCount.textContent = lives;


//gathering the data together
const getData = () => [
    {imgSrc: "images/ariel.jpg", name:'ariel'},
    {imgSrc: "images/aurora.jpg", name:'aurora'},
    {imgSrc: "images/belle.jpg", name:'belle'},
    {imgSrc: "images/jasmine.jpg", name:'jasmine'},
    {imgSrc: "images/merida.jpg", name:'merida'},
    {imgSrc: "images/mulan.jpg", name:'mulan'},
    {imgSrc: "images/pocahontas.jpg", name:'pocahontas'},
    {imgSrc: "images/snowwhite.jpg", name:'snowwhite'},
    {imgSrc: "images/ariel.jpg", name:'ariel'},
    {imgSrc: "images/aurora.jpg", name:'aurora'},
    {imgSrc: "images/belle.jpg", name:'belle'},
    {imgSrc: "images/jasmine.jpg", name:'jasmine'},
    {imgSrc: "images/merida.jpg", name:'merida'},
    {imgSrc: "images/mulan.jpg", name:'mulan'},
    {imgSrc: "images/pocahontas.jpg", name:'pocahontas'},
    {imgSrc: "images/snowwhite.jpg", name:'snowwhite'},
]
