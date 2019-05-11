function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var currentBackground = getRandomIntInclusive(1, 5);//How many wallpapers on the right
document.body.style.background = 'url(./images/wallpaper'+currentBackground+'.png)';
document.body.style.backgroundSize = 'cover';

var colors = ['#3C3535','#ADBDDD','#5C4F5A','#505778','#CF8F97'];

if (currentBackground == 1) {
    particlesJS.load('particles-js', 'wallpaper1.json', function(){
        console.log('wallpaper1 loaded...');
    });
}

if (currentBackground == 2) {
    particlesJS.load('particles-js', 'wallpaper2.json', function(){
        console.log('wallpaper2 loaded...');
    });
}

if (currentBackground == 3) {
    particlesJS.load('particles-js', 'wallpaper1.json', function(){
        console.log('wallpaper1 loaded...');
    });
}

if (currentBackground == 4) {
    particlesJS.load('particles-js', 'wallpaper4.json', function(){
        console.log('wallpaper1 loaded...');
    });
}

if (currentBackground == 5) {
    particlesJS.load('particles-js', 'wallpaper5.json', function(){
        console.log('wallpaper1 loaded...');
    });
}

currentBackground -= 1;
let root = document.documentElement;
root.style.setProperty("--color-1", colors[currentBackground]);
root.style.setProperty("--color-2", colors[currentBackground]);
root.style.setProperty("--color-3", colors[currentBackground]);
root.style.setProperty("--color-4", colors[currentBackground]);


