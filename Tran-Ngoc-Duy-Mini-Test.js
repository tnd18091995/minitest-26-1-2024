alert("TranNgocDuy");
function checka(){
    let a=+document.getElementById("a").value;
    let s= a*a;
    let p=a*4;
    document.getElementById("resulta").innerHTML="Diện tích là"+":"+s+" "+"Chu vi là"+":"+p
}
function checkb(){
    let a1=+document.getElementById("a1").value;
    let b1=+document.getElementById("b1").value;
    let c1=a1**2;
    if(b1===0){
        document.getElementById("resultb").innerHTML="a^2"+"="+c1+" "+ "a^b"+" "+"Không thể tính luỹ thừa 0"
    }
    else{
        let d1=a1**b1;
        document.getElementById("resultb").innerHTML="a^2"+"="+c1+" "+ "a^b"+"="+d1
    }
}
function checkc(){
    let a2=+document.getElementById("a2").value;
    let b2=+document.getElementById("b2").value;
    if(a2 < b2){
        let c2=((a2+b2)*(b2-a2+1))/2;
        document.getElementById("resultc").innerHTML="Kết qủa là"+":"+" "+c2;
    }
    else{
        let c3=((a2+b2)*(a2-b2+1))/2;
        document.getElementById("resultc").innerHTML="Kết qủa là"+":"+" "+c3;
    }

}
function checkd(){
    let a3=+document.getElementById("a3").value;
    let b3=parseInt(a3 / 100) + 1;
    document.getElementById("resultd").innerHTML="Thể kỷ thứ"+" "+b3
}
function checke(){
    let a4=+document.getElementById("a4").value;
    let b4=+document.getElementById("b4").value;
    let c4=+document.getElementById("c4").value;
    if(a4 === 0 || b4 === 0 || c4 ===0 ){
        document.getElementById("resulte").innerHTML="không phải tam giác";
    }
    else if( a4 + b4> c4 && a4 + c4 > b4 && a4 + b4 > a4 ){
        document.getElementById("resulte").innerHTML="là một tam giác";
    }
    if(a4 === b4 && b4 === c4){
        document.getElementById("resulte").innerHTML="tam giác đều";
    }
    else if(a4 === b4 || b4 === c4 || c4 === a4) {
        document.getElementById("resulte").innerHTML = "tam giác cân";
    }
}