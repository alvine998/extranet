import React from 'react';

export default function Timer() {
    const [counter, setCounter] = React.useState(90);
  
    // Third Attempts
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (
      <div className="Timer" style={{textAlign:'center'}}>
        <div>Kirim Ulang Setelah: {counter}</div>
      </div>
    );
  }