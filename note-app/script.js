function addNote(){
    let note = document.getElementById('noteEdit').value
    document.getElementById('notes').innerHTML+=`
    <div class = 'note'>
        <p>${note}</p>
    </div>
    `
    document.getElementById('noteEdit').innerHTML = ''
}