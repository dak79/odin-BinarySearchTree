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
console.log(`Inseriton of 100, 0, 40, 10, 7 (dupl.), 6`)
bts.insertNode(100)
bts.insertNode(0)
bts.insertNode(40)
bts.insertNode(10)
bts.insertNode(7)
bts.insertNode(6)
bts.prettyPrint(bts.getRoot())
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
