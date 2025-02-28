var form = document.querySelector('.form-container');
var form1 = document.querySelector('.form1');
var form2 = document.querySelector('.form2');
var text = document.querySelector('.text');
var text1 = document.querySelector('.text1');
var text2 = document.querySelector('.text2');




function switch1(){
    form.style.animation='switch2 0.6s forwards';
    text.style.animation='switch1 0.6s forwards';
    text1.style.animation='appear 0.6s forwards';
    text2.style.animation='disappear 0.6s forwards';
    form2.style.animation='appear 0.6s forwards';
    form1.style.animation='disappear 0.6s forwards';
    text1.style.display='block';
    form2.style.display='block';
    form1.style.display='none';
    text2.style.display='none';
}




function switch2(){
    form.style.animation='switch4 0.6s forwards';
    text.style.animation='switch3 0.6s forwards';
    text2.style.animation='appear 0.6s forwards';
    text1.style.animation='disappear 0.6s forwards';
    form1.style.animation='appear 0.6s forwards';
    form2.style.animation='disappear 0.6s forwards';
    text2.style.display='block';
    form1.style.display='block';
    text1.style.display='none';
    form2.style.display='none';
}