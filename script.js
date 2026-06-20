const inp = document.querySelector("input");
const categoryInp = document.querySelector("select");
const btn = document.querySelector("#add");
const toDoBox = document.querySelector(".to-do-list");

btn.addEventListener("click", () => {
    const value = inp.value;
    const category = categoryInp.value;

    if (value.trim() === "") 
        return;

    const toDoItem = document.createElement("div");
    toDoItem.classList.add("li");

    toDoItem.innerHTML = `
                <div class="toDoItem-1">
                    <span class="category-span ${category}">${category}</span>
                    <h3>${value}</h3>
                </div>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn del">Delete</button>
                </div>
            </div>
    `

    toDoBox.appendChild(toDoItem);

    inp.value = "";
});