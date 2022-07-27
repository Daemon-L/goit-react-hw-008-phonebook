import styled from 'styled-components';
import img from './images/simple-white.webp';

export const Container = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    background-image: url(${img});
    background-position: center;
    background-size: cover;
`;