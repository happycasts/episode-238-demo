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

let arr = []

for (let i = 0; i < users.length; i++) {
  if (users[i].gender === 'female') arr.push(users[i])
}

console.log(arr)