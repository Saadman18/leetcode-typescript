function minOperations(boxes: string): number[] {
    
    let result: number[] = new Array(boxes.length);
    let step = 0;
    let right = 0;
    let left = 0;
    
    for(let i=0;i<boxes.length;i++){
       if(boxes[i]=='1'){
           step+=i;
           right++;
       } 
    }
    
    for(let i=0;i<boxes.length;i++){
        result[i] = step;
        
        if(boxes[i]=='1'){
            right--;
            left++;
        }
        
        step += left;
        step -= right;
        
    }
    
    return result;
    
    

};