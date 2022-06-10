console.log('lesson9- inheritance');

const person={
    name: "Anna"
}
console.log(person);

const student={
    cgpa: 3.89
};

//define Inheritance
student.__proto_-=person;
console.log(student);