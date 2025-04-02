var sortedSquares = function(nums) {
    const newarr = nums.map(data => (data * data));
    const sorted = newarr.sort((a,b) => a - b)
    return sorted
};

sortedSquares([-4,-1,0,3,10]);