function isAcronym(words: string[], s: string): boolean {
    let acronym : string = "";
    for (let i= 0;i< words.length;i++){
        acronym += words[i][0];
    }
    return acronym === s;
};