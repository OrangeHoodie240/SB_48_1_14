// add whatever parameters you deem necessary
function isSubsequence(s1, s2) {
    let s1Length = s1.length; 
    let s2Length = s2.length;
    if(s1Length > s2Length) {
        return false;
    }
    else if(s1Length === s2Length){
        if(s1 === s2){
            return true; 
        }
        else{
            return false;
        }
    }

    let s1Index = 0; 
    for(let s2Index = 0; s2Index < s2Length; s2Index++){
        const s1Char = s1[s1Index];
        const s2Char = s2[s2Index];
        if(s1Char === s2Char){
            s1Index++; 
        }
        
        if(s1Index === s1Length){
            return true;
        }
    }
    return false;
}


module.exports = isSubsequence;