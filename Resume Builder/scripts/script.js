function addProject() {
    let cloned = document.querySelector('.project').cloneNode(true)
    cloned.children[0].value = ''
    cloned.children[1].value = ''
    cloned.children[2].value = ''
    cloned.children[3].value = ''
    document.getElementById('projects').appendChild(cloned)
}
function addCertifate() {
    let cloned = document.querySelector('.certificate').cloneNode(true)
    cloned.children[0].value = ''
    cloned.children[1].value = ''
    document.getElementById('certifications').appendChild(cloned)
    
}
function saveProgress() {
    let certificates_array = []
    let name = document.getElementById('name').value
    let adverb = document.getElementById('adverb').value
    let tel = document.getElementById('tel').value
    let email = document.getElementById('email').value
    let projects = document.getElementsByClassName('project')
    let skills = document.getElementsByClassName('skills')
    let certificates = document.getElementsByClassName('certificate')
    localStorage.setItem('name', name)
    localStorage.setItem('adverb', adverb)
    localStorage.setItem('tel', tel)
    localStorage.setItem('email', email)
    for (let index=0;index<certificates.length;index++){
        certificates_array.push([certificates.item(index).children.item(0).value, certificates.item(index).children.item(1).value])
    };
    localStorage.setItem('certificates', JSON.stringify(certificates_array))

}
