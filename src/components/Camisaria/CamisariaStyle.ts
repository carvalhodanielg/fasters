import styled from 'styled-components'
import Button from '../Generic'

export const Camisaria = styled.section<{row: boolean}>`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => (props.row ? 'row-reverse' : 'row')};

    .text{
        height: 65%;
        width: 560px;
        border: 1px solid #E5E5E5;
        
        /* border-left: none; */
        padding-left: 62px;
 

        h1{
            font-family: 'Cormorant', serif;
            font-weight: 300;
            font-size: 62px;
            color: #014561;
            text-transform: uppercase;
            margin-top: 57px;
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

        .lista1{
            margin-right: 60px;
            margin-left: 20px;
        }

    }
`
