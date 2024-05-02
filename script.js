const display = document.getElementById("display")

function appendToDisplay(input){
    return display.value += input
}

function clearDisplay(){
    return display.value = ""
}

function calculate(){
    try{
        return display.value = eval(display.value)
    }
    catch{
        display.value="err"
    }
}