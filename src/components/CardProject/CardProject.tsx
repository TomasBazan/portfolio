import React, { useRef, useEffect } from 'react';
import './CardProject.css'

interface projectInfo{
  repoPath: string;
  name: string;
  description: string;
  gridLayout: string;
}


export function CardProject( {repoPath, name, desc, gridLayout} : projectInfo)  {
  const cardRef = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const x = e.pageX - cardRef.current.offsetLeft;
    const y = e.pageY - cardRef.current.offsetTop;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });
  }, [])
 
  return (
    <section 
      ref={cardRef}
      className={`cardContainer border-solid p-[2px] rounded-lg border-gray-600 ${gridLayout} `}
    >
      <article className="card-content min-h-80 bg-[#111111] rounded-lg w-full h-full flex flex-col items-center justify-between text-pretty">
        <h2 className="text-4xl">{`${name}`}</h2>
        <p className="text-center text-white text-xl max-w-[300px] mx-auto p-2">{`${desc}`}</p>
        <button>
          <a href={repoPath ? `https://github.com/TomasBazan/${repoPath}` : `https://github.com/TomasBazan?tab=repositories`} target="_blank" rel="noopener noreferrer" className="text-cyan-300">
            GitHub
          </a>
        </button>
      </article>
    </section>
  );
}
