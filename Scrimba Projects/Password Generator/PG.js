const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordEl1 = document.getElementById("password1")
const passwordEl2 = document.getElementById("password2")
function generatePassword() {
    let password = ""
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        let generate = Math.floor(Math.random() * characters.length)
        password += characters[generate]
    }
    
    for (let i = 0; i < 15; i++) {
        let generate = Math.floor(Math.random() * characters.length)
        password2 += characters[generate]
    }

     passwordEl1.innerText = password
     passwordEl2.innerText = password2
}
