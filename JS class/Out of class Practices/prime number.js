n =10
for(let i = 1;i<n;i++){
    for (let j =1;j<=i;j++){
        if (j%i==0){
            continue
        }
    }
    console.log(i)
}