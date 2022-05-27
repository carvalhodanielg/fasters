import * as S from './AboutStyle'
import trajarPhoto from '../../assets/images/reneePhoto.png'
import quoteSimbol from '../../assets/images/quoteSimbol.png'
import Button from '../Generic'

export const About = () => {
    return(
        <S.About>
            <div className='photo'>
                <img src={trajarPhoto} alt="" />
            </div>
            <div className='about'>

                <div className='title'>
                    <h1>Renee Trajar</h1>
                    <div className='line'></div>
                </div>
                
                <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. <br/> <br/>
                Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                </p>
                
                <p>
                    {/* <img src={quoteSimbol} alt="" /> */}

                    <q>
                    Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um 
                    relacionamento franco e honesto, valorizando o ser humano.  
                    </q> 
                    <br/>
                    
                    <p id='quoteAuthor'>Renee Trajar</p>
                    
                </p>
                
                
                
                <Button>Agende uma visita!</Button>
            </div>
        </S.About>
    )
}