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
    @media screen and (max-height: 800px){
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
        opacity: 0;
        height: 100%;
        width: 75%;
        color: rgba(255,255,255, 0.9 );
        position: absolute;
        left: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s ease-in-out;
        &:hover{
            opacity: 100%;
        }
      @media screen and (max-width: 800px) {
        left: unset;
        width: 100%;
      }
      @media screen and (max-height: 800px){
        margin: unset;
        left: unset;
        width: 100%;
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