JsBarcode("#barcode", "Genarate your barcode");

// HERE I NEED TO WRITE WHEN CLICK THE SUBMIT BUTTON WHAT HAPPEN 
document.getElementById("submit").addEventListener('click', function(event){
    //SUBMITED
    event.preventDefault();
    let val = document.getElementById("bar_Value").value;
    if(val !== ""){
        JsBarcode("#barcode", val);
    }
})

document.getElementById("print").addEventListener('click', function(){
    //PRINT BUTTON CLICKED
    document.getElementById("textwrapper").style.display='none';

    document.getElementById("tag").style.display='block';
})


document.querySelector("body").addEventListener('keypress',function(){
    document.getElementById("textwrapper").style.display='block';
})