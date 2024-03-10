let a = [1,2,3,4,5,6,7,8,9,10]
let b = []
console.log(a);
for (i = 0; i <a.length; i++){
  if (a[i] % 2 === 0){
    b.push(a[i]);
    // console.log(b);
  }
}
console.log( b.join(","));