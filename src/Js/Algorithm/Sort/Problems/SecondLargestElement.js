
const secondLargestSmallElement = (nums) => {
    let small = Infinity,
        second_small = Infinity;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < small) {
                second_small = small
                small = nums[i]
            }else if(nums[i] > second_small && nums[i] !== small){
                second_small = nums[i]
            }            
        }
        console.log(small,second_small);

}
secondLargestSmallElement([8, 8, 7, 6, 5]);

const secondLargestLargestElement = (nums) => {
    let large = -Infinity,
        second_large = -Infinity;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > large) {
                second_large = large
                large = nums[i]
            }else if(nums[i] > second_large && nums[i] !== large){
                second_large = nums[i]
            }            
        }
        console.log(large,second_large);
}
secondLargestLargestElement([8, 8, 7, 6, 5]);