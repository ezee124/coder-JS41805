
//CANTIDAD DE EQUIPOS PARA VENDER
let acumulador= parseInt (0)

for( let i =1; i<=99; i++){
    ingreso= prompt('Celulares. \n 1-Iphone 11 $1000. \n 2-Iphone 11 pro $1200. \n 3-Iphone 12 $1500. \n 4-Iphone 12 pro $1700. \n 5-Iphone 13 $2000. \n 6-Iphone 13 pro $2500. \n 7-Abonar.');
    
    if (ingreso==1){
        acumulador+= 1000;
        alert ('Iphone 11')
    }
    
    else if (ingreso==2){
        acumulador+= 1200;
        alert ('Iphone 11 pro')
    }
    else if (ingreso==3){
        acumulador+= 1500;
        alert ('Iphone 12')
    }
    else if (ingreso==4){
        acumulador+= 1700;
        alert ('Iphone 12 pro')
    }
    else if (ingreso==5){
        acumulador+= 2000;
        alert ('Iphone 13')
    }
    else if (ingreso==6){
        acumulador+= 2500;
        alert ('Iphone 13 pro')

    }
    
    else if (ingreso==7){
        alert ('Su total a abonar es de ' + acumulador)
        break;
        
    
    }else{
        ingreso!=1,2,3,4,5,6,7;
        alert('Ingresar una opcion entre 1 y 6 para poder comprar y 7 para abonar. muchas gracias');1
    }
      
}

//FORMAS DE PAGO

let pago = prompt('Desea pagar ' + acumulador + ' en ' + '\n 1- Efectivo. \n 2- Trasferencia. \n 3-Tarjeta de Credito.')
let cuotas=0
let cuotas6=acumulador*1.1
let cuotas12=acumulador*1.3
switch (pago) {
    case '1':
        alert('Acercese a nuestro local mas cercano para abonar. muchas gracias por su compra');
        
        break;

    case '2':
        alert('Nuestro alias es: em.technologyy.                                                      Una vez hehco el pago porfavor mande el comprobante mediante WhatsApp al siguiente numero: 3518029218.       Muchas gracias por su compra');
        
        break;
    
    case '3':
        cuotas=prompt('Por favor seleccione el numero de cuotas. \n 1- 3 cuotas sin interes. \n 2- 6 cuotas con 10% de recargo. \n 3- 12 cuotas con 30% de recargo. ')
        if(cuotas==1){
            alert('En total son 3 cuotas de '+ acumulador/3);
        }else if(cuotas==2){
            alert('En total son 6 cuotas de ' + cuotas6/6);
        }else if(cuotas==3){
            alert('En total son 12 cuotas de '+ cuotas12/12);
        }
        break;

       
}





