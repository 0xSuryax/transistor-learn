# Transistor Learn

![Transistor Learn](https://github.com/0xSuryax/transistor-learn/screenshots/1.png)

## Overview

**Transistor Learn** is an interactive web application designed to teach binary counting through a visual transistor interface. This project combines educational content with an engaging cyberpunk-inspired UI to make learning binary concepts fun and intuitive.

## Features

- **Interactive Transistors**: Toggle individual bits by clicking on animated transistor components
- **Real-time Conversion**: Instantly see the decimal equivalent of your binary input
- **Expandable Bits**: Add or remove transistors to experiment with different bit lengths
- **Neon Cyberpunk UI**: Enjoy a visually stunning interface with glow effects and smooth animations
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technologies Used

- React.js
- Vite
- Framer Motion (for animations)
- CSS3 (with custom animations and effects)
- JavaScript ES6+

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/0xSuryax/transistor-learn.git
   ```

2. Navigate to the project directory:
   ```
   cd transistor-learn
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## How to Use

- **Toggle Bits**: Click on any transistor to toggle it between ON (1) and OFF (0)
- **Add Transistor**: Click the "Add Transistor" button to add more bits
- **Remove Transistor**: Click the "Remove Transistor" button to remove bits
- **Reset**: Click the "Reset All to 0" button to turn all transistors OFF

## Educational Concepts

Transistor Learn helps users understand:
- Binary number system
- Bit representation in computing
- Powers of 2
- Binary-to-decimal conversion
- Basic transistor states and their relation to binary

## Screenshots

![Main Interface](https://github.com/0xSuryax/transistor-learn/screenshots/2.png)
*The main interface showing the binary-to-decimal conversion*

![Transistors View](https://github.com/0xSuryax/transistor-learn/screenshots/3.png)
*Close-up of the interactive transistors*

## Project Structure

```
transistor-learn/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── BinaryDisplay.jsx
│   │   ├── Controls.jsx
│   │   ├── DecimalDisplay.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Transistor.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── BinaryDisplay.css
│   │   ├── Controls.css
│   │   ├── DecimalDisplay.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   └── Transistor.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Future Enhancements

- Add a tutorial mode for beginners
- Include logic gate demonstrations
- Add bitwise operation visualizations
- Implement challenge mode with binary puzzles
- Add support for hexadecimal conversions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Inspired by fundamental computer science education
- UI design influenced by cyberpunk and retrowave aesthetics

---

## NOTE

**This is a Vibe project!** It was created as part of a personal coding journey to explore the intersection of education and aesthetic design. As a Vibe project:

- There may be bugs or imperfections as the focus was on creative expression
- Some components might need optimization for production environments
- The code prioritizes visual impact alongside functionality
- It represents a creative exploration rather than a production-ready application

Feedback and suggestions are always welcome to improve the vibe and functionality of the project!

---

© 2025 Transistor Learn