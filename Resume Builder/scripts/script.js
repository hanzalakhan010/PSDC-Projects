function addProject(){
    document.querySelector('.projects').innerHTML+=`
        <div class = 'project'>
            <input class = 'prName' placeholder="Project Name"></input>
            <input class = 'prLink'placeholder="Link to Project"></input>
            <input class = 'prDesc' placeholder="Project Description"></input>
            <input class = 'prTech'placeholder="Project Stack/technologies used"></input>
        </div>
    `
}
function addCertifate(){
    document.querySelector('.certifications').innerHTML+=`
        <div class="certificate">
            <input type="text" placeholder="TITLE">
            <input type="text" placeholder="AWARDING BODY">
        </div>
    `
}
function saveProgress(){
    let certificates_array = []
    let name = document.getElementById('name').value
    let adverb= document.getElementById('adverb').value
    let tel = document.getElementById('tel').value
    let email = document.getElementById('email').value
    let projects = document.getElementsByClassName('project')
    let skills = document.getElementsByClassName('skills')
    let certificates = document.getElementsByClassName('certificate')
    localStorage.setItem('name',name)
    localStorage.setItem('adverb',adverb)
    localStorage.setItem('tel',tel)
    localStorage.setItem('email',email)
    for (certificate in certificates){
        // certificates_array.push([certificates[certificate].children[0].value:certificates[certificate].children[1]])
        console.log(certificate)
    }

}
