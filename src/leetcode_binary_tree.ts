class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];

  let i = 1;

  while (i < values.length) {
    const current = queue.shift()!;

    if (i < values.length && values[i] !== null) {
      current.left = new TreeNode(values[i]!);
      queue.push(current.left);
    }
    i++;

    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

/* Problem 1 */
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

/* Problem 2 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1: number[] = [];
  const leaves2: number[] = [];

  dfs_leaf(root1, leaves1);
  dfs_leaf(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
}

/* helper function to Problem 2 */
function dfs_leaf(node: TreeNode | null, leaves: number[]) {
  if (!node) return;

  if (!node.left && !node.right) {
    leaves.push(node.val);
  }

  dfs_leaf(node.left, leaves);
  dfs_leaf(node.right, leaves);
}

/* Problem 3 */
function goodNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, maxSoFar: number): number {
    if (!node) return 0;
    const isGood = node.val >= maxSoFar;
    const newMax = Math.max(node.val, maxSoFar);

    const rightGood = dfs(node.right, newMax);
    const leftGood = dfs(node.left, newMax);

    return (isGood ? 1 : 0) + leftGood + rightGood;
  }
  return dfs(root, -Infinity);
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  return (
    countFromNode(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
}

function countFromNode(node: TreeNode | null, remaining: number) {
  if (!node) return 0;

  let count = 0;

  if (node.val === remaining) count++;

  count += countFromNode(node.left, remaining - node.val);
  count += countFromNode(node.right, remaining - node.val);

  return count;
}

function longestZigZag(root: TreeNode | null) {
  let maxLength = 0
  function dfs(node: TreeNode | null, goLeftLength: number, goRightLength: number) {
    if (!node) return;

    maxLength = Math.max(maxLength, goLeftLength, goRightLength)

    dfs(node.left, goRightLength + 1, 0);
    dfs(node.right, 0, goLeftLength + 1)
  }

  dfs(root, 0, 0)
  return maxLength
}