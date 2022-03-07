//javascript for responsive navigation sidebar menu
window.addEventListener("scroll", function() {
    var header = document.querySelector("header")
    header.classList.toggle("down", window.scrollY > 0);

    // //change logo
    // var logo = document.querySelector(".logo img");
	// if (window.scrollY>0) 
    // {
	//     logo.setAttribute('src', 'img/logo/newlogo/newlogoblack.png');
	// }else {
	//     logo.setAttribute('src', 'img/logo/newlogo/newlogowhite.png');
	// }

});

// // whriter machine effect 1
// var txt1 = document.getElementById('dynamic-txt1');
// var str1 = txt1.innerHTML;

// txt1.innerHTML = '';

// var speed = 200;
// var k = 0;
// var l = txt1.length;

// function typeWriter() {
//     if (k < str1.length) {
//         txt1.innerHTML += str1.charAt(k);
//         k++;
//         setTimeout(typeWriter, speed);
//     }
// }

// setTimeout(typeWriter, speed);

// whriter machine effect 2
const machine = document.getElementById('dynamic-txt2');

const whriterMachine = (text = '', time = 200, tag = '') => {
    let arrayCharacters = text.split('');
    tag.innerHTML = '';
    let i = 0;
    let j = text.length;
    let whrite = setInterval(function(){
        if (i === arrayCharacters.length) {
            tag.innerHTML = text.substring(0, j)
            j--
            if (j === 0) {
                i = 0;
                tag.innerHTML = '';
                j = text.length;
            }
        } else {
            tag.innerHTML += arrayCharacters[i]
            i++
        }
    }, time)
}

whriterMachine(" FrontEnd Dev  ", 150, machine);

// show effect
let ubication = window.pageYOffset;
window.onscroll = function() {
    let displacement = window.pageYOffset;
    if (ubication >= displacement) {
        document.getElementById('section-header').style.top = '0';
    }else {
        document.getElementById('section-header').style.top = '-100px'
    }
    ubication = displacement;
}