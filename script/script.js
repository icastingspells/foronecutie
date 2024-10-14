function changeClass() {
  const buttonno = document.querySelector('.button-no');
  let count = 1;
  buttonno.addEventListener("mouseenter", () => {
    if (count < 4 && count > 0) {
      buttonno.classList.remove(`move${count - 1}`);
      buttonno.classList.add(`move${count}`);
    } else {
      buttonno.classList.remove(`move${count - 1}`);
      count = 0;
    }
    count +=1;
  });
  buttonno.addEventListener("touchmove", () => {
    if (count < 4 && count > 0) {
      buttonno.classList.remove(`move${count - 1}`);
      buttonno.classList.add(`move${count}`);
    } else {
      buttonno.classList.remove(`move${count - 1}`);
      count = 0;
    }
    count +=1;
  });
}
changeClass();

function happend() {
  const buttonyes = document.querySelector('.button-yes');
  const frame1 = document.querySelector('.frame1');
  const frame2 = document.querySelector('.frame2');
  let count = 1;
  buttonyes.addEventListener("click", () => {
    if (count < 2 && count > 0) {
      frame1.classList.add(`remove`);
      frame2.classList.add(`active`);
    }
    count +=1;
  });
}
happend();