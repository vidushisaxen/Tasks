var rdata  ={
    name : "ram",
    power :"2500",
    yuga : "Treta",
}
var kdata ={
    name : "krishna",
    power: "2325",
    yuga : "dwapar",
}
function power(rdata,kdata){
    if(rdata.power>kdata.power){
        result.innerText= rdata.name;
    }
    else{
        result.innerText=kdata.name;
    }
}
    btn.addEventListener("click",function(){
        power(rdata,kdata)})
    
