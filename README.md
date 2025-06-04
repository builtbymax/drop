# Drop

Drop is a minimal and easy way to save links on your own server or local machine. It is built with TypeScript, Next.js, and PostgreSQL, providing a simple interface to manage your saved links.
Tis project is a work in progress, and more features will be added over time - it will be used as a playground for me to learn and experiment with new technologies.

## Features

- Save links quickly
- Simple and intuitive interface
- More features coming

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/builtbymax/drop.git
   ```

2. Install dependencies:

   ```bash
   cd drop
   pnpm install
   ```

3. Create a `.env` file and configure your environment variables. You can use the example file as a template:

   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your desired settings, such as database connection strings and server ports.
In the project files is a working [DDEV](https://ddev.readthedocs.io/) configuration, so you can use it to run the project in a containerized environment (f.ex. Docker or Orbstack). Otherwise you need to provide a working PostgreSQL database connection string in the `.env` file (This could also be a remote database).

   For example `.env` configuration:

   ```env
   DATABASE_HOST=postgres://user:password@localhost:5432/drop
   ```

5. Start the development server:

   ```bash
   pnpm run dev
   ```

6. Open your browser and go to `http://localhost:3000`
