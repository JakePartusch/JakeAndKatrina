import React, { Component } from 'react';
import styled from 'react-emotion'

const FooterContainer = styled('div')({
    backgroundColor: '#1B1C1D'
});

const FooterMessage = styled('div')({
    paddingTop: '1em',
    paddingBottom: '1em',
    marginLeft: '0.25em',
    color: '#FFF',
    textAlign: 'center'
})

export default class Footer extends Component {

    render() {
        return (
            <FooterContainer>
                <FooterMessage>Made for Katrina, by Jake. Darling, you and I are Soulmates. ❤️</FooterMessage>
            </FooterContainer>
        )
    }
}