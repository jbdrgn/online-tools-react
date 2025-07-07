import React, { Component } from 'react';
import { capitalizeName } from '../../utils';
//import './NetworkCalculator.css'; // Import the CSS file for styling
import {
    NetworkCalculatorColumnLeftBtn,
    NetworkCalculatorColumnLeftResult,
    NetworkCalculatorColumnRightBtn,
    NetworkCalculatorColumnRightResult,
    NetworkCalculatorContainer,
    NetworkCalculatorDivResult,
    NetworkCalculatorH1,
    NetworkCalculatorH1Result,
    NetworkCalculatorInputGroup,
    NetworkCalculatorInputGroupInput,
    NetworkCalculatorInputGroupLabel,
    NetworkCalculatorBtnNetData,
    NetworkCalculatorBtnReset,
    NetworkCalculatorRow,
    NetworkCalculatorRowResult,
} from './NetworkCalculatorElements';
import { CALCULATOR, DATA, DEFAULT_CIDR, DEFAULT_IP_ADDRESS, NET, NETWORK, RESET } from '../../constants/GeneralConstants';

class NetCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipAddress: DEFAULT_IP_ADDRESS,
            cidr: DEFAULT_CIDR,
            networkAddress: '',
            broadcastAddress: '',
            firstUsableHost: '',
            lastUsableHost: '',
            totalHosts: '',
            usableHosts: '',
            subnetMask: '',
            wildcardMask: '',
            binaryNetmask: '',
            cidrNotation: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    calculateNetInfo = () => {
        const { ipAddress, cidr } = this.state;
        const ipParts = ipAddress.split('.').map(Number);
        const cidrValue = parseInt(cidr, 10);

        if (ipParts.length !== 4 || cidrValue < 0 || cidrValue > 32) {
            alert('Invalid IP address or CIDR value');
            return;
        }

        const subnetMask = (0xffffffff << (32 - cidrValue)) >>> 0;
        const wildcardMask = ~subnetMask & 0xffffffff;
        const ipAddressInt = (ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3];
        const networkAddress = ipAddressInt & subnetMask;
        const broadcastAddress = networkAddress | ~subnetMask;
        const firstUsableHost = networkAddress + 1;
        const lastUsableHost = broadcastAddress - 1;
        const totalHosts = 2 ** (32 - cidrValue);
        const usableHosts = totalHosts - 2;

        this.setState({
            networkAddress: this.ipToString(networkAddress),
            broadcastAddress: this.ipToString(broadcastAddress),
            firstUsableHost: this.ipToString(firstUsableHost),
            lastUsableHost: this.ipToString(lastUsableHost),
            totalHosts,
            usableHosts,
            subnetMask: this.ipToString(subnetMask),
            wildcardMask: this.ipToString(wildcardMask),
            binaryNetmask: this.toBinary(subnetMask),
            cidrNotation: `${ipAddress}/${cidr}`
        });
    };

    ipToString = (ip) => {
        return `${(ip >>> 24) & 0xff}.${(ip >>> 16) & 0xff}.${(ip >>> 8) & 0xff}.${ip & 0xff}`;
    };

    resetNetInfo = () => {
        this.setState({
            ipAddress: DEFAULT_IP_ADDRESS,
            cidr: DEFAULT_CIDR,
            networkAddress: '',
            broadcastAddress: '',
            firstUsableHost: '',
            lastUsableHost: '',
            totalHosts: '',
            usableHosts: '',
            subnetMask: '',
            wildcardMask: '',
            binaryNetmask: '',
            cidrNotation: ''
        });
    }

    toBinary = (num) => {
        const binaryString = num.toString(2).padStart(32, '0');
        return binaryString.match(/.{1,8}/g).join('.');
    };

    render() {
        const {
            ipAddress,
            cidr,
            networkAddress,
            broadcastAddress,
            firstUsableHost,
            lastUsableHost,
            totalHosts,
            usableHosts,
            subnetMask,
            wildcardMask,
            binaryNetmask,
            cidrNotation
        } = this.state;

        return (
            <>
                <NetworkCalculatorH1>
                    {capitalizeName(NETWORK)} {capitalizeName(CALCULATOR)}
                </NetworkCalculatorH1>
                <NetworkCalculatorContainer>
                    <NetworkCalculatorInputGroup>
                        <NetworkCalculatorInputGroupLabel htmlFor="ipAddress">IP Address:</NetworkCalculatorInputGroupLabel>
                        <NetworkCalculatorInputGroupInput
                            type="text"
                            id="ipAddress"
                            name="ipAddress"
                            value={ipAddress}
                            onChange={this.handleInputChange}
                            placeholder="Enter IP address (e.g., 192.168.1.1)"
                        />
                    </NetworkCalculatorInputGroup>
                    <NetworkCalculatorInputGroup>
                        <NetworkCalculatorInputGroupLabel htmlFor="cidr">CIDR:</NetworkCalculatorInputGroupLabel>
                        <NetworkCalculatorInputGroupInput
                            type="number"
                            id="cidr"
                            name="cidr"
                            value={cidr}
                            onChange={this.handleInputChange}
                            placeholder="Enter CIDR (0-32)"
                            min="0"
                            max="32"
                        />
                    </NetworkCalculatorInputGroup>
                    <NetworkCalculatorRow>
                        <NetworkCalculatorColumnLeftBtn>
                            <NetworkCalculatorBtnNetData onClick={this.calculateNetInfo}>
                                {capitalizeName(NET)} {capitalizeName(DATA)}
                            </NetworkCalculatorBtnNetData>
                        </NetworkCalculatorColumnLeftBtn>
                        <NetworkCalculatorColumnRightBtn>
                            <NetworkCalculatorBtnReset onClick={this.resetNetInfo}>
                                {capitalizeName(RESET)}
                            </NetworkCalculatorBtnReset>
                        </NetworkCalculatorColumnRightBtn>
                    </NetworkCalculatorRow>
                </NetworkCalculatorContainer>
                {networkAddress && (
                    <NetworkCalculatorDivResult>
                        <NetworkCalculatorH1Result>{capitalizeName(NETWORK)} {capitalizeName(DATA)}</NetworkCalculatorH1Result>
                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Network Address:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{networkAddress}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Broadcast Address:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{broadcastAddress}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>First Usable Host:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{firstUsableHost}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Last Usable Host:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{lastUsableHost}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Total Hosts:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{totalHosts}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Usable Hosts:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{usableHosts}
                            </NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Subnet Mask:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{subnetMask}
                            </NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Wildcard Mask:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{wildcardMask}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>Binary Netmask:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{binaryNetmask}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                        <NetworkCalculatorRowResult>
                            <NetworkCalculatorColumnLeftResult>CIDR Notation:</NetworkCalculatorColumnLeftResult>
                            <NetworkCalculatorColumnRightResult>{cidrNotation}</NetworkCalculatorColumnRightResult>
                        </NetworkCalculatorRowResult>

                    </NetworkCalculatorDivResult>
                )}
            </>
        );
    }
}

export default NetCalculator;