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

  /**
   * buildTree.
   * From a sorted array of unique values build a tree
   *
   * @param {[]} array
   * @param {Number} start - Index
   * @param {Number} end - Index
   *
   *
   */
  const buildTree = (array, start = 0, end = array.length - 1) => {
    if (start > end) return null

    const mid = parseInt((start + end) / 2)
    const root = Node(array[mid])

    root.left = buildTree(array, start, mid - 1)
    root.right = buildTree(array, mid + 1, end)

    return root
  }

  let root = buildTree(arrUniqueSorted)

  /**
   * getRoot.
   * Get the level - 0 root value
   */
  const getRoot = () => root

  /**
   * insertNode.
   * Insert a node in the tree
   * @param {} value
   */
  const insertNode = (value) => {
    root = insert(root, value)
  }

  /**
   * insert.
   * Recursive search and inserion of the Node in a leaf
   * @param {Node} root
   * @param {} value
   */
  const insert = (root = root, value) => {
    if (!root) return (root = Node(value))

    if (value < root.data) root.left = insert(root.left, value)

    if (value > root.data) root.right = insert(root.right, value)

    return root
  }

  /**
   * removeNode.
   * Remove a node from the tree
   * @param {} value
   */
  const removeNode = (value) => {
    root = remove(root, value)
  }

  /**
   * remove.
   * Search for the Node with the value to remove and remove it when:
   *    - is a leaf
   *    - has only a child (left or right)
   *    - has two children
   * @param {Node} root
   * @param {} value
   */
  const remove = (root, value) => {
    if (!root) return root
    if (value < root.data) root.left = remove(root.left, value)
    if (value > root.data) root.right = remove(root.right, value)
    if (value === root.data) {
      if (!root.left) return root.right
      if (!root.right) return root.left

      root.data = min(root.right)
      root.right = remove(root.right, root.data)
    }

    return root
  }

  /**
   * min.
   * Find a min Node value from a given root
   * @param {Node} root
   */
  const min = (root) => {
    if (!root.left) return root.data

    return min(root.left)
  }

  /**
   * prettyPrint.
   * Print the tree
   * This function was given from The Odin Project. Thanks guys :)
   * @param {Node} node
   * @param {String} prefix
   * @param {Boolean} isLeft
   */
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
console.log(`Tree builded from array: ${arr}`)
bts.prettyPrint(bts.getRoot())
console.log(`Inseriton of 100, 0, 40, 10, 7 (dupl.), 6`)
bts.insertNode(100)
bts.insertNode(0)
bts.insertNode(40)
bts.insertNode(10)
bts.insertNode(7)
bts.insertNode(6)
bts.prettyPrint(bts.getRoot())
console.log(`Remove of 0, 7, 23, 15(not exist)`)
bts.removeNode(0)
bts.removeNode(7)
bts.removeNode(23)
bts.removeNode(15)
bts.prettyPrint(bts.getRoot())
