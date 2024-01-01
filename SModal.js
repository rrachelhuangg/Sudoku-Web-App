import "./Modal.css"

export default function SModal({open, onClose}){
    if(!open) return null; //if open is false, don't open the modal
    return(
            <div className = "modal-container">
                <p onClick = {onClose} className = "closeButton">X</p> 
                <div className = "content">Congrats!!! You solved the puzzle. </div>
                <button onClick = {onClose} className = "ok-button">OK</button>
            </div>
    );
}