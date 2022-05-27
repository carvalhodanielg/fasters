import styled from 'styled-components'


export const Diferencial = styled.section`
    height: 180px;
    display: flex;
    padding: 50px 0;
    justify-content: center;
`

export const DifItem = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    img{
        width: 36px;
        margin-bottom: 15px;
    }


    h3{
        font-family: 'Cormorant', serif;
        font-size: 24px;
        font-weight: 600;
        color: #1C86A4;
        margin-bottom: 5px;
        text-transform: uppercase;
    }

    p{
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 300;
        color: #727272;
    }

    &:first-child{
        border-right: 1px solid #CCCCCC;
    }

    &:nth-child(2){
        border-right: 1px solid #CCCCCC;
    }

`