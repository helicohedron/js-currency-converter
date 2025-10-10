import DisplayLog from '../components/DisplayLog';
import Header from '../components/Header';
import LogField from '../components/LogField';
import { useState, useEffect } from 'react';


function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = localStorage.getItem('LogEntries');
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs)); 
    }
  }, []);


  return (  
    <div className='bg-[var(--color-offWhite)] min-h-screen min-w-screen'>
      <div className='flex flex-col'>
        <div>
          <Header title='Meow Log' />
        </div>
        <div>
          <LogField logs={logs} setLogs={setLogs}/>
        </div>
        <div>
          <DisplayLog logs={logs} setLogs={setLogs}/>
        </div>
      </div>
    </div>
  );
}

export default Log;