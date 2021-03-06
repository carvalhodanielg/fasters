import styled from 'styled-components'
import backCarousel from '../../assets/images/backCarousel.png'

export const Depoimentos = styled.section<{index: number}>`
    height: 608px;
    background-image: url(${backCarousel});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 62px 0;

    @media(max-width: 1200px){
        height: fit-content;
        padding: 20px 0;
    }

    h1{
        font-family: 'Cormorant', serif;
        font-weight: 300;
        font-size: 38px;
        color: #F2F2F2;
        margin-bottom: 53px;

        
    }

    #foto{
        border: 1px solid #BE9667;
        border-radius: 50%;
        height: 121px;
        width: 121px;
    }

    .text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 150px;

        @media(max-width: 1200px){
            margin: 0 50px;;
        }

        .depoimento{
            width: 80%;
            height: 150px;
            font-family: 'Cormorant', serif;
            font-weight: 300;
            font-size: 26px;
            color: #C4C4C4;
            font-style: italic;
            margin-top: 16px;

            @media(max-width: 1200px){
                 height: 300px;;
            }

            @media(max-width: 400px){
                 height: 520px;;
            }
        }  
    }

    #nome{
            font-family: 'Cormorant', serif;
            font-weight: 400;
            font-size: 20px;; 
            color: #BE9667;
            text-transform: uppercase;
            margin-top: 14px;
        }

        #profissao{
            font-family: 'Lato', serif;
            font-weight: 300;
            font-size: 14px;; 
            color: #949494;
            margin-top: 5px; 
        }
        
        .arrow{
            cursor: pointer;
        }

        .seletor{
            margin-top: 32px;
            svg{
                cursor: pointer;
                border: 1px solid #014561;
                border-radius: 50%;
                fill: transparent;
                margin: 20px;
                
                &:nth-child(${props => props.index}){
                    fill: #014561;
                }
            }
        }
`