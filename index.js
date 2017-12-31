const users = [
  {
    name: 'peter',
    gender: 'male'
  },
  {
    name: 'billie',
    gender: 'female'
  }
]

Array.prototype.myFilter = function (callback) {
  let arr = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) arr.push(this[i])
  }

  return arr
}

const female = users.myFilter(user => {
  return user.gender === 'female'
})


console.log(female)