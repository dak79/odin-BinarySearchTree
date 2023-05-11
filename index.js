/**
 * Binary Search Tree
 */
import { mergeSort } from './sort.js'

const Node = (data = null, left = null, right = null) => {
  return {
    data,
    left,
    right
  }
}

const Tree = (arr) => {
  const arrUniqueSorted = mergeSort([...new Set(arr)])

  const buildTree = (array, start = 0, end = array.length) => {
    if (start > end) return null

    const mid = parseInt((start + end) / 2)
    const root = Node(array[mid])

    root.left = buildTree(array, start, mid - 1)
    root.right = buildTree(array, mid + 1, end)

    return root
  }

  const root = buildTree(arrUniqueSorted)

  const getRoot = () => root

  const insertNode = (root, value) => {
    if (!root.left && !root.right) return insert(root, value)
    if (value < root.data) return insertNode(root.left, value)

    if (value > root.data) return insertNode(root.right, value)

    if (value === root.data) return null
  }

  const insert = (root, value) => {
    const node = Node(value)

    if (node.data < root.data) return (root.left = node)

    if (node.data > root.data) return (root.right = node)

    if (node.data === root.data) return null
  }

  // Compare the value:
  // if less then root go left
  // if more go right
  // stop when arrive to leaf
  // if the value is less then leaf create a node and insert in the leaf
  // if value is greater create a node and insert in the leaf
  // stop the operation if value is equal to any node

  const deleteNode = (value) => {}

  const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (!node) return null

    if (node.right)
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)

    if (node.left)
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }

  return {
    insertNode,
    getRoot,
    prettyPrint
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const bts = Tree(arr)
bts.prettyPrint(bts.getRoot())
bts.insertNode(bts.getRoot(), 100)
bts.prettyPrint(bts.getRoot())
bts.insertNode(bts.getRoot(), 2)
bts.prettyPrint(bts.getRoot())
