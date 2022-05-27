import styled from 'styled-components'
import Button from '../Generic'

export const Camisaria = styled.section<{row: boolean}>`
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => (props.row ? 'row-reverse' : 'row')};
    flex-wrap: wrap;
    
        @media(max-width: 1200px){
           margin: 0 auto;
         }
   
    .text{
        height: 60%;
        width: 560px;
        border: 1px solid #E5E5E5;
        padding-bottom: 40px;
        /* border-left: none; */
        padding-left: 62px;

        @media(max-width: 1200px){
                border: none;
                padding-left: 30px;;
             }

        h1{
            font-family: 'Cormorant', serif;
            font-weight: 300;
            font-size: 62px;
            color: #014561;
            text-transform: uppercase;
            margin-top: 57px;

            @media(max-width: 1200px){
                font-size: 50px;
            }
        }

        h2{
            font-family: 'Lato', serif;
            font-weight: 400;
            font-size: 16px;
            color: #C4C4C4;
            text-transform: uppercase;
            margin-bottom: 30px;
        }
    }

    .listas{
        display: flex;
        font-family: 'Cormorant', serif;
        font-weight: 400;
        font-size: 24px;
        color: #727272;
        font-style: italic;
        line-height: 29px;
        margin-bottom: 34px;


            @media(max-width: 1200px){
                 flex-direction: column;
                 padding-left: 40px;
             }


        .lista1{
            margin-right: 60px;
            margin-left: 20px;

            @media(max-width: 1200px){
                 flex-direction: column;
                 margin: 0;
             }
        }

    }


    #photo{
        
        @media(max-width: 1200px){
            margin-top: 30px;
            display: flex;
            justify-content: center;
           
         }

         img{
            @media(max-width: 1200px){
            
            width: 80%;
         } 
        }
    }
`
