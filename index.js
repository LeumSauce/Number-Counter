const MyPlus = document.getElementById("MyPlus");
const MySubtract = document.getElementById("MySubtract");
const MyReset = document.getElementById("MyReset");
const MyH1 = document.getElementById("MyH1");
let NumCount = 0;
MyH1.textContent = NumCount;

MyPlus.onclick = function(){
NumCount+=1;
MyH1.textContent = NumCount;
}

MySubtract.onclick = function(){
NumCount-=1;
MyH1.textContent = NumCount;
}

MyReset.onclick = function(){
NumCount=0;
MyH1.textContent = NumCount;
}