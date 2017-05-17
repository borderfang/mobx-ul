import React, { Component } from "react";
import { observer } from "mobx-react";
import studentLists from "./store/StudentInfoStore";



@observer
export default class Form extends Component {
	addStudent(ev) {
		// console.log(this.refs.uname, this.refs.myclass, this.refs.myaddress);
		// studentLists.addStudent(ev);
		const uname = this.refs.uname.value;
		const myclass = this.refs.myclass.value;
		const myaddress = this.refs.myaddress.value;
		if(uname == "" || myclass == "" || myaddress == "") {
			alert("请填写信息");
			return;
		}
		studentLists.addStudent({name: uname, myclass: myclass, address: myaddress});
		$.ajax({
		   type: "GET",
		   url: "/addStudent",
		   data: {
		   	name: this.refs.uname.value,
		   	myclass: this.refs.myclass.value,
		   	address: this.refs.myaddress.value
		   },
		   success: function(msg){
		   		console.log(msg);
		   }
		});
		this.refs.uname.value = "";
		this.refs.myclass.value = "";
		this.refs.myaddress.value = "";
		
	}
	render() {
		return (
				<form>
					<input type="text" ref="uname" name="uname" placeholder="请输入姓名" />
					<input type="text" ref="myclass" name="myclass" placeholder="请输入班级" />
					<input type="text" ref="myaddress" name="myaddress" placeholder="请输入邮箱" />
					<input type="button" onClick={this.addStudent.bind(this)} value="提交" />
				</form>
			)
	}
}
