# Playwright-Nirman

Automated end-to-end test suite for **nirman.ai**, built with [Playwright](https://playwright.dev/) and JavaScript.

## Project Structure

```
nirman.ai
├── .github/                     # CI workflow(s)
├── node_modules/                # Installed dependencies (auto-generated)
├── playwright-report/           # HTML test report (auto-generated)
├── test-results/                # Raw test run artifacts (auto-generated)
├── tests/
│   ├── example.spec.js
│   └── register_account.spec.js
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Prerequisites

Before you begin, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v16 or later recommended) — includes `npm`
- **[Git](https://git-scm.com/)**
- A code editor such as **VS Code** (optional but recommended)

Verify installations:

```bash
node -v
npm -v
git --version
```

## 1. Clone the Repository

```bash
git clone https://github.com/sandesh2059/Playwright-Nirman.git
cd Playwright-Nirman
```

## 2. Install Dependencies

Install all packages listed in `package.json` (including the Playwright test runner):

```bash
npm install
```

## 3. Install Playwright Browsers

Playwright needs its own browser binaries (Chromium, Firefox, WebKit):

```bash
npx playwright install
```

> On Linux, if you hit missing system dependency errors, run:
> ```bash
> npx playwright install --with-deps
> ```

## 4. Verify the Setup

Check that Playwright is installed correctly:

```bash
npx playwright --version
```

## 5. Run the Tests

**Run all tests** (headless, default):

```bash
npx playwright test
```

**Run a specific test file:**

```bash
npx playwright test tests/register_account.spec.js
```

**Run tests in headed mode** (see the browser while it runs):

```bash
npx playwright test --headed --reporter=html
```

**Run tests in a specific browser:**

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests in UI Mode** (interactive, great for debugging):

```bash
npx playwright test --ui
```

**Debug a specific test:**

```bash
npx playwright test tests/register_account.spec.js --debug
```

## 6. View the Test Report

After a test run completes, an HTML report is generated in `playwright-report/`. Open it with:

```bash
npx playwright show-report
```

## Notes

- Test results and traces from each run are stored in `test-results/` — safe to delete/regenerate anytime.
- Configuration (base URL, timeouts, projects/browsers, retries, reporters, etc.) lives in `playwright.config.js`. Review it if tests target a different environment.
- If a CI workflow exists under `.github/workflows`, tests will also run automatically on push/PR — check that file for exact trigger conditions.

## Troubleshooting

| Issue | Fix |
|---|---|
| `npx: command not found` | Ensure Node.js/npm is installed and on your PATH |
| Browser launch errors on Linux | Run `npx playwright install --with-deps` |
| Tests fail due to stale dependencies | Delete `node_modules` and `package-lock.json`, then re-run `npm install` |
| Report doesn't open | Run `npx playwright show-report` manually after a test run |