import styled from 'styled-components'

export const Header = styled.header<{status: boolean}>`
    position: fixed;
    height: ${props => (props.status ? '63px' : '111px')};
    width: 100%;
    color: #949494;
    background-image: ${props => (props.status ? 'none' : 'linear-gradient(#000000, #0000)')};
    background-color: ${props => (props.status ? 'white' : 'transparent')};
    color: ${props => (props.status ? '#949494' : '#949494')};
    display: flex;
    align-items: center;
    box-shadow: ${props => (props.status ? '0 5px 15px #00000020' : 'none')};
    z-index: 99;
`

export const Logo = styled.div`
    padding: 31px 45px 31px;
    width:300px;
`

export const Menu = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin: 0 45px 0 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;

    ul{
        display: flex;
        gap: 40px;
        list-style-type: none;

        li{
            cursor: pointer;
            text-transform: uppercase;
            &:hover{
                color: #014561;
                transition: ease-in-out .3s;
            }            
        }
    }
    
`