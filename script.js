const cards = document.querySelectorAll(".card"); 
console.log(cards); 

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var count=0;

cards.forEach((card)=> card.addEventListener("click" , flip) )


function flip(){
    // console.log("card flip");
    // console.log(this);
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
    }
    else{
        secondCard = this;
        checkIt();
    }
}

function checkIt(){
    // console.log("checking it..");
    if(firstCard.dataset.image === secondCard.dataset.image)
    {
        
        success(); 
    }
    else{
        fail();
    }
}

function success(){
    count++;
    // console.log(count); 
   firstCard.removeEventListener('click' , flip); 
   secondCard.removeEventListener('click' , flip);   
   if(count==8)
   { 

    console.log('hello');

    console.log(count);
    winner.innerHTML="";  
    count=0; 
    const h3 = document.createElement("h3");
    h3.classList.add("hwin");
    const text = "Congrats you won the game !";
    h3.innerText =text;
   //    h3.appendChild(text);
    winner.appendChild(h3);
  }

   reset();

}

function fail(){
  setTimeout(()=>{
    firstCard.classList.remove("flip"); 
    secondCard.classList.remove("flip"); 
    reset(); 
  } , 1000 );

}

function reset(){
 isFlipped = false;
 firstCard = null;
 secondCard = null;
}


// todo shuffle
(function shuffle(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random()*16); 
        card.style.order = index;
    });
}) ();


// if win the game
//pending work 
const winner = document.querySelector(".win");
// console.log(typeof count);

// if(count==2)
// { 

//     console.log('hello');

//     console.log(count);
//    winner.innerHTML="";  
//    count=0; 
//    const h3 = document.createElement("h3");
//    h3.classList.add("hwin");
//    const text = "Congrats you won the game !";
//    h3.innerText =text;
// //    h3.appendChild(text);
//    winner.appendChild(h3);
// }



 
