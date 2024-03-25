import { HeaderNavigation } from './HeaderNavigation'
import './LandingPageHeader.css'
import React from 'react'
import { Logo } from '../Logo/Logo'
// import MenuIcon from '../../assets/icons/menu.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'

// function useState(initialValue) {
//     let val = initialValue
//     function change(newValue) {
//         val = newValue
//     }
//     return [val, change]
// }

export const LandingPageHeader = () => {

    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
         setMenu(showMenu === false)
     }

    return (<header className="header">

        <div className="logo">
            <Logo useWhite={true} />
        </div>
        <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
        <div className="menu">
            <HeaderNavigation className={showMenu ? 'mobile' : ''} />
            </div>

    </header>)
}


// const MobileNavigation = () => {

//     const [showMenu, setMenu] = React.useState(false);

//     const toggleMenu = () => {
//         setMenu(showMenu === false)
//     }

//     return (
//         <>

//             <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
//             {
//                 showMenu && (
//                     <div className="menu-mobile">
//                         <HeaderNavigation />
//                     </div>)
//             }
//         </>)

// }