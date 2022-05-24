function lengthOfLongestSubstring(s) {
    let map = {}, left = 0;
    
    return s.split('').reduce((max, cur, i) => {
        left = map[cur] > -1 ? map[cur] + 1 : left;
        map[cur] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
console.log(lengthOfLongestSubstring("abba"))