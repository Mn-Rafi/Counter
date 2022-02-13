let count=0
let countnew=document.getElementById("count-el")


function save(){
    let savedCount=count+", "
    document.getElementById("savednum").textContent+=savedCount
    countnew.innerText=count=0
    
}

function increment(){
    count+=1
    countnew.innerText=count
}
function decrement(){
    // if(count>0){
        count-=1
        countnew.innerText=count
    // }
}
function reset(){
    countnew.innerText=0
    count=0
}


function removesave(){
    document.getElementById("savednum").innerText="SAVED ENTRIES : "
}

