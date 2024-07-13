// let password = document.querySelector("#password")
// let show = document.querySelector("#show")




// show.onclick = function(){
//     if(password.type == "password"){
//         password.type = "text"
//         show.innerText = "hide"
//     }else {
//         password.type = "password"
//         show.innerText = "show"
//     }
// }



// let article = document.getElementById("article")
// let result = document.getElementById("result")


// article.onkeyup = function(){

//     result.innerText = `count is :${article.value.length}`

//     if(article.value.length >= 20){
//         // article.style.border = "1px solid red"
//         // article.style.outline = "1px solid red"

//         article.style.cssText = "border:1px solid red;outline:1px solid red"
//     }else {
//         article.style.cssText = "border:1px solid black;outline:1px solid black"

//     }
// }

// console.log("test 1")
// console.log("test 2")

// let ajax = new XMLHttpRequest

// ajax.open("GET","https://jsonplaceholder.typicode.com/users")
// ajax.send()
// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4){
//         let data =  JSON.parse(ajax.response)
//         console.log(data[0].name)
//     }
// }



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resp)=> resp.json())
// .then((data)=>console.log(data))


let search = document.getElementById("search")
let username = document.getElementById("username")
let img = document.getElementById("img")

search.onclick = ()=>{
    
    let ajax = new XMLHttpRequest
    ajax.open("GET",`https://api.github.com/users/${username.value}`)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            let data = JSON.parse(ajax.response)
            img.src = data.avatar_url
            console.log(data)
        }
    }
}