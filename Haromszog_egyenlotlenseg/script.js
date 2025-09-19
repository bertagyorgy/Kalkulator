function szamol(){
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)

    if((a + b) > c && (b + c) > a && (a + c) > b){
        document.getElementById("eredmeny").innerText = "Lehetséges háromszög"
    }
    else{ 
        document.getElementById("eredmeny").innerText = "Lehetetlen háromszög"
    }
}



document.getElementById("ok").addEventListener("click", szamol)

