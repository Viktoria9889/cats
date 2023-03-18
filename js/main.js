
const cat = document.querySelector(".cat_img");
const div = document.querySelector(".div");
const catB = document.querySelector(".cat_img_b");

let changeColor = div.style.backgroundColor = "#8bb9ce84";


let step = 50; 
let size = 100;


let cat_top =  0;
let cat_left = 0;
cat.style.top = cat_top + "px";
cat.style.left = cat_left + "px";

let catB_top =  250;
let catB_left = 250;
catB.style.top = catB_top + "px";
catB.style.left = catB_left + "px";

//let initial = 0;
//let amount = 30;

let T, TB, L, LB;
let x, y, xB, yB;


cat.addEventListener('click', (ev) => {
  let catl = ev.pageX-cat.getBoundingClientRect().left;
  let catt = ev.pageY-cat.getBoundingClientRect().top;
  console.log('catl:', catl, 'catt:', catt)
  //initial -= amount;

  x  = ev.pageX;
  y = ev.pageY;
console.log('x:',x, 'y:',y)


let T = parseInt(cat.style.top);
let L = parseInt(cat.style.left);

console.log('T:',T, 'L:', L)


if ((catl < 50) && (catt < 50)){
  x = T - step;
  y = L - step;
} 
if ((catl > 50) && (catt > 50)) {
  x = T + step;
  y = L + step;
}  
if ((catl < 50) && (catt > 50)){
  x = T + step;
  y = L - step; 
} 
 if ((catl > 50) && (catt < 50)){
  x = T - step;
  y = L + step;
}


if ((x <0) || (y <0)) {
 x = 0;
 y = 0;

}



if ((y > div.clientHeight) || (x > div.clientWidth)) {
  y = div.clientHeight;
  x = div.clientWidth;
}


      let dt = x - xB;
      let dl = y - yB;
      if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
      {
        console.log('1')
        x = T;
        y = L;
        changeColor = div.style.backgroundColor = "#b74b5b84";
      } else  {
        changeColor = div.style.backgroundColor = "#8bb9ce84";
        console.log('2')
      }


  cat_top = x;
  cat_left = y; 
  cat.style.top = x + "px";
  cat.style.left = y + "px";
});

  





catB.addEventListener('click', (ev) => {


  let catBl = ev.pageX-catB.getBoundingClientRect().left;
  let catBt = ev.pageY-catB.getBoundingClientRect().top;
  //console.log('catBl:', catBl, 'catBt:', catBt);


 xB  = ev.pageX;
 yB = ev.pageY;

console.log('xB:',xB, 'yB:',yB)

let TB = parseInt(catB.style.top);
let LB = parseInt(catB.style.left);

console.log('TB:',TB, 'LB:', LB)

if ((catBl < 50) && (catBt < 50)){
  xB = TB - step;
  yB = LB - step;
} 
if ((catBl > 50) && (catBt > 50)) {
  xB = TB + step;
  yB = LB + step;
} 

if ((catBl < 50) && (catBt > 50)){
  xB = TB + step;
  yB = LB - step;
} 
if ((catBl > 50) && (catBt < 50)){
  xB = TB - step;
  yB = LB + step;
} 

if ((xB < 0) || (yB < 0)) {
  xB = 0;
  yB= 0;

}
let dt = x - xB;
let dl = y - yB;
if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
{
  console.log('B1')
  xB = TB;
  yB = LB;
  changeColor = div.style.backgroundColor = "#b74b5b84";
} else {
  changeColor = div.style.backgroundColor = "#8bb9ce84";
  console.log('B2')
}

if ((yB > div.clientHeight) || (xB > div.clientWidth)) {
  yB = div.clientHeight;
  xB = div.clientWidth;
}


  catB_top = xB;
  catB_left = yB; 
  catB.style.top = xB + "px";
  catB.style.left = yB + "px"; 

})

