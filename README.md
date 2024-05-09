# Digital Clock React Application

This project is a simple React application that displays a digital clock. The clock updates every second to show the current time in a 12-hour format with AM/PM indication.

You can view this site [here](https://amulyamachhan.github.io/Digital-Clock/).

## Features

- Real-time digital clock that updates every second.
- Displays time in a 12-hour format with AM/PM indication.
- Aesthetic background image and custom font for a modern look.
- Responsive design with centered clock display.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/digital-clock-react.git
    cd digital-clock-react
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

### Running the Application

To start the development server, run:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate a `build` folder containing the optimized production-ready files.

### Deployment

To deploy the application, you can use any static site hosting service like GitHub Pages, Vercel, Netlify, etc. Simply upload the contents of the `build` folder to your hosting service.

## File Structure

```plaintext
my-app/
├── public/
│   ├── images/
│   │   └── background.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   └── App.js
│   └── App.css
└── package.json
```

## Code Overview

### `App.js`

```javascript
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours} : ${minutes} : ${seconds} ${meridiem}`;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </>
  );
}

export default App;
```

### `App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/images/background.jpg') no-repeat center center/cover;
  font-family: 'Inter', sans-serif;
  color: white;
}

.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.clock {
  background: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 2em;
  font-weight: bold;
}
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgments

- Inspired by various digital clock designs.
- Font used: Inter.
