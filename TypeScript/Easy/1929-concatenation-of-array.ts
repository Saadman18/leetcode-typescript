function getConcatenation(nums: number[]): number[] {
    
    let len: number = nums.length;
    let len_twice: number = 2*len;
    
    let ans: number [] = [];
    
    if(len<=0){
        return ans; 
    }
    
    for(let i=0; i<nums.length; i++){
        
        ans[i] = nums[i];
    }
    
    let k=0; 
    
    for(let j=len; j<len_twice; j++){
        
        ans.push(nums[k]);
        k++
    }
    
    return ans; 
    

};