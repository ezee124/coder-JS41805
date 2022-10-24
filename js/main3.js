
const stock=[
   {ip:1, name:'Iphone 11', price:1000, cantidad:1},
   {ip:2, name:'Iphone 11 PRO', price:1200, cantidad:1},
   {ip:3, name:'Iphone 12', price:1300, cantidad:1},
   {ip:4, name:'Iphone 12 PRO', price:1500, cantidad:1},
   {ip:5, name:'Iphone 13', price:1400, cantidad:1},
   {ip:6, name:'Iphone 13 PRO', price:1700, cantidad:1},
   {ip:7, name:'Iphone 14', price:2000, cantidad:1},
   {ip:8, name:'Iphone 14 PRO', price:2500, cantidad:1},
];
const divCarrito = document.getElementById('carrito'),
 contenedorProducto= document.getElementById('cel'),
 precioTotal= document.getElementById('precioTotal'),
 botonP = document.getElementById('btnPagar'),
 pago=document.getElementById('btnPagar');

let carrito= []

pago.addEventListener('click',()=>{
   carrito.length = 0, localStorage.clear()
   actualizarCarrito()
})

//LocalStorage

document.addEventListener('DOMContentLoaded',()=>{

   if(localStorage.getItem('carrito')){
      carrito=JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
   }
})


//STOCK

stock.forEach((todoStock)=>{
   const div= document.createElement('div')
   div.classList.add('todoStock')
   div.innerHTML=`<h3>${todoStock.name}</h3>
                  <p>Precio: $ ${todoStock.price}</p>
                  <button id='agregar${todoStock.ip}'>AGREGAR</button>`

contenedorProducto.appendChild(div)
const boton = document.getElementById(`agregar${todoStock.ip}`)
boton.addEventListener('click', ()=>{
agregarCarrito(todoStock.ip)
   
})
})

//CARRITO
const agregarCarrito = (prodip)=>{
   const existe= carrito.some(prod=>prod.ip===prodip)

   if (existe) {
      const producto= carrito.map(prod=>{
         if (prod.ip===prodip){
            prod.cantidad++
         }
      })
   } else{
      const item = stock.find((prod)=>prod.ip === prodip)
      carrito.push(item)
      
   }
    actualizarCarrito()
   
}


const eliminarDelCarrito=(prodipC)=>{
   const itemC = carrito.find((prod)=> prod.ip===prodipC)
const indice= carrito.indexOf(itemC)
   carrito.splice(indice,1)
   localStorage.setItem('carrito',JSON.stringify(carrito))
   actualizarCarrito()
}


const actualizarCarrito = ()=>{


    divCarrito.innerHTML= ""
   carrito.forEach((prod)=>{
      const div = document.createElement('div')
      div.innerHTML=`<p>${prod.name}</p>
                     <p>Precio: $ ${prod.price}</p>
                     <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                     <button onclick = "eliminarDelCarrito(${prod.ip})" id="eliminarC">eliminar</button>`
            
   divCarrito.appendChild(div)        
   
   localStorage.setItem('carrito',JSON.stringify(carrito))
   })

   precioTotal.innerText= carrito.reduce((acc,prod)=>acc + prod.price,  0 );

}






