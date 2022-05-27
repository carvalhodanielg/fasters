import * as S from './DepoimentoStyle'
import nelson1 from '../../assets/images/nelson-1.png'
import nelson2 from '../../assets/images/nelson-2.png'

export const Depoimento = () => {
    return(
        <S.Depoimento>
            <div className='text'>
                <q>Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em 
                    todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!
                </q>
                <p>
                Nelson Garey
                </p>
                <p>
                Advogado  |  Nelson Garey Advogados Associados
                </p>
            </div>
            <div className='photos'>
                <img id="nelson1" src={nelson1} alt="" />
                <img id="nelson2" src={nelson2} alt="" />

            </div>
            
        </S.Depoimento>
    )
}