# Expenses

A mobile-friendly expense tracker built with React. It stores data in a Google
Spreadsheet that you own, so you control access to your financial information.

## Features

- Track expenses across multiple accounts and categories.
- Review recent expenses and current/previous month totals.
- Install the app as a Progressive Web App on supported devices.
- Use a Google Spreadsheet as the data store.

## Requirements

- Node.js and npm
- A Google Cloud OAuth 2.0 Web application client ID
- A Google Spreadsheet set up with the tabs and cells described below

The app uses the Google Sheets API in the browser. Enable the Google Sheets API
in your Google Cloud project and configure the OAuth client's authorized
JavaScript origins for your local and deployed app URLs.

Create a spreadsheet with these tabs:

| Tab | Required data |
| --- | --- |
| `Data` | Account names in column A from row 2; category names in column E from row 2 |
| `Expenses` | Expense rows in columns A-E: date, description, account, category, amount |
| `Current` | Current-month total in cell H1 |
| `Previous` | Previous-month total in cell H1 |

The `Current!H1` and `Previous!H1` cells can contain formulas that calculate
totals from your `Expenses` tab.

## Run locally

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create your local environment file:

   ```sh
   cp .env.example .env
   ```

3. Set `REACT_APP_GOOGLE_CLIENT_ID` to your OAuth client ID and
   `REACT_APP_SHEET_ID` to the ID in your spreadsheet URL in `.env`.
4. Start the development server:

   ```sh
   npm start
   ```

The app is available at `http://localhost:3000`. Add that origin to your OAuth
client's authorized JavaScript origins.

## Build and deploy

Create a production build with:

```sh
npm run build
```

The generated static site is in `build/`. The `REACT_APP_*` settings are
embedded in the build at build time, so provide the two values in your hosting
provider's build environment before building. Configure the deployed URL as an
authorized JavaScript origin in Google Cloud.

Environment variables in a browser app are visible to users after building.
Only use a public OAuth client ID and a spreadsheet that you intend this app to
access; never put passwords, private keys, or other server-side secrets in these
variables. Keep your local `.env` file out of Git.

## Publish as a new GitHub repository

Create an empty repository on GitHub, then run these commands from this project
directory, replacing the URL with your repository's URL:

```sh
git init -b main
git add .
git commit -m "Initial project"
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY>.git
git push -u origin main
```

The repository ignores `node_modules`, build output, and local environment
files. After publishing, configure the same environment variables in your
hosting provider's build settings.

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE).
