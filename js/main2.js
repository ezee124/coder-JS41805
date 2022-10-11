
//CANTIDAD DE EQUIPOS PARA VENDER

const stock=[
    {ip:1, name:'Iphone 11', price:1000},
    {ip:2, name:'Iphone 11 PRO', price:1200},
    {ip:3, name:'Iphone 12', price:1300},
    {ip:4, name:'Iphone 12 PRO', price:1500},
    {ip:5, name:'Iphone 13', price:1400},
    {ip:6, name:'Iphone 13 PRO', price:1700},
    {ip:7, name:'Iphone 14', price:2000},
    {ip:8, name:'Iphone 14 PRO', price:2500},
];


let acumulador= parseInt (0);



let carrito = [];

let seleccion = prompt('hola desea comprar algun producto si o no')

//CARRITO DE VENTA

while(seleccion != 'si' && seleccion != 'no'){
    alert('por favor ingresa si o no')
    seleccion=prompt('hola desea comprar algun producto si o no')
}
if(seleccion=='no'){
    alert('gracias por venir, hasta pronto!!')
} else if (seleccion=='si'){
    {     
        for(  let i =1; i<=99; i++){
            let todoStock=stock.map((stock)=>stock.ip + '-' + stock.name + ' $' + stock.price);
            let ingreso =parseInt(prompt('Lista de Iphone'+'\n' + todoStock.join('\n') + '\n' +'9-abonar'));
            const buscar = stock.find(elemento => elemento.ip === ingreso);
        if (buscar) {
            let unidades = parseInt(prompt('cuantas unidades quiere llevar'));
            let compra= unidades + '  '+ buscar.name + ' $'+ buscar.price*unidades
            alert(compra);
            carrito.push({unidades:unidades, nombre:buscar.name, precio:buscar.price*unidades,})
            
        }
        else if (ingreso=='9'){
            carrito.forEach((carritoFinal)=>{
                alert('cantidades: ' + carritoFinal.unidades + ' ' + carritoFinal.nombre + ' $' + carritoFinal.precio);
            })
            break;
            
            
        }else{
            alert('no es valido')
        }
            
        }


        const total = carrito.reduce((acc, el)=>acc+el.precio , 0 )

        alert(`el total a pagar por su compra es: $ ${total}`);

        //FORMAS DE PAGO

let pago = prompt('Desea pagar ' + total + ' en ' + '\n 1- Efectivo. \n 2- Trasferencia. \n 3-Tarjeta de Credito.')
let cuotas=0
let cuotas6=total*1.1
let cuotas12=total*1.3
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
            alert('En total son 3 cuotas de '+ total/3);
        }else if(cuotas==2){
            alert('En total son 6 cuotas de ' + cuotas6/6);
        }else if(cuotas==3){
            alert('En total son 12 cuotas de '+ cuotas12/12);
        }
        break;

        }
    }
}
