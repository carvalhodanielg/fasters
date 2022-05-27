import * as S from './Depoimentos Style'
import { depoimentos } from '../../helpers/depoimentos'
import left from '../../assets/images/depoimentos/left.png'
import right from '../../assets/images/depoimentos/right.png'
import { useState } from 'react'


export const Depoimentos = () => {

    const [index, setIndex] = useState<number>(0);

    const handleClickRight = () => {

        if(index === (depoimentos.length-1)){
            setIndex(0);
        }else{
            setIndex(index+1) 
        }
        
    }

    return (
        <S.Depoimentos index={index}>
            <h1>Depoimentos</h1>

            <img id='foto' src={depoimentos[index].foto} alt="" />

            <div className='text'>
                <img className='arrow' src={left} alt="" />
                
                <div className='depoimento'>
                    <p>{depoimentos[index].depoimento}</p>
                </div>
                
                <img className='arrow' src={right} alt="" onClick={handleClickRight}/>
            </div>

            <p id='nome'>{depoimentos[index].nome}</p>
            <p id='profissao'>{depoimentos[index].profissao}</p>

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