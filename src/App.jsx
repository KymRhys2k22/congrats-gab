import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

const App = () => {
  const [isExploding, setIsExploding] = React.useState(false);
  return <>
    <h1 onClick={() => setIsExploding(true)} className="text-3xl font-bold underline">
      kym rhys
    </h1>
    {isExploding && <ConfettiExplosion />}</>;
}

export default App