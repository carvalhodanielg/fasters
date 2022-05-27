import styled from 'styled-components'
import taylor from '../../assets/images/tailor1.png'

export const Depoimento = styled.section`
    height: 360px;
    display: flex;

    background-color: #EFF7F9;
    background-image: url(${taylor});
    background-repeat: no-repeat;
    background-position: 60%;
    width: 100%;

    .photos{
        /* width: 100%; */
        width: 500px;
        display: flex;
        justify-content: flex-end;
        justify-self: flex-end;
    }
    #nelson1{
        position: relative;
        left: 70px; 
    }
    
    .text{
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 630px;
        margin-left: 170px;
        text-align: center;

        q{
            margin: 90px 0 45px 0;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            font-size: 24px;
            color: #828282;
        }
        
        & :nth-child(2){
            font-family: 'Cormorant', serif; 
            font-size: 28px;
            font-weight: 400;
            color: #014561;
            font-style: italic;
        }

        & :nth-child(3){
            margin-bottom: 55px;
            font-family: 'Lato', sans-serif;
            font-size: 20px;
            font-weight: 300;
            color: #BE9667;
        }
    }



`