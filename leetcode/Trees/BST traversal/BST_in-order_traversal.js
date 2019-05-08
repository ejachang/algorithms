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
 */

//recursive solution

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