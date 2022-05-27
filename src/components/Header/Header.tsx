import * as S from './HeaderStyle'
import logoWhite from '../../assets/images/logo-white.png'
import logoBlack from '../../assets/images/logo-black.png'
import { useEffect, useState } from 'react';



export const Header  = () => {

    const [headerStatus, setHeaderStatus] = useState<boolean>(false);

    const changeHeader = () => {
        window.scrollY > 500 ? setHeaderStatus(true) : setHeaderStatus(false);
    }
  
    useEffect(()=>{
        window.addEventListener('scroll', changeHeader)
    },[])

    return(
        <S.Header status={headerStatus}>
            <S.Logo>
                <img src={headerStatus ? logoBlack : logoWhite} alt="Renee Trajar Logo" />
            </S.Logo>
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
    )
}