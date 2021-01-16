 console.log(items.materials)
// Q1      ---- Average price ----- 

let totalNumberOfItems = items.length
let total =0
items.forEach(function(item) {
    const itemPrice = item.price
    total = total+itemPrice
      
})
const avgPrice =(total / totalNumberOfItems).toFixed(2)

document.querySelector('#answer1').innerHTML= `The average price is ${avgPrice}`

// Q2 --- items that cost between $14 and $18 ----



const costB=items.filter(function(item) {
    
    return item.price < 18 && item.price > 14
})

 let html=costB.map(function(x){
     return `<div>${x.title}</div>`

 }).join('')
 document.querySelector('#answer2').innerHTML=html




// Q3 ------ item has GBP currency code ------

const curGBP= []
let gbpPrice=0
items.filter(function(item) {
    // console.log(item.currency_code)
    return
    if (item.currency_code =='GBP') {
        gbpPrice=item.price
        curGBP.push(item.title)
    }

})
document.querySelector('#answer3').innerHTML=`${curGBP} cost $${gbpPrice}`


// Q4 ----- list of all items made of wood ------

let listWood=items.filter(function(item) {
    return item.materials.includes('wood')

})

      let html2=listWood.map(function(wood){
        return `<div>${wood.title} is made of wood</div>`
   
    }).join('')
    document.querySelector('#answer4').innerHTML=html2
         

//  Q5 ----- list of items made of 8 or more materials ------
    // let fiveItems =[]
    const itemMaterials=items.filter(function(item){
        return item.materials.length > 8
        
    })

    let html1=itemMaterials.map(function(mtrl){
        return `<div>${mtrl.title} has ${mtrl.materials.length} materials </div>
            for (i=0 ; i<mtrl.materials.length ; i++) {
                '<li>${mtrl.materials}</li>
                </div>
            }        
        
        
         }).join('')
         document.querySelector('#answer5').innerHTML=html1
        


// Q6 -------- Total Count of made by sellers

let totalSeller = items.filter(function(item){
    return item.who_made=='i_did'
    
})
console.log(totalSeller)    
    document.querySelector('#answer6').innerHTML= `${totalSeller.length} were made by their sellers`
 
    //   if (itemMaterials) {
    //         fiveItems.push(item.user_id) 
    //         console.log(item.user_id)
    //      }

    // console.log(items.materials)

// const htmlThing = items.map(function(items){
//     return `<li>${items.price}</li>`

    


// })
// document.querySelector ('#answer2').innerHTML=`${htmlThing}`



// console.log(items[0])
