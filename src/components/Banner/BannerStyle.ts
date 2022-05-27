import styled from 'styled-components'
import mainBanner from '../../assets/images/main-banner.png'

export const Banner = styled.section`
    height: 630px;
    width: 100%;
    background-image: url(${mainBanner});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media(max-width: 1200px){
        background-size: cover;
        height: fit-content;
        margin: 0 auto;
    }
`

export const MainArea = styled.div`
    height: fit-content;
    width: fit-content;
    color: white;
    margin-left: 98px;
        
        @media(max-width: 1200px){
            margin-left: 0;
            align-self: center;
        }


        #first{
            color: #BE9667;
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: 400;
            font-size: 32px;
            @media(max-width: 1200px){
                font-size: 28px;
            }
        }
        #second{
            color: #024B68AD;
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 90px;
            text-transform: uppercase;
            @media(max-width: 1200px){
                font-size: 72px;
            }
        }
        #third{
            color: #BE9667;
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: 400;
            font-size: 32px;
            text-align: right;
            @media(max-width: 1200px){
                font-size: 28px;
            }
        }
`

export const SecondaryArea = styled.div`
        height: 200px;
        color: white;
        margin: 66px 0 0 98px;

            @media(max-width: 1200px){
                text-align: center;
            margin: 20px 0;

            }   

            p{
                font-family: 'Lato', sans-serif;
                font-size: 24px;
                margin-bottom: 25px;
                text-transform: uppercase;
                font-weight: 300;
                
                @media(max-width: 1200px){
                font-size: 22px;;
            }

                span{
                    font-weight: 400;
                }
            }


`