/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  
    while(s.includes("#")){
        if(s.indexOf("#")===0){
        s=s.replace("#","");
    }else {s=s.replace(/.\#/,"")}}
    
    while(t.includes("#")){
        if(t.indexOf("#")===0){
        t=t.replace("#","");
    }else {t=t.replace(/.\#/,"")}}
    
    return ( s === t);
        
    }