import { Tree } from './index.js'
const ArrRandom = (itemsNumber, arr = []) => {
  for (let i = 0; i < itemsNumber; i++) {
    let item = Math.floor(Math.random() * (2 * itemsNumber))
    arr.push(item)
  }

  return arr
}

const arr = ArrRandom(58)
const bst = Tree(arr)
console.log('-----------------------------------------------------------------')
console.log(`Tree is balanced? ${bst.isBalanced()} `)
console.log('-----------------------------------------------------------------')
console.log('Breadh-First traversal')
console.log(bst.levelOrder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: preorder')
console.log(bst.preorder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: inorder')
console.log(bst.inorder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: postorder')
console.log(bst.postorder())
console.log('-----------------------------------------------------------------')
console.log('Adds 150 nodes to the tree')

const addNodes = (n, tree) => {
  for (let i = 0; i < n; i++) {
    let data = Math.floor(Math.random() * (2 * n))
    tree.insertNode(data)
  }
}
addNodes(150, bst)

console.log('-----------------------------------------------------------------')
console.log(`Tree is balanced? ${bst.isBalanced()} `)
console.log('-----------------------------------------------------------------')
console.log('Re-balance the tree')
bst.rebalance()
console.log('-----------------------------------------------------------------')
console.log(`Tree is balanced? ${bst.isBalanced()} `)
console.log('-----------------------------------------------------------------')
console.log('Breadh-First traversal')
console.log(bst.levelOrder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: preorder')
console.log(bst.preorder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: inorder')
console.log(bst.inorder())
console.log('-----------------------------------------------------------------')
console.log('Depth-First traversal: postorder')
console.log(bst.postorder())
console.log('-----------------------------------------------------------------')
