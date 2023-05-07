let container = document.querySelector('.plan');
let task = document.querySelector(".task");
let buttonADD = document.querySelector('.add')
function addNewTask() {
    const newtask=document.createElement('div');
    newtask.className="new"
    newtask.innerText=task.value;
    console.log(newtask) 
    container.appendChild(newtask);
    task.value='';

    //<ul id="parent"></ul>
//let parent = document.querySelector('#parent');

//for (let i = 1; i <= 9; i++) {
	//let li = document.createElement('li');
	//li.innerHTML = i;
	//parent.append(li);
}
    //let task = document.querySelector(".task").value;
    //container.textContent = task;
//}
    