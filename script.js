//console.log(document.all);

var hd=document.getElementById('head');
console.log(hd)

hd.style.color='red'
hd.innerText="JS is Fun!"

var tag=document.getElementById('tag1');
tag.innerHTML='<p>Adding an inner html</p>'
tag.style.color='green';
 
var is=document.getElementsByClassName('list');
is[0].style.color='blue';

var p=document.getElementsByClassName('pp');
p[0].innerText="This Paragraph Is Used To Display Somthing."
p[0].style.color='green';

var h=document.querySelectorAll('h1');
h[1].style.color='blue';

