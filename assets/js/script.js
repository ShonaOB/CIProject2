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
];

//randomise the selection of images
const randomise = () => {
    const cardRandom = getData();
    cardRandom.sort(() => Math.random() - 0.5);
    return cardRandom;
};

//generate the card htmls
const generateCards = () => {
    const cardRandom = randomise();
    console.log(cardRandom);
    cardRandom.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div'); 
        card.classList = "card";
        front.classList = "front";
        back.classList = "back";
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
})

};
generateCards();