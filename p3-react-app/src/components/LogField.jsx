import { useState } from 'react';

function LogField( { logs, setLogs }) {

  const [log, setLog] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!log) {
      alert('Please enter a log.');
      throw Error;
    }

    const date = new Date();
    const displayDate = date.toDateString();
    const displayTime = date.toTimeString().slice(0, 5);
    const [ dayWeek, month, day, year ] = displayDate.split(' ');
    
    const newLog = { id: Date.now(), dayWeek: dayWeek, month: month, day: day, year: year, time: displayTime, text: log };
    const updatedLogs = [ ...logs, newLog ];

    setLogs(updatedLogs);
    localStorage.setItem('LogEntries', JSON.stringify(updatedLogs));
    setLog('');
  }

  return (  
   <div>
      <form onSubmit={handleSubmit} className='flex flex-col'> 
        <div className='flex justify-center'>
          <div>
            <textarea 
              placeholder='What one thing made you happy today?'
              rows={1}
              cols={35}
              maxLength={40} 
              value={log}
              onChange={(e) => setLog(e.target.value)}
              style={{resize: 'none'}}
              className='p-2 border-2 rounded-md border-[var(--color-brightBlue)] text-[var(--color-darkBlue)] bg-orange-50 m-10 mb-5 focus:bg-[var(--color-offWhite)]'
            />
            <div className='flex justify-end'>
              <input type='submit' value='Save' className='p-5 pt-2 pb-2 border-1 rounded-md bg-[var(--color-brightBlue)] text-[var(--color-offWhite)] mr-10 hover:bg-[var(--color-burntOrange)]'></input>
            </div>
          </div>
        </div>
      </form>
   </div>
  );
}

export default LogField;