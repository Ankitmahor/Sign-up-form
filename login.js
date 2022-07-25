//  function login()
//  {
// let user = document.getElementsByClassName('username').value;
// let pass = document.getElementsByClassName('password').value;
//     if(user=="Rohit" && pass== "731")
//     {
//          location.assign(http://127.0.0.1:5500/index.html);
//     }
//     else
//     {
//         window.alert("login fails");
//     }
//  }

console.log("hello")

// var objPass =[
//     {
//         username: "Rohit",
//         password: "12345"   
//     },
//     {
//         username: "RohitMahor",
//         password: "12345"   
//     },
//     {
//         username: "RohitK",
//         password: "12345"   
//     }
// ]

// function login() {
//     var username = document.getElementByClassName("username").value;
//     var password = document.getElementByClassName("password").value;



//     for ( i = 0; i < objPass.length; i++) {
//         if(username==objPass[i].username && password==objPass[i].password)
//         {
//             console.log(username+"is logged in");
//             location.replace("https//www.google.com");
//         }
//         else{
//             alert("login fails");
//         }
        
//     }
// }




// start code


function login() {
    var user = document.getElementById('user1').value;
    var pass = document.getElementById('user2').value;

    if (user == "Rohit" && pass == "0731") {
       location.assign("http://127.0.0.1:5500/index.html");
     }

    else {
       window.alert("login fails");
    }
}