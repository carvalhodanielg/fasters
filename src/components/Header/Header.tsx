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
                    
                    <p>Empresa</p>
                    <p>Camisaria</p>
                    <p>Alfaiataria</p>
                    <p>Depoimentos</p>
                    <p>Depoimentos</p>


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
                        <li>Empresa</li>
                        <li>Ternos</li>
                        <li>Camisaria</li>
                        <li>Depoimentos</li>
                        <li>Contato</li>
                    </ul>
                </S.Menu>
            </S.Header>
        </>
    )
}