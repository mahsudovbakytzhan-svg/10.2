const button1 = document.querySelector('#onclick');
button1.addEventListener('click',() =>{
  console.log("Кнопка нажата!")
})


const button2 = document.querySelector('#jsButton');

button2.addEventListener('click', () => {
  console.log('Кнопка нажата через JS!');
});

//3 tapsyrma
const div = document.getElementById('myDiv');
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'lightblue';
div.textContent = 'Это мой див!';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.fontSize = '20px';
div.style.margin= '20px auto';
div.style.cursor = 'pointer';
console.log('Див настроен через JS');

div.addEventListener("mouseover", function() {
  console.log('Элемент нажат');
});

div.addEventListener("click", function() {
  div.style.backgroundColor = 'green';
});

const input = document.getElementById('textInput');
 input.addEventListener('keydown',(event) =>{
   console.log ('input нажат:' + event.key);
   console.log('Элемент нажат', event.target);
 });

 const link = document.getElementById('myLink');
 link.addEventListener('click', (event) => {
   event.preventDefault();
   console.log('Переход по ссылке отменен');
 });

 const list = document.getElementById('list');
 list.addEventListener('click', (event) => {
   if (event.target.tagName === 'LI') {
     console.log('Нажат элемент списка:', event.target.textContent);
   }  
  });

  const keyboardInput = document.getElementById('keyboardInput');
  keyboardInput.addEventListener('keydown', (event) => {
    console.log('Нажата клавиша:', event.code);
  }); 
