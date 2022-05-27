import styled from 'styled-components'


export const Footer = styled.footer`
    height: 174px;
    border-top: 1px solid #BE9667;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 150px;

    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #BDBDBD;

    @media(max-width: 1200px){
        /* display: none; */
        flex-direction: column;
        padding: 30px 0;
    }

    #top{
        height: 40px;
        width: 40px;
        cursor: pointer;
        @media(max-width: 1200px){
            align-self: flex-end;
            margin: 0 20px 20px 0;
        /* display: none; */
    }
    }


    #copy{
        margin-top: 60px;
        margin-left: 350px;
        color: #4F4F4F;
        @media(max-width: 1200px){
            margin: 0;
            text-align: center;
        }
    }

    #whats{
        position: fixed;
        z-index: 99;
        bottom: 180px;
        right: 31px;
        cursor: pointer;
        
        @media(max-width: 1200px){
        /* display: none; */
    }
    }

`