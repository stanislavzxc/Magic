

let link = document.getElementById('myLink');

let checkbox = document.getElementById('check_box'); 


let input1 = document.getElementsByName('number1')[0]
let input2 = document.getElementsByName('number2')[0]
let input3 = document.getElementsByName('number3')[0]
let input4 = document.getElementsByName('number4')[0]
let input5 = document.getElementsByName('number5')[0]
let input6 = document.getElementsByName('number6')[0]
let input7 = document.getElementsByName('number7')[0]

let year = 0;

function myButton() {
   if (input1.value === '' || input2.value === ''|| input3.value === '' || input4.value === '' || input5.value === '' || input6.value === '' || input7.value === '') {
     alert("Заполните все поля");
   } else if (checkbox.checked === false) {
   alert('нажмите на галочку');
   let year = input6.value.substring(0, 4);
   console.log(year)
  } else if (year < 2023){
      alert("Год рождения не должен превышать 2023");
  }
  else {
     link.href = 'pay.html';
   }
}
console.log(year);
