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

  let root = buildTree(arrUniqueSorted)

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

  // TODO> delete method

  // const removeNode = (root, value) => {
  //   root = remove(root, value)
  // }

  // const remove = (root, value) => {
  //   if (!root) return root

  //   if (value < root.data) return (root.left = remove(root.left, value))

  //   if (value > root.data) return (root.right = remove(root.right, value))

  //   if (!root.left && !root.right) return null

  //   if (!root.left) return root.right

  //   if (!root.right) return root.left

  //   root.data = min(root.right)

  //   root.right = remove(root.right, root.data)

  //   return root
  // }
  // const min = (root) => {
  //   if (!root.left) return root.data

  //   return min(root.left)
  // }

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
    removeNode,
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
bts.insertNode(bts.getRoot(), 6345)
bts.prettyPrint(bts.getRoot())
bts.insertNode(bts.getRoot(), 7)
bts.prettyPrint(bts.getRoot())
