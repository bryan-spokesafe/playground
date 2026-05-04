class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function buildList(nums: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  for (const num of nums) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

/* Problem 1 */
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (prev && slow) {
    prev.next = slow.next;
  }

  return head;
}

/* Problem 2 */
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even: ListNode | null = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

function reverseList(head: ListNode | null) {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
}

/* Test Cases */
const test1 = buildList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseList(test1)));

const test2 = buildList([2, 1, 3, 5, 6, 4, 7]);
console.log(listToArray(reverseList(test2)));
