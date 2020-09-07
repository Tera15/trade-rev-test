import styled from 'styled-components';

export const ImageGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-template-rows: 1fr;
    margin: 5rem;
    padding: 5px;
    object-fit: contain;
    @media screen and (max-width: 740px) {
        grid-template-columns: 1fr;
        margin: unset;  
        padding: 20px;
    }
    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr 1fr; 
        margin: 2.5rem;
    }
    @media screen and (max-height: 500px){
     margin: unset;
     justify-items: center;
    }
`;


export const Modal = styled.section`
   
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    color: rgba(0,0,0, 0.5 );
    display: ${props => props.modalState ? 'block' : 'none'};
    background: #171717 url(${props => props.url}) no-repeat center center;
    background-size: contain;
    @media screen and (max-width: 800px){
        background: #171717  url(${props => props.phoneUrl}) center center no-repeat;
    }
    .button-container{
        color: rgba(255,255,255, 0.9 );
        position: relative;
        top: 54.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      @media screen and (max-width: 800px) {
        top: 75%;
      }
      @media screen and (max-height: 500px){
     margin: unset;
     top: 58%;
    }
    }
    button{
            color: white;
            margin: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            &:hover{
                cursor: pointer;
            }
        }
    h4{
        background: rgba(0,0,0, 0.2 );        
    }
`;