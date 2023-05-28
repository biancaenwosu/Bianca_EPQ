var answers = ["B","A","D","A","B","C","B","A","C","C"], 
tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
    if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
var score = 0;
for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
return score;
}


function returnScore(){
    
    
    alert("Your score is "+ getScore() +"/"+ tot);
    if(getScore()<=2) window.location.href = "beginners.html";
    
    else if(getScore()>2 && getScore()<5) window.location.href = "intermediate.hl";
    
    else if(getScore()>=5 && getScore()<8) window.location.href = "advanced.html";
    
    else window.location.href = "professional.html";
    localStorage.Score = getScore()

   
}
function Score(add){
    let x = getScore()
    var score = x + add
    return score
}
