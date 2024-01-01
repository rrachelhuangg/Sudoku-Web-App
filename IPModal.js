//put this file and Modal.css file into a Components folder
//can do onClicks for non-button components too
//event.stopPropagation: clicking on modal doesn't close it, but clicking on the overlay does
import "./Modal.css"

export default function Modal({open, onClose}){
    if(!open) return null; //if open is false, don't open the modal
    return(
            <div className = "modal-container">
                <p onClick = {onClose} className = "closeButton">X</p> 
                <div className = "content">You entered an invalid puzzle. Please try again. </div>
                <button onClick = {onClose} className = "ok-button">OK</button>
            </div>
    );
}


