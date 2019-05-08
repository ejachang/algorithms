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
 * Order of traversing: current node, the left node, then right node
 * 
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

var preorder = function(node, result) {
  if (node === null) {
    return;
  }
  
  result.push(node.val);
  
  if (node.left) {
    preorder(node.left, result);    
  }
  if (node.right) {
    preorder(node.right, result);   
  }
};

var preorderTraversal = function(root) {
  let result = [];
  preorder(root, result);
  return result;
  
};