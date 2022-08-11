// function twoSum(nums: number[], target: number): number[] {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return[i,j]; 
//             }
            
//         }
//     }
//     return [];

// };


function twoSum(nums: number[], target: number): number[] {
    let key = {}
    
    for(let i=0; i<nums.length;i++){
        
        if(key.hasOwnProperty(target-nums[i])){
            return [key[target-nums[i]], i]
        }
        else{
            key[nums[i]] = i
        }
    }

};
