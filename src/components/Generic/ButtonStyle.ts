import styled from 'styled-components'

export const Button = styled.button<{status: boolean}>`
    width: 297px;
    height: 50px;
    border-radius: 2px;
    background-color: #014561;
    border: transparent solid 1px;
    color: white;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 100;
    
    &:hover{
        background-color: ${props => (props.status ? 'transparent' : '#013145')};
        border: ${props => (props.status ? '#BE9667 solid 1px' : '#013145 solid 1px ')}; 
        transition: ease-in-out .2s;
    }




`