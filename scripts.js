


let randomId= document.getElementById("random-generate");
randomId.addEventListener("click",function(){
    let minm = 100000;
    let maxm = 999999;
let generatedVal= Math.floor(Math.random() * (maxm - minm + 1)) + minm;
// console.log(generatedVal)

document.getElementById("input-auto-filed").value =generatedVal;
document.getElementById("messageId").innerHTML="";//clear message field

});


const showVal=document.getElementById("show");

function appendToShow(input){
    showVal.value +=input;
}



function removeChar(inputStr) {
    if(inputStr.value.length == 1) {
        inputStr.value = "";
    } else {
        inputStr.value = inputStr.value.substring(0, inputStr.value.length - 1);
    }
}



//clear the field
function clearShow(){
    showVal.value="";
    document.getElementById("messageId").innerHTML="";//clear message field
}

//check auto generated value with typed

function chekValue(){
    let autoValue= document.getElementById("input-auto-filed").value;


    let typedValue=document.getElementById("show").value;
    console.log(typedValue);

    if(autoValue==typedValue){

        document.getElementById("messageId").innerHTML="Your Secret Key is Matched!";
        document.getElementById("messageId").style.color="Green";

    }
    else{
        document.getElementById("messageId").innerHTML="Your Secret Key is not Matched!";
        document.getElementById("messageId").style.color="red";
    }
}