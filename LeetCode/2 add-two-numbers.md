# record
## mine
```copy
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, sum=0, List = new ListNode(0), head = List;
    while(l1 || l2 || sum){
        if(l1){
            sum += l1.val
            l1 = l1.next
        }
        if(l2){
            sum += l2.val
            l2 = l2.next
        }
        if(sum>9){
            carry = 1
            sum = sum - 10
        }
        head.next = new ListNode(sum)
        head = head.next
        
        sum = carry
        carry = 0
    }
    return List.next
};
```
## Optimized
```copy
参考optimized来的，相同
```

# summary
* [2-1 易错点](./../Ref/R1-1%20pic/2-1%20易错点.png)
# Qs
* 什么场景下js会用到ListNode?
* F12 不能执行new ListNode
* 链表相关操作
	* 如何补0？
	* 常用的操作方法？
		* 获取长度
	* 是否可转数组？

[link](https://leetcode.com/problems/add-two-numbers/)
referrence: [How to Implement a Linked List in JavaScript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)