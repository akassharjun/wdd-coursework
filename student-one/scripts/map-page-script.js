function onMouseOver(description) {
    let desc = document.getElementById('description');

    desc.innerText = description;
    desc.style.display = 'block';
}

function onMouseOut() {
    let desc = document.getElementById('description');
    desc.style.display = 'none';
}

window.onload = function () {
    let rides = document.getElementById('rides');
    let zoo = document.getElementById('zoo');
    let hotel = document.getElementById('hotel');
    let restaurant = document.getElementById('restaurants');
    let waterSlide = document.getElementById('water-slide');
    let crazyRollerCoaster = document.getElementById('crazy-roller-coaster');
    let aquarium = document.getElementById('aquarium');
    let frontEntrance = document.getElementById('front-entrance');

    rides.onmouseover = function () {
        onMouseOver("Family Roller Coaster Ride!");
    };
    rides.onmouseout = function () {
        onMouseOut();
    };

    zoo.onmouseover = function () {
        onMouseOver("View the Marvelous Zoo!");
    };
    zoo.onmouseout = function () {
        onMouseOut();
    };

    hotel.onmouseover = function () {
        onMouseOver("Amazing 5 star hotels!");
    };
    hotel.onmouseout = function () {
        onMouseOut();
    };

    restaurant.onmouseover = function () {
        onMouseOver("Amazing restaurants with cuisines from all around the world!");
    };
    restaurant.onmouseout = function () {
        onMouseOut();
    };

    waterSlide.onmouseover = function () {
        onMouseOver("One of the best water slides!");
    };
    waterSlide.onmouseout = function () {
        onMouseOut();
    };

    crazyRollerCoaster.onmouseover = function () {
        onMouseOver("Craziest roller coaster ride in the world!");
    };
    crazyRollerCoaster.onmouseout = function () {
        onMouseOut();
    };

    aquarium.onmouseover = function () {
        onMouseOver("Special Aquarium with exotic sea creatures!");
    };
    aquarium.onmouseout = function () {
        onMouseOut();
    };

    frontEntrance.onmouseover = function () {
        onMouseOver("The front entrance to the Theme Park!");
    };
    frontEntrance.onmouseout = function () {
        onMouseOut();
    };
}