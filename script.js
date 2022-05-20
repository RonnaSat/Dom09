var student ={};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var student2 ={};
student2.name = 'ป้า'
student2.username = 'a@c.com'
student2.gender = 'หญิง'
// document.getElementById('output').innerText = student.name;
function addStudentData(student){
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add('row')
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = 'ชื่อ'
    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.name;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)

    const output2 = document.getElementById('output')
    let row2 = document.createElement('div')
    row2.classList.add('row')
    let columnName2 = document.createElement('div')
    columnName2.classList.add('col-1')
    columnName2.classList.add('offset-1')
    columnName2.innerHTML = 'รหัส'
    let columnValue2 = document.createElement('div')
    columnValue2.classList.add('col')
    columnValue2.innerHTML = student.username;
    row2.appendChild(columnName2)
    row2.appendChild(columnValue2)
    output2.appendChild(row2)

    const output3 = document.getElementById('output')
    let row3 = document.createElement('div')
    row3.classList.add('row')
    let columnName3 = document.createElement('div')
    columnName3.classList.add('col-1')
    columnName3.classList.add('offset-1')
    columnName3.innerHTML = 'เพศ'
    let columnValue3 = document.createElement('div')
    columnValue3.classList.add('col')
    columnValue3.innerHTML = student.gender;
    row3.appendChild(columnName3)
    row3.appendChild(columnValue3)
    output3.appendChild(row3)
    
}
window.addEventListener('load',function(){
    addStudentData(student)
    addStudentData(student2)
})