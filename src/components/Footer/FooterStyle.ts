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

    #top{
        height: 40px;
        width: 40px;
        cursor: pointer;
    }


    #copy{
        margin-top: 60px;
        margin-left: 350px;
        color: #4F4F4F;
    }

    #whats{
        position: fixed;
        z-index: 99;
        bottom: 180px;
        right: 31px;
        cursor: pointer;
    }

`