fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Handle data received from backend
        console.log(data);
        document.getElementById('data').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));


const gallery = document.querySelector('#gallery');

fetch("./images.json").then((response) => {
    return response.json().then((data) => {
        let table = ""; // Initialize as a string

        data.forEach((item) => { // Using forEach instead of map since we're not returning anything
            table += `
                <div class="image-wrap">
                    <img src="${item.image}" alt="">
                </div>`;
        });

        gallery.innerHTML = table;  // Setting innerHTML after generating all markup
    });
});




// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
