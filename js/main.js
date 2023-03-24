
const cat = document.querySelector(".cat_img");
const div = document.querySelector(".div");
const catB = document.querySelector(".cat_img_b");
const dog = document.querySelector(".dog_img");
const gameOver = document.querySelector(".game_over");
const dogHome = document.querySelector(".dog_home");
const dogText = document.querySelector(".dog_text");
const catText = document.querySelector(".cat_text");

let changeColor = div.style.backgroundColor = "#8bb9ce84";
console.log(div.clientHeight,div.clientWidth)

let step = 50; 
let size = 100;
let stepW = 150;
let sizeB = 150;

let dogHome_top =  90;
let dogHome_left = 450;
dogHome.style.top = dogHome_top + "px";
dogHome.style.left = dogHome_left + "px";

let cat_top =  50;
let cat_left = 150;
cat.style.top = cat_top + "px";
cat.style.left = cat_left + "px";


let catB_top =  300;
let catB_left = 500;
catB.style.top = catB_top + "px";
catB.style.left = catB_left + "px";

let dog_top =  400;
let dog_left = 100;
dog.style.top = dog_top + "px";
dog.style.left = dog_left + "px";

//let initial = 0;
//let amount = 30;

let t, tB, l, lB;
let x, y, xB, yB;
let dogl, dogt, xdog, ydog;
let dt, dl, dtdog, dldog, tdog, ldog;
let xHome, yHome;


dogHome.addEventListener('click', (ev) => {
  xHome = ev.pageX;
  yHome = ev.pageY;

  console.log('xHome:', xHome, 'yHome:', yHome)
})

cat.addEventListener('click', (ev) => {
  let catl = ev.pageX-cat.getBoundingClientRect().left;
  let catt = ev.pageY-cat.getBoundingClientRect().top;
  console.log('catl:', catl, 'catt:', catt)
  //initial -= amount;

  x = ev.pageX;
  y = ev.pageY;
  console.log('x:',x, 'y:',y)


  let t = parseInt(cat.style.top);
  let l = parseInt(cat.style.left);
  console.log('t:',t, 'l:', l)


  if ((catl < 50) && (catt < 50)){
    x = t - step;
    y = l - step;
  } 
  if ((catl > 50) && (catt > 50)) {
    x = t + step;
    y = l + step;
  }  
  if ((catl < 50) && (catt > 50)){
    x = t + step;
    y = l - step; 
  } 
  if ((catl > 50) && (catt < 50)){
    x = t - step;
    y = l + step;
  }


  if ((x <0) || (y <0)) {
    x = t;
    y = l;
  }


  if ((x > div.clientHeight-100) || (y > div.clientWidth-100)) {
    x = t;
    y = l;
  }

  let dt = x - xB;
  let dl = y - yB;
  if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
    {
      console.log('1')
      x = t-stepW;
      y = l-stepW;
      changeColor = div.style.backgroundColor = "#b74b5b84";
    } 
    else  {
      changeColor = div.style.backgroundColor = "#8bb9ce84";
      console.log('2')
    }
  // перевірка з псом
    dt = x - dog_top;
    dl = y - dog_left;

    if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
      {
       // console.log('10')
       x = t-stepW;
       y = l-stepW;
        gameOver.classList.add('show');
      } 
  // перевірка з будою
    dt = x - dogHome_top;
    dl = y - dogHome_left;
  if  ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step)) 
    {
      x = t;
      y = l;
      catText.classList.add('show_cat');
    } else {
        catText.classList.remove('show_cat');
    }
  cat_top = x;
  cat_left = y; 
  cat.style.top = x + "px";
  cat.style.left = y + "px";
  dogText.classList.remove('show_dog');
});

  


catB.addEventListener('click', (ev) => {


  let catBl = ev.pageX-catB.getBoundingClientRect().left;
  let catBt = ev.pageY-catB.getBoundingClientRect().top;
  //console.log('catBl:', catBl, 'catBt:', catBt);


  xB = ev.pageX;
  yB = ev.pageY;
  console.log('xB:',xB, 'yB:',yB)

  let tB = parseInt(catB.style.top);
  let lB = parseInt(catB.style.left);
  console.log('tB:',tB, 'lB:', lB);

  if ((catBl < 50) && (catBt < 50)){
    xB = tB - step;
    yB = lB - step;
  } 
  if ((catBl > 50) && (catBt > 50)) {
    xB = tB + step;
    yB = lB + step;
  } 

  if ((catBl < 50) && (catBt > 50)){
    xB = tB + step;
    yB = lB - step;
  } 
  if ((catBl > 50) && (catBt < 50)){
    xB = tB - step;
    yB = lB + step;
  } 

  if ((xB < 0) || (yB < 0)) {
    xB = tB;
    yB =lB;
  }
  let dt = x - xB;
  let dl = y - yB;
  if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
  {
    console.log('B1')
    xB = tB + stepW;
    yB = lB + stepW;
    changeColor = div.style.backgroundColor = "#b74b5b84";
  } else {
    changeColor = div.style.backgroundColor = "#8bb9ce84";
    console.log('B2')
  }

  dt = xB - dog_top;
  dl = yB - dog_left;
  if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
    {
    //console.log('B10')
    xB = tB;
    yB = lB;
    gameOver.classList.add('show');
    }


    if ((xB > div.clientHeight-100) || (yB > div.clientWidth-100)) {
      xB = tB;
      yB = lB;
    }

      // перевірка з будою
      dt = xB - dogHome_top;
      dl = yB - dogHome_left;
    if  ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step)) 
      {
        xB = t;
        yB = l;
        catText.classList.add('show_cat');
      } else {
        catText.classList.remove('show_cat');
      }

  catB_top = xB;
  catB_left = yB; 
  catB.style.top = xB + "px";
  catB.style.left = yB + "px"; 
  dogText.classList.remove('show_dog');
})

dog.addEventListener('click', (ev) => {
  let dogl = ev.pageX-dog.getBoundingClientRect().left;
  let dogt = ev.pageY-dog.getBoundingClientRect().top;

  let xdog = ev.pageX;
  let ydog = ev.pageY;

  let tdog = parseInt(dog.style.top);
  let ldog = parseInt(dog.style.left);

  if ((dogl < 50) && (dogt < 50)){
    xdog = tdog - step;
    ydog = ldog - step;
  } 
  if ((dogl > 50) && (dogt > 50)) {
    xdog = tdog + step;
    ydog = ldog + step;
  }  
  if ((dogl < 50) && (dogt > 50)){
    xdog = tdog + step;
    ydog = ldog - step; 
  } 
  if ((dogl > 50) && (dogt < 50)){
    xdog = tdog - step;
    ydog = ldog + step;
  }


  if ((xdog <0) || (ydog <0)) {
    xdog = tdog;
    ydog = ldog;
  }




  
  //перевірка з другим котом
  let dt = xdog - x;
  let dl = ydog - y;
  if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
    {
      console.log('4')
      xdog = tdog;
      ydog = ldog;
      gameOver.classList.add('show');
    }
    //перевірка з першим котом

      dt = xdog - xB;
      dl = ydog - yB;
    if ((Math.abs(dt)<=size-step) && (Math.abs(dl)<=size-step))
      {
        console.log('5')
        xdog = tdog;
        ydog = ldog;
        gameOver.classList.add('show');
      }

    //перевірка з будою
      dt = xdog - dogHome_top;
      dl = ydog - dogHome_left;
    if  ((Math.abs(dt)<=size-step+10) && (Math.abs(dl)<=size-step+10)) 
      {
        dogText.classList.add('show_dog');
        dog.style.display = 'none';
      }




  if ((xdog > div.clientHeight-100) || (ydog > div.clientWidth-100)) {
    xdog = tdog;
    ydog = ldog;
    console.log('hghg')
  }
 

console.log('tdog:', tdog, 'ldog:', ldog)
console.log('xdog:', xdog, 'ydog:', ydog)
//console.log('dogt:', dogt, 'dogl:', dogl)

  dog_top = xdog;
  dog_left = ydog; 
  dog.style.top = xdog + "px";
  dog.style.left = ydog + "px";
})