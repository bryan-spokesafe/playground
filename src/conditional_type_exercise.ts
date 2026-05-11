type CustomExclude<T, U> = T extends U ? never : T;
type CustomExtract<T, U> = T extends U ? T : never;

type Base = "a" | "b" | "c";

type A_ex = Exclude<Base, "a">;
type B_ex = CustomExclude<Base, "b">;

type C_ex = Extract<Base, "a" | "b" | "d">;
type D_ex = CustomExtract<Base, "a" | "b" | "d">;

type First<T> = T extends [first: infer P, ...any[]] ? P : never;
type Last<T>= T extends [...any[], infer P] ? P : never;
type Third<T> = T extends [any, any, third: infer P, ...any[]] ? P : never;

type FirstGeneric<T> = T extends CustomGeneric<infer E, any> ? E: never ;
type SecondGeneric<T> = T extends CustomGeneric<any, infer E> ? E : never;

type CustomGeneric<A, B> = { name: A; label: B };

type A = First<[1, 2, 3, 4, 5]>
type B = Last<[1, 2, 3, 4, 5]>
type C = Third<[1, 2, 3, 4, 5]>

type D = FirstGeneric<CustomGeneric<string, number>>
type E = SecondGeneric<CustomGeneric<string, number>>

type Route = "en/home" | "en/about" | "es/home" | "es/about"

type GetLang<T extends string> = T extends `${infer L}/${string}` ? L : never
type GetPage<T extends string> = T extends `${string}/${infer P}` ? P : never

type Lang = GetLang<Route>
type Page = GetPage<Route>

