
let random;

function generateNumber() {
    const min = parseInt(document.getElementById("min").value, 10);
    const max = parseInt(document.getElementById("max").value, 10);


    if (max > min) {
        random = Math.floor(Math.random() * (max - min + 1) + min);
        document.getElementById('resultParagraph').innerHTML = random;
    }


    else if (min >= max) {
        console.log(min, max);
        alert("Boundless siliness if your max is not more than your min!")
    } else {
        alert("why are you trying to find a random number without max and/or min you silly goose")
    }

}
function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}
