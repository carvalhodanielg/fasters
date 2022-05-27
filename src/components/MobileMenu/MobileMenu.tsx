import * as S from './MobileMenuStyle'

export const MobileMenu = () => {
    return(
        <S.MobileMenu>
            <span>X</span>
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
        </S.MobileMenu>
    )
}