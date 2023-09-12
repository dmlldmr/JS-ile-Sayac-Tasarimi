var sayac = 0;
var deger = document.getElementById("deger"); //ıd'si deger olan elemana ulasıp buradaki deger adlı degiskene katardık
var interval;

function Arttir(){
    clearInterval(interval);
    interval = setInterval(function(){
        sayac += 1;
        deger.innerHTML = sayac;
    }, 500);
}

function Azalt(){
    clearInterval(interval);
    interval = setInterval(function(){
        sayac -= 1;
        deger.innerHTML = sayac;
    }, 500);
}

function Durdur(){
    clearInterval(interval);    
        sayac = 0;
        deger.innerHTML = sayac;
}
 