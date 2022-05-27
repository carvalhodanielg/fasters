import { useEffect, useState } from 'react'
import Button from '../Generic'
import * as S from './BannerStyle'


export const Banner = () => {

    return(
        <S.Banner>
            <S.MainArea>
                <p id='first'>Elegante é ter um</p>
                <p id='second'>Alfaiate</p>
                <p id='third'>para chamar de seu.</p>
            </S.MainArea>

            <S.SecondaryArea>
                <p>COMPRE HOJE, <span>PAGUE EM ATÉ 3X  <br/> COM 12% DE DESCONTO </span>E TENHA <br/> 10 MESES PARA CONFECCIONAR!</p>
                <Button banner={true}>Faça já um orçamento</Button>
            </S.SecondaryArea>
        </S.Banner>
    )
}