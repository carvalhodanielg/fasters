import styled from 'styled-components'
import mainBanner from '../../assets/images/main-banner.png'

export const Banner = styled.section`
    height: 630px;
    width: 100%;
    background-image: url(${mainBanner});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const MainArea = styled.div`
height: fit-content;
width: fit-content;
color: white;
margin-left: 98px;


    #first{
        color: #BE9667;
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 32px;
    }
    #second{
        color: #024B68AD;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 90px;
        text-transform: uppercase;
    }
    #third{
        color: #BE9667;
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 32px;
        text-align: right;
    }
`

export const SecondaryArea = styled.div`
    height: 200px;
    color: white;
    margin: 66px 0 0 98px;;

        p{
            font-family: 'Lato', sans-serif;
            font-size: 24px;
            margin-bottom: 25px;
            text-transform: uppercase;
            font-weight: 300;

            span{
                font-weight: 400;
            }
        }


`