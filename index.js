// function btnCL() {
//     console.log("button clicked")
// }
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

//let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulItems = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItem = ""
    for (let i=0; i<leads.length; i++){
       // (ulItems.innerHTML += "<li>" + myLeads[i] + "</li >"
        //above is a way of adding html element into JS
        // and below is another method of doing it
        //obviously above is prefered to below cus above is easier
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulItems.append(li))
        //listItem += "<li><a href='"+ myLeads[i] +"' target='_blank'>" + myLeads[i] + "</a></li >"
        //below can be used instead of above to make our code much easier to read
        listItem += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
            `
        console.log(listItem)
        
    }
    
    ulItems.innerHTML = listItem
    }
console.log(leadsFromLocalStorage)

let deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



const inputButton = document.getElementById("input-btn")
inputButton.addEventListener("click", function(){
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   myLeads.push(inputEl.value)
   inputEl.value = ""
   
   console.log(myLeads)
   render(myLeads)
   
})

