import React, { Component } from 'react';
import {
    CalculatorButton,
    CalculatorButtonGold,
    CalculatorContainer,
    CalculatorDivButtons,
    CalculatorDivDisplay
} from './CalculatorElements';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            currentInput: '',
            operator: null,
            firstOperand: null,
        };
    }

    handleClick = (value) => {
        const { display, currentInput, operator, firstOperand } = this.state;

        if (value === 'C') {
            this.setState({ display: '0', currentInput: '', operator: null, firstOperand: null });
        } else if (value === '=') {
            if (operator && firstOperand !== null) {
                let result;
                switch (operator) {
                    case '+':
                        result = parseFloat(firstOperand) + parseFloat(currentInput);
                        break;
                    case '-':
                        result = parseFloat(firstOperand) - parseFloat(currentInput);
                        break;
                    case '*':
                        result = parseFloat(firstOperand) * parseFloat(currentInput);
                        break;
                    case '/':
                        result = parseFloat(firstOperand) / parseFloat(currentInput);
                        break;
                    case '±':
                    case '%':
                    case '√':
                    default:
                        result = currentInput;
                }
                this.setState({ display: result.toString(), currentInput: result.toString(), operator: null, firstOperand: null });
            }
        } else if (value === '±') {
            this.setState({
                display: (currentInput.isNaN || currentInput.length === 0) ? value : display + value,
                currentInput: (parseFloat(currentInput) * -1).toString(),
                operator: '±',
                firstOperand: currentInput
            });
        } else if (value === '%') {
            this.setState({
                display: (currentInput.isNaN || currentInput.length === 0) ? value : display + value,
                currentInput: (parseFloat(currentInput) / 100).toString(),
                operator: '%',
                firstOperand: currentInput
            });
        } else if (value === '√') {
            console.log(currentInput)
            this.setState({
                display: (currentInput.isNaN || currentInput.length === 0) ? value : display + value,
                currentInput: Math.sqrt(parseFloat(currentInput)).toString(),
                operator: '√',
                firstOperand: currentInput
            });
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstOperand === null) {
                this.setState({ display: display + value, firstOperand: currentInput, operator: value, currentInput: '' });
            } else {
                let result;
                switch (operator) {
                    case '+':
                        result = parseFloat(firstOperand) + parseFloat(currentInput);
                        break;
                    case '-':
                        result = parseFloat(firstOperand) - parseFloat(currentInput);
                        break;
                    case '*':
                        result = parseFloat(firstOperand) * parseFloat(currentInput);
                        break;
                    case '/':
                        result = parseFloat(firstOperand) / parseFloat(currentInput);
                        break;
                    default:
                        result = currentInput;
                }
                this.setState({ display: display + value, firstOperand: result.toString(), operator: value, currentInput: '' });
            }
        } else {
            if (display === '0') {
                this.setState({ display: value, currentInput: value });
            } else {
                this.setState({ display: display + value, currentInput: currentInput + value });
            }
        }
    };

    render() {
        return (
            <>
                <CalculatorContainer>
                    <CalculatorDivDisplay>{this.state.display}</CalculatorDivDisplay>
                    <CalculatorDivButtons>
                        <CalculatorButton onClick={() => this.handleClick('C')}>C</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('±')}>±</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('%')}>%</CalculatorButton>
                        <CalculatorButtonGold onClick={() => this.handleClick('√')}>√</CalculatorButtonGold>
                        <CalculatorButton onClick={() => this.handleClick('7')}>7</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('8')}>8</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('9')}>9</CalculatorButton>
                        <CalculatorButtonGold onClick={() => this.handleClick('/')}>/</CalculatorButtonGold>
                        <CalculatorButton onClick={() => this.handleClick('4')}>4</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('5')}>5</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('6')}>6</CalculatorButton>
                        <CalculatorButtonGold onClick={() => this.handleClick('*')}>*</CalculatorButtonGold>
                        <CalculatorButton onClick={() => this.handleClick('1')}>1</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('2')}>2</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('3')}>3</CalculatorButton>
                        <CalculatorButtonGold onClick={() => this.handleClick('-')}>-</CalculatorButtonGold>
                        <CalculatorButton onClick={() => this.handleClick('0')}>0</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('.')}>.</CalculatorButton>
                        <CalculatorButton onClick={() => this.handleClick('=')}>=</CalculatorButton>
                        <CalculatorButtonGold onClick={() => this.handleClick('+')}>+</CalculatorButtonGold>
                    </CalculatorDivButtons>
                </CalculatorContainer>
            </>
        );
    }
}

export default Calculator;