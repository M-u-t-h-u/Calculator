const display=document.getElementById("display");

function appendtodisplay(val){
    display.value+=val;
    console.log(display.value);

}

function cleardisplay(){
    display.value="";
}

function calculate(){
    try{
        let ans=eval(display.value);
        display.value=ans;
    }
    catch(error){
        display.value="Error";
    }
    
}