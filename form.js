let pass="i am stupid"

let form=document.getElementsByTagName("form")[0]
let check=document.getElementById("check")
 console.log(check);
 check.addEventListener("click", ()=>{
    if(check.checked===true){
        console.log("hii");
        let input=document.getElementById("password")
        password.type="text";
        
     }
     else{
        let input=document.getElementById("password")
        password.type="password";

     }

 })
 console.log(check.checked);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let input=document.getElementById("password")
    let password=input.value;
    console.log(password);
    console.log(pass);
    if(pass===password){
        window.open("https://mangarajukuppina.github.io/images1/");
       
    }
    else{
        let p=document.getElementsByTagName("P")[0]
        console.log(p);
        console.log("hiii");
        p.innerHTML="Stupid Fellow Enter Correct Password"
        p.style.display="block"
    }
    
})