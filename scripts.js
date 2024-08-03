


let randomId= document.getElementById("random-generate");
randomId.addEventListener("click",function(){
    let minm = 100000;
    let maxm = 999999;
    let generatedVal= Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    document.getElementById("input-auto-filed").value =generatedVal;
    
    document.getElementById("messageId").innerHTML="";//clear message field  
});


const showVal=document.getElementById("show");
function appendToShow(input){
    if(showVal.value.length!=6){
        showVal.value +=input;
    }
    else{
    }
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


    if(autoValue==typedValue && autoValue!=""){
        document.getElementById("messageId").innerHTML="✅ Your Secret Key is Matched!";
    }
    else if(autoValue!=""){
        document.getElementById("messageId").innerHTML="❌ Your Secret Key is not Matched!";
    }
    else
    {
        document.getElementById("messageId").innerHTML="At first, Generate Secret Key.";
    }
}