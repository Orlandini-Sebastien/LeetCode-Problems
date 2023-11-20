function findArray(pref: number[]): number[] {
    if(pref.length ==1) return [pref[0]];
    let final : number[] = [pref[0]];
    for(let i=1;i<pref.length;i++){
      final.push(pref[i-1]^pref[i]);
    }
    return final;
};