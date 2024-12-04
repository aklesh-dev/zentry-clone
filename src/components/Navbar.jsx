import React from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';


const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = React.useState(false);

  const navContainerRef = React.useRef(null);
  const audioElementRef = React.useRef(null);

  const toggleAudioIndicator = () => { };

  return (
    <section ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-300 md:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* --left side of navbar-- */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className='w-10' />
            {/* --component btn-- */}
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* --right side of navbar-- */}
          <div className="flex h-full items-center">
            {/* --hide on small device-- */}
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>{item}</a>
              ))}
            </div>
            {/* --audio play btn-- */}
            <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
              <audio src="/audio/loop.mp3" loop className='hidden' ref={audioElementRef}>
                {
                  [1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`indicator-line ${isIndicatorActive ? "active" : ""} `}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))
                }
              </audio>
            </button>
          </div>
        </nav>
      </header>
    </section>
  )
}

export default Navbar;