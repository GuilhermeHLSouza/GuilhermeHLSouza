let palito = document.getElementById("palito")
anim = 1
const anim = setInterval(() => {
    if (anim <= 2) {
        palito.src = `palito${anim}.png`
        anim++
    }
    else {
        anim = 1
    }
}, 100); 
alert("oi")