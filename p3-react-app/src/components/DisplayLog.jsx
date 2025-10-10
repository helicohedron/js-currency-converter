import BtnCattify from './BtnCattify';
import BtnDelete from './BtnDelete'


function DisplayLog({logs, setLogs}) {

  return (  
    <div className='flex flex-col items-center mt-5 mb-10 gap-5'>
      {logs.length > 0 ? logs.map((log) => (
        <div key={log.id} className='min-w-1/2 max-w-3/4 p-5 bg-[var(--color-brightBlue)] rounded-lg'>
          <div className='text-[var(--color-yellowGray)] text-sm'>
            <p>{log.dayWeek}, {log.time} | {log.month} {log.day}, {log.year}</p>
          </div>
          <div className='text-[var(--color-offWhite)] pt-5 pb-5'>
            <p>{log.text}</p>
          </div>
          <div>
            <BtnDelete id={log.id} logs={logs} setLogs={setLogs}/>
            <BtnCattify text={log.text} alt='A cat with text.'/>
          </div>
        </div>
      )) : 'You have no logs at the moment.'}
    </div>
  );
}

export default DisplayLog;