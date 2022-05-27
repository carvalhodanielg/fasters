import * as S from './PromoStyle'
import promoClothe from '../../assets/images/promoClothe.png'
import Button from '../Generic'

export const Promo = () => {
    return(

            <S.Promo>
                <div className='text'>
                    <h1>Condição Imperdível</h1>
                    <h2>Compre hoje e garanta:</h2>
                    <p>Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;</p>
                    <p>Condição muito especial por tempo limitado;</p>
                    <p>Poder presentear alguém com uma roupa de alta costura, exclusiva.</p>
                    
                    <S.PromoButton status={false}>Garanta essa condição especial!</S.PromoButton>
                
                </div>
                <div className='photo'>
                    <img src={promoClothe} alt="" />
                </div>
            </S.Promo>

    )
}