console.log("JS connected successfully!");

document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".my-image");

    img.addEventListener("click", () => {
        alert("Image clicked!");
    });
});
