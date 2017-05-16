import React, { Component } from "react";
import ReactDOM from "react-dom";

import Form from "./Form";
import StudentInfo from "./StudentInfo";
import TotalResult from "./TotalResult";

export default class App extends Component {
	render() {
		return (
				<div>
					<Form />
					<StudentInfo />
					<TotalResult />
				</div>
			)
	}
}