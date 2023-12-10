function checkIfPangram(sentence: string): boolean {
    let alpha : string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0; i<alpha.length; i++){
        if(sentence.indexOf(alpha[i]) === -1){
            return false;
        }
    }
    return true;
}