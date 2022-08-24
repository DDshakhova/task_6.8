const trafficLightEl = document.querySelectorAll('div');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function init() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    this.removeEventListener('click', init);
    this.addEventListener('click', makeGreen);
}

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    this.removeEventListener('click', makeGreen);
    this.addEventListener('click', makeYellow);
    
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    this.removeEventListener('click', makeYellow);
    this.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    this.removeEventListener('click', makeRed);
    this.addEventListener('click', makeGreen);
}

trafficLightEl.forEach(init); 






