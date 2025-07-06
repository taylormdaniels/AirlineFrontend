# Airline Frontend

This repository contains the **frontend portion** of a React + TypeScript application originally built as part of a full airline flight management project. It communicates with a REST API that normally runs locally on `https://localhost:7126` and demonstrates basic CRUD screens for flights, passengers and reservations.

> **Important:** The backend API is **not included** in this repository due to previous employer privacy restrictions. As a result the UI will not function correctly without providing an API that matches the expected endpoints.

## Features

- **Flight listings** with search and filtering
- **Passenger and reservation views**
- **Typed data models** and a centralized API service using Axios
- **Responsive design** with React‑Bootstrap components
- **Client side routing** powered by React Router

Although the project began from the standard Create React App template, it has been adapted to showcase modern React patterns including hooks, functional components and TypeScript for type safety.

## Running the project

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).
   It expects a REST API to be running on `https://localhost:7126`. Without that backend the interface will load but no data will be shown.

Tests can be launched via `npm test`.

## Technologies

- React 18 + TypeScript
- React Router DOM
- Axios HTTP client
- React Bootstrap for styling

## About this demo

This frontend was developed alongside a .NET backend as part of a complete airline management system. The backend source is private and therefore not included here. This repository is provided solely as a sample for learning and demonstration purposes. It is not production ready but illustrates how I structure a React application, consume REST endpoints and keep components organized. Feel free to clone or fork the repository.
