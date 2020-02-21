var i=0;
var sum=0;
while(i<100){
    if (i%2 == 0){
    sum = sum+i;
    }
    i++;
}

console.log(sum)


var sum = 0;
for (var i=0; i<100; i++){
   if(i % 3 == 0)
   {
       sum += i
   }
}

console.log(sum)

var a=["pikachu","sqirtle"];
console.log(a);
a.push("magikarp");
console.log(a);
a.unshift("charmander");
console.log(a);
a.pop();
console.log(a);
a.sort();
console.log(a);

function myFunction(){
    alert("Hello!");
}

function pageload(){
var clickbutton = document.getElementById("clickme");
clickbutton.onclick = myFunction;
}

window.onload = pageload;
function pageload(){
    var form = document.getElementById("myForm");
    form.onsubmit = myFormfunction;
}
function myFormfunction(){
    alert("OK");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}
