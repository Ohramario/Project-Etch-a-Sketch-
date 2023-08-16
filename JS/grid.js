const container = document.querySelector("#container");
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
container.appendChild(newButton);


function createGrid() {


    for (let i = 0; i < 16; i++) {

        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);




        for (let i = 0; i < 16; i++) {

            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);

        }




    }

}

createGrid();
