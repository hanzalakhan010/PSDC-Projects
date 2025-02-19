var message = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida eros felis, a mollis tellus ullamcorper in. Curabitur egestas tempus ipsum sed elementum. Proin dapibus felis porta nisi pharetra malesuada. Ut dictum consectetur nibh. Duis cursus magna id vulputate placerat. Sed vitae justo interdum velit efficitur vulputate. Maecenas mollis, purus et varius lacinia, orci justo bibendum neque, eu dignissim arcu enim nec nisl. Quisque et tellus eu massa cursus pretium. Vestibulum rutrum metus sit amet diam blandit, vitae lacinia justo venenatis.

iam vel dui tincidunt finibus ac at eros. Sed sodales ex dolor. Nam efficitur iaculis sem ac auctor. Sed bibendum quis neque sed tempor. Ut quis tincidunt magna, quis porttitor urna. Aenean in efficitur tortor. Morbi vitae placerat metus, sed aliquam velit. Phasellus ut fermentum felis, nec ullamcorper libero. Nunc libero felis, suscipit sit amet vestibulum sit amet, iaculis at quam.

Proin luctus non elit commodo tincidunt. Pellentesque nec nulla tortor. Mauris tempor, nibh sed feugiat tincidunt, neque lorem bibendum erat, non cursus lorem justo a eros. Proin quis neque nisi. Duis fringilla egestas iaculis. Maecenas id risus orci. Nunc eget rhoncus sem. Etiam ac nulla vitae mi maximus maximus. Sed eu faucibus dolor, varius tincidunt turpis. `

function frequencyCounter(str){
    let dict = {}
    for (let i = 0;i<=str.length;i++){
        if (str[i] in dict){
            dict[str[i]]+=1
        }
        else{
            dict[str[i]] = 1
        }
    }
    return dict
}

console.log(frequencyCounter(message))