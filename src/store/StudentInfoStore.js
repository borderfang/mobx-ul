import {observable, computed, autorun} from "mobx";

class StudentInfoStore {

	@observable student = [];

	@computed get studentCount() {
		return this.student.length;
	}

	addStudent(studentOne) {
		if (!studentOne.name || !studentOne.myclass || !studentOne.adddress) {
			return 
		}
		this.student.push(studentOne);
	}

}
const studentLists = new StudentInfoStore();
export default studentLists;
autorun(() => {

		$.ajax({
		   type: "GET",
		   url: "/allstudent",
		   success: function(msg){
		   		console.log(msg);
		   		studentLists.student = msg;
		   }
		});
})