'use strict'

let loginForm = document.forms["exam"];

let storage = localStorage;


let singleTask = [
    {
        name:""
    },
    {
        about:""
    },
    { 
        date:""
    }

];
let arrToJson = JSON.stringify(singleTask);
console.log(singleTask)

storage.setItem("array", arrToJson);

let fromStorage = storage.getItem("array");

let arrFromStorage = JSON.parse(fromStorage);// parse создаст массив а внутри будут обьекты
console.log(arrFromStorage);


storage.setItem("array", JSON.stringify(arrFromStorage));

function objData(forms){
    let array = [];
    let singleTask = {
        name:forms.elements.task.value,
        about:forms.elements.about_task.value,
        date:forms.elements.date_task.value,
    }
    array.push(singleTask)
    console.log(array)
}



let pwdRules = {
    elem: exam.elements.task,
    minLength: 3,
    maxLenght: 20,
    errorField: document.getElementById("task-error")
};


let validator = {
    
    checkMinLen(rule){
        if (rule.elem.value.length < rule.minLength || rule.elem.value.length < rule.maxLength){
            rule.errorField.innerText = 
            "Минимальное количество символов" + rule.minLength;
            //`Минимальное количество символов ${rule.minLength}` можно так
            return false;
        }  

        if(rule.elem.value.length > rule.maxLenght){
            rule.errorField.innerText = 
            "Минимальное количество символов" + rule.maxLenght;
            rule.errorField.innerText = 
            "Максимальноемальное количество символов" + rule.maxLenght;
            return false;
        }
        rule.errorField.innerText = "";
        return true;
    }
}
exam.elements.task.addEventListener("keyup", validator.checkMinLen.bind(null,pwdRules));

let addParticipant = document.getElementById("but_task");

addParticipant.addEventListener("click", addParticipants);

 function addParticipants(e){ // функция принимает обьект из вне и у себя использеут
    if(e !== false) {
    
      e = document.createElement("input");
      e.setAttribute("type","text");
      e.append(e)
    }
    
};

// function addName(rules){
//     for(rules of pwdRules){
//   let  getName = document.createElement("input");
//   getName.setAttribute("type","text")
//     }
// }

loginForm.addEventListener("submit", submitForm); 
function submitForm(event){
    // отмена события по умолчанию
    event.preventDefault();
    console.log(about_task.value);
    console.log(task.value);
    console.log(date_task.value)
    objData();
}
 