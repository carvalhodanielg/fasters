import styled from "styled-components";


export const MobileMenu = styled.aside`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
    background-color: #013145;
    padding: 5px 40px;
    transition: ease-in-out 0.3s;

    text-align: center;

    .close{
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    p{
        font-family: 'Lato', sans-serif;
        color: #BE9667;
        text-transform: uppercase;
        font-size: 26px;
        font-weight: 300;
        margin-bottom: 43px;
    }

    .contato{
        margin-top: 150px;

        h1{
            font-family: 'Lato', sans-serif;
            color: #1C86A4;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 300;
            
        }

        p{
            font-family: 'Lato', sans-serif;
            color: #828282;
            font-size: 18px;
            font-weight: 300;

        }
    }


`