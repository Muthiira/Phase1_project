// declaring image link
const imgLink = 'http://localhost:3000/images/1'

// fetch function
function getImage() {
    fetch(imgLink)
        .then(resp => (resp).json())
        .then(images => {
            console.log(images)
            document.getElementById('card-image').src = images.image;
			document.getElementById('card-image1').src = images.image1;
			document.getElementById('card-image2').src = images.image2;
			document.getElementById('card-image3').src = images.image3;
			document.getElementById('card-image4').src = images.image4;
            document.getElementById('card-title').innerHTML = images.title;
            document.getElementById('like-count').innerHTML = images.likes;
            document.getElementById('Fact-list').innerHTML = images.comments.map(comments => `<li>${comments.facts}</li>`).join('');
        })
        .catch(err => {
            console.log(err)
        });
}

//fetch background image
const imageUrl = 'http://placekitten.com/500/700';
function backgroundImg(){
	fetch (imageUrl)
	.then(resp => resp.json())
	.then(image => {
		document.getElementById('background-image').src = image.background-image;
	})
}
backgroundImg();


// add like function
let likes = 0;
function likeAdd() {
    likes += 1;
    document.getElementById("like-count").innerHTML = likes;
}

// add funFact function
document.getElementById('fact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    console.log(data)
    document.getElementById('Fact-list').innerHTML += `<li>${data.comment}</li>`;
    document.getElementById("fact-form").reset();
})

//click event listener
document.getElementById('like-button').addEventListener('click', likeAdd)
getImage();

//dom content loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log('Content has loaded');
    getImage();});

// set interval function on slides
let counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 5) {
		counter = 1;
	}
},5000);