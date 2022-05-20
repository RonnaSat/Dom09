// var student = {};
// student.name = 'คุณลุง'
// student.username = 'a@b.com'
// student.gender = 'ชาย'

// var student2 = {};
// student2.name = 'ป้า'
// student2.username = 'a@c.com'
// student2.gender = 'หญิง'

// var students = [
//     student,
//     student2,{
//         name: 'สมรักษ์',
//         username:'a@c.com',
//         gender:'ชาย'
//     }
// ]

// // document.getElementById('output').innerText = student.name;
// function addRow(container, key, value) {
//     let row = document.createElement('div')
//     row.classList.add('row')
//     let columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = key
//     let columnValue = document.createElement('div')
//     columnValue.classList.add('col')
//     columnValue.innerHTML = value;
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     container.appendChild(row)
// }

// function addStudentData(student) {
//     const output = document.getElementById('output')
//     addRow(output, 'ชื่อ', student.name)
//     addRow(output, 'รหัส', student.username)
//     addRow(output, 'เพศ', student.gender)
// }
// window.addEventListener('load', function () {
//     addStudentList(students)

// })

function addStudentToTbl(index,student){
    const tableBody = document.getElementById('output-table')
    
    
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    let div = document.createElement('div')
    let pic = document.createElement('img')
    pic.setAttribute('src',student.imageLink)
    pic.setAttribute('alt',student.imageLink)
    pic.style.width = '150px'
    div.appendChild(pic)
    cell.appendChild(div)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
    // console.log(student)
}
function addStudentList(studentList) {
    let counter = 1;
    for (student of studentList) {
        addStudentToTbl(counter++, student)
    }
}
function onLoad() {
    let students
    fetch('asset/students2.json').then(response => {
        return response.json()
    })
        .then(data => {
            let students = data
            addStudentList(data)
        }

        )
}