function mostWordsFound(sentences: string[]): number {
    let max : number =0;
    for(let i=0; i<sentences.length;i++){
        let array : string[] = sentences[i].split(" ");
        if(array.length > max){
            max = array.length;
        }
    }
    return max;
};