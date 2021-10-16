# React NPM Template

<img src="https://github.com/belferink1996/React-NPM-template/blob/main/docs/npm.png" />

## How to use this template

### STEP 1: Create repo

Click ["Use this template"](https://github.com/belferink1996/React-NPM-template/generate) to generate a
new repository.<br />
Then open your terminal and clone your repository:

> cd ~/Desktop <br />
> git clone https://github.com/[your-user-name]/[your-repo-name].git

<br />

### STEP 2: Install dependencies

Go to the root of your repository's folder, and install all dependecies:

> cd ~/Desktop/[your-repo-name]<br />
> npm install

<br />

### STEP 3: Code and test

Create your components and/or logic, then when you'd like to test your code, create a new React app, and link the package to it:

> cd ~/Desktop <br />
> npx create-react-app [test-app-name] <br />
> cd [your-repo-name] <br />
> npm link <br />
> cd [test-app-name] <br />
> npm link [your-repo-name]
 
Now you can import your components in the testing application as if it were installed from NPM.

<br />

### STEP 4: Build and publish

Before building and publishing, there are a few paramters that you need to tweak:

- In `package.json` update the `name` field, this is the name that will be used on NPM (unique).
- In `package.json` make sure the `private` field is `false`.
- In `package.json` you can make other optional changes, but do NOT change the `peerDependencies`, `main`, and `types` fields.

Now to build and publish run the following commands:

> cd [your-repo-name] <br />
> npm run build <br />
> npm login <br />
> npm publish

# NOTE: Update README.md

The top part of of this readme is for you as a developer, the bottom part (from this parapagraph) is for the user, tweak it according to your library, and then you should publish the package.

<br />
<br />


## Installation and usage

Install from npm:

```bash
npm i --save <package name>
```

Then use it in your app:

```jsx
import Example from '<package name>'

function App(){
	
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <Example onClick={handleClick} >
      Just an example...
    </Example>
  )
}
```


## Props

Common props you may want to include:

| Prop      | Requirement | Default Value | Description                         |
| --------- | ----------- | ------------- | ----------------------------------- |
| children  | Optional    | 'Button'      | Should contain the button's text    |
| style     | Optional    | {}            | React.CSSProperties style object    |
| className | Optional    | ''            | Additional class name(s)            |
| onClick   | Optional    | () => null    | Function triggered by onClick event |
