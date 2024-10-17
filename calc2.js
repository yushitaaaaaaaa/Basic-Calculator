//Event Binding - bind events with function
//add load event on window
//it means that when wundow will be loaded then it will call initEvent funtion
window.addEventListener("load", initEvents());

function initEvents(){
    fnum= document.querySelector('#box-1') ;
    snum= document.querySelector('#box-2') ;
    document.querySelector("#add").addEventListener("click", calc);
    document.querySelector("#sub").addEventListener("click", calc);
    document.querySelector("#mul").addEventListener("click", calc);
    document.querySelector("#div").addEventListener("click", calc);
}

function calc(){
    // console.log(this); //pata chlta hai ki click kiya
    var opr = this.innerHTML; //points to the button clicked
    var expression  = parseInt(fnum.value)+opr+parseInt(snum.value);
    console.log(expression);
    document.querySelector('#box-3').value = eval(expression); 
}

