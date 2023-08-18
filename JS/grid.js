const container = document.querySelector("#container");

/* create a button on the top of the web page */
const newButton = document.createElement("button");
newButton.textContent = 'Click me!';
container.appendChild(newButton);

//Add event listener to the button which activates a function that creates a prompt

newButton.addEventListener('click', onButtonClick);

const grid = document.createElement("div");
container.appendChild(grid);

function reset() {
    grid.innerHTML = "";
}



function onButtonClick() {

    //resets webpage
    reset();
    


    //using unary "+" to convers string into a number
    let askNumber = +prompt("Please provide a number");



    if (typeof askNumber === "number") {

        let userNumber = keepNumberInRange(askNumber)

        createGrid(userNumber)


    } else {

        alert("Please try again !")
    }
}

function keepNumberInRange(number) {

    if (number < 0) {
        return 0;
    } else if (number > 100) {
        return 100;
    } else {
        return number;
    }

}

function createGrid(number) {




    for (let i = 0; i < number; i++) {

        const column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);




        for (let i = 0; i < number; i++) {

            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);

        }

    }

}
 





