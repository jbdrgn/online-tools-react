import React, { Component } from 'react';
import { ToastContainer as Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //styles to Toast
import { capitalizeName } from '../../utils';
import {
    PasswordGeneratorContainer,
    PasswordGeneratorH1,
    PasswordGeneratorInputGroup,
    PasswordGeneratorInputTypeNumber,
    PasswordGeneratorInputTypeCheckbox,
    PasswordGeneratorLabel,
    PasswordGeneratorCopyPasswordBtn,
    PasswordGeneratorBtnGenerate,
    PasswordGeneratorBtnReset,
    PasswordGeneratorResultDiv,
    PasswordGeneratorResultP,
    PasswordGeneratorColumn,
    PasswordGeneratorRow,
    PasswordGeneratorSelectGroup
} from './PasswordGeneratorElements';
import {
    CHECKBOX,
    DEFAULT_TOAST_AUTOCLOSE,
    GENERATE,
    GENERATED,
    GENERATOR,
    LENGTH,
    LOWERCASE_LIST,
    NUMBER,
    NUMBERS_LIST,
    PASSWORD,
    RESET,
    SYMBOLS_LIST,
    UPPERCASE_LIST
} from '../../constants/GeneralConstants';

class PasswordGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            length: 12,
            isUppercase: true,
            isLowercase: true,
            isNumbers: true,
            isSymbols: true,
        };
    }

    copyToClipboard = () => {
        const { password } = this.state;
        navigator.clipboard.writeText(password).then(() => {
            console.log('Password copied to clipboard!');
            //this.showToast('✅ Password copied to clipboard! ✅')
        }).catch(err => {
            console.error('Failed to copy: ', err);
            //this.showToast('❌ Failed to copy the password ❌')
        });
    };

    generatePassword = () => {
        const { length, isUppercase, isLowercase, isNumbers, isSymbols } = this.state;
        let charset = '';
        if (isUppercase) charset += UPPERCASE_LIST;
        if (isLowercase) charset += LOWERCASE_LIST;
        if (isNumbers) charset += NUMBERS_LIST;
        if (isSymbols) charset += SYMBOLS_LIST;

        if (charset.length === 0) {
            return 'Please select at least one character type';
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        this.setState({ password });
    };

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === CHECKBOX ? checked : value;
        this.setState({ [name]: newValue });
    };


    resetPassword = () => {
        let password = '';
        this.setState({ password });
    };

    showToast = (text) => {
        toast.success(
            <div>{text}</div>,
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: DEFAULT_TOAST_AUTOCLOSE,
                closeOnClick: true,
                icon: false,
                hideProgressBar: true
            }
        );
    }

    render() {
        return (
            <>
                <PasswordGeneratorH1>
                    {capitalizeName(PASSWORD)} {capitalizeName(GENERATOR)}
                </PasswordGeneratorH1>
                <PasswordGeneratorContainer>
                    <PasswordGeneratorSelectGroup>
                        <PasswordGeneratorLabel>
                            Password Length:
                            &nbsp;
                            <PasswordGeneratorInputTypeNumber
                                type={NUMBER}
                                name={LENGTH}
                                value={this.state.length}
                                onChange={this.handleChange}
                                min="1"
                                max="100"
                            />
                        </PasswordGeneratorLabel>
                    </PasswordGeneratorSelectGroup>

                    <PasswordGeneratorRow>
                        <PasswordGeneratorColumn>
                            <PasswordGeneratorInputGroup>
                                <PasswordGeneratorLabel>
                                    <PasswordGeneratorInputTypeCheckbox
                                        type={CHECKBOX}
                                        name="isUppercase"
                                        checked={this.state.isUppercase}
                                        onChange={this.handleChange}
                                    />
                                    &nbsp;
                                    Include Uppercase
                                </PasswordGeneratorLabel>
                            </PasswordGeneratorInputGroup>
                        </PasswordGeneratorColumn>

                        <PasswordGeneratorColumn>
                            <PasswordGeneratorInputGroup>
                                <PasswordGeneratorLabel>
                                    <PasswordGeneratorInputTypeCheckbox
                                        type={CHECKBOX}
                                        name="isLowercase"
                                        checked={this.state.isLowercase}
                                        onChange={this.handleChange}
                                    />
                                    &nbsp;
                                    Include Lowercase
                                </PasswordGeneratorLabel>
                            </PasswordGeneratorInputGroup>
                        </PasswordGeneratorColumn>
                    </PasswordGeneratorRow>

                    <PasswordGeneratorRow>
                        <PasswordGeneratorColumn>
                            <PasswordGeneratorInputGroup>
                                <PasswordGeneratorLabel>
                                    <PasswordGeneratorInputTypeCheckbox
                                        type={CHECKBOX}
                                        name="isNumbers"
                                        checked={this.state.isNumbers}
                                        onChange={this.handleChange}
                                    />
                                    &nbsp;
                                    Include Numbers
                                </PasswordGeneratorLabel>
                            </PasswordGeneratorInputGroup>
                        </PasswordGeneratorColumn>

                        <PasswordGeneratorColumn>
                            <PasswordGeneratorInputGroup>
                                <PasswordGeneratorLabel>
                                    <PasswordGeneratorInputTypeCheckbox
                                        type={CHECKBOX}
                                        name="isSymbols"
                                        checked={this.state.isSymbols}
                                        onChange={this.handleChange}
                                    />
                                    &nbsp;
                                    Include Symbols
                                </PasswordGeneratorLabel>
                            </PasswordGeneratorInputGroup>
                        </PasswordGeneratorColumn>
                    </PasswordGeneratorRow>

                    <PasswordGeneratorBtnGenerate onClick={this.generatePassword}>
                        {capitalizeName(GENERATE)} {capitalizeName(PASSWORD)}
                    </PasswordGeneratorBtnGenerate>

                    <PasswordGeneratorBtnReset onClick={this.resetPassword}>
                        {capitalizeName(RESET)}
                    </PasswordGeneratorBtnReset>

                    <PasswordGeneratorResultDiv>
                        {
                            this.state.password ?
                                <PasswordGeneratorResultP>
                                    {capitalizeName(GENERATED)} {capitalizeName(PASSWORD)}:
                                    <br />
                                    {this.state.password}
                                    <PasswordGeneratorCopyPasswordBtn onClick={() => {
                                        this.copyToClipboard();
                                        this.showToast('Password copied to clipboard!')
                                    }}>
                                        Copy Password
                                    </PasswordGeneratorCopyPasswordBtn>
                                </PasswordGeneratorResultP>
                                : <div></div>
                        }
                    </PasswordGeneratorResultDiv>
                </PasswordGeneratorContainer>
                <Toast toastStyle={{ textAlign: "center", color: "white", backgroundColor: "green" }} />
            </>
        );
    }
}

export default PasswordGenerator;