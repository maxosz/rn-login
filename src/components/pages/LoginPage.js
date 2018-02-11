import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginForm from '../forms/LoginForm'

//const LoginPage = () => <Text>Login Page</Text>

class LoginPage extends React.Component {
    render() {
        return (
            <LoginForm />
        );
    }
}

export default LoginPage;