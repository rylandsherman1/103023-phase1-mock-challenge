let cakeList = [];

const headers = {
    'Content-Type': 'application/json'
};

const cakeAPI = 'http://localhost:3000';
const cakeCollection = document.getElementById('cake-list');
const addBtn = document.querySelector('review-form');
document.getElementById('review-form').addEventListener('submit', handleAddNewCake);


fetch(cakeAPI)
    .then(res => res.json())
    .then(cakes => {
        cakeList = cakes;
        renderCakes(cakeList);
    });

function renderCakes(cakes) {
    cakeList.innerHTML = '';
    cakeAPI.forEach(renderCake);
}

function renderCake(cake) {
    const cakeForm = document.createElement('form');
    cakeForm.classList.add('form');


}



function handleAddNewReview(e) {
    e.preventDefault();
    const newReviewData = {
        name: e.target.name.value,
        image: e.target.image.value,
        description: e.target.description.value
    };

    fetch(cakeAPI, {
        headers,
        method: 'POST',
        body: JSON.stringify(newCakeData)
    })
        .then(res => res.json())
        .then(renderCake);

    e.target.reset();
 }


