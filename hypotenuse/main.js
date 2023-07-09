let a;
let b;
let c;
document.getElementById("submit").onclick=function(){

    a=Number(document.getElementById("text1").value);

    b=Number(document.getElementById("text2").value);

    c=Math.sqrt(a**2+b**2);
    document.getElementById("label3").innerHTML="Side C: "+c;
}

