
// Q1      ---- Average price ----- 

let totalNumberOfItems = items.length
let total =0
items.forEach(function(item) {
    const itemPrice = item.price
    total = total+itemPrice
      
})
const avgPrice =(total / totalNumberOfItems).toFixed(2)

document.querySelector('#answer1').innerHTML= `The average price is $${avgPrice}`


// Q2 --- items that cost between $14 and $18 ----

const costB=items.filter(function(item) {
    
    return item.price < 18 && item.price > 14
})

let answer2=costB.map(function(x){
     return `<div>${x.title}</div> <br>`

}).join('')
    document.querySelector('#answer2').innerHTML=answer2


 // Q3 ------ item has GBP currency code ------

let curGBP=items.filter(function(item) {
    // console.log(item.currency_code)
    return item.currency_code =='GBP'

})
let answer3=curGBP.map(function(gbp){
    return `<div>${gbp.title} cost $${gbp.price}</div>`

}).join('')
    document.querySelector('#answer3').innerHTML=answer3


// Q4 ----- list of all items made of wood ------

let listWood=items.filter(function(item) {
    return item.materials.includes('wood')

})

let answer4=listWood.map(function(wood){
    return `<div>${wood.title} is made of wood</div> <br>`
   
}).join('')
    document.querySelector('#answer4').innerHTML=answer4
         

//  Q5 ----- list of items made of 8 or more materials ------

let itemMaterials = items.filter(function(item) {
    return item.materials.length >= 8
         
})

let answer5=itemMaterials.map(function(mtrl){
    
    return `<div>${mtrl.title} has ${mtrl.materials.length} materials: 
    <li >${mtrl.materials}</li> </div><br>`
    
}).join('')
           
    document.querySelector('#answer5').innerHTML=  answer5

// Q6 -------- Total Count of made by sellers

let totalSeller = items.filter(function(item){
    return item.who_made=='i_did'
    
})
document.querySelector('#answer6').innerHTML= `${totalSeller.length} were made by their sellers`
