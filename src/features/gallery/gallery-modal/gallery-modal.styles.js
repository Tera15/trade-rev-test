import styled from 'styled-components';


export const ModalContainer = styled.section`
position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 1fr;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    overflow-x: scroll;
    object-fit: scale-down;
    grid-gap: 0.5rem;
    scroll-snap-type:  x mandatory;
    
   .back{
    position: fixed;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
   }
   .forward{
    position: fixed;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
   }
   }

   
`;  


