import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        src="https://www.theblocklearning.com/wp-content/uploads/2018/09/angularjs-logo-600x394.png"
        name="Angular" userNumber="2" isOnline="online"
        status="status-online" />

      <Contact
        src="https://png2.cleanpng.com/sh/8573ee0180d41466f917848e1131b52c/L0KzQYm3VMExN6F7fZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuepZ4iNH3c3n5dX7AhfIubJZ4gdl3LXfshLn8gr1idph6RdlydHj4cn68gfNkaZQ3TaJsZHG8RXA7VMUzQGM4UKMAMkO2RoOBVcMxPWM8RuJ3Zx==/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac250cda95.4452823815233628530527.png"
        name="React" userNumber="1" isOnline="offline"
        status="status-offline" />
      <Contact
        src="https://dwglogo.com/wp-content/uploads/2017/09/1200px-Vue_js_logo.png"
        name="Vue" userNumber="3" isOnline="offline"
        status="status-offline" />
    </div>
  );
}

export default App;
