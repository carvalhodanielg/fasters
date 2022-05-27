import * as S from '../Camisaria/CamisariaStyle'
import camisaria from '../../assets/images/camisaria1.png'
import alfaiataria from '../../assets/images/alfaiataria.png'
import Button from '../Generic'

export const Alfaiataria = () => {

    return(
        <S.Camisaria row={true}>
            <div>
                <img src={alfaiataria} alt="" />
            </div>
            <div className='text'>
                <h1>Alfaiataria</h1>
                <h2>totalmente  feito a mão  sob medida</h2>
                <div className='listas'>
                    <ul className='lista1'>
                        <li>Fio Super 120 e 130 </li>
                        <li>Lã fria Australiana</li>
                        <li>Botões Importados</li>
                    </ul>
                    <ul className='lista2'>
                        <li>Ternos e Calças</li>
                        <li>Paletós e Smokings</li>
                        <li>Sociais e Esportivos</li>
                    </ul>
                </div>

                <Button>Quero um orçamento</Button>
            </div>
        </S.Camisaria>
    )
}





