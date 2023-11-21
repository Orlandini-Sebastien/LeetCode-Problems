function decodeMessage(key: string, message: string): string {
    const alphabet : string = "abcdefghijklmnopqrstuvwxyz";
    let decoder : any = {};
    let count :number =0;
    for(let i=0;i<key.length;i++){
        if(!decoder[key[i]] && key[i]!==" "){
            decoder[key[i]]=alphabet[count];
            count++;
        }
    }
    let output : string ="";
    for(let i=0;i<message.length;i++){
        if(message[i]===" "){
           output+=" "; 
        } else {
            output+= decoder[message[i]]; 
        }
    }
    return output;
};