const buttons = document.querySelectorAll("button");
const inputText = document.querySelector(".inp-txt");

let str = "";

buttons.forEach(btn => btn.addEventListener('click', (e) =>{
   
        if(e.target.textContent == "="){
            inputText.textContent = str;
            str =  eval(str);
            inputText.textContent = str;
        }
        else if(e.target.textContent == "AC"){
            str = ""
            inputText.textContent = str;
        }
        else if(e.target.textContent == "C"){
            str = str.slice(0, -1);
            inputText.textContent = str;
        }
        else{
            str += e.target.textContent;
            inputText.textContent = str;
        }
   
}))