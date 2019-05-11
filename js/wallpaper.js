function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var currentBackground = getRandomIntInclusive(1, 2);//How many wallpapers on the right
document.body.style.background = 'url(./images/wallpaper'+currentBackground+'.png)';
document.body.style.backgroundSize = 'cover';

var colors = ['#3C3535','#ADBDDD','#523F64','#566E7F','#544854'];

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

currentBackground -= 1;
let root = document.documentElement;
root.style.setProperty("--color-1", colors[currentBackground]);
root.style.setProperty("--color-2", colors[currentBackground]);
root.style.setProperty("--color-3", colors[currentBackground]);
root.style.setProperty("--color-4", colors[currentBackground]);


