import styled from 'styled-components';

export const NetworkCalculatorContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NetworkCalculatorH1 = styled.h1`
    text-align: center;
    margin-top: 24px;
`;

export const NetworkCalculatorInputGroup = styled.div`
    margin-bottom: 20px;
`;

export const NetworkCalculatorInputGroupLabel = styled.div`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const NetworkCalculatorInputGroupInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

export const NetworkCalculatorRow = styled.div`
    display: flex;
    align-items: center;
`;

export const NetworkCalculatorColumnLeftBtn = styled.div`
    flex: 50%;
    text-align: right;
    margin-right: 1px;
`;

export const NetworkCalculatorColumnRightBtn = styled.div`
    flex: 50%;
    text-align: left;
    margin-left: 1px;    
`;

export const NetworkCalculatorBtnNetData = styled.button`
    background-color: #007bff;
    color: #fff;
    min-width: 120px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    
    &:hover {
        transition: all 0.1s ease-in-out;
        background: #15cdfc;
    }
`;

export const NetworkCalculatorBtnReset = styled.button`
    background-color: #ff4c4c;
    color: #fff;
    min-width: 120px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: #f96e5a;
    }
`;

export const NetworkCalculatorRowNetData = styled.div`
    display: flex;
    align-items: center;
    //justify-content: center;
`;

export const NetworkCalculatorColumnLeftNetData = styled.div`
    flex: 50%;
    text-align: right;
    margin-right: 1px;
`;

export const NetworkCalculatorColumnRightNetData = styled.div`
    flex: 50%;
    text-align: left;
    margin-left: 1px;    
`;

export const NetworkCalculatorH1Result = styled.h3`
    text-align: center;
    margin-bottom: 12px;
`;

export const NetworkCalculatorDivResult = styled.div`
    display: flex;
    flex-direction: column;   
    text-align: center;
`;

export const NetworkCalculatorRowResult = styled.div`
    display: flex;
    align-items: center;   
`;

export const NetworkCalculatorColumnLeftResult = styled.div`
    flex: 50%;
    text-align: right;
    margin-right: 1px;
    font-weight: bold;
`;

export const NetworkCalculatorColumnRightResult = styled.div`
    flex: 50%;
    text-align: left;
    margin-left: 1px;    
`;