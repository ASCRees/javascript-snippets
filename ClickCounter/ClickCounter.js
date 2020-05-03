function updateCounter() {
    var myLabel = document.getElementById("myLabel");
    var cntr = myLabel.innerHTML;
    cntr++;
    myLabel.innerHTML = cntr;
}