var quoteId = document.getElementById("quote");
var authorId = document.getElementById("author");

var quotedAndAuthor = [ 
{   Quotes: "Be yourself; everyone else is already taken.",
    Author :" Oscar Wilde",
},
{   
    Quotes: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    Author :"Albert Einstein",
},
{
    Quotes: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    Author :"Marilyn Monroe",
},
{
    Quotes: "“A room without books is like a body without a soul.”",
    Author :"Marcus Tullius Cicero",
},
{
    Quotes: "“Be the change that you wish to see in the world.”",
    Author :"Mahatma Gandhi",
},
{
    Quotes:'"Be the change that you wish to see in the world."',
    Author: "Mahatma Gandhi",
},
{
    Quotes:"'Live as if you were to die tomorrow. Learn as if you were to live forever.'",
    Author:" Mahatma Gandhi",
},
{
    Quotes:"'Always forgive your enemies; nothing annoys them so much.'",
    Author:"Oscar Wilde",
},

];

function AddQuote(){
var boxNumber = Math.floor(Math.random() * quotedAndAuthor.length);
quoteId.innerHTML = quotedAndAuthor[boxNumber].Quotes;
authorId.innerHTML = quotedAndAuthor[boxNumber].Author;   
}