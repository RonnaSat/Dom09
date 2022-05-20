var student ={};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var student2 ={};
student2.name = 'ป้า'
student2.username = 'a@c.com'
student2.gender = 'หญิง'


// document.getElementById('output').innerText = student.name;
function addRow(container,key,value){
    let row = document.createElement('div')
    row.classList.add('row')
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = key
    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = value;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
}

function addStudentData(student){
    const output = document.getElementById('output')
    addRow(output,'ชื่อ',student.name)
    addRow(output,'รหัส',student.username)
    addRow(output,'เพศ',student.gender)
}
window.addEventListener('load',function(){
    addStudentData(student)
    addStudentData(student2)
})