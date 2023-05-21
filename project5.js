
// chrome://extensions/
let myleads=[]
// let aname= localStorage.getItem("myLead")
// console.log(aname)
const ulel=document.getElementById("ul-el")
const delbtn=document.getElementById("delete-btn")
const inputel=document.getElementById("input-el")
// const data=document.getElementById("storedata")


const leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))
if (leadsfromlocalstorage) {
    myleads=leadsfromlocalstorage
    renderleads()
    
}

delbtn.addEventListener("dblclick"  , function () {
    localStorage.clear()
    myleads=[]
    renderleads()


    
})

const inputbtn = document.getElementById("input-btn")
inputbtn.addEventListener("click" , function() {
    // console.log("button clicked")
    myleads.push(inputel.value)
    renderleads()
    inputel.value=""
    localStorage.setItem("myleads" , JSON.stringify(myleads))
    // myleads=JSON.stringify(myleads)
    console.log(localStorage.getItem("myleads" ))

    

 })
 function renderleads() {

    let Listitems=""

for (let index = 0; index < myleads.length; index++) {
    // Listitems += "<a  href='#' target='_blank'> <li> " +myleads[index] +"</li></a>"
    Listitems +=
     `<a  href='${myleads[index]}' target='_blank'> <li> 
     ${myleads[index]}
     </li></a>`
  }
 ulel.innerHTML=Listitems
 
 }
 

//  let buyone=document.getElementById("box")
//  buyone.innerHTML=" <button onclick='buy()'>buy!</button "
//  function buy() {
//     buyone.innerHTML+=" <p> thank you for buying</p>  "
    
//  }


 















//  let openbox = document.getElementById("openit")
//  openbox.addEventListener("click" , function() {
//     console.log("open the box to success")
//  })

// function Savelead() {
//     console.log("button clicked")
    
// }