var rdata= {
    name :"ram",
    age : " 25",
    yuga: "Treta",
}
var kdata = {
    name : "Krishna",
    age : "31",
    yuga :"dwapar",
}
function check(rdata,kdata){
    if(rdata.age>kdata.age){
        result.innerText = rdata.name;
    }
    else{
        result.innerText = kdata.name;
    }
}
btn.addEventListener("click",function(){
    check(rdata,kdata)})