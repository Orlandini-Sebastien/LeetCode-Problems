/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(root === null) return;
    const stack = [root];
    let totNode=0;
      let arrayNode=[];
    while(stack.length){
        const item = stack.pop();
        arrayNode.push(item.val);
        if(item.right) stack.push(item.right);
        if(item.left) stack.push(item.left);
        totNode++;
    }
      
  let countMax=0
  for(let i=0;i<arrayNode.length;i++){
      let count=1;
      for(j=0;j<arrayNode.length;j++){
          if(i!=j && arrayNode[i]=== arrayNode[j]){
              count++;
          }
      }
      if(count > countMax){
          countMax = count;
      }
  }
  
  let result=[];
  for(let i=0;i<arrayNode.length;i++){
      let count=1;
      for(j=0;j<arrayNode.length;j++){
          if(i!=j && arrayNode[i]=== arrayNode[j]){
              count++;
          }
      }
      if(count === countMax && !result.includes(arrayNode[i])){
          result.push(arrayNode[i]);
      }
  }
  
  return result;
  };