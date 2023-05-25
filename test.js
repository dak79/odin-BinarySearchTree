import { Tree } from './index.js'
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const bts = Tree(arr)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log(`Tree builded from array: ${arr}`)
bts.prettyPrint(bts.getRoot())
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Balanced')
console.log(`Tree is balanced? ${bts.isBalanced()}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log(`Inseriton of 100, 0, 40, 10, 7 (dupl.), 6`)
bts.insertNode(100)
bts.insertNode(0)
bts.insertNode(40)
bts.insertNode(10)
bts.insertNode(7)
bts.insertNode(6)
bts.insertNode(-16)
bts.insertNode(-1)
bts.insertNode(-10)
bts.insertNode(-8)
bts.insertNode(-6)
bts.insertNode(-7)
bts.prettyPrint(bts.getRoot())
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Balanced')
console.log(`Tree is balanced? ${bts.isBalanced()}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log(`Remove of 0, 7, 23, 15(not exist)`)
bts.removeNode(0)
bts.removeNode(7)
bts.removeNode(23)
bts.removeNode(15)
bts.prettyPrint(bts.getRoot())
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Balanced')
console.log(`Tree is balanced? ${bts.isBalanced()}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Find values: 4, 1, 23(removed), 8, 100(insertered), 15(not exist)')
console.log(bts.findNode(4))
console.log(bts.findNode(1))
console.log(bts.findNode(23))
console.log(bts.findNode(8))
console.log(bts.findNode(100))
console.log(bts.findNode(15))
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Breadh-first-traversal (BFT): ')
console.log(bts.levelOrder(bts.getRoot()))
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Depth-first-traversal (DFT) - Preorder: ')
console.log(bts.preorder(bts.getRoot()))
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Depth-first-traversal (DFT) - Inorder: ')
console.log(bts.inorder(bts.getRoot()))
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Depth-first-traversal (DFT) - Postorder: ')
console.log(bts.postorder(bts.getRoot()))
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Height')
console.log(`Height of root: ${bts.height(bts.getRoot())}`)
console.log(`Height of node 4: ${bts.height(bts.findNode(4))}`)
console.log(`Height of node 67: ${bts.height(bts.findNode(67))}`)
console.log(`Height of node 1: ${bts.height(bts.findNode(1))}`)
console.log(`Height of node 324: ${bts.height(bts.findNode(324))}`)
console.log(`Height of node 10: ${bts.height(bts.findNode(10))}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Depth')
console.log(`Depth of root: ${bts.depth(bts.getRoot())}`)
console.log(`Depth of node 4: ${bts.depth(bts.findNode(4))}`)
console.log(`Depth of node 67: ${bts.depth(bts.findNode(67))}`)
console.log(`Depth of node 1: ${bts.depth(bts.findNode(1))}`)
console.log(`Depth of node 324: ${bts.depth(bts.findNode(324))}`)
console.log(`Depth of node 10: ${bts.depth(bts.findNode(10))}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Balanced')
console.log(`Tree is balanced? ${bts.isBalanced()}`)
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Unbalanced tree')
bts.prettyPrint(bts.getRoot())
console.log(
  '-----------------------------------------------------------------------------------------'
)
console.log('Re-balanced tree')
bts.rebalance()
bts.prettyPrint(bts.getRoot())
console.log(
  '-----------------------------------------------------------------------------------------'
)
