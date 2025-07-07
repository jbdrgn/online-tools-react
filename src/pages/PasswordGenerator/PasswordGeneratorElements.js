import styled from 'styled-components';

export const PasswordGeneratorContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PasswordGeneratorH1 = styled.h1`
    text-align: center;
    margin-top: 24px;
`;

export const PasswordGeneratorRow = styled.div`
    display: flex;
`;

export const PasswordGeneratorColumn = styled.div`
    flex: 50%;
`;

export const PasswordGeneratorSelectGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const PasswordGeneratorInputGroup = styled.div`
    margin-bottom: 15px;
`;

export const PasswordGeneratorLabel = styled.label`
    color: #555;
    display: block;
    margin-bottom: 5px;
`;

export const PasswordGeneratorResultDiv = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export const PasswordGeneratorResultStrong = styled.strong`
    display: block;
    margin-bottom: 10px;
    color: #333;
`;

export const PasswordGeneratorResultP = styled.p`
    font-size: 18px;
    color: #555;
    word-break: break-all;
`;

export const PasswordGeneratorInputTypeNumber = styled.input`
    font-size: 18px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const PasswordGeneratorInputTypeCheckbox = styled.input`
    margin-right: 1px;
`;

export const PasswordGeneratorBtnGenerate = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
    background-color: #256ce1;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: #15cdfc;
    }
`;

export const PasswordGeneratorBtnReset = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #ff4c4c;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: #f96e5a;
    }
`;

export const PasswordGeneratorCopyPasswordBtn = styled.button`
    display: block;
    width: 100%;
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