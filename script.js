document.getElementById("parent").innerHTML=("Something Else");
//document.getElementById("parent").style.backgroundColor=("lightgreen");
//document.getElementById("parent").style.color("cyan");
document.getElementById("parent").style.cssText=("background-colorgreen color:red; text-align:center");

document.getElementsByClassName("exercise")[0].innerHTML=("I am Subrat K.C");
document.getElementsByClassName("exercise")[0].style.cssText=("background-color:cyan; color:red; text-align:center");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 19 years old");
document.getElementsByClassName("exercise")[2].style.cssText=("background-color:cyan; color:red; text-align:center");
document.getElementsByTagName("h1")[0].style.cssText=("text-align:center; text-transform:uppercase;");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:uppercase;");
document.getElementsByTagName("h1")[2].style.cssText=("text-align:center; text-transform:uppercase;");
document.querySelector("h2").innerHTML=("I am Hrithik Roshan");
document.querySelector("#depression").innerHTML=("I am broke");
document.querySelector(".happy").innerHTML=("I am good Ishan");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am heart broke");
}

//function myfunction(){
//    document.open();
//    document.write("<h1>I am still broke</h1>")
//    document.close();
//}

function myfunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1>i am broke</h1>");
    myWindow.document.close();
}