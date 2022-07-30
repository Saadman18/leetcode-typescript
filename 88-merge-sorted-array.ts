function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
    let nums1Pointer = m-1;
    let nums2Pointer = n-1;
    let i = m + n -1;
    
    while(nums2Pointer >= 0){
        let firstVal = nums1[nums1Pointer];
        let secondVal = nums2[nums2Pointer];
        
        if(firstVal>secondVal){
            nums1[i] = firstVal;
            i--;
            nums1Pointer--; 
        }
        else{
            nums1[i] = secondVal;
            i--;
            nums2Pointer--; 
        }
    }
    
};