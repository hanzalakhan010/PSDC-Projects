function onPress(key){

    document.getElementById('text').value+=key
}
function clear(){
    document.getElementById('text').value = document.getElementById('text').value.slice(0,-1) 
}
function clearAll(){
    document.getElementById('text').value = ''
}