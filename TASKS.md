# Types of types!

## Fundamentals

- What's a type?
    - shapes and jigsaw puzzles
    - unions, only one of the options at a given time
    - products (objects), multiple of the options at a given time
    - types help us catch bugs, reason about programs (modeling your domain), and act as docs
- annotations, put a type on a variable
- Static vs. dynamic
    - failing at runtime vs. failing at compile time
    - propTypes vs. static analysis
- opt-in, 'gradual' typing system
- 'structural' type system - all things area anonymous; you don't construct values by name
- types in JS
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol
    - Object
- type inference; flow and typescript can sometimes infer what type something is
    - Gotcha: can sometimes wind up being any in `flow`
- flow vs. typescript
    - Lot's of little jargon differences, mostly the same stuff
    - TypeScript has superseded flow in terms of quality

## React, TypeScript and Flow specifics

- interfaces
    - can be 'extended' and 'implemented'
    - 'extends' -> adds new stuff in a type that is now the older plus the new one
    - 'implements' -> ensures that it upholds the described contract if a class
    - different from type aliases, i.e. must describe an object, not just give
      a pre-existing type a new name e.g. `type AccountBalance = number`
- optional fields
- exporting types
- flow 'read-only' and 'write-only' ('+' and '-' respectively) signifiers on fields
- bad imports
- using types with relay / graphql
    - importing generated types and hooking them up to your code
- Prop types
    - generic on `prop` and `state`

## Best practices and tricks

- best to avoid generic types like 'object' and 'function' if you can help it;
  much better to be explicit about the shape of things because then the type
  checker can help call out more mistakes!
- Types should live with component
- naming conventions
    - PascalCase
    - Doesn't need 'type' or 'ty' in it (unless you are writing your own language)
- Lots of IDE support, but a good trick is to verify the types of things by
  assigning to an invalid type that won't match anything
- type coercions

## Gotchas

- any, the untyped type, and how easily it is to fall back to in flow
    - bad imports
    - unclear inference (if flow can't infer, it will just plug in any)
    - `--strict` flag on `tsc`
- 'weak types', types that have all optional fields and therefore just be the empty object.
- type coercions with any -> type
- window as 'any'
- type coercions

## Our Project

A trivia app!

- Model our domain with types
- Annotate our functions and values with types
- Switch over to TypeScript and try to suss out the differences

## For next time

- Algebraic Data Types
- Generics + more about type inference
- empty types - never, empty, and void

## Food for thought

- https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
- http://www.typescriptlang.org/play/
- https://flow.org/try/
