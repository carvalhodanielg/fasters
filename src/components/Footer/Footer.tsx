import * as S from './FooterStyle'
import footerLogo from '../../assets/images/footerLogo.png'
import top2 from '../../assets/images/top2.svg'
import whats from '../../assets/images/whats.svg'


export const Footer = () => {

    const handleTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'})

    }



    return(
        <S.Footer>
            <div>
            <img src={footerLogo} alt=""/>
            <p>CNPJ:04.487.685/0001-01</p>
            </div>

            <p id="copy">Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>

            <img id="top" src={top2} alt="" onClick={handleTop}/>
            
            <img src={whats} alt="" id='whats' />

        </S.Footer>
    )
}