Battleplan:

### 1. As a user I want to view a list of spaces belonging to other users

W5D2 // Set up backend database, fetch (GET) data in browser and use thunk to handle state
Part 1 - Set up database DONE
//1. Setup database model and migration file space stories
//2. Set up relations
//3. Put (seed) in dummy data and test

// Part 2 - Make (backend) endpoint DONE
//1. Create and endpoint to post a story
//2. Test our endpoint to post a story (httpie / postman)
//3. Make a request to our endpoint in the frontend re. this feature (if breaks we know problem is in frontend)
//4. If all good move to frontend

// Part 3 - Plan frontend setup
//1. Create a component
//2. Create a card component and a list component to show data on screen and setup routes
//3. Import the logic in home
//4. Write the logic to show the list

//Part 4 - Plan frontend Redux-data --> Fetch data into actions with a thunk
/1. Write an async function in action (thunk) and make axios request
/2. import the function in the component
/3. dispatch the function inside useEffect to see the console.log
/4. Back to the actions, dispatch the action inside the function with data (go to repo coders 55 to look at code)
/5. Write a case in the reducer to handle the data
/6. Write a selector to get the data
/7. Import the selector in the component
/8. Map over the data

---

W4D4 //How to fetch data with a thunk
//1. Write an async function in action (thunk) and make axios request
//2. import the function in the component
//3. dispatch the function inside useEffect to see the console.log
//4. Back to the actions, dispatch the action inside the function with data
//5. Write a case in the reducer to handle the data
//6. Write a selector to get the data
//7. Import the selector in the component
//8. Map over the data

//Display only five posts
//1. url => add limit and offset
//2. Make a dynamic offset
//3. modify the case in the reducer, so it keeps the previous post and add the new ones
//4. make a button to fetch next 5 posts

W5D2 //Form to post stories behind login (F5: Practice assessment)
// Part 1 - Plan Backend
//1. Create and endpoint to post a story
//2. Test our endpoint to post a story
//3. Once the endpoint is working, add the authMiddleWare
//4. If all good move to frontend

// Part 2 - Plan frontend setup
//1. Create a form component
//2. Create a form
//3. Import the form in myspace
//4. Write the logic to show the form

//Part 3 - Plan frontend Redux-data
//1. Write an action to post story
//2. Write a thunk (dont forget clg!)
//3. Import the function in the component
//4. Write the logic in the reducer
