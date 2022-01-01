

const heart = document.querySelector('.heart');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const save = document.querySelector('.save');

function toggleHeart() {
  heart.classList.toggle("heart-filled"); 
  circle.classList.toggle("circle-show");
  container.classList.toggle("container-shadow");
  document.body.classList.toggle("background-heart");
  heart.style.animationPlayState = "running";
  showSaved();
}


heart.addEventListener('click', toggleHeart);

function showSaved() {
  
  if(heart.classList.contains("heart-filled")){
      save.innerHTML = 'I LOVE YOU ❤️️';
    
  } else {
     save.innerHTML = ''; 

  }

}
animate();
