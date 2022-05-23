# record
## [mine](https://leetcode.com/submissions/detail/705404703/)
```copy
var twoSum = function(nums, target) {
    let newNum = [nums[0]]
    for(let i = 1; i<nums.length; i++){
        let preIndex = newNum.indexOf(target - nums[i])
        if(preIndex > -1){
            return [preIndex, i]
        }
        newNum.push(nums[i])
    }
};
```

## [优化后](https://leetcode.com/submissions/detail/705420592/)
```copy
var twoSum = function(nums, target) {
  let map = new Map();
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};
```
# summary
* 速度：map.get比Array.protorype.indexOf的速度快
# Q

* 每次运行的时间都不一样，明明别人说能达到100%，到我这边就变成百分之五十几（每次执行的波动很大，且中文leetcode和英文的网站执行结果的稳定度不一样）
[link](https://leetcode.com/problems/two-sum/): 