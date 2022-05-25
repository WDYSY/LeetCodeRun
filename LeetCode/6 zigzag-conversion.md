# record
## mine
```copy

```
## Optimized
```copy
var convert = function(s, numRows) {
    let cycletemplate = [...new Array(numRows).keys()]
    cycletemplate.push(...cycletemplate.slice(1,-1).reverse());
    let rows = new Array(numRows).fill('')
    s.split('').forEach((c, i)=> (rows[cycletemplate[i%cycletemplate.length]] += c))
    return rows.join('')
};
```

# summary
* [6-1 易错点](../Ref/R1-1%20pic/6-1%20易错点.png)
# Qs
* 

link: [link](https://leetcode.com/problems/zigzag-conversion/discuss/416860/6-or-5-Line-JavaScript-Solution)