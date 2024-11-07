## Type guards

Type Guards by using a set of conditions to check if a variable or expression satisfy certain criteria . there are several types of type guards in typeScript. Such that type predicates,typeof guards,intanceof guards.

## Type Predicates

A type predicate is a function that returns a boolean value an argument and checks if it matches a the given type. If it does the function will return the true and TypeScript narrows down the type of the argument to that specific type.

## EXAMPLE:

function isNumber(value:any): value is number{
return typeof value ==="number";
}

## TypeOf Guards

A typeof guard is a type guard that checks the type of a variable or expression using the typeof operator. it is used to narrow down the type of variable to one of the primitive type in JavaScript(string,number,boolean,symbol and undefined) .

## instanceof Guards

Intanceof guard is a type guard that check if a variable or expresion is an intance of a certain class or function. It used to narrow down the type to specific class or constructor function.

## Using type Guards in TS:

To used type guard in TS you simply need to include a condition that checks the type of a variable or expression.you can then use that variable or expression with the narrowed-down type.

### Conclusion

By using type guards you can narrow down the type of a variable or expression to more spefic type.("আমি টাইপ সচ্রিপ্ত এর থেকে বেশি বুঝি ")
