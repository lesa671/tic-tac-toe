let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

//translate pseudocode to Javascript here
// write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`

function checkForWin(winningCombination, playerSelection) {

let matches = 0


for (let winIndex = 0; winIndex <= winningCombinations.length; winIndex++) {
    const winningCombination = winningCombinations[winIndex]
    console.log(winningCombination[winIndex])


    for (let eachNumIndex = 0; eachNumIndex < winningCombination.length; eachNumIndex++) {
        const winningItem = winningCombination[eachNumIndex]
        console.log(winningItem)

        if (playerXSelections.includes(winningItem)) {
            matches += 1
            console.log(matches)
            

            

        } else if (playerOSelections.includes(winningItem)) {

            matches += 1

           
        }

    }
}

return winningItem



// for every combination in `winningCombination`
//     create a `matches` counter variable, which starts at 0
//     for every number in the current combination
//         if the player's selections array contains the current number
//             increment `matches` by 1
//         if `matches` is **equal** to 3
//             return `true`, because we found a win!
// we got through all combinations without returning `true`, so return `false`, because no win was found


// }

// console.log(checkForWin())


// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell')
// console.log(cellElementArray)


// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {

    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {

        const clickedCellElement = event.target

        console.log("You clicked on cell number: " + clickedCellElement.id)

        if (currentPlayer === 'X') {
            clickedCellElement.innerHTML = 'X'
            playerXSelections.push(clickedCellElement.id)
            currentPlayer = 'O'


        } else {
            clickedCellElement.innerHTML = 'O'
            playerOSelections.push(clickedCellElement.id)
            currentPlayer = 'X'
        }

    }

    )
}