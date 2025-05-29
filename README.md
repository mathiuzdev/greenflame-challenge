# Application Documentation

## 1. Introduction

This application is a solution to the Vehicle Rental Technical Challenge. It was developed using React with TypeScript, and styled with a combination of Material UI and Tailwind CSS to closely match the design provided in Figma.

The main goal of this project is to simulate a vehicle rental platform, allowing users to:

- Display a list of rental vehicles using a local JSON file (simulating an API response).

- Filter vehicles by features such as number of doors, luggage capacity, category, and price range.

- Sort vehicles by price (highest to lowest and vice versa).

- View additional fare details via an interactive tooltip.

- Select up to 5 vehicles for quotation, with a visual indicator showing the selection order.

Application state is managed using Zustand, and the implementation leverages modern React hooks like useState, useEffect, useMemo, useRef, and useCallback to deliver a responsive and user-friendly experience.

### Prerequisites

1. **Node.js** (recommended version: 16.x or higher)
2. **npm** or **yarn** for package management.

### Instructions to install and run the client

1. **Clone the client repository**:

```bash
git clone https://github.com/mathiuzdev/greenflame-challenge.git

cd greenflame-challenge

```

1. **Install dependencies**: Run the following command to install the necessary dependencies.

   ```bash
   npm install
   ```

   Or if you prefer to use yarn:

   ```bash
   yarn install
   ```

1. **Develop locally (Development mode)**: To start the development server and see the app in action, run:

   ```bash
   npm run dev
   ```

   Or if using yarn:

   ```bash
   yarn dev
   ```

1. **Open the application in the browser**: Once the development server is running, open your browser and go to [http://localhost:5173/](http://localhost:PORT/).
1. **Build for production**: To create an optimized production-ready version of the app, run:

   ```bash
   npm run build
   ```

   Or if using yarn:

   ```bash
   yarn build
   ```

1. **Preview the production build**: If you want to preview how the application will look in production:

   ```bash
   npm run preview
   ```

   Or if using yarn

   ```bash
   yarn preview
   ```
