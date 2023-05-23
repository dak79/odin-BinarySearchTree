/**
 * Binary Search Tree
 *
 * TODO:
 *
 *  - Write a levelOrder function which accepts another function as a parameter.
 *    levelOrder should traverse the tree in breadth-first level order and
 *    provide each node as the argument to the provided function. This function
 *    can be implemented using either iteration or recursion (try implementing
 *    both!). The method should return an array of values if no function is
 *    given.
 *
 *    Tip: You will want to use an array acting as a queue to keep track of all
 *    the child nodes that you have yet to traverse and to add new ones to the
 *    list (as you saw in the video).
 *
 *  - Write inorder, preorder, and postorder functions that accept a function
 *    parameter. Each of these functions should traverse the tree in their
 *    respective depth-first order and yield each node to the provided function
 *    given as an argument. The functions should return an array of values if
 *    no function is given.
 *
 *  - Write a height function which accepts a node and returns its height.
 *    Height is defined as the number of edges in longest path from a given
 *    node to a leaf node.
 *
 *  - Write a depth function which accepts a node and returns its depth. Depth
 *    is defined as the number of edges in path from a given node to the tree’s
 *    root node.
 *
 *  - Write a isBalanced function which checks if the tree is balanced. A
 *    balanced tree is one where the difference between heights of left subtree
 *    and right subtree of every node is not more than 1.
 *
 *  - Write a rebalance function which rebalances an unbalanced tree.
 *    Tip: You’ll want to use a traversal method to provide a new array to
 *    the buildTree function.
 *
 *-----------------------------------------------------------------------------
 *
 * Tie it all together.
 * Write a simple driver script that does the following:
 *  - Create a binary search tree from an array of random numbers. You can
 *    create a function that returns an array of random numbers every time
 *    you call it, if you wish.
 *  - Confirm that the tree is balanced by calling isBalanced.
 *
 *  - Print out all elements in level, pre, post, and in order.
 *
 *  - Unbalance the tree by adding several numbers > 100.
 *  - Confirm that the tree is unbalanced by calling isBalanced.
 *  - Balance the tree by calling rebalance.
 *  - Confirm that the tree is balanced by calling isBalanced
 *  - Print out all elements in level, pre, post, and in order
 */
import { mergeSort } from './sort.js'

const Node = (data = null, left = null, right = null) => {
  return {
    data,
    left,
    right
  }
}

export const Tree = (arr) => {
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
  const insertNode = (value) => (root = insert(root, value))

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
  const removeNode = (value) => (root = remove(root, value))

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

  /* TODO: - Write a find function which accepts a value and returns the node with the
   *         given value.
   */
  /**
   * findNode.
   * Find the node with given value, if none returns null
   * @param {} value
   */
  const findNode = (value) => find(root, value)

  /**
   * find.
   * Traverse the tree and return a node with given value if exist.
   * @param {Node} root
   * @param {} value
   */
  const find = (root, value) => {
    if (!root || root.data === value) return root
    if (value < root.data) return find(root.left, value)
    if (value > root.data) return find(root.right, value)
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
    findNode,
    getRoot,
    prettyPrint
  }
}
