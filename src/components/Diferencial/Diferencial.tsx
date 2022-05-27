import * as S from './DiferencialStyle'
import maq from '../../assets/images/maq.png'
import medal from '../../assets/images/medal.png'
import exp from '../../assets/images/exp.png'

export const Diferencial = () => {
    return(
        <S.Diferencial>
            <S.DifItem>
                <img src={maq} alt="" />
                <h3>Qualidade</h3>
                <p>Camisaria e Alfaiataria 100% artesanal.</p>
            </S.DifItem>

            <S.DifItem>
                <img src={medal} alt="" />
                <h3>Confiança</h3>
                <p>Atendimento personalizado no escritório ou residência.</p>
            </S.DifItem>

            <S.DifItem>
                <img src={exp} alt="" />
                <h3>Experiência</h3>
                <p>Tradição e modernidade proporcionando elegância.</p>
            </S.DifItem>
        </S.Diferencial>
    )
}