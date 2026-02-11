document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.querySelector(".No");
  const options = document.querySelector(".options");
  
  
  if (!noBtn || !options) {
    console.error("No button or options container not found");
    return;
  }

  function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed"; // important
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}



  


  

  
noBtn.addEventListener("mouseenter", () => {
    moveNoButton();
});

  // desktop + mobile
  noBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    moveNoButton();
  });
});




