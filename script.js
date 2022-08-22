
slider.oninput = showSlide;

let box = document.getElementById("box");
let copy = document.getElementById("copy")

function showSlide(){
    let res = ("border-radius: ") + this.value +"px;";
    document.getElementById("result").value = res;
//Outputs the border radius in the text box
    box.style.cssText += res;
}
// Copy function

copy.addEventListener('click', () => {
    let copyInput = document.getElementById('result');
    copyInput.select();

    navigator.clipboard.writeText(copyInput.value);


})



