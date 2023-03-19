
const ar=[1,2,3,5];

const nar=ar.map(a=>{
 return a * 2;
})
// console.log(nar)


function Map(arr,fun){
let newarr=[];
for(let i = 0; i<arr.length;i++){
newarr[i]=fun(arr[i]);
}

return newarr;
}

function fun(a){
    return a*2;
}
// const arrnewarr = Map(ar,(x)=>x*x*2);
const name = ['yahia','salah','abas'];
// const names =Map(name,(i,index)=>console.log(i,index));
// const namess =name.map((i,index)=>console.log(i,index));

// const ourMap = Map(ar,fun);
// console.log(arrnewarr)
export  default Map


