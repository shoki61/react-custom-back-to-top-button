# react-custom-back-to-top-button

Back to top button package that you can shape the way you want and put any icon you want in it :innocent:

Install
======

`npm i react-custom-back-to-top-button`
<br>
or
<br>
`yarn add react-custom-back-to-top-button`
<hr>

#### Dependencies
- @material-ui/core <br>
- @material-ui/icons

:exclamation: You do not need to install these two dependencies, they will be installed automatically when you install the package.

<hr>

Use
===
 ```jsx
import React, { Fragment } from 'react';
import BackToTop from 'react-custom-back-to-top-button';

const App = () => {
  return (
    <Fragment>
      // Your some code
      <BackToTop/>
    </Fragment>
  );
};

export default App;
 ```

<hr>

Change icon
===========

You can pass the icon you like as props from font-awsome icons.<br>

Example code:
```jsx 
import React, { Fragment } from 'react';
import BackToTop from 'react-custom-back-to-top-button';

const App = () => {
  return (
    <Fragment>
      // Your some code
      <BackToTop icon={<i className='fas fa-sort-up'></i>}/>
    </Fragment>
  );
};

export default App;
```

To use font-awesome icons, don't forget to add the font-awesome link in the `<head> </head>` section of your `index.html` file in the `public` folder. Add this link if you want:

```jsx
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
```

<hr>

## Props

| Prop                     | Type      | Default                                         | Description                                    
| :----------------------- | :-------: | :------:                                        | :--------------------------------
| showIcon                 | `boolean` | true                                            | Show / Hide icon                     
| icon                     | `element` | `<KeyboardArrowUpIcon style={{fontSize: 25}}/>` | You can use the icon of your choice as shown in the example code.
| toShow                   | `number`  | 300                                             | To show the button by the value of scrollY

<br>

## Style

| Prop                  | Type      | Default     | Description                                    
| :-------------------: | :-------: | :---------: | :--------------            
| fontSize              | `number`  | 16          | Sets the size of the text you add to the button.                    
| width                 | `number`  | 3rem        | Sets the width of the button                       
| height                | `number`  | 3rem        | Sets the height of the button   
| bottom                | `number`  | 45          | Sets how many px the button should go up from the bottom 
| right                 | `number`  | 45          | Sets how many px the button should go from the right to the left 
| left                  | `number`  | null        | Sets how many px the button should go from the left to the right
| backgroundColor       | `string`  | '#363636'   | Sets the background color
| color                 | `string`  | '#fff'      | Sets the color of the icon or text inside 
| borderRadius          | `number`  | 100         | Sets the roundness of the border
| style                 | `Object`  | null        | Takes the css properties you have created 
| className             | `string`  | null        | Takes the class you have specified. Maybe you want to get a more pleasant appearance, for example to give the hover feature
