let followerNumbers = document.getElementById("counter");
let followersText = document.getElementById("followers");


setInterval(()=>{
    if(followerNumbers.innerText < 1000){
        followerNumbers.innerText++;
    }
},3);


setTimeout(()=>{
    followersText.innerText= "You have 1000 followers on Instagram !"
},4000)

// setTimeout(textLine,4000);

// function textLine(){
//     followersText.innerText = "You have 1000 followers on Instagram !"
// }

// function tex (){
//     if(followerNumbers.innerText < 1000){
//         followerNumbers.innerText++;
//     }

// }
