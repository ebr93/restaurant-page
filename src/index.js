import _ from 'lodash';
import './style.css';
import restaurantPic from './a1.jpg';
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import food3 from './food3.jpg'

// container which changes input based on page tabs
const contentContainer = document.querySelector('#content');

const menuBody = (() => {
    const menuCreateContent = function() {
        // 3 child elements of contentContainer
        const mainContent = document.createElement('div');
        const bottomContent = document.createElement('div');
        const footer = document.createElement('div');

        mainContent.classList.add('main-content');
        bottomContent.classList.add('bottom-content');
        footer.classList.add('footer');

        contentContainer.appendChild(mainContent);
        contentContainer.appendChild(bottomContent);
        contentContainer.appendChild(footer);

        // mainContent children
        const sideBar = document.createElement('div');
        const mainContentItems = document.createElement('div');

        sideBar.classList.add('side-bar');
        mainContentItems.classList.add('main-content-items')

        mainContent.appendChild(sideBar);
        mainContent.appendChild(mainContentItems);

        // sideBar children
        const entrees = document.createElement('div');
        const sides = document.createElement('div');
        const drinks = document.createElement('div');

        entrees.innerText = 'Entrees';
        sides.innerText = 'Sides';
        drinks.innerText = 'Drinks';

        sideBar.appendChild(entrees);
        sideBar.appendChild(sides);
        sideBar.appendChild(drinks);

        // mainContentItems children
        const foodOne = document.createElement('div');
        const foodTwo = document.createElement('div');
        const sideOne = document.createElement('div');
        const sideTwo = document.createElement('div');
        const drinkOne = document.createElement('div');
        const drinkTwo = document.createElement('div');

        foodOne.classList.add('menu-items');
        foodTwo.classList.add('menu-items');
        sideOne.classList.add('menu-items');
        sideTwo.classList.add('menu-items');
        drinkOne.classList.add('menu-items');
        drinkTwo.classList.add('menu-items');

        foodOne.setAttribute('style', 'background: url("/src/food1.jpg") center no-repeat; background-size: cover');
        foodTwo.setAttribute('style', 'background: url("/src/food3.jpg") no-repeat; background-size: cover');
        sideOne.setAttribute('style', 'background: url("/src/dessert2.jpg") no-repeat; background-size: cover');
        sideTwo.setAttribute('style', 'background: url("/src/dessert1.jpg") center no-repeat; background-size: cover');
        drinkOne.setAttribute('style', 'background: url("/src/drinks1.jpg") center no-repeat; background-size: cover');
        drinkTwo.setAttribute('style', 'background: url("/src/drink2.jpg") center no-repeat; background-size: cover');

        mainContentItems.appendChild(foodOne);
        mainContentItems.appendChild(foodTwo);
        mainContentItems.appendChild(sideOne);
        mainContentItems.appendChild(sideTwo);
        mainContentItems.appendChild(drinkOne);
        mainContentItems.appendChild(drinkTwo);
    }

    const create = function() {
        menuCreateContent();
    }

    return {
        create,
    }
})();

const contactContainer = (() => {
    const contactBody = (() => {
        // 3 child elements of contentContainer
        const contactContent = document.createElement('div');
        const bottomContent = document.createElement('div');
        const footer = document.createElement('div');

        contactContent.classList.add('info-content');
        bottomContent.classList.add('bottom-content');
        footer.classList.add('footer');

        contentContainer.appendChild(contactContent);
        contentContainer.appendChild(bottomContent);
        contentContainer.appendChild(footer);

        // contactContent
        const titleOne = document.createElement('div');
        const contactItemOne = document.createElement('div');
        const titleTwo = document.createElement('div');
        const contactItemTwo = document.createElement('div');

        titleOne.classList.add('title');
        contactItemOne.classList.add('info-items');
        titleTwo.classList.add('title');
        contactItemTwo.classList.add('info-items')

        contactContent.appendChild(titleOne);
        contactContent.appendChild(contactItemOne);

        titleOne.innerText = 'CONTACT US';
        contactItemOne.innerText = 'Santos Eatery Contact information:\n\n135 Grove Street, Buffalo, NY 14207\n\nWebsite: www.santos-buffalo.com\n\nEmail: bdcakac00@msn.com\n\nPhone: 716.260.4900\n\nHours of Operation:\n\nMonday-Thursday 11:00 am – 11:00 pm\n\nFriday 11:00 am – 1:00 am\n\nSaturday 11:00 am – 1:00 am\n\nSunday 11:00 am – 10:00 pm';
    })

    return { 
        contactBody,
    }
})();

const infoContainer = (() => {
    const infoBody = (() => {
        // 3 child elements of contentContainer
        const infoContent = document.createElement('div');
        const bottomContent = document.createElement('div');
        const footer = document.createElement('div');

        infoContent.classList.add('info-content');
        bottomContent.classList.add('bottom-content');
        footer.classList.add('footer');

        contentContainer.appendChild(infoContent);
        contentContainer.appendChild(bottomContent);
        contentContainer.appendChild(footer);

        // info-content children
        const titleOne = document.createElement('div');
        const infoItems = document.createElement('div');
        const titleTwo = document.createElement('div');
        const ingredientsItems = document.createElement('div');

        titleOne.classList.add('title');
        infoItems.classList.add('info-items');
        titleTwo.classList.add('title');
        ingredientsItems.classList.add('info-items')

        titleOne.innerText = 'ABOUT US'
        infoItems.innerText = "Santos Eatery is a Canadian food hall located in downtown Toronto at 60 Bay St., in the basement of the Art Deco Union Station building.\n \nThe food hall was opened in December 2016, with various cafés, kiosks, stalls, and vendors offering an assortment of food and beverages.\n  \nSantos Eatery has Canadian-inspired fare, such as Toronto and Latin foods.\n  \nIt also serves a variety of international dishes from countries such as Mexico, Colombia, Peru, and Japan.\n  \nIn May 2018, Santos Eatery announced that it will be expanding to 3 locations, located at the Global Centre for Pluralism on the 101 Danforth Avenue near Woodbine Ave., which is expected to open.";
        titleTwo.innerText = 'OUR INGREDIENTS'
        ingredientsItems.innerText = "Our ingredients come from local, independent, and produce oriented farmers. We look for growers who are also innovative, who are moving with the trends, and who care about their farms.\n \nOne of the best things about working with organic food producers is their passion for what they're doing. This end's up being reflected in the great food that we serve to our guests.\n \nWith so many businesses competing for customers, what do you do to set yourself apart from the competition?\n\nAt Santos Eatery, we look to prepare wholesome, healthy, delicious food for everyone."

        infoContent.appendChild(titleOne);
        infoContent.appendChild(infoItems);
        infoContent.appendChild(titleTwo);
        infoContent.appendChild(ingredientsItems);
    })

    return { 
        infoBody,
    }
})();

function buttonClicker() {
    document.addEventListener('click', (event) => {
        const{target} = event;

        if (target.id == 'menu') {
            contentContainer.innerHTML = '';
            menuBody.create();
        } else if (target.id == 'contact') {
            contentContainer.innerHTML = '';
            contactContainer.contactBody();
        } else if (target.id == 'info') {
            contentContainer.innerHTML = '';
            infoContainer.infoBody();
        } else {
            return;
        }

    });
}

menuBody.create();
buttonClicker();

