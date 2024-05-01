# ![Orchestra Logo](./src/assets/images/symphony_logo.svg 'Orchestra Logo') Orchestra Labs

The front page and first destination for Orchestra Labs developers.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Orchestra-Labs/orchestralabs.org.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies with Yarn:
   ```bash
   yarn install
   ```

## Running the Application

You can run the application in development or production mode:

- Development mode:
  ```bash
  yarn dev
  ```
  This command runs the app in development mode with hot reloading.
- Production build and preview:
  ```bash
  yarn build
  yarn preview
  ```
  First, build the application for production, then preview the build on a local server. This will require opening a browser window to [localhost](http://localhost:4173/)

## Maintenance

### Updating Dependencies

Regularly update dependencies to keep the application secure and efficient:

```bash
yarn upgrade
```

### Linting

Ensure code quality and consistency by running the linter:

```bash
yarn lint
```

### Running Prettier

Format the code to maintain consistency across the codebase:

```bash
yarn prettier --write .
```

### Documentation

For more details on how to use Vite (the main tool of this codebase), visit the [Mantine Vite Guide](https://mantine.dev/guides/vite/).
