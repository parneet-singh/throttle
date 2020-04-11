import React, { Component } from 'react';
import classes from './modal.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



let DateArray = '';
let date = new Date();
let dateArray = date.toString().split(' ');
DateArray = dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3];
class modal extends Component {
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        let stringDate = date.toString();
        dateArray = stringDate.split(" ");
        DateArray = dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3];
        this.setState({
            startDate: date,
            show: true
        });
    };
    CalandarClicked = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className={this.props.showModal ? classes.parentDiv : null}>
                <div className={classes.childDiv} >
                    {
                        this.props.showModal ?
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={classes.customiseTd}>Date</td>
                                            <td className={classes.customiseTd}>Start Time</td>
                                            <td className={classes.customiseTd}>End Time</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ margin: '10px' }}>{this.props.currentActivity.filter(element => {
                                    let eleStart_Time = element.start_time.split(' ');
                                    let finalString = eleStart_Time[0] + ' ' + eleStart_Time[1] + ' ' + eleStart_Time[2]
                                    return !DateArray.localeCompare(finalString)
                                }).map(element => {
                                    let arrayObj = element.start_time.split(' ');
                                    let arrayObjEnd = element.end_time.split(' ');
                                    return (
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className={classes.customPara}>{arrayObj[0] + ' ' + arrayObj[1]}</td>
                                                    <td className={classes.customPara}>{arrayObj[4]}</td>
                                                    <td className={classes.customPara}>{arrayObjEnd[3]}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    )
                                })}
                                    {this.state.show ? <div>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                        />
                                    </div> : null}
                                    <button className={classes.customiseBtn} onClick={this.CalandarClicked}>Calander</button>
                                    <button className={classes.customiseBtn} onClick={this.props.closeModal}>Close</button>
                                </div> </div> : null
                    }
                </div>

            </div>
        )
    }
}
export default modal;