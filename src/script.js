import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js"
import{ getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js"

const appSetting = {
    databaseURL : "https://fir-cart-c4f21-default-rtdb.firebaseio.com/"
}
 
const app = initializeApp(appSetting)
const database = getDatabase(app)
const todoInDB = ref(database,"todos")

let input = document.querySelector("input")
let btn = document.getElementById("btn")
let ul1 = document.getElementById("ul1")

onValue(todoInDB, function(snapshot) {
       ul1.innerHTML = ""   // ✅ clear old items
    let todoarray = Object.values(snapshot.val())
   
    for(let i =0; i< todoarray.length; i++){
        let li = document.createElement("li")
        li.innerText = todoarray[i];

        //    li.addEventListener("click", () => {
        //         remove(ref(database, "todos/" + key))
        //     })

        ul1.append(li);
    }
})

btn.addEventListener("click",()=>{
    if(input.value != ""){
    // let li = document.createElement("li")
    // li.innerText = input.value;
    // ul1.append(li);
    push(todoInDB, input.value)}

    input.value = ""
  
})

