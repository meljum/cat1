const $button = document.querySelector(".btn");
const $image = document.querySelector(".img");
const url = "http://aws.random.cat//meow";

async function fetchHand(){
    try {
       const resp = await fetch(url);
       const data = await resp.json();
       
       $image.src = data.file;
    } catch(error){
        console.log(error);
    }
}
$button.addEventListener("click", () =>{
    
    fetchHand() 
})
