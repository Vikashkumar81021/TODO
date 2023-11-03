// Get references to the form input elements by their IDs
const titleInput = document.getElementById("title");
const descInput = document.getElementById("descc");
const submitButton = document.getElementById("submit");
const deleteButton = document.getElementById("delete");
const todobtn = document.getElementById('todo')

submitButton.addEventListener('click', (e) => {
    e.preventDefault();


    let title = titleInput.value;
    let descc = descInput.value;

    localStorage.setItem("todo", JSON.stringify({ title, descc }));
    todobtn.innerHTML = `
    <h1>${title}</h1>
    <p> ${descc}</p>
    `
    title.value = "";
    descc.value = "";
});

deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("todo")
    todobtn.innerHTML = "";


    console.log("localstorage remove item");
})



