import styled from 'styled-components'



export const ImageContainer = styled.img`
    height: 100%;
    width: 100%;
    @media screen and (max-height: 400px){
       max-height: calc(100vh - 120px);
       max-width: calc(100vw - 305px);
    }
`;

