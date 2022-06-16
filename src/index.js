import _ from 'lodash';
import './style.css';
import restaurantPic from './a1.jpg';


console.log("hello");

const bottomContent = document.querySelector('.bottom-content');

function imgBottom() {
    const content = document.querySelector('#content');

    const element = document.createElement('div');

    // Add the image to our existing div.
    const myRestaurant = new Image();
    myRestaurant.src = restaurantPic;

    element.appendChild(myRestaurant);
    return element;
}

//makes another picture appear within it
//bottomContent.appendChild(imgBottom());


