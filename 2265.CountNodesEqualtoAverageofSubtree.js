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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    if(root === null) return;
    let numberEqual=0;
    const stack = [root];
    let arrayNode=[];
    let totNode=0;
    let arrayTot=[];
  while(stack.length){
      const item = stack.pop();
      //console.log("item>>>",item);
      arrayNode.push(item.val);
      
      //------------------------------------
      let miniStack=[item];
      let miniTotNode=0;
      let miniArrayNode=[];
      while(miniStack.length){
          miniTotNode++;
          const miniItem = miniStack.pop();
          miniArrayNode.push(miniItem.val);
          //console.log("miniItem>>>",miniItem);
          if(miniItem.left) miniStack.unshift(miniItem.left);
          if(miniItem.right) miniStack.unshift(miniItem.right);
          
      }
      //console.log("miniTotNode>>>",miniTotNode);
      //console.log("miniArrayNode>>>",miniArrayNode);
      console.log("Average>>>",Math.trunc(miniArrayNode.reduce((a,b)=>a+b,0)/miniTotNode));
      console.log("miniArrayNode[0]>>>",miniArrayNode[0]);
      if(Math.trunc(miniArrayNode.reduce((a,b)=>a+b,0)/miniTotNode) == miniArrayNode[0]){
          numberEqual++;
      }
      //------------------------------------
      if(item.left) stack.unshift(item.left);
      if(item.right) stack.unshift(item.right);
      totNode++;
  }
    //console.log("arrayNode>>>",arrayNode, "totNode>>>", totNode);
    return numberEqual;
};