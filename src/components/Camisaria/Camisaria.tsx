import * as S from './CamisariaStyle'
import camisaria from '../../assets/images/camisaria1.png'
import Button from '../Generic'

export const Camisaria = () => {

    return(
        <S.Camisaria row={false}>
            <div>
                <img src={camisaria} alt="" />
            </div>
            <div className='text'>
                <h1>Camisaria</h1>
                <h2>confeccionadas artesanalmente</h2>
                <div className='listas'>
                    <ul className='lista1'>
                        <li>100% Algodão</li>
                        <li>Monograma</li>
                        <li>Slim</li>
                    </ul>
                    <ul className='lista2'>
                        <li>Nacionais e Importadas</li>
                        <li>Tradicionais e Esportivas</li>
                        <li>Casamentos</li>
                    </ul>
                </div>

                <Button>Quero um orçamento</Button>
            </div>
        </S.Camisaria>
    )
}