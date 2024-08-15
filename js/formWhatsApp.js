// const clickToEnter = (e) => {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     getInputHandler();
//   }
// };

// // Функция для проверки ввода
// function validateInput(el) {
//   if (el.value.length === 0) {
//     showErr(el, "Введите имя");
//   } else if (el.value.length > 30) {
//     showErr(el, "Введено максимальное количество символов");
//   } else {
//     // Если ошибок нет, удаляем сообщение об ошибке
//     hideErr(el);
//   }
// }

// // Добавляем обработчик события input для всех полей ввода
// document.querySelectorAll("input").forEach((el) => {
//   el.addEventListener("input", () => validateInput(el));
// });

// function showErr(field, errorText) {
//   if (
//     field.nextElementSibling &&
//     field.nextElementSibling.textContent === errorText
//   ) {
//     return;
//   }

//   field.classList.add("field-error-name");

//   const err = document.createElement("span");
//   field.after(err);
//   err.classList.add("error-message-name");
//   err.textContent = errorText;
// }

// function hideErr(field) {
//   const err = field.nextElementSibling;
//   if (err && err.classList.contains("error-message-name")) {
//     field.classList.remove("field-error-name");
//     err.remove();
//   }
// }

// formBtnNode.addEventListener("click", function (e) {
//   e.preventDefault(); // Предотвращаем отправку формы
// });

///////-------------------

// document.querySelectorAll("input").forEach((el) => {
//   el.addEventListener("blur", () => {
//     if (el.value.length === 0) {
//       showErr(el, "Введите имя");
//     } else if (el.value.length > 30) {
//       showErr(el, "Введено максимальное количество символов");
//     }
//   });
// });

// function showErr(field, errorText) {
//   if (
//     field.nextElementSibling &&
//     field.nextElementSibling.textContent === errorText
//   ) {
//     return;
//   }

//   field.classList.add("field-error-name");

//   const err = document.createElement("span");
//   field.after(err);
//   err.classList.add("error-message-name");
//   err.textContent = errorText;
//   hideErr(field, err);
// }

// function hideErr(field, err) {
//   field.addEventListener("input", () => {
//     field.classList.remove("field-error-name");
//     err.remove();
//   });
// }

// formBtnNode.addEventListener("click", function (e) {
//   e.preventDefault(); // Предотвращаем отправку формы
// });

////////////-------
// const formNode = document.getElementById("form");
// const inputNameNode = document.getElementById("inputName");
// const inputTelNode = document.getElementById("inputTel");
// const formBtnNode = document.getElementById("formBtn");

// function getInputName() {
//   return (inputNameNode.value = inputNameNode.value
//     .replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "")
//     .trim());
// }

// function getInputTel() {
//   return inputTelNode.value.trim();
// }

// function validation() {
//   let name = inputNameNode.value.trim();

//   const errMessageName = document.createElement("span");

//   if (name === "" || !name) {
//     errMessageName.classList.add(".error-message ");
//     errMessageName.textContent = "Введите корректно имя";
//     return;
//   } else {
//     errMessageName.classList.remove(".error-message");
//   }

//   if (name.length < 2) {
//     errMessageName.classList.add(".error-message ");
//     errMessageName.textContent = "Минимальное количество символов 2";
//     return;
//   } else {
//     errMessageName.classList.remove(".error-message");
//   }
// }

// function validation() {
//   let tel = inputTelNode.value;

//   const errMessageTel = document.createElement("span");

//   if (tel === "" || !tel) {
//     errMessageTel.classList.add(".error-message ");
//     errMessageTel.textContent = "Введите корректно телефон";
//     return;
//   } else {
//     errMessageTel.classList.remove(".error-message");
//   }

//   if (tel.length < 2) {
//     errMessageTel.classList.add(".error-message ");
//     errMessageTel.textContent = "Минимальное количество символов 15";
//     return;
//   } else {
//     errMessageTel.classList.remove(".error-message");
//   }
// }

// function getInputHandler() {
//   if ((!validation(), inputNameNode.value)) {
//     return;
//   }

//   if ((!validation(), inputTelNode.value)) {
//     return;
//   }

//   clearInput();
// }

// function clearInput() {
//   inputNameNode.value = "";
//   inputTelNode.value = "";
// }

// formBtnNode.addEventListener("click", function (e) {
//   e.preventDefault();
//   getInputHandler();
// });

// ///////////=======

// const formNode = document.getElementById("form");
// const inputNameNode = document.getElementById("inputName");
// const inputTelNode = document.getElementById("inputTel");
// const formBtnNode = document.getElementById("formBtn");
