const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Please baby i will take care of you", images:"images/cat-02.gif"},
  {text:"I will die for you", images:"images/cat-03.gif"},
  {text:"I will take a bullet for you", images:"images/cat-04.gif"},
  {text:"I can't do without you", images:"images/cat-05.gif"},
]
const ohyes = {text:"Yayyyyyyyyy!!!", images:"images/good.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})

var hideButton = document.getElementById("hideButton");
var textElement = document.getElementById("textToHide");
hideButton.addEventListener("click", function() {
  textElement.classList.toggle("hidden");
});