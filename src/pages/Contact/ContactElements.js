import styled from 'styled-components';

export const ContactContainer = styled.div`
    max-width: 400px;
    padding: 20px;
    text-align: center;
    margin-top: 240px;
    margin-left: auto;
    margin-right: auto;
`;

export const ContactEmail = styled.h1`
    color: black;
    text-align: center;
    margin-bottom: 24px;

    &:hover {
        transition: all 0.1s ease-in-out;
        color: #256ce1;
    }
`;

export const ContactRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactCopyPasswordBtn = styled.button`
    display: block;
    min-width: 210px;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    background-color: #fff;
    color: black;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        transition: all 0.1s ease-in-out;
        background-color: #d9dada;
    }
`;