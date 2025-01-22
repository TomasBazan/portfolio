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
    <section id="Skills" className="mt-20 w-1/2 bg-[var(--background-color-secondary)] min-h-[calc(100vh-3rem)]">
      <ul className="flex flex-row justify-center gap-4 text-3xl w-full p-3 my-10">
        <section className="flex flex-col justify-around gap-2">
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={pythonIcon} alt="Python Logo" className="w-8 h-8" />
              Python
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={djangoIcon} alt="Django Logo" className="w-8 h-8" />
              Django
            </li> 
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={jsIcon} alt="JavScript Logo" className="w-8 h-8" />
              JavaScript
            </li>
          </div>
        </section>
        <section className="flex flex-col justify-around gap-2">
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={tsIcon} alt="TypeScript Logo" className="w-8 h-8" />
              TypeScript
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={reactIcon} alt="React Logo" className="w-8 h-8" />
              React
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={mysqlIcon} alt="MySQL Logo" className="w-8 h-8" />
              MySQL
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={twIcon} alt="Tailwind CSS Logo" className="w-8 h-8" />
              Tailwind CSS
            </li>
          </div>
        </section>
        <section className="flex flex-col justify-around gap-2">
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={reduxIcon} alt="Redux Toolkit Logo" className="w-8 h-8" />
              Redux
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={drfIcon} alt="DRF Logo" className="bg-white w-8 h-8 rounded" />
              DRF
            </li>
          </div>
          <div className="p-[2px] bg-gradient-to-br from-cyan-300 via-[#F7A598] to-[#EE3D22] rounded-xl">
            <li className='skill'>
              <img src={mongoIcon} alt="MongoDB Logo" className=" w-8 h-8" />
              MongoDB
            </li>
          </div>
        </section>

      </ul>
    </section>
  );
}
