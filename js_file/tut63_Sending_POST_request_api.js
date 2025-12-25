const createTodo = async (todo) =>{
  let options = {
 method:"POST",
 headers:{
    "Content-type": "application/json"
 },
 body:JSON.stringify(todo),
 }
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options) 
let response = await p.json()
return response
}

const getTodo = async (id) =>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' +id)
 let r =  response.json()
  return r
}

const mainfunc = async () => {
  let todo = {
    title: 'sakshi2',
    body: 'nice',
    userId: 111,
  }
  let todos = await createTodo(todo)
  console.log(  todos)
  console.log(await getTodo(5))
}

mainfunc()

// fetch('https://jsonplaceholder.typicode.com/posts', options) 
 
  // .then((response) => response.json())
  // .then((json) => console.log(json));