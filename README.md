# TV Shows

## About

TV Shows is a React-based web application designed to provide users with comprehensive information about various TV shows.

## Features

- **TV Shows Listing:** Browse a list of TV shows.
- **Detailed TV Show View:** Access detailed information for each TV show, including its name, summary, rating, image and a list of episodes.
- **Episode Details:** View details about each episode, such as name, rating, season, summary, date and image.

## Prerequisites

- Node
- Yarn

## How to Run

Follow these steps to set up and run the project:

1. **Install Dependencies:** Run `yarn install` to install the necessary dependencies.
2. **Development Mode:** Execute `yarn start` to run the app in development mode.
3. **Production Build:** Use `yarn run build` to build the app for production. Serve the build using a server.
4. **Run Tests:** Use `yarn run test` to execute test cases.
5. **Linting:** Run `yarn run lint` to identify linting warnings or errors.
6. **Fix Linting Issues:** Execute `yarn run lint:fix` to automatically fix linting errors and warnings.

## Libraries Used

- **React:** Primary library for building web components.
- **Material UI:** For advanced UI components.
- **Redux Toolkit:** For state management.
- **TypeScript:** For type safety.
- **date-fns:** For date operations.
- **dompurify:** For sanitizing text.
- **react-router-dom:** For client-side routing.
- **react-error-boundary:** For error boundary management.
- **Styled Components:** Initially introduced to evaluate its usage and behavior.

## Application Structure

- `components/`: Common reusable components.
- `features/`: Business feature components like `showDetails`, `shows`, `episodeDetails`.
- `helpers/`: Utilities such as the `dataProvider` library for API calls.
- `hooks/`: Custom hooks, such as `useFetch`, which utilize `dataProvider` for web resources or APIs.
- `models/`: Definitions of data structures for episodes and shows.
- `pages/`: Individual pages accessible through navigation.
- `store/`: Redux store configuration and reducer management.
- `utils/`: Common utility functions.

## Redux Store

- `shows`: Manages the list of TV shows.
- `showDetails`: Stores details of the selected show, including episodes and other show details.
- `episodeDetails`: Maintains the details of individual episodes.

## Other Aspects

- **Performance:** Utilizes lazy loading, memoization, and Redux store to minimize API calls.
- **Error Handling:** Implemented using ErrorBoundary.
- **Linting:** Enforces coding standards.
- **Testing:** Includes test cases to verify component behavior.
- **Caching:** Achieved through the Redux store.
- **Responsiveness:** Ensured using Material UI and styled-component's CSS-in-JS.

## Note

While Styled Components are not required due to the use of Material UI they are included in this project as per specific request to complete this assignmentt
