/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let theSameX="";
    let x1="";
    let x2="";
    let test1Bool=false;
    let test2Bool=false;
    // Puis on augment la veleur de x à 2 puis 3. 
    for(let i=0;i<str1.length;i++){
        // Premier motif de str1 avec 1 lettre, est-ce que le mot se répète avec x
        x1 = x1+ str1[i];
        let test1= str1.replaceAll(x1,"");
        if(test1.length==0){test1Bool=true;}
        else test1Bool=false;
        // Premier motif de str2 avec 1 lettre, est-ce que le mot se répète avec x2
        x2 = x2 + str2[i];
        let test2= str2.replaceAll(x2,"");
        if(test2.length==0){test2Bool=true;}
        else test2Bool=false;
        // comparaison de x1 et x2 , si les mêmes, on stock la valeur
        if(x1===x2 && test1Bool && test2Bool){
            theSameX=x1;
        }
    }
    return theSameX;
};