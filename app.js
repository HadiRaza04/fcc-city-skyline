function darkMode() {
    document.querySelector(':root').style.setProperty('--building-color1', '#000');
    document.querySelector(':root').style.setProperty('--building-color2', '#000');
    document.querySelector(':root').style.setProperty('--building-color3', '#000');
    document.querySelector(':root').style.setProperty('--building-color4', '#000');
    document.querySelector(':root').style.setProperty('--window-color1', '#777');
    document.querySelector(':root').style.setProperty('--window-color2', '#777');
    document.querySelector(':root').style.setProperty('--window-color3', '#777');
    document.querySelector(':root').style.setProperty('--window-color4', '#777');
    let elements = document.getElementsByClassName("sky");

    // Loop through the elements and set the background for each one
    for (let i = 0; i < elements.length; i++) {
        let bgColor = elements[i];
        bgColor.style.background = "radial-gradient(closest-corner circle at 15% 15%, #ccc, #ccc 20%, #445 21%, #223 100%)";
    }
}
function ligtMode() {
    document.querySelector(':root').style.setProperty('--building-color1', '#aa80ff');
    document.querySelector(':root').style.setProperty('--building-color2', '#66cc99');
    document.querySelector(':root').style.setProperty('--building-color3', '#cc6699');
    document.querySelector(':root').style.setProperty('--building-color4', '#538cc6');
    document.querySelector(':root').style.setProperty('--window-color1', '#bb99ff');
    document.querySelector(':root').style.setProperty('--window-color2', '#8cd9b3');
    document.querySelector(':root').style.setProperty('--window-color3', '#d98cb3');
    document.querySelector(':root').style.setProperty('--window-color4', '#8cb3d9');
    let elements = document.getElementsByClassName("sky");

    // Loop through the elements and set the background for each one
    for (let i = 0; i < elements.length; i++) {
        let bgColor = elements[i];
        bgColor.style.background = "radial-gradient(closest-corner circle at 15% 15%, #ffcf33, #ffcf33 20%, #ffff66 21%, #bbeeff 100%)";
    }
}