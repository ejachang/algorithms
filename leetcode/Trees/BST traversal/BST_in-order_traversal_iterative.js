/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * Order of traversal: current node, the left node, then right node
 * 
 * CHANGE:
 * If the node is empty return to the previous node
 * If the node is not empty, get the value of the current node, 
 *  repeat preorder in the left,
 *  and then repeat in the right
 * 
 * Pseudocode:
 * if node === null return
 * if node !== null
 *  node.left
 *  node.right
 * 
 */

var preorderTraversal = function(root) {
  let result = [];
  let stack = [];
  
  if (root === null) { return result; }
  stack.push(root);
  
  while (stack.length !== 0) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right) { stack.push(current.right); }
    if (current.left) { stack.push(current.left); }
  }
  
  return result;
  
};