function toGoatLatin(sentence: string): string{
    
    let words = sentence.split(" ")
    for(let i=0;i<words.length;i++){
        if(words[i][0].match(/^[aeiou]/gi)){
            words[i] = words[i] + "ma" + "a".repeat(i+1)
        }
        else{
            words[i] = words[i].substring(1,words[i].length) + words[i][0] + "ma" + "a".repeat(i+1)
        }
    }

    return words.join(" ")

};

console.log(toGoatLatin("I speak Goat Latin")); 