import styled from 'styled-components'


export const Contato = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    padding: 50px 150px;

    @media(max-width: 1200px){
       padding: 50px 50px;
       justify-content: center;
    }

    h1{
        font-family: 'Cormorant', sans-serif;
        font-weight: 300;
        font-size: 38px;
        color: #1C86A4;
        margin-bottom: 50px;
    }

    .wrapper{
        display: flex;
        flex-wrap: wrap-reverse;

        @media(max-width: 1200px){
            padding: 50px 0px;
            align-items: center;
        }
    }


    .info{
        width: 400px;
        text-align: left;

        @media(max-width: 1200px){
            text-align: center;
            margin: 40px auto;
            width: 100%;
         }

        h2{
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 18px;
                text-transform: uppercase;
                color: #1C86A4;
                margin-bottom: 8px;
        }

        p{
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            font-size: 16px;
            color: #828282;
            margin-bottom: 17px;;
        } 


        .infoCall{
            margin-top: 60px;

            button{
                cursor: pointer;
                margin-top: 14px;
                width: 270px;
                height: 50px;
                background-color: #fff;
                color: #1C86A4;
                border: 1px solid #1C86A4;
                border-radius: 2px;
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 18px;

                :hover{
                    color: #BE9667;
                    border: 1px solid #BE9667;
                }
            }
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        margin-left: 120px;
        flex: 1;

        @media(max-width: 1200px){
        margin-left: 0;
         }

        .control{
            display: flex;
            flex-direction: column;

            &:focus-within{
                .label{
                    color: #1C86A4;
                }

                input{
                    color: transparent;
                }
            }

        }

        .formInputs{
            text-align: left;
            display: flex;
            flex-direction: column;

            label{
                color: black;
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 12px;
                color: transparent;
                transition: ease-in-out .5s;
                opacity: 1;

                :focus-within{
                    color: blue;
                    opacity: 0;
                }

            }

            input{
                border: 1px solid #1C86A4;
                height: 42px;
                margin-bottom: 18px;
                border-radius: 3px;
                
                :focus{
                    outline: none;
                    border: 1px solid #E0E0E0;

                    ::placeholder{
                        color: transparent;
                    }
                }


            }

            textarea{
                border: 1px solid #1C86A4;
                height: 77px;;
                margin-bottom: 18px;
                border-radius: 3px;
                resize: none;
                :focus{
                    outline: none;
                    border: 1px solid #E0E0E0;
                } 

            }
        }

        button{
                cursor: pointer;
               height: 50px;
               background-color: #014561;
               font-family: 'Lato', sans-serif;
               font-weight: 300;
               font-size: 18px;
               color: #fff;
               border-radius: 2px;

               :hover{
                background-color: #00648C;
               }
            }
    }



`