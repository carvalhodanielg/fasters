import styled from 'styled-components'


export const About = styled.section`
    min-height: 560px;
    background-color: #fff;
    padding: 55px 10px;
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    
    .photo{
        display: flex;
    }

    .about{
        display: flex;
        flex-direction: column;
        justify-content: space-between ;  
        width: 600px; 

        h1{
            font-family: 'Cormorant', sans-serif;
            font-weight: 400;
            font-size: 38px;
            color: #014561;
        }
        
        .line{
            position: absolute;
            height: 1px;
            background-color: black;
            width: 300px; 
        }

        p{
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            color: #333333;
            font-size: 19px;
            
            #quoteAuthor{
                font-family: 'Cormorant', sans-serif;
                font-weight: 500;
                font-size: 20px;
                color: #828282; 
                text-align: right;
                text-align: right;
            }

            img{
                position: relative;
                right: 100px;
            }
        }

        q{
            font-family: 'Cormorant', sans-serif;
            font-weight: 400;
            font-size: 24px;
            color: #1C86A4;
            font-style: italic;
        }

    }
`