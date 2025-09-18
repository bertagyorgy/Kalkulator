function kiszamolKT(){
    let radiusz = document.getElementById("radiusz").value
    document.getElementById("kerulet").value = Math.abs(radiusz * 2 * 3.14).toFixed(2)
    document.getElementById("terulet").value = Math.abs(radiusz * radiusz * 3.14).toFixed(2)
}

function kiszamolRT(){
    let kerulet = document.getElementById("kerulet").value
    document.getElementById("radiusz").value = Math.abs(kerulet/6.28).toFixed(2)
    document.getElementById("terulet").value = Math.abs((kerulet/6.28) * (kerulet/6.28) * 3.14).toFixed(2)
}

function kiszamolRK(){
    let terulet = document.getElementById("terulet").value
    document.getElementById("radiusz").value = Math.abs((terulet/3.14)**0.5).toFixed(2)
    document.getElementById("kerulet").value = Math.abs(((terulet/3.14)**0.5) * 2 * 3.14).toFixed(2)
}






document.getElementById("radiusz").addEventListener("change",() => {
    kiszamolKT()
})
document.getElementById("kerulet").addEventListener("change",() => {
    kiszamolRT()
})
document.getElementById("terulet").addEventListener("change",() => {
    kiszamolRK()
})