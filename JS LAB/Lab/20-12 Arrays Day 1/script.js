const imgNames=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
const imgCon=document.getElementById('mainDiv');
imgNames.forEach((imgName)=>{
    const img=document.createElement('img');
    img.src=imgName;
    imgCon.appendChild(img);
})

// const arr=[1, null, 2, undefined, 3, null, 4, 5, undefined];
// function remove(arr) {
//     return arr.filter(ele => ele !== null && ele !== undefined);
// }
// const newArr=remove(arr);
// console.log(newArr);

// const a=[10,20,30,40,50];
// let sum=0,avg;
// a.forEach((ele)=>{
//     sum+=ele;
//     avg=sum/5;
// })
// console.log(sum);
// console.log(avg);

const arr=[1, [2, [3, [4, 5]]]];
const newArr=arr.flat(Infinity);
console.log(newArr);

