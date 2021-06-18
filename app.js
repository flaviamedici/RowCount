const myInput = document.getElementById("my-input");


function stepper(btn) {
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcRow = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcRow

    if(newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    } 


    console.log(id, min, max, step, val);

}

function reset(btn) {
   
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
   
    let newValue = 0;
    if(newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    } 
}
