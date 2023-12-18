

var text =["It's not what happens to you, but how you react to it that matters.","You miss 100% of the shots you don't take.","Do not take life too seriously. You will not get out alive.","The best revenge is massive success.","Resentment is like drinking poison and waiting for your enemies to die."]
var person=['--Epictetus','--Wayne Gretzy','--Elbert Hubbard','--Frank Sinatra','--Nelson Mandela']


var num ,lastnum;
function changeData() {
    
      num = Math.floor(  Math.random() * text.length);
      
    if (num==lastnum) {
      changeData()
    }
    document.getElementById("caption").innerHTML = text[num];
    document.getElementById("personCaption").innerHTML = person[num];  
    }
