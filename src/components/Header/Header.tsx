import * as S from './HeaderStyle'
import logoWhite from '../../assets/images/logo-white.png'
import logoBlack from '../../assets/images/logo-black.png'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'
import { useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenuStyle';



export const Header  = () => {

    const [headerStatus, setHeaderStatus] = useState<boolean>(false);
    const [opened, setOpened] = useState(false)

    const changeHeader = () => {
        window.scrollY > 500 ? setHeaderStatus(true) : setHeaderStatus(false);
    }
    //scroll desktop
    const scrollTo537 = () => {
        return window.scrollTo({top: 537, behavior: 'smooth'})
    }
    const scrollTo900 = () => {
        return window.scrollTo({top: 900, behavior: 'smooth'})
    }
    const scrollTo2200 = () => {
        return window.scrollTo({top: 2200, behavior: 'smooth'})
    }
    const scrollTo3300 = () => {
        setOpened(false)
        return window.scrollTo({top: 3300, behavior: 'smooth'})
    }
    const scrollTo3906 = () => {
        return window.scrollTo({top: 3906, behavior: 'smooth'})
    }

    //scroll mobile
    const scrollTo565 = () => {
        setOpened(false)
        return window.scrollTo({top: 565, behavior: 'smooth'})
    }
    
    const scrollTo4051 = () => {
        setOpened(false)
        return window.scrollTo({top: 4051, behavior: 'smooth'})
    }
     const scrollTo4807 = () => {
        setOpened(false)
        return window.scrollTo({top: 4807, behavior: 'smooth'})
    }
     const scrollTo5758 = () => {
        setOpened(false)
        return window.scrollTo({top: 5758, behavior: 'smooth'})
    }


    const mobileMenu = () => {
        setOpened(!opened)
    }


    useEffect(()=>{
        window.addEventListener('scroll', changeHeader)
    },[])

    return(
        <>
            {opened &&
                <MobileMenu>
                    <div className='close'>
                        <img src={close} onClick={mobileMenu} alt="" />
                        {/* <span onClick={mobileMenu}>X</span> */}
                    </div>
                    <p onClick={scrollTo565}>Empresa</p>
                    <p onClick={scrollTo3300}>Camisaria</p>
                    <p onClick={scrollTo4051}>Alfaiataria</p>
                    <p onClick={scrollTo4807}>Depoimentos</p>
                    <p onClick={scrollTo5758}>Contato</p>
                    <div className='contato'>
                        <h1>Telefones</h1>
                        <p>+55 (11) 3088-0757</p>

                        <h1>E-mail</h1>
                        <p>renee@reneetrajar.com.br</p>
                    </div>
                </MobileMenu>
            }
            
            <S.Header status={headerStatus}>
                <S.Logo>
                    <img src={headerStatus ? logoBlack : logoWhite} alt="Renee Trajar Logo" />
                </S.Logo>

                <img src={menu} alt="" id='menu' onClick={mobileMenu}/>

                <S.Menu>
                    <ul>
                        <li onClick={scrollTo537}>Empresa</li>
                        <li onClick={scrollTo900}>Ternos</li>
                        <li onClick={scrollTo2200}>Camisaria</li>
                        <li onClick={scrollTo3300}>Depoimentos</li>
                        <li onClick={scrollTo3906}>Contato</li>
                    </ul>
                </S.Menu>
            </S.Header>
        </>
    )
}