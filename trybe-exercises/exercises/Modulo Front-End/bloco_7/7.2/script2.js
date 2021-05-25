// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {}

// Exercício 1

const addTurno = (lesson, key, value) => lesson[key] = value
addTurno(lesson2, 'turno' , 'manhã')
// console.log(lesson2)

// Exercício 2

const listKeys = (obj) => Object.keys(obj)
// console.log(listKeys(lesson3))

// Exercicío 3

const objLength = (obj) => Object.keys(obj).length
// console.log(objLength(lesson3))

// Exercicio 4

const objvalues = (obj) => Object.values(obj)
// console.log(objvalues(lesson3))

// Exercício 5

const objAssing = (obj, objAdd) =>  Object.assign(obj, objAdd)
objAssing(allLessons, {lesson1, lesson2, lesson3})
// console.log(allLessons)

// Exercício 6

const sumStudents=_=>Object.values(_).map(_=>Object.values(_)[1]).reduce((a,b)=>a+b)

console.log(sumStudents(allLessons))

// Exercício 7

const includeKey = (obj,key,value1) => obj[key] === value1

console.log(includeKey(lesson1, 'materia', 'Matemática'))

// Exercício 8

const arr = []
const countStudents = obj => Object.values(obj).filter(e=>e.materia === 'Matemática').reduce((a,b)=>a.numeroEstudantes+b.numeroEstudantes)

// console.log(countStudents(allLessons))
