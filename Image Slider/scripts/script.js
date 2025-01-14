let imgNo = 1;

function setImg() {
  document.getElementById("mainImg").src = `../imgs/${imgNo}.jpeg`;
}

function nextImg() {
  console.log("fdsfsdf");
  if (imgNo >= 5) {
    imgNo = 1;
    setImg();
  } else {
    imgNo += 1;
    setImg();
  }
}
