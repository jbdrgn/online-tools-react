import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 300px;
    margin: 50px auto;
`;

export const CalculatorH1 = styled.h1`
    text-align: center;
    margin-top: 24px;
`;

export const CalculatorDivDisplay = styled.div`
    background-color: #222;
    color: #fff;
    font-size: 2em;
    text-align: right;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
`;


export const CalculatorDivButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const CalculatorButton = styled.button`
    background-color: #555;
    color: #fff;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:active {
        transition: all 0.1s ease-in-out;
        background-color: #444;
    }

    &:hover {
        transition: all 0.1s ease-in-out;
        background-color: #777;
    }
`;

export const CalculatorButtonGold = styled.button`
    background-color: #e39e2e;
    color: #fff;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:active {
        transition: all 0.1s ease-in-out;
        background-color: #444;
    }

    &:hover {
        transition: all 0.1s ease-in-out;
        background-color: #f9cd69;
    }
`;