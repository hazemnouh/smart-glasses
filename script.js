const headerEl = document.querySelector('.nav-bar');
const imgEl = document.querySelector('.border-img');
let a;
let y2 = 0;
imgEl.style.backgroundPosition = "50% -525px";
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        headerEl.classList.add('transparent');
    } else headerEl.classList.remove('transparent');

    let y = window.scrollY;
    if (y >= 2747.00) imgEl.style.backgroundPosition = "50% -383px";
    if (y > 1565.75 && y < 2684.150390625) {
        // console.log(y>y2)
        let cur = window.getComputedStyle(imgEl).getPropertyValue('background-position-y').slice(0, -2);
        if (y > y2) {
            imgEl.style.backgroundPosition = "50% " + (parseInt(cur) + 10) + "px";
            console.log(window.getComputedStyle(imgEl).getPropertyValue('background-position-y').slice(0, -2));
            y2 = y;
        } else if (y < y2) {
            imgEl.style.backgroundPosition = "50% " + (parseInt(cur) - 10) + "px";
            // console.log(window.getComputedStyle(imgEl).getPropertyValue('background-position-y').slice(0,-2));
            y2 = y;
        }
    }
    // let count =Math.floor((y%1000)/100);
    // if(count===0)count=10;
    // if((69-(count+5))==63)count=11;
    // if((69-(count+5))==62)count=12;

    // if(y>1200 && y<3000){
    //     imgEl.style.backgroundPosition="50% "+(63-(count+5))+"%";
    //     // console.log("count"+(69-count-5))
    // }

});
function topFunction() {
    document.getElementById("About").scrollIntoView({ behavior: 'smooth' });
}
function hire() {
    document.getElementById("hire").scrollIntoView({ behavior: 'smooth' });
}
function scrolll(name) {
    let el = document.querySelector(name);
    el.scrollBy(-350, 0);
}
function scrollRight(name) {
    let el = document.querySelector(name);
    console.log(el.scrollLeft)
    el.scrollBy(350, 0);


}
let count = 0;
function itemRedirect(panId, content, price, img) {
    count = 0;
    num.innerHTML = count;
    num2.innerHTML = count;
    num3.innerHTML = count;
    num4.innerHTML = count;
    var panels = document.getElementsByClassName("panel");
    for (var i = 0; i < panels.length; i++) {
        panels.item(i).style.display = 'none';
    }
    var panel = document.getElementById(panId);
    panel.style.display = 'block';
    document.getElementById('equipment').innerHTML = content;
    document.getElementById('price').innerHTML = price;
    document.getElementById("panel-img").src = img;
}
function itemRedirect2(panId) {
    count = 0;
    var panels = document.getElementsByClassName("panel");
    for (var i = 0; i < panels.length; i++) {
        panels.item(i).style.display = 'none';
    }
    var panel = document.getElementById(panId);
    panel.style.display = 'block';
}
let num = document.querySelector('#num');
let num2 = document.querySelector('#num2');
function increase() {
    count++;
    num.innerHTML = count;
    num2.innerHTML = count;
    num3.innerHTML = count;
    num4.innerHTML = count;

}
function decrease() {
    if (count > 0) {
        count--;
        num.innerHTML = count;
        num2.innerHTML = count;
        num3.innerHTML = count;
        num4.innerHTML = count;

    }
}

document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    let elClass = e.target.className;
    if (elClass.includes("color")) {
        var panels = document.getElementsByClassName("color");
        for (var i = 0; i < panels.length; i++) {
            panels.item(i).classList.remove('selected');
        }
        document.getElementById(elementId).classList.add('selected');
    }
    else
        if (elClass.includes("play-time")) {
            var panels = document.getElementsByClassName("play-time");
            for (var i = 0; i < panels.length; i++) {
                panels.item(i).classList.remove('selected');
            }
            document.getElementById(elementId).classList.add('selected');
        }
        else if (elClass.includes("time")) {
            var panels = document.getElementsByClassName("time");
            for (var i = 0; i < panels.length; i++) {
                panels.item(i).classList.remove('selected');
            }
            document.getElementById(elementId).classList.add('selected');
        }
        else if (elementId !== '') {
            document.getElementById('img-show').src = document.getElementById(elementId).src;
        }
        else {
            console.log("An element without an id was clicked.");
            // document.getElementById('gallery-img-display').style.display='none';
        }
}
);
function openImg(src) {
    document.getElementById('gallery-displayer').src = src;
    document.getElementById('gallery-img-display').style.display = 'block';
}
let d = new Date();
let date = d.getFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getDate();
// document.getElementById('date').min=date;
// document.querySelector('#date').max=d.getFullYear()+"-"+(d.getUTCMonth()+3)+"-"+d.getDate();
console.log(document.querySelector('#date').min);