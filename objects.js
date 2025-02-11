// objects diclaration

const students = {
    name : "golap",
    roll : 10,
    fatherName : "abdullah",
    motherName : "chemely"

}

students.fatherName = "mahammod"
console.log(students)
console.log(students.name)
console.log(students["fatherName"])
console.log(students.fatherName)

const keys = Object.keys(students)
console.log(keys)
for(let key of keys){
    console.log(key)
}
delete students.fatherName

const valu = Object.values(students)
console.log(valu)
console.log(students)

for(let student in students){
    console.log(student);
    console.log(students[student])
}