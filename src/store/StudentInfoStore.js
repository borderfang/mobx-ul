import {observable, computed, autorun} from "mobx";

class StudentInfoStore {

	@observable student = [];

	@computed get studentCount() {
		return this.student.length;
	}

	addStudent(studentOne) {
		this.student.push(studentOne);
		console.log(this.student);
	}

}
const studentLists = new StudentInfoStore();
export default studentLists;
autorun(() => {

		$.ajax({
		   type: "GET",
		   url: "/allstudent",
		   success: function(msg){
		   		// console.log(msg);
		   		studentLists.student = msg;
		   }
		});
})