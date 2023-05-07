let container = document.querySelector('.plan');
let task = document.querySelector(".task");
let buttonADD = document.querySelector('.add');
let buttonClear = document.querySelector('.clear');
function addNewTask() {
    const block = document.createElement('div');
    block.className="containerfortasks"
    const newtask=document.createElement('div');
    newtask.className="new"
    newtask.innerText=task.value;
    console.log(newtask)
    let input = document.createElement('input');
        input.type = 'radio';
    block.appendChild(newtask);
    block.appendChild(input);
    task.value='';
    container.append(block);

    buttonClear.addEventListener('click', ()=>{
        container.textContent="НЕТ ЗАДАЧ";
    })


}



    //<ul id="parent"></ul>
//let parent = document.querySelector('#parent');

//for (let i = 1; i <= 9; i++) {
	//let li = document.createElement('li');
	//li.innerHTML = i;
	//parent.append(li);
//}
    //let task = document.querySelector(".task").value;
    //container.textContent = task;
//}
    