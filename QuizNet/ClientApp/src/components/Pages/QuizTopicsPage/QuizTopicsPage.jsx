﻿import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizTopicsPage.module.css'
import { TopicItem } from './TopicItem/TopicItem';

class QuizTopicsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { topics: [] };

    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ topics: data });
        }).bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        let tes = 'История';
        let topics = this.state.topics.map(t => <TopicItem text={t} link={`${this.props.apiUrl}/${t}`}/>)
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        topics.push(<TopicItem text ="История" link = {`${this.props.apiUrl}/${tes}`}/>);
        return <div className={s.quizTopicsPage}>
            {
                topics
            }
        </div>
    }
}


export default QuizTopicsPage;