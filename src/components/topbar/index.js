import React, {useEffect, useState} from 'react';
import {FilterData} from '../../utils/commonData';
import './topbar.css';

const Topbar = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [categories, setCategories] = useState([])
    useEffect(() => {
      setCategories(FilterData)
    }, [])
    const filterOptDisplay = () => {
      setIsClicked(!isClicked)
    }
    return (
      <header className='topbar'>
        <a className= 'logo-wrapper' href='/stories'>
          <div>
            <div className='logo'>Edyoda</div>
            <p className='sub-logo'>Stories</p>
          </div>
        </a>
        <nav className='nav-sec'>
          <div className='explore-wrapper'>
            <div className='explore-sec' onClick={filterOptDisplay}>
              Explore Categories <i className='fas fa-angle-down'></i>
            </div>
            {isClicked && (
              <div className='categories'>
                {categories.length &&
                  categories.map(({ id, title }) => (
                    <a key={id} href='/'>
                      {title}
                    </a>
                  ))}
                <i></i>
              </div>
            )}
          </div>
          <div className='nav-right'>
            <p className='site-quote'>
              EdYoda is free learning and knowledge <br /> sharing platform for
              techies
            </p>
            <button className='main-web-redirect'>Go To Main Website</button>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Topbar