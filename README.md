A simple React starter app that contains all the essential bare bones to get a React app up and running, as well some extra stuff to simplify the process of starting a new React project.

## Getting Started

To get started, run the following commands

1. `git clone https://github.com/aaron2212/react-starter-no-mock-api`
2. `cd react-starter-no-mock-api`
3. `yarn install`
4. `yarn start`

### Scripts

The following scripts are available to use:

    `start` - starts the development server
    `test` - runs all unit tests
    `build` - creates a production build of the React application
    `eject`

### Directory Structure

```
public/
src/
    api/
       api-service.js  An API service for making API calls to the backend
       auth-service.js An authentication service for things like login and register
       http-client.js  An HTTP client for making HTTP requests
       index.js     Exports for all files in this directory
    components/
        pages/
            index.js          Exports for all files in this director
            landing-page.js   The landing page
            not-found-page.js A page showing a 404 error
        shared/
            forms/
                components/
                    field.js            A wrapper around form elements
                    index.js            Exports for all files in this directory
                    validation-error.js For display an input validation error
                controls/
                    index.js    Exports for all files in this directory
                    input.js    A standard form input
                    select.js A select input
                    textarea.js A textarea input
                form.js An example form using formik
                index.js
            index.js Exports for all files in this directory
        themed/ Themed components allow for easily changing the site of the theme without changing every component
    helpers/
    utils/ Utility methods and classes
```

### Included packages

This project includes extra packages that are useful when starting a new React application, but are not included in the initial `create-react-app` project. To remove them, you can do `yarn remove <package-name>`

- `formik` - every web application uses forms. `formik` simplifies the process of working with HTML forms
- `react-router-dom` - the starter project comes with routing set up
- `styled-components` -
- `yup` - this package goes hand-in-hand with `formik` to provide a validation schema for HTML forms

### Additional packages that could be useful

- Font Awesome

  ```
  yarn add @fortawesome/fontawesome-svg-core
  yarn add @fortawesome/free-solid-svg-icons
  yarn add @fortawesome/react-fontawesome
  ```

- Bootstrap

  ```
  yarn add react-bootstrap
  ```

- Moment
  ```
  yarn add moment
  ```

### Additional features

- An API service and HTTP client for making API calls to a backend server
- Helper classes for storing and retrieving JWT tokens
- A user authentication helper class to determine the state of the user
- A constants file `const.js` for storing constants used through the application
- A theme file `theme.js` for theming

## Note

This project does not include a mock API
