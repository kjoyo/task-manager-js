const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function(){
    if(input.value.trim() === ""){
        alert("Debes introducir una tarea");
    } else {
        const text = input.value;

        const li = document.createElement("li");
        li.textContent = text;

        li.addEventListener("click", function(){
            li.classList.toggle("completed");
            
        })

        list.appendChild(li);

        input.value = "";
    }
    
})
