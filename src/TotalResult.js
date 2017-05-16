import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import studentLists from "./store/StudentInfoStore";


@observer
export default class TotalResult extends Component {
	render() {
		return (
				<p>我们班的总人数是：{studentLists.studentCount}</p>
			)
	}
}