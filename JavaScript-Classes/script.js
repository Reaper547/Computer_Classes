function gethistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory() {
    document.getElementById("history-value").innerText=num;
}
function getOutput() {
    document.getElementById("output-value").innerText;
}
function printOutput() {
    if(num=""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value")innerText=getformattedNumber(num)
    }
}