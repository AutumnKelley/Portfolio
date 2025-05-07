// Dark Mode
function darkMode() {
    let stylesheet = document.getElementById("styleRef");

    if (stylesheet.getAttribute("href") == "../styles/light.css") {
        stylesheet.setAttribute("href", "../styles/dark.css");
    } else {
        stylesheet.setAttribute("href", "../styles/light.css");
    }
}
function darkMode1() {
    let stylesheet = document.getElementById("styleRef");

    if (stylesheet.getAttribute("href") == "styles/light.css") {
        stylesheet.setAttribute("href", "styles/dark.css");
    } else {
        stylesheet.setAttribute("href", "styles/light.css");
    }
}
function darkMode2() {
    let insta1 = document.getElementById("social1");
    let yt1 = document.getElementById("social2");
    let in1 = document.getElementById("social3");

    if (insta1.getAttribute("src") == "../images/insta1.png") {
        insta1.setAttribute("src", "../images/insta2.png");
    } else {
        insta1.setAttribute("src", "../images/insta1.png");
    }
    if (yt1.getAttribute("src") == "../images/yt1.png") {
        yt1.setAttribute("src", "../images/yt2.png");
    } else {
        yt1.setAttribute("src", "../images/yt1.png");
    }
    if (in1.getAttribute("src") == "../images/in1.png") {
        in1.setAttribute("src", "../images/in2.png");
    } else {
        in1.setAttribute("src", "../images/in1.png");
    }
}

