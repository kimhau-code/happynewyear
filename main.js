

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

// lời nhắn
if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
function showMessage() {
    // 6. Lời nhắn hiện ra khi bấm vào tên hoặc avatar
    swal({
        title: "Lời nhắn", // Tiêu đề của popup
        text: "Gửi đến tôi, chàng trai năm 20 tuổi, hãy biết cố gắng thật nhiều để sau này không hối hận, hãy biết yêu thương bản thân để luôn có sức khỏe khỏe mạnh, hãy biết hiếu thuận gia đình để bố mẹ không bao giờ buồn, và cũng hãy đi tìm nàng công chúa của mình đi nào.", // Nội dung lời nhắn
        button: {
            text: "❤️️",
        },
    });
}