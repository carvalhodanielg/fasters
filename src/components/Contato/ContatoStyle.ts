import styled from 'styled-components'


export const Contato = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    padding: 50px 150px;

    h1{
        font-family: 'Cormorant', sans-serif;
        font-weight: 300;
        font-size: 38px;
        color: #1C86A4;
        margin-bottom: 50px;
    }

    .wrapper{
        display: flex;
    }

    .info{
        width: 400px;
        text-align: left;

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

        .formInputs{
            text-align: left;
            display: flex;
            flex-direction: column;

            label{
                color: black;
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 12px;
                color: #1C86A4;

            }

            input{
                border: 1px solid #1C86A4;
                height: 42px;
                margin-bottom: 18px;
                border-radius: 3px;
                
                :focus{
                    outline: none;
                    border: 1px solid #E0E0E0;
                }

            }

            textarea{
                border: 1px solid #1C86A4;
                height: 77px;;
                margin-bottom: 18px;
                border-radius: 3px;
                
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