// Task: Create a function that generates a specific pyramid pattern based on input.
//  For example, input 5 would produce a pyramid with numbers increasing and arranged in a certain way.
//  This requires nested loops and understanding how to manage row and column relationships.

n =10

for (let i = 1;i<=n;i++){
    let str = ''
    str+= ' '.repeat(n-i)

    str+= ' * '.repeat(i)
    console.log(str)
}