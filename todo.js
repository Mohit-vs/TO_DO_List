const inputBox=document.querySelector("#inputBox")
const listContainer=document.querySelector(".listContainer")
const button=document.querySelector(".delete")

function addTask(){
    if(inputBox.value===''){
        alert("You must enter a task")
    }
    else {
        let li=document.createElement("li")
        li.appendChild(document.createTextNode(inputBox.value.trim()))
        listContainer.appendChild(li)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let span=document.createElement("span")
        span.appendChild(checkbox) 
        li.appendChild(span)
        
    }
    inputBox.value=''
}
button.addEventListener("click", (e) => {
    const listItems = listContainer.querySelectorAll("li");

    listItems.forEach((li) => {
      const checkbox = li.querySelector("input[type='checkbox']");

      if (checkbox.checked) {
        li.remove();
      }
    })
});