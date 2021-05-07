'use strict'

let loginForm = document.forms["exam"];


let array = [];

function objData(){
    
    let singleTask = {
        name:exam.elements.task.value,
        about:exam.elements.about_task.value,
        date:exam.elements.date_task.value,
        
    }
    array.push(singleTask)
    console.log(array)
    let storage = localStorage;
    let arrToJson = JSON.stringify(array);
    storage.setItem("array", arrToJson);
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

 function addParticipants(){ // функция принимает обьект из вне и у себя использеут
     const addPar = document.getElementById("but");
     const textfhg = document.createElement("div");
     textfhg.innerHTML = `<input type="text" name="parti" id="parti">`;
     addPar.appendChild(textfhg);


    
};



loginForm.addEventListener("submit", submitForm); 
function submitForm(event){
    // отмена события по умолчанию
    event.preventDefault();
    console.log(about_task.value);
    console.log(task.value);
    console.log(date_task.value)
    objData();
}
 