function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  parseInt()
}
function deepestChild() {
let node = document.getElementById(`grand-node`)
let next = node.children [0]

while (next) {
  node = next
  next = node.children[0]
}
return node
}
