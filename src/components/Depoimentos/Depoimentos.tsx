import * as S from './Depoimentos Style'
import { depoimentos } from '../../helpers/depoimentos'
import left from '../../assets/images/depoimentos/left.png'
import right from '../../assets/images/depoimentos/right.png'


export const Depoimentos = () => {
    return (
        <S.Depoimentos>
            <h1>Depoimentos</h1>

            <img id='foto' src={depoimentos[0].foto} alt="" />

            <div className='text'>
                <img className='arrow' src={left} alt="" />
                
                <div className='depoimento'>
                    <p>{depoimentos[0].depoimento}</p>
                </div>
                
                <img className='arrow' src={right} alt="" />
            </div>

            <p id='nome'>{depoimentos[0].nome}</p>
            <p id='profissao'>{depoimentos[0].profissao}</p>

            <div className='seletor'>
                <svg id='1' width="10" height="10">
                    <circle cx="5" cy="5" r="5"/>
                </svg>

                <svg  id='2' width="10" height="10">
                    <circle cx="5" cy="5" r="5"/>
                </svg>

                <svg  id='3' width="10" height="10">
                    <circle cx="5" cy="5" r="5"/>
                </svg>

                <svg  id='4' width="10" height="10">
                    <circle cx="5" cy="5" r="5"/>
                </svg>

                <svg  id='5' width="10" height="10">
                    <circle cx="5" cy="5" r="5"/>
                </svg>  
            </div>
        </S.Depoimentos>
    )
}