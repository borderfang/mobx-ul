import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import studentLists from "./store/StudentInfoStore";

@observer
export default class StudentInfo extends Component {
	render() {
		return (
				<table>
					<tbody>
						<tr>
							<th>姓名</th>
							<th>班级</th>
							<th>邮箱</th>
						</tr>					
							{studentLists.student.map((studentList) => (
								<tr key={studentList._id}>
									<td>{studentList.name}</td>
									<td>{studentList.myclass}</td>
									<td>{studentList.address}</td>
								</tr>
							))}
						
					</tbody>
				</table>
			)
	}
}