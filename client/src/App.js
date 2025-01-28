import React from 'react';
import ThreeDModel from './components/3DModel';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl text-center">Welcome to My 3D Portfolio</h1>
      </header>
      <main className="py-10">
        <section className="text-center">
          <h2 className="text-2xl mb-4">3D Model Showcase</h2>
          <ThreeDModel />
        </section>
      </main>
    </div>
  );
}

export default App;
