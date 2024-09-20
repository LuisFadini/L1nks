# Links

This is a simple website I developed to gather my social links and more, as an alternative to [Linktree](https://linktr.ee/) and other link platforms.

## Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed in your development environment.

## Running the Site in Development Environment

To start the site locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LuisFadini/L1nks/
   cd L1nks
   ```
   
2. **Install the dependencies**:
   ```bash
   yarn
   ```

3. **Populate the variables in the .env.local file**

4. **Start the development server**:
   ```bash
   yarn dev
   ```

Now you can access the site at `http://localhost:5173` (or the port you configured).

## Exporting Static Files

If you want to generate static files for production, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LuisFadini/L1nks/
   cd L1nks
   ```

2. **Install the dependencies**:
   ```bash
   yarn
   ```

3. **Populate the variables in the .env.local file**

4. **Build the project**:
   ```bash
   yarn build
   ```

The static files will be available in the `dist` folder (or as per your configuration).

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [GNU GPLv3 License](LICENSE).