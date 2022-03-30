//setting up the constants
const cardsContainer = document.getElementById('cards-container');
const scoreCount = document.querySelector('span');
let lives = 10;
scoreCount.textContent = lives;


//gathering the data together
const getData = () => [{
        imgSrc: "assets/images/ariel.jpg",
        name: 'ariel'
    },
    {
        imgSrc: "assets/images/aurora.jpg",
        name: 'aurora'
    },
    {
        imgSrc: "assets/images/belle.jpg",
        name: 'belle'
    },
    {
        imgSrc: "assets/images/jasmine.jpg",
        name: 'jasmine'
    },
    {
        imgSrc: "assets/images/merida.jpg",
        name: 'merida'
    },
    {
        imgSrc: "assets/images/mulan.jpeg",
        name: 'mulan'
    },
    {
        imgSrc: "assets/images/pocahontas.jpg",
        name: 'pocahontas'
    },
    {
        imgSrc: "assets/images/snowwhite.jpg",
        name: 'snowwhite'
    },
    {
        imgSrc: "assets/images/ariel.jpg",
        name: 'ariel'
    },
    {
        imgSrc: "assets/images/aurora.jpg",
        name: 'aurora'
    },
    {
        imgSrc: "assets/images/belle.jpg",
        name: 'belle'
    },
    {
        imgSrc: "assets/images/jasmine.jpg",
        name: 'jasmine'
    },
    {
        imgSrc: "assets/images/merida.jpg",
        name: 'merida'
    },
    {
        imgSrc: "assets/images/mulan.jpeg",
        name: 'mulan'
    },
    {
        imgSrc: "assets/images/pocahontas.jpg",
        name: 'pocahontas'
    },
    {
        imgSrc: "assets/images/snowwhite.jpg",
        name: 'snowwhite'
    },
];

//randomise the selection of images
const randomise = () => {
    const cardRandom = getData();
    cardRandom.sort(() => Math.random() - 0.5);
    return cardRandom;
}

//generate the card htmls
const generateCards = () => {
    const cardRandom = randomise();
    //create the HTML for the cards
    cardRandom.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        front.classList = "front";
        //attach images to the card front
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        back.classList = "back";
        //attaching the cards to the cards container
        cardsContainer.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        // card toggle event listener is added here
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            check(e);
        });
    });
}

//checking the cards against each other
const check = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    //logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
            });
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1500);
            });
            lives--;
            scoreCount.textContent = lives;
            if (lives === 0) {
                setTimeout(() => Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have run out of lives! Try again!',
                }), 1500);
                setTimeout(() => restart(), 1500);
            }
        }
    }
    let toggleCard = document.getElementsByClassName('toggleCard');
    if (toggleCard.length === 16) {
        setTimeout(() => Swal.fire('Good job!', 'You won!', 'success'), 1500);
        setTimeout(() => restart(), 2000);
    }
}

const restart = () => {
    let getData = randomise();
    let fronts = document.querySelectorAll(".front");
    let cards = document.querySelectorAll(".card");
    getData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => (fronts[index].src = item.imgSrc), 1000);
        cards[index].setAttribute('name', item.name);
    });
    lives = 10;
    scoreCount.textContent = lives, 1000;
}

generateCards();
