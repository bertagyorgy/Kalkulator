function kiszamol(){
    let index = document.getElementById("termek").selectedIndex
    let db = document.getElementById("mennyiseg").value
    const arak = [1000, 2000, 3000, 4000]

    document.getElementById("egysegar").innerText = arak[index]
    document.getElementById("osszesen").innerText = arak[index] * db
}


document.getElementById("termek").addEventListener("change",() => {
    kiszamol()
})
document.getElementById("mennyiseg").addEventListener("change",() => {
    kiszamol()
})

