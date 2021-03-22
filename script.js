let number = 0
let base = 0
let width = 0
let height = 0
// let statements allow the calculations to know what is what variable wise

document.getElementById('button').addEventListener('click', addition)
document.getElementById('button').addEventListener('click', add)
document.getElementById('divide').addEventListener('click', divide)
document.getElementById('multiply').addEventListener('click', multi)
document.getElementById('multiply').addEventListener('click', ply)
// Event listeners allow to gather information from the HTMLs ids

function addition () {
  base = document.getElementById('add').value
  base = parseInt(base)
  number = base + width
}
// addition is the box name, and its getting adds box and adding it together though the parseint

function add () {
  width = document.getElementById('addition').value
  width = parseInt(width)
  number = base + width
  alert(number)
}
// add  is the box name, and its getting additions box and adding it together though the parseint

function divide () {
  width = document.getElementById('box').value
  width = parseInt(width)
  number = width / 2
  alert(number)
}
// divide is the box name, and it knows to divide by 2, so that we can find the number to multiply the height by


function multi () {
  width = document.getElementById('multi').value
  width = parseInt(width)
  number = width * height
}
// multi  is the box name, and its getting ply box and adding it together though the parseint

function ply () {
  height = document.getElementById('ply').value
  height = parseInt(height)
  number = width * height
  document.getElementById('para').innerHTML =
  'Final Result is below'
  document.getElementById('paragraph').innerHTML =
  number
}
// ply  is the box name, and its getting multi box and adding it together though the parseint, and its allowing it to write a text through the INNTER HTML Command 