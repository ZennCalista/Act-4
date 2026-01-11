# Weather Proxy Application (Act-4)

This is a full-stack weather application that allows users to search for current weather conditions by city name. It consists of a **React** frontend and a **NestJS** backend that acts as a proxy to the **OpenWeatherMap API**.

## Project Structure

- **backend/**: A NestJS application that handles API requests and communicates with the OpenWeatherMap service.
- **frontend/**: A React application (powered by Vite) that provides the user interface for searching weather data.

## Prerequisites

Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

You will also need an API key from [OpenWeatherMap](https://openweathermap.org/api).

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the `backend` root directory.
   - Add your OpenWeatherMap API key:
     ```env
     OPENWEATHER_API_KEY=your_actual_api_key_here
     ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```
   The backend will run on `http://localhost:3000`.

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will typically run on `http://localhost:5173` (check the terminal output for the exact URL).

## Usage

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
3. Enter a city name (e.g., "London", "Tokyo", "New York") in the input field.
4. Press "Enter" or click the "Search" button to view the current temperature and weather conditions.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Axios, CSS
- **Backend**: NestJS, TypeScript, Axios, RxJS
- **External API**: OpenWeatherMap
