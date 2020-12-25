const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hi, am Juma the Developer';
// variables and functions in use
let myImage = document.querySelector('img')
myImage.onclick = function() {
   let imgSrc = myImage.getAttribute('src');
   if(imgSrc === "images/0.PNG"){
       myImage.setAttribute('src', 'images/1.PNG');
   }else {
    myImage.setAttribute('src', 'images/0.PNG');
   }
}
document.querySelector('button').onclick = function() {
    alert('You just clicked the button');

}