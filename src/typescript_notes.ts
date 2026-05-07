const testFetch = fetch("stse")
  .then((res) => res.json())
  .then((data) => {
    data.ss;
  });

function printName(name: string, name2: string) {
  console.log(name, name2);
}

function sum(a: number, b: number) {
  return a + b;
}

const c = sum(1, 2);

const a = printName("Bryan", "Jeff"); // a is undefined but the function is void. dont complicate, essentially means there is nothing there at all.

interface Options {
  age?: number;
  height?: number;
  player?: boolean;
}

function printNameAndAge(
  name = "Bej",
  { player = false, age, height }: Options = {},
) {
  console.log(name, player, age, height);
}

printNameAndAge("BryanJEff", { height: 184 });

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallback(1, 2, (sum) => {
  console.log(sum);
});

type PrintNameFunc = (name: string) => void;

function f(name: string) {
  return 2;
}

let id: string | number = "7"; // I use this all the time, it is called union types
id = 9;
// union doesnt work with interfaces, just types.

// if you want to use it with interfaces instead of types, use 'extends' ... interface PersonWithId extends Person {id: string} but all should be interfaces.
type Person = {
  name: string;
  age: number;
};

type Id = string;
type PersonWithId = Person & { id: Id };

const newPerson: PersonWithId = {
  name: "Bej",
  age: 26,
  id: "skalevurn",
};

type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];

// nums.push() // error because it is read only
// nums[4] = 3 // error again because it only permits reading, no modifications

const person2 = { name: "bryan", age: 26 };
const people: (typeof person2)[] = [];
people.push(person2);

const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const; // enums so you can reuse as type

//Use Index Type
type PersonWithSkill = {
  name: string;
  skillLevel: (typeof SKILL_LEVELS)[number];
};
type PeopleGroupedBySkillLevel = {
  [index in PersonWithSkill["skillLevel"]]: PersonWithSkill[];
};
// super niche manipulation of types

const sample: PeopleGroupedBySkillLevel = {
  Expert: [{ name: "Bej", skillLevel: "Expert" }],
  Beginner: [{ name: "Bej", skillLevel: "Beginner" }],
  Intermediate: [{ name: "Bej", skillLevel: "Intermediate" }],
};

// Generics
type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};

type UserResponse = APIResponse<{ name: string; age: number }>;
type BlogResponse = APIResponse<{ title: string; post: string }>;

const userFetch: UserResponse = {
  data: {
    name: "Bryan",
    age: 26,
  },
  isError: false,
};

const blogFetch: BlogResponse = {
  data: {
    title: "Blog 1",
    post: "test post done.",
  },
  isError: false,
};

//async functions
function wait(duration: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("HI"), duration);
  });
}

wait(1000).then((value) => {
  console.log(value.length);
});

async function wait2(duration: number) {
  return await fetch("something");
}

wait2(1000).then((value) => {
  console.log(value.json());
});


//Type Predicate Example
const PRIORITIES = ["High", "Medium", "Low"] as const;
type Priority = (typeof PRIORITIES)[number]
type Todo =  {
  title: string
  description: string
}

function func(todo: Todo) {
  if(isPriority(todo.description)){
    console.log(todo.description)
  }
}

function isPriority(description: string): description is Priority {
  return PRIORITIES.includes(description as Priority) 
}