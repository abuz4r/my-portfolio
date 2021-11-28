/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function randomNumber(num){
//   return Math.floor(Math.random()*num)
// }

// let movieQuotes = {
//   quotes:[`"Frankly, my dear, I don't give a damn."`,`"I'm gonna make him an offer he can't refuse."`,`"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am."`],
//   movie:[`Gone with the Wind`,`The Godfather`,`On The Waterfront`],
//   year:[`1939`,`1972`,`1954`]
// }

// let quotes = []


// for(let prop in movieQuotes) {
//   let optionId = randomNumber(movieQuotes[prop].length)
//   switch(prop) {
//     case 'quotes':
//       quotes.push(`${movieQuotes[prop][optionId]}`)
//       break
//     case 'movie':
//       quotes.push(`, ${movieQuotes[prop][optionId]}`)
//       break
//     case 'year':
//       quotes.push(`- ${movieQuotes[prop][optionId]}`)
//       break
//     default:
//       quotes.push('error')
//   }
// }
// function formatQuote(quote) {
//   // Add some ASCII here?
//   // Add in more symbols to the array? like emojies or what not?
//   const formatted = quotes.join('\n')
//   console.log(formatted)
// }

// formatQuote(quotes)

let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
  function randomNumber(num){
    return Math.floor(Math.random()*num)
  }
  
  let movieQuotes = {
    quotes:[`"Frankly, my dear, I don't give a damn."`,`"I'm gonna make him an offer he can't refuse."`,`"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am."`],
    movie:[`Gone with the Wind`,`The Godfather`,`On The Waterfront`],
    year:[`1939`,`1972`,`1954`]
  }
  
  let quotes = []
  
  
  for(let prop in movieQuotes) {
    let optionId = randomNumber(movieQuotes[prop].length)
    switch(prop) {
      case 'quotes':
        quotes.push(`${movieQuotes[prop][optionId]}`)
        break
      case 'movie':
        quotes.push(`, ${movieQuotes[prop][optionId]}`)
        break
      case 'year':
        quotes.push(`- ${movieQuotes[prop][optionId]}`)
        break
      default:
        quotes.push('error')
    }
  }
  function formatQuote(input) {
    const formatted = quotes.join('\n')
    console.log(formatted)
    return formatted
  };

  console.log('hekllo ' + formatQuote(quotes))
  
  output.innerHTML =  formatQuote(quotes);
})




// btn.addEventListener('click', function(){
//   var randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)]
//   output.innerHTML = 'output: ' + randomQuote;
// })




$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});