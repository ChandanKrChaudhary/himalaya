document.querySelector("option").addEventListener("click",function(){
    window.location.href="signInpage.html";
});
var img = document.getElementById("main");
function change(img) {
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}