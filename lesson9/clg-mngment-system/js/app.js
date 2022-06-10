const personAnna={
    name: "Anna"
};
console.log(personAnna)
const studentAnna={
    cgpa:3.98,
    __proto__:personAnna
}
//studentAnna.__proto__=personAnna;

const facultyAnna={
    areaOfResearch:"machine learning",
    __proto__:personAnna
}

// using constructor 