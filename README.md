# Chat Room PHP Project Front End

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Table of Contents
- [Project Description](#project-description)
- [Technologies used](#technologies)
- [Axios Code Snippets](#axios)
- [Future Improvements Ideas](#improvements)

<a name="project-description"></a>
## Project Description 

### Application's purpose
The application is a dynamic chat room where users gain access by signing in with valid credentials (username and password). Once successfully authenticated, users can unlock the full chat room experience. This includes access to a list of registered users, enabling them to initiate conversations with fellow users. This is the front-end documentation of the application.

#### Screenshots of application in desktop view:

#### Login and Sign in
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/0ba80f0a-c4d8-459e-b0a8-f0e759b64b49)
#### Chat Session
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/3d50c0cc-8128-4d64-b0c0-d618ce8c2ff5)
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/cde627a8-987b-4dbe-b45d-7f5a046a237b)
#### Sending Images
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/60cc2350-101b-4d7b-8bbe-900321dd0452)
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/ca007988-eaac-47d3-bb4f-0fe3de00bfef)

<a name="technologies"></a>
## Technologies used when building the application
- React
- HTML
- CSS
- Different components such as Login, Register, and ChatRoom were created to comply with the principle of separation of concern.
- Usage of Axios to make HTTP requests
- Usage of React library hooks such as useEffect and useState to properly keep track of the component's state and render them under certain conditions.

<a name="axios"></a>
## Axios Code Snippets
### Create User
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/4510488a-a1b7-4a6e-9ca1-470d6c461f95)
### User Log in
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/03c80c6d-951a-43fd-b34c-9de2fb02c3aa)
### Messages
![image](https://github.com/DylanBrass/project_php_frontend/assets/46633364/f97f2340-c620-4a19-9529-1d370d92cbbd)

<a name="improvements"></a>
## Future Improvements Ideas
1. I would like to improve the front-end to be more user-frendly and more chat looking.
2. I would like to add a feature of creating chat groups in which multiple users can interact with each other.
