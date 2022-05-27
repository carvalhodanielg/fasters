import styled from 'styled-components'
import promoImg from '../../assets/images/promoImg.png'
import { Button } from '../Generic/ButtonStyle'


export const Promo = styled.section`
    height: 100%;
    width: 100%;
    height: 568px;
    background-image: url(${promoImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 170px;

    @media(max-width: 1200px){
        height: fit-content;
        padding-bottom: 50px;
    }

    .text{
        color: white;
        margin-right: 30px;

        h1{
            font-family: 'Cormorant', serif;
            font-size: 53px;
            font-weight: 400;
            color: #BE9667;
            text-transform: uppercase;
        }

        h2{
            font-family: 'Cormorant', serif;
            font-size: 30px;
            font-weight: 400;
            color: #BE9667;
            margin-top: 37px;
            font-style: italic;
            
        }

        p{
            margin-top: 20px;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            font-size: 22px;
            color: #C4C4C4;

            &::before{
                content: '- '
            }
        }

        
        
    }

    .photo{
            @media(max-width: 1200px){
                 display: none;
             }
        }
    
`

export const PromoButton = styled(Button)`
    background-color: #BE9667;
    margin-top: 65px;

    &:hover{
        background-color: #727272;
    }
`