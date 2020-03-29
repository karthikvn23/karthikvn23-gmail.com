import React, { Component } from 'react';
import Constants from 'expo-constants';
import Quiz_iOS from './QuizRun';
import { setNotification, clearLocalNotification } from '../utils/notify';

export class Quiz extends Component {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title', '');
        return {
            title: `${title} Quiz`,
        };
    };
    componentDidMount() {
        clearLocalNotification().then(setNotification);
    }
    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', '');

        return <Quiz_iOS title={title} />;
    }
}

export default Quiz;
