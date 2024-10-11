"use strict";

fetch('https://api.artic.edu/api/v1/artworks')
.then(response => response.json())
.then(jsonData => {
    jsonData.data.forEach(element => {
        console.log(element);
    });
})
.catch(error => {
    console.error('Error:', error);
});
