let start = document.querySelector(".control span");
start.addEventListener("click", () => {
    let YourName = prompt("What Is Your Name?");
    if (YourName === "" || YourName == null) {
        document.querySelector(".name span").innerHTML = "Unknown";
    }
    else {
        document.querySelector(".name span").innerHTML = YourName;
    }
    document.querySelector(".control").remove();
    //show 1s


});
let Block = document.querySelector(".game");
let Allblocks = Array.from(Block.children);//all image
Allblocks.forEach((block) => {
    let x = Math.floor(Math.random() * 20)
    block.style.order = x;
});
Allblocks.forEach(el => {
    el.addEventListener("click", () => {
        FlibBlock(el);
    })
});
function FlibBlock(selectImage) {
    selectImage.classList.add("isRotate");
    let FilterAllRotate = Allblocks.filter(el => el.classList.contains("isRotate"));
    if (FilterAllRotate.length === 2) {

        //Stop function
        Stop();
        TwoImage(FilterAllRotate[0], FilterAllRotate[1]);
    }


}
//Stop click
function Stop() {
    Block.classList.add("no-click");
    setTimeout(() => {
        Block.classList.remove("no-click");
    }, 1000);
}
//check two image
function TwoImage(Imag1, Imag2) {
    let Tri = document.querySelector(".try span");
    let Suc = document.querySelector(".succes span");
    if (Imag1.dataset.game === Imag2.dataset.game) {
        Imag1.classList.remove("isRotate");
        Imag2.classList.remove("isRotate");

        Imag1.classList.add("has-match");
        Imag2.classList.add("has-match");
        document.getElementById("sc1").play();
        setTimeout(() => {
            Imag1.remove();
            Imag2.remove();
        }, 1000);
        Suc.innerHTML = parseInt(Suc.innerHTML) + 1;


    }
    else {
        Tri.innerHTML = parseInt(Tri.innerHTML) + 1;
        setTimeout(() => {
            Imag1.classList.remove("isRotate");
            Imag2.classList.remove("isRotate");
        }, 1000);
        document.getElementById("sc2").play();
    }
}



