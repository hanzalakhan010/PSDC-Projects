function toggleBold() {
  if (document.getElementById("text").style.fontWeight == "bolder") {
    document.getElementById("text").style.fontWeight = "normal";
  } else {
    document.getElementById("text").style.fontWeight = "bolder";
  }
}

function toggleItalic() {
  if (document.getElementById("text").style.fontStyle == "italic") {
    document.getElementById("text").style.fontStyle = "normal";
  } else {
    document.getElementById("text").style.fontStyle = "italic";
  }
}

function changeSize() {
  document.getElementById("text").style.fontSize =
    document.getElementById("slider").value + "px";
}
function changeColor(){
    
}