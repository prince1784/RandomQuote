/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes=[
  {"quote":"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
    "author":"Winston Churchill",
    "Year":"2014"
   },
  { "quote":"Don’t Let Yesterday Take Up Too Much Of Today.",
    "author":"Will Rogers",
    "citation":"Eclipse Book"
  },
  { "quote":"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    "author":"Jeff Bezos",
    "Year":"2017",
    "citation":"Google"
  },
  {"quote":"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    "author":"Vince Lombardi",
    "Year":"2019"
  },
  {"quote":"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You",
    "author":"Steve Jobs",
    "Year":"1999",
    "citation":"Book"
 },
  {"quote":"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    "author":"Rob Siltanen",
    "Year":"2001",
    "citation":"Twitter"
  }
 ]

/***
 * `getRandomQuote` function
***/
var quotee,year,citation,randomNumber,spanyear,spanCitation
function getRandomQuote(){
  randomNumber=Math.floor(Math.random()*((quotes.length)-1));
  quotee=quotes[randomNumber].quote;
  spanyear = document.getElementsByClassName("year");
  spanCitation = document.getElementsByClassName("citation");
  
}

/***
 * `printQuote` function
***/
function printQuote(){
 getRandomQuote();  
      
       var PtoHTML="<p class='quote' >"+quotee+"</p>"+"<p class='source' >"+ quotes[randomNumber].author
       
          if(( quotes[randomNumber].citation)!=null) 
          {
           PtoHTML += "<span class ='citation' >" +quotes[randomNumber].citation +"</span>";
          }
          if(( quotes[randomNumber].Year)!=null)
          {
            PtoHTML += "<span class ='year' >" +quotes[randomNumber].Year + "</span>";
          }
              
      document.getElementById("quote-box").innerHTML=PtoHTML;  

}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);