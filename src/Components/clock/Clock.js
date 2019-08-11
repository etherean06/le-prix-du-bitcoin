import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
            <div>
               
                <p className="reward">Le 17 Mai 2020</p>
                <p>{this.leading0(this.state.days)} Jours {this.leading0(this.state.hours)} Heures {this.leading0(this.state.minutes)} Min {this.leading0(this.state.seconds)} Secs</p>
            </div>
        );
    }
}
export default Clock;
