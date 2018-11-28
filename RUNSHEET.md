For this workshop we are just going to explore adding types to an existing project, and adding types to new code.

In the first part, we will go over adding Flow Types, some of you may already know this, but it's good to get a refresher anyway. And just in case you've been copy pasting and hope for the best, this might give you some insight into what you are doing.

## Step 1

You will need to checkout this branch: `git checkout step-1`
Take a look at the `.flowconfig` file.

Typically you can generate this file by running `flow init`.

> The location of the `.flowconfig` is significant. Flow treats the directory that contains the .flowconfig as the project root. By default Flow includes all the source code under the project root.

You can read more about it here: https://flow.org/en/docs/config/

Now what you will want to do is run `npm run flow`.

This will start the Flow server which will proceed to look for any files that need to be checked.

It might take some time to spin up, but you should expect to see a line in your terminal that says:
`No errors!`

Which is really nice, except it's because none of the files are being checked!

## Step 2

You will need to checkout this branch:`git checkout step-2`

Cool, so we've just seen an empty config file and a server that validates nothing.

Let's actually start adding `//@flow` to the top of some js files, to get Flow checking them.

You can see an example in `./src/components/App.js`.

Now if you run `npm run flow` you should expect to see an error.

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ src/App.js:8:19

Cannot use Component [1] with fewer than 1 type argument.

     src/App.js
      5│ import 'bulma/css/bulma.css';
      6│ import './App.css';
      7│
      8│ class App extends Component {
      9│   render() {
     10│     return (
     11│       <div className="App">

     /private/tmp/flow/flowlib_149e6758/react.js
 [1] 26│ declare class React$Component<Props, State = void> {
```

What you need to do, is get Flow passing on this file.

Once you've got that passing, move onto the next step.

(NOTE: we can explain how to read the error if you want)

## Step 3

You will need to checkout this branch:`git checkout step-3`

What you will need to do now is start adding flow annotations to all the `.js` files in the src directory. It should be pretty straight forward, but sometimes the errors can be a bit cryptic. Ask for help if you need it.

## Step 4

@ryan, probably need some help fleshing out a type driven bit.

## Step 5

You will need to checkout this branch:`git checkout step-5`

Moving on from Flow, we will take a look at Typescript.

In the branch you've pulled, you will need to `npm install` the deps, which should will be the equivalent of:
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

Additional Resources:

This is a guide I followed to add Typescript manually to a CRA:
https://facebook.github.io/create-react-app/docs/adding-typescript
