


let randomId= document.getElementById("random-generate");
randomId.addEventListener("click",function(){
    let minm = 100000;
    let maxm = 999999;
let generatedVal= Math.floor(Math.random() * (maxm - minm + 1)) + minm;
// console.log(generatedVal)

document.getElementById("input-auto-filed").value =generatedVal;

});


const showVal=document.getElementById("show");

function appendToShow(input){
    showVal.value +=input;
}
function clearShow(){
    showVal.value="";
}