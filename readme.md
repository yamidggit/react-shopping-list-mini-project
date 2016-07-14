*React Shopping List Application

How to Run Things

*Install all dependencies:

    npm install 

*Run webpack:

    npm run webpack 

*Automatically run webpack when files change:

    npm run webpack:watch 
    
*Run tests:

    npm run test 

*Run tests automatically when files change:

npm run test:watch 


You don't need to run webpack:watch if you are running the dev server.

*Run the server

npm run webpack-dev-server


*Description:

This shopping list application will have the following components:

1- The App component will be the top level component that is responsible for rendering 
all the other components. It will take the entire application state Map as a prop.

2- The ShoppingList component will be responsible for displaying the name of 
the list and rendering Item components for each item in the list. 
It will take two props: name for the name of the list and items, which will be an immutable List.

3- The Item component will be responsible for rendering the name of the item,
the quantity to purchase, and it should be styled differently based on whether the
item has been purchased already or not. (item purchased is green and item no purchased is red)