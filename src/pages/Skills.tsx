import pythonIcon from '../assets/icons/python-icon.svg';
import djangoIcon from '../assets/icons/django-icon.svg';
import jsIcon from '../assets/icons/js-icon.svg';
import tsIcon from '../assets/icons/ts-icon.svg';
import reactIcon from '../assets/icons/react-icon.svg';
import mysqlIcon from '../assets/icons/mysql-icon.svg';
import mongoIcon from '../assets/icons/mongodb-icon.svg';
import twIcon from '../assets/icons/tailwindcss-icon.svg';
import reduxIcon from '../assets/icons/redux-icon.svg';
import drfIcon from '../assets/icons/drf-icon.svg';
import './Skills.css'

export function Skills() {
  return (
    <section id="Skills" className="bg-[var(--background-color-secondary)] min-h-[calc(100vh-3rem)]  flex justify-center items-center flex-col">
      <h1 className="text-5xl ">Skills</h1>
      <ul className="text-3xl w-7/12 my-40 grid grid-cols-4 gap-4 h-96">
        <li className='skill'>
          <img src={pythonIcon} alt="Python Logo" className="w-8 h-8" />
          Python
        </li>
        <li className='skill'>
          <img src={djangoIcon} alt="Python Logo" className="w-8 h-8" />
          Django
        </li>
        <li className='skill'>
            <img src={jsIcon} alt="Python Logo" className="w-8 h-8" />
          JavaScript
        </li>
        <li className='skill'>
          <img src={tsIcon} alt="Python Logo" className="w-8 h-8" />
          TypeScript
        </li>
        <li className='skill'>
          <img src={reactIcon} alt="Python Logo" className="w-8 h-8" />
          React
        </li>
        <li className='skill'>
          <img src={mysqlIcon} alt="Python Logo" className="w-8 h-8" />
          MySQL
        </li>
        <li className='skill'>
          <img src={mongoIcon} alt="Python Logo" className="w-8 h-8" />
          MongoDB
        </li>
        <li className='skill'>
          <img src={drfIcon} alt="Python Logo" className="w-8 h-8" />
          DRF
        </li>
        <li className='skill'>
          <img src={twIcon} alt="Python Logo" className="w-8 h-8" />
          Tailwind CSS
        </li>
        <li className='skill'>
          <img src={reduxIcon} alt="Python Logo" className="w-8 h-8" />
          Redux Toolkit
        </li>
        <li className='skill'>
          React Query
        </li>
        <li className='skill'>
          React Form
        </li>
      </ul>
    </section>
  );
}
