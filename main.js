function calcular() {
    let tipo = document.querySelector("#tipo").value;
    let cantidad = parseInt(document.querySelector("#cantidad").value);
    let tarjeta = document.querySelector("#tarjeta").value;
    let pago = 0;
    
    if (tipo == "simple") {
        if (tarjeta == "si") {
            pago = 51 * cantidad + (0.05 * 51 * cantidad)
        }else {
            pago = 51 * cantidad;
        }
    }else if (tipo == "doble") {
        if (tarjeta == "si") {
            pago = 58 * cantidad + (0.05 * 58 * cantidad)
            
        }else {
            pago = 58 * cantidad;
        }
    }else if (tipo == "triple") {
        if (tarjeta == "si") {
            pago = 64 * cantidad + (0.05 * 64 * cantidad)
            
        }else {
            pago = 64 * cantidad;
        }
    }

    // escribir resultado
    document.querySelector("#total").innerHTML = `El resultado es ${pago}`;
}

document.querySelector("button").addEventListener("click", calcular);

