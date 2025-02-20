matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
transpose = []

for(let row =0;row<matrix.length;row++){
    console.log('debug')
    transpose.push([])
    console.log(transpose)
    for (let column=0;column<matrix.length;column++){
        console.log(column)
        transpose[column].push(matrix[row][column])
    }
}
console.log(transpose)