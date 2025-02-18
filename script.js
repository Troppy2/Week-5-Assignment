// Task 1: Dynamic Content Update
function task1() {
    document.getElementById("main_header").innerHTML = "Content Updated!";
    document.getElementById("main_paragraph").innerHTML = "The One Piece is real!";
    document.getElementById("main_paragraph").style.backgroundColor = "lightblue";
}

// Task 2: Interactive Image Gallery
function toggleImageSize(image) {
    if (image.classList.contains("zoomed")) {
        image.style.width = "200px";
        image.style.height = "auto";
        image.style.border = "none";
        image.classList.remove("zoomed");
    } else {
        image.style.width = "240px";  // Increase size by 20%
        image.style.height = "auto";
        image.style.border = "4px solid red";
        image.classList.add("zoomed");
    }
}

// Task 3: Animated Circle
document.addEventListener("mousemove", function (event) {
    let circle = document.getElementById("circle");
    if (!circle) return;

    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    circle.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Task 4: Form with Real-time Feedback
function checkAge() {
    let age = document.getElementById("age").value;
    let feedback = document.getElementById("feedback-output");

    if (age < 18) {
        feedback.innerHTML = "You are a minor.";
    } else {
        feedback.innerHTML = "You are an adult.";
    }
}
