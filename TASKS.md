# Types of types!

## Fundamentals

- What's a type?
    - shapes and jigsaw puzzles
    - logic, and the quest for being 'well formed'
    - types are like lightweight proof systems
    - types help us catch bugs
    - types help us reason about programs
    - types give us documentation
- 'annotations'
- type inference
- typed vs. untyped langs
    - assembly vs. JS
- opt-in, 'gradual' typing system
- a 'structural' type system vs. a 'nominal' type system
- types in JS
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol
    - Object
- Static vs. dynamic
    - Proptypes vs. static analysis
    - failing at runtime vs. failing at compile time
- flow vs. typescript
- modeling your domain with types
- type driven dev
- naming conventions
    - PascalCase
    - Doesn't need 'type' or 'ty' in it (unless you are writing your own language)


- type coercions

-types in flow/typescript
    - any, the untyped type
    - falling back to any
    - bad imports
    - `--strict` flag on `tsc`
    - using types with relay / graphql
        - importing generated types
        - hooking them up

## TS and Flow specific bobs

- interfaces
    - can be 'extended' and 'implemented'
    - 'extends' -> adds new stuff in a type that is now the older plus the new one
    - 'implements' -> ensures that it upholds the described contract if a class
- unions
- discriminated unions
- products (objects/records)
- optional fields
- exporting types
- pattern matching on types
- exhaustive pattern matches

## React specific stuff

- Prop types

## Best practices

- best to avoid generic types like 'object' and 'function' if you can help it;
  much better to be explicit about the shape of things because then the type
  checker can help call out more mistakes!

## Gotchas

- 'weak types', types that have all optional fields and therefore just be the empty object.

## Our codebase

## Our Project

- Add flow types to project
- Outfit functionality for submitting questions and validating them
  (2nd half, break up into pairs, have them write their own tyeps?)
- Install TypeScript and port the types over

## For next time

- Algebraic Data Types


## Food for thought

- https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
