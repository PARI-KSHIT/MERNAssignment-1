let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

input.addEventListener("keypress", function(event) {

    if (event.key === "Enter" && input.value.trim() !== "") {

        let li = document.createElement("li");
        li.textContent = input.value;

        let btn = document.createElement("button");
        btn.textContent = "X";

        btn.onclick = function() {
            li.remove();
        };

        li.appendChild(btn);
        list.appendChild(li);

        input.value = "";
    }
});