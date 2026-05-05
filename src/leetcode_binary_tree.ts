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
  if (!root) return 0

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth)
}

const tree1 = buildTree([3,9,20,null,null,15,7])
console.log(maxDepth(tree1));

const tree2 = buildTree([1,null,2]);
console.log(maxDepth(tree2));