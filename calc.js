//Event Binding - bind events with function
//add load event on window
//it means that when wundow will be loaded then it will call initEvent funtion
window.addEventListener("load", initEvents());

function initEvents(){
    fnum= document.querySelector('#box-1') ;
    snum= document.querySelector('#box-2') ;
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#mul").addEventListener("click", mul);
    document.querySelector("#div").addEventListener("click", div);
}

function add(){
    var result= parseInt(fnum.value)+parseInt(snum.value) ;
    document.querySelector('#box-3').value = result; 
}

function sub(){
    var result= parseInt(fnum.value)-parseInt(snum.value) ;
    document.querySelector('#box-3').value = result;
}

function mul(){
    var result= parseInt(fnum.value)*parseInt(snum.value) ;
    document.querySelector('#box-3').value = result;
}

function div(){
    //console.log("Button Clicked...")
    var result= parseInt(fnum.value)/parseInt(snum.value) ;
    document.querySelector('#box-3').value = result;
}