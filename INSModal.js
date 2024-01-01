import "./Modal.css"

export default function INSModal({open, onClose}){
    if(!open) return null; //if open is false, don't open the modal
    return(
            <div className = "big-modal-container">
                <p onClick = {onClose} className = "closeButton">X</p> 
                <div className = "content">
                    <div className = "content-header">Instructions for Sudoku Solver: </div>
                    <div className = "general-content">
                    • General rules: Sudoku is played on a grid of 9 x 9 spaces. 
                    Within the rows and columns are 9 “squares” (made up of 3 x 3 spaces). 
                    Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, 
                    without repeating any numbers within the row, column or square. Numbers can be inputted
                    using your keyboard or the onscreen grid of numbers. 
                    </div>
                    <div className = "general-content">
                    • Solving a custom puzzle: Enter a custom puzzle and press the set #'s button to set the 
                    numbers for your puzzle. Then, press the solve button to solve your puzzle. 
                    </div>
                    <div className = "general-content">
                    • Solving a generated puzzle: Enter numbers into the grid. The check button can help you 
                    check your input: green squares have the correct number, while red squares contain incorrect numbers.   
                    </div>
                </div>
                <button onClick = {onClose} className = "bigmodal-ok-button">OK</button>
            </div>
    );
}