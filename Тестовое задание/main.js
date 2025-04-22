//Коробка HTML
let formCard = document.createElement("div")
formCard.classList.add("ui-form")

//Заголовок HTML
let title_h3 = document.createElement("h3")
title_h3.textContent = "Кодирование строки"
title_h3.classList.add("title_h3style")

//Див HTML
let divElement = document.createElement("div")
divElement.classList.add("form-row")

//Ввод текста HTML
let textInp = document.createElement("input")
textInp.type = "text"
textInp.classList.add("inputStyle")
textInp.id = "copy-text"

//Кнопка Кодировать HTML
let addBtn = document.createElement("button")
addBtn.textContent = "Кодировать"
addBtn.classList.add("coderBN")


//Активация кнопки Кодировать JS
addBtn.onclick = function() {
   let inpText = textInp.value
   let listItem = document.createElement("div")
   listItem.textContent = encode(`${inpText}`)
   resText.append(listItem)
   textInp.value = ""
}

//Алгоритм к кнопке Кодировать JS
function encode(input) {
   let encoding = [];
   let prev, count, i;

   for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
       if (input[i] != prev) {
         if ( count > 1) {
           encoding.push(count + prev);
           count = 1;
           prev = input[i];
         }
         else 
           encoding.push(prev);
           count = 1;
           prev = input[i];
       }
       else 
           count ++;
   }
   encoding.push(prev);
   return encoding.join('');//.join('') объединяет массив 
}

//строка результат HTML
let title_h4 = document.createElement("h4")
title_h4.textContent = "Результат:"
title_h4.classList.add("title_h4style")

//Вывод строки результата HTML
let resText = document.createElement("div")
resText.classList.add("resTextStyle")
resText.id = "copy-restext"

//Кнопка Копировать HTML
let copyBtn = document.createElement("button")
copyBtn.textContent = "Скопировать в буфер обмена"
copyBtn.classList.add("copyBN")
copyBtn.id = "copy-btn"

//Обработчик события копировать
copyBtn.onclick = function() {
   const copyText = document.querySelector("#copy-restext")
   document.querySelector('#copy-btn').addEventListener('click', () => {
   navigator.clipboard.writeText(document.querySelector("#copy-restext").innerText)
   
   alert(`Скопировано в буфер обмена: ${document.querySelector("#copy-restext").innerText} `)
})
}

//Вывод в HTML
document.body.append(formCard)
formCard.append(title_h3, divElement)
divElement.append(textInp, addBtn, title_h4, resText, copyBtn)
