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

/* Problem 1: 2095. Delete the Middle Node of a Linked List */
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

/* Problem 2: 328. Odd Even Linked List */
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

/* Problem 3: 206. Reverse Linked List */
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

/* Problem 4: 2130. Maximum Twin Sum of a Linked List */
function pairSum(head: ListNode | null) {
  if (!head) return 0;

  // find middle
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next
  }

  // reverse middle 
  let prev = null;
  let current = slow;

  while(current) {
    const nextHead = current.next;
    current.next = prev;
    prev = current;
    current = nextHead;
  }

  let maxSum = 0
  let first: ListNode | null = head;
  let second = prev;

  while (second) {
    maxSum = Math.max(maxSum, first!.val + second.val);
    first = first!.next;
    second = second.next
  }
  return maxSum
}

/* Test Cases */
const test1 = buildList([5,4,2,1]);
console.log((pairSum(test1)));

const test2 = buildList([4,2,2,3]);
console.log((pairSum(test2)));
