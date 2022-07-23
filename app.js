const students = [{name: 'Vasya', mark: 3.8, email: 'vasya@gmail.com', isAdmin: false},
    {name: 'Helen', mark: 3.4, email: 'helen@gmail.com', isAdmin: false},
    {name: 'Marina', mark: 4.0, email: 'marina@gmail.com', isAdmin: true},
    {name: 'Alex', mark: 4.2, email: 'alex@gmail.com', isAdmin: false},
    {name: 'Martin', mark: 4, email: 'martin@gmail.com', isAdmin: true},
    {name: 'Denys', mark: 3.7, email: 'denys@gmail.com', isAdmin: false},
    {name: 'Daniel', mark: 4.8, email: 'daniel@gmail.com', isAdmin: true},
    {name: 'John', mark: 3.6, email: 'jogn@gmail.com', isAdmin: false},
    {name: 'Phil', mark: 4.5, email: 'phil@gmail.com', isAdmin: false},
    {name: 'Anna', mark: 3.8, email: 'anna@gmail.com', isAdmin: false}];

console.log(students);

function logAdmins(students) {
    //вернуть из функции список тех, у кого поле isAdmin: true
    /*let logAdmins = [];
    logAdmins = students.filter(function(student) {
        return student.isAdmin === true;
    });*/
    let logAdmins = students.filter((student) => student.isAdmin === true);
    console.log (logAdmins);
    
    return logAdmins;
} 
logAdmins(students); 

function filterByMark(students) {
    //ввести оценку через prompt
    //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее
    let gradeStudent = prompt('Введите оценку: ', 0);
    let listGrade = [];
    
    listGrade.push(students.filter((student) => student.mark >= gradeStudent));

    console.log(listGrade);
    return listGrade;
   
}
filterByMark(students);

function renderStudents(students) {
    //по аналогии с курсами валют
   
    let tableStudents = students.map((student, i) => `<tr>
                                                    <td>${i + 1}</td>
                                                    <td>${student.name}</td>
                                                    <td>${student.mark}</td>
                                                    <td>${student.email}</td>
                                                    <td>${student.isAdmin}</td></tr>`).join('');
     
    document.querySelector('.students tbody').innerHTML = tableStudents; 
    return tableStudents;
}
renderStudents(students);

function getAverageMark(students) {
    //вернуть среднюю оценку (2 знака после запятой) из списка students
    let averageMark = students.reduce(((acc, student) => acc + student.mark), 0) / students.length;
    console.log(averageMark.toFixed(2));
    return averageMark.toFixed(2);
}
getAverageMark(students);

function getEmailList(students) {
    //вернуть список состоящий из только поля email студентов
    // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']
    let emailList = students.map((student) => student.email);
    console.log(emailList);
    return emailList;
}
getEmailList(students);

function getDataList(students) {
    //вернуть список, состоящий из name и email студентов
    //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]
    let dataList = students.map((student) => `name: ${student.name}, email: ${student.email}`);
    console.log(dataList);
    return dataList;
}
getDataList(students);