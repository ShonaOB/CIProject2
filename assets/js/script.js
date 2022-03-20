//setting up the constants
const section = document.querySelector('section');
const scoreCount = document.querySelector('span');
let lives = 8;
scoreCount.textContent = lives;


//gathering the data together
const getData = () => [
    {imgSrc: "assets/images/ariel.jpg", name:'ariel'},
    {imgSrc: "assets/images/aurora.jpg", name:'aurora'},
    {imgSrc: "assets/images/belle.jpg", name:'belle'},
    {imgSrc: "assets/images/jasmine.jpg", name:'jasmine'},
    {imgSrc: "assets/images/merida.jpg", name:'merida'},
    {imgSrc: "assets/images/mulan.jpeg", name:'mulan'},
    {imgSrc: "assets/images/pocahontas.jpg", name:'pocahontas'},
    {imgSrc: "assets/images/snowwhite.jpg", name:'snowwhite'},
    {imgSrc: "assets/images/ariel.jpg", name:'ariel'},
    {imgSrc: "assets/images/aurora.jpg", name:'aurora'},
    {imgSrc: "assets/images/belle.jpg", name:'belle'},
    {imgSrc: "assets/images/jasmine.jpg", name:'jasmine'},
    {imgSrc: "assets/images/merida.jpg", name:'merida'},
    {imgSrc: "assets/images/mulan.jpeg", name:'mulan'},
    {imgSrc: "assets/images/pocahontas.jpg", name:'pocahontas'},
    {imgSrc: "assets/images/snowwhite.jpg", name:'snowwhite'},
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
    //create the HTML for the cards
    cardRandom.forEach((item, index) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div'); 
        card.classList = "card";
        front.classList = "front";
        //attach images to the card front
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        back.classList = "back";
        //attaching the cards to the section
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        // card toggle event listener is added here
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            check(e);
        })
    })

};
//checking the cards against each other

const check = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
}

generateCards();

