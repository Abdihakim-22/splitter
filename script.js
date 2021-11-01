"use strict"



function split4(){
    //splits a div into 4 by adding 4 quarters
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)

    //rgb()function
    //math.random
}


function addQuarter(intoDiv){
    let q = document.createElement("div") //create a 'div' element - and hold a 'pointer' to it in the variable 'q'
    
    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

    
    //Add the two classes 'quarter' and flexy' to this new element 
    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split4)

    intoDiv.appendChild(q)


}

addQuarter(document.body)

document.body.addEventListener("click",split4)