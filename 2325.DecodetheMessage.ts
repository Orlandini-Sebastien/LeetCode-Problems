function decodeMessage(key: string, message: string): string {
    const alphabet : string = "abcdefghijklmnopqrstuvwxyz";
    const key1 : string = key.replaceAll(" ","");
    let decoder : any = {};
    let count :number =0;
    for(let i=0;i<key1.length;i++){
        if(!decoder[key1[i]]){
            decoder[key1[i]]=alphabet[count];
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