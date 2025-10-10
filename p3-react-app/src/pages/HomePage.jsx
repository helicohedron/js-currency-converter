import Header from '../components/Header';
import { Link } from 'react-router';

function Home() {
  return (  
    <div className='bg-[var(--color-offWhite)] min-h-screen'>
      <div className='flex flex-col gap-10' >
        <div>
          <Header title='Meow Log' text='Daily gratitude notes, made better with cats.'/>
        </div>
        <div className='flex justify-center'>
          <Link to='/log' className='bg-[var(--color-burntOrange)] text-[var(--color-offWhite)] p-6 pt-4 pb-4 rounded-lg hover:bg-[var(--color-brightBlue)]'>Begin Logging</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;