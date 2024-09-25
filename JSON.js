/* fetch('https://api.example.com/data&#39')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Hiba történt:', error)); */
/* fetch('https://api.example.com/save&#39', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ key: 'value' }) 
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Hiba történt:', error)); */
/* function hello(){
    console.log("Hello!")
}
const udv = function(){
    console.log("Szia!");
}
const udvozlet = x =>{
    console.log("Üdvözllek!" + x);
}
function kiiratas(param, name) {
    console.log(`${param()} ${name}` );
}
kiiratas(hello, "KEKI"); */
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Új feladat',
      completed: false,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log('Created:', data))
    .catch(error => console.error('Error:', error));
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Frissített feladat',
        completed: true,
        userId: 1
    })
    })
    .then(response => response.json())
    .then(data => console.log('Updated:', data))
    .catch(error => console.error('Error:', error));
fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              completed: true
            })
          })
            .then(response => response.json())
            .then(data => console.log('Patched:', data))
            .catch(error => console.error('Error:', error));
fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE'
    })
    .then(() => console.log('Deleted'))
    .catch(error => console.error('Error:', error));
              