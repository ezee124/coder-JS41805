
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

const contenedorProducto= document.getElementById('cel');

stock.forEach((todoStock)=>{
   const div= document.createElement('div')
   div.classList.add('todoStock')
   div.innerHTML=`<h3>${todoStock.name}</h3>
                  <p>Precio: $ ${todoStock.price}</p>
                  <button id='agregar ${todoStock.ip}'>AGREGAR</button>`

contenedorProducto.appendChild(div)
})












