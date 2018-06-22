var sentence1 = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
var currentSentance = "";


var iterate = (sentance, char) => {
    for(let i = 0; i < sentance.length; i++){
        
        if(i % 3 === 0){
            currentSentance = currentSentance + sentance[i];
            for(let counter = i / 3 + 1; counter > 0; counter--){
                currentSentance = currentSentance + char;
                if(counter === 1){
                    currentSentance = currentSentance + " ";
                }
            }
        } else {
            currentSentance = currentSentance + sentance[i] + " ";
        }
        console.log(currentSentance);

    }
}

iterate(sentence1, "!");