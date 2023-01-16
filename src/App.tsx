import React from 'react';
import Testimonies from './Components/Testimonies';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es lo que dicen las personas que aprendieron React!</h1>
      </div>
      <Testimonies
        Name= 'Juancito Rodriguez'
        Country= 'Argentina'
        Image= 'placeHolder.jpg'
        Role= 'Ingeniero de software'
        Corporation= 'TurtleSoft'
        Testimonie='Yo era un aventurero, iba de aqui aca, hasta que aprendi react, ahora soy un desarrollador util'
      />
      <Testimonies 
        Name= 'Jasinta Monte Hermoso'
        Country= 'Uruguay'
        Image= 'placeHolder.jpg'
        Role= 'Ingeniera de software'
        Corporation= 'JoeSoft'
        Testimonie='Yo era un aventurera, iba de aqui aca, hasta que aprendi react, ahora soy una desarrolladora, es genial!'
      />
      <Testimonies 
        Name= 'Romina Che'
        Country= 'Cuba'
        Image= 'placeHolder.jpg'
        Role= 'Programadora'
        Corporation= 'CubaSoft'
        Testimonie='Siempre fui desarrolladora, ahora con react puedo avanzar en mi trabajo.'
      />
    </div>
  );
}

export default App;
