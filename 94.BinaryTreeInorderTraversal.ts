
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 
function inorderTraversal(root: TreeNode | null): number[] {
    const output : number[] = [];
    if (root === null) {
        return output;
    }
    const stack : any = [];
    let curr : any = root;
    while (curr !== null || stack.length !== 0) {
        if (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            output.push(curr.val);
            curr = curr.right;  
    }  
  }
  return output;
};