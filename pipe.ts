const double = (n: number) => n * 2;
const increment = (n: number) => n + 1;

// pipeline operator not yet implemented in the current ecma
// 5 |> double |> double |> increment |> double; // 42

type FunctionName = (n: number) => any;
// alternative to pipeline
const pipe = (x: number, ...fns: Array<(a: number) => void>) => fns.reduce((value: number, fn: Function) => { return fn(value) }, x);

// without pipeline, caotic
console.log(double(increment(double(double(5)))));

// use of the pipe function
console.log(pipe(5, double, double, increment, double))