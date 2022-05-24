# record
## mine
```copy
var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = [...nums1, ...nums2].sort(sortNumber)
    let size = newArray.length
    if(size % 2){
        return newArray[(size-1)/2]
    }else{
        return (newArray[size/2-1] + newArray[size/2])/2
    }
};

function sortNumber(a, b) {
    return a - b
}
```
## Optimized
```copy

```

# summary
* [4-1 易错点](./../Ref/R1-1%20pic/4-1%20易错点.png)
* [4-2 没通过的测试用例](./../Ref/R1-1%20pic/4-2%20没通过的测试用例.png)
# Qs
* 

link