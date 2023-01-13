let total
let cuotasMensuales
let conInteres
let intereses
let pagoMensual

function ingresarNumero(){
    let monto=parseInt(prompt("Ingrese cantidad del monto solicitado (entre $10.000 - $150.0000)"))
    while((monto<10000)||(monto>150000)){
        alert("Ingrese un monto entre $10.000 y $150.000")
        monto=parseInt(prompt("Ingrese nuevamente el monto solicitado (entre $10.000 - $150.0000)"))
    }
    console.log("monto solicitado: "+monto)
    return monto
}

function cuotasFinanciar(){
    let cuotas=parseInt(prompt("ingrese cantidad de cuotas a financiar (3, 6, 9 o 12 cuotas)"))
    while((cuotas!=3)&&(cuotas!=6)&&(cuotas!=9)&&(cuotas!=12)){
        alert("por favor ingrese 3, 6, 9 o 12 cuotas afinanciar")
        cuotas= parseInt(prompt("ingrese cantidad de cuotas a financiar (3, 6, 9, 12)"));
    }
    console.log("cuotas seleccionadas: " +cuotas)
    return cuotas;
}

function montoNeto(){
    let coeficiente=1
    switch(cuotasMensuales){
        case 3:
            coeficiente=1.3
            return  total*coeficiente
        break;
        case 6:
            coeficiente=1.6
            return total*coeficiente
        break;
        case 9:
            coeficiente=1.9
            return total*coeficiente
        break;
        case 12:
            coeficiente=2.2
            return total*coeficiente
        break;
    }
    
}

function diferencia(){
    let adicional=conInteres-total
    console.log(`intereses generados: ${adicional} `)
    return adicional
}
function division(){
    let valor= conInteres/cuotasMensuales
    console.log(`valor de cada cuota: ${valor}`)
    return valor
}
function notificacion(){
    alert(`el monto de $${total} tiene un interes de $${intereses} en la cantida de cuotas seleccionadas`)
    alert(`adquiriendo el prestamo usted debera abonar ${cuotasMensuales} cuotas de $${pagoMensual}`)
}

let solicitud=confirm("¿desea solicitar un prestamo?")

do{
    if(solicitud==true){
        total=ingresarNumero()

        cuotasMensuales=cuotasFinanciar()

        conInteres=montoNeto()

        console.log(`monto total con intereses: $${conInteres}`)

        intereses=diferencia()

        pagoMensual=division()

        notificacion()

        solicitud=confirm("¿Desea volver a simular un prestamo?")

        if(solicitud==false){
            alert("gracias por visitarnos, vuelvas prontos!")
        }
    }else{
        alert("gracias por tu visita!")   
    }

}while(solicitud)

