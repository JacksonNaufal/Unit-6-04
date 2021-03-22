let number = 0
let base = 0
let width = 0
let height = 0 

document.getElementById('button').addEventListener('click', addition)
document.getElementById('button').addEventListener('click', add)
document.getElementById('divide').addEventListener('click', divide)
document.getElementById('multiply').addEventListener('click', multi)
document.getElementById('multiply').addEventListener('click',ply)

function addition () {
  base = document.getElementById('add').value
  base = parseInt(base)
  number = base + width
}

function add () {
  width = document.getElementById('addition').value
  width = parseInt(width)
  number = base + width
  alert (number)
}

function divide () {
  width = document.getElementById('box').value
  width = parseInt(width)
  number = width / 2
  alert (number)
}

function multi () {
  width = document.getElementById('multi').value
  width = parseInt(width)
  number = width * height
}

function ply () {
  height = document.getElementById('ply').value
  height = parseInt(height)
  number = width * height 
  document.getElementById('para').innerHTML = 
  'Final Result is below' 
  document.getElementById('paragraph').innerHTML =
  number
}


