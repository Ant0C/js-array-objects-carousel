//***Array di oggetti
const images = [
    {
        image: './img/01.webp',
        title: 'Marvels Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvels Avengers",
        text: 'Marvels Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//console.log(images)

//***Inserimento markup nel DOM

const carouselElement = document.querySelector(".carousel")
//console.log(carouselElement)

for(i=0; i<images.length; i++){
    const slide = images[i]
    const image = slide.image;
    const title = slide.title;
    const text = slide.text;

    let className = 'slide'
	if (i === slideAttiva) {
		className += ' d-block'
	}

    let photo =
    `
    <div class="ac_img ${className}">
        <img src="${image}">
        <p class="ac_title">${title}</p>
        <p class="ac_text">${text}</p>
    </div>
    `
    carouselElement.innerHTML += photo
}

//***Programma per cambio img

let slideAttiva = 0
const slideElement = document.getElementsByClassName('slide')
//console.log(slideElement)

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
//console.log(arrowRight)

//Al click sulla freccia cambia l'immagine verso destra

arrowLeft.addEventListener('click', function () {
    //console.log(slideAttiva)

	let slideCorrente = slideElement[slideAttiva]
	slideCorrente.classList.remove("d-block")

	slideAttiva += 1

	let prossimaSlide = slideElement[slideAttiva]
	prossimaSlide.classList.add("d-block")
})

//Al click sulla freccia cambia l'immagine verso sinistra

arrowRight.addEventListener('click', function () {
    //console.log(slideAttiva)

	let slideCorrente = slideElement[slideAttiva]
	slideCorrente.classList.remove("d-block")

	slideAttiva -= 1

	let prossimaSlide = slideElement[slideAttiva]
	prossimaSlide.classList.add("d-block")
})