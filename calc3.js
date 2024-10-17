//Event Binding - bind events with function
//add load event on window
//it means that when wundow will be loaded then it will call initEvent funtion
window.addEventListener("load", initEvents());var fnum;
var snum;

function initEvents(){
    fnum= document.querySelector('#box-1') ;
    snum= document.querySelector('#box-2') ;
    
    //queryselector vs queryselectorall
    var btns = document.querySelectorAll("button");
    for (let btn of btns){
        btn.addEventListener("click", calc);
    }
}

function calc(){
    // console.log(this); //pata chlta hai ki click kiya
    var opr = this.innerHTML; //points to the button clicked
    var expression  = parseInt(fnum.value)+opr+parseInt(snum.value);
    // console.log(expression);
    document.querySelector('#box-3').value = eval(expression); 
}

// for in vs for of difference - for in is used when you have an object where for of is used when we have a array/data structure