import styled from 'styled-components';

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 6px;
    /* width: 350px;  */

`;

export const Button = styled.button`
    font-weight: 700;
    border: 2px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    color:#0d6efd;
    margin-left: 16px;
    
    :hover {
        background-color: #0d6efd;
        color:#fff;
    }
`;

export const Text = styled.p`
    margin: 0;
    padding:0px;
    font-size: 18px;
    font-weight: 500;
`;

export const ContactList = styled.ul`
    margin: 24px 0 0 0;
    padding: 0;

`;