var rdata={
     name:"ram",
     power:"2500",
     yuga:"Treta",
     
}
var kdata={
     name:"krishna",
     power:"2325",
     yuga:"dwapar",
}
function power(rdata,kdata){
    if(rdata.power>kdata.power){
        output.innerText=rdata.name;
    }
    else{
        output.innerText=kdata.name;
    }
}
function tpower(rdata,kdata){
    var rtpower= rdata.power+ rdata.name.length*35;
    var ktpower= kdata.power+kdata.name.length*35;
    if(rtpower>ktpower){
        output.innerText=rdata.name;
    }
    else{
        output.innerText=kdata.name;
    }
}
function checkcharacter(){
    if(rdata.name.length*35>kdata.name.length*35){
        output.innerText=rdata.name;
    }
    else{
        output.innerText=kdata.name;
    }
}
btn.addEventListener("click",function(){
    tpower(rdata,kdata)
})