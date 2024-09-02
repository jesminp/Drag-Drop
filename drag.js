let box1 = document.getElementById("box1");
let box1a = document.getElementsByClassName("box1a");
let box2 = document.getElementById("box2");
for(x of box1a){
    x.addEventListener("dragstart", function(e){
        let choice = e.target
        box1.addEventListener("dragover", function(e){
            e.preventDefault()
        })
        box2.addEventListener("drop", function(e){
          box2.appendChild(choice)
          choice =null
        })
        box2.addEventListener("dragover", function(e){
            e.preventDefault()
        })
        box1.addEventListener("drop", function(e){
          box1.appendChild(choice)
          choice =null
        })
    })
}