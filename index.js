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

// add like function
let likes = 0;
function likeAdd() {
    likes += 1;
    document.getElementById("like-count").innerHTML = likes;
}
