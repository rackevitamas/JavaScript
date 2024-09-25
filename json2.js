fetch('https://vvri.pythonanywhere.com/api/courses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify([
    {
      "name": "informatika",
      "students": [
        {
          "id": 1,
          "name": "ASDF",
          "class": "2/14.b"
        },
        {
          "id": 2,
          "name": "FDSA",
          "class": "2/14.b"
        }
      ]
    },
    {
      "name": "vallalkozas",
      "students": [
        {
          "id": 3,
          "name": "QWERTZ",
          "class": "3/15.a"
        },
        {
          "id": 4,
          "name": "ZTREWQ",
          "class": "3/15.a"
        }
      ]
    }
  ])
})
.then(response => response.json())
.then(data => {
  if (data) {
      console.log(data);
  }
})
.catch(error => console.error('Error:', error));




fetch('https://vvri.pythonanywhere.com/api/courses', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify([
    {
      "name": "vallalkozas",
      "students": [
        {
          "id": 3,
          "name": "QWERTZ",
          "class": "1/13.a"
        },
        {
          "id": 4,
          "name": "ZTREWQ",
          "class": "1/13.a"
        }
      ]
    }
  ])
})
.then(response => response.json())
.then(data => {
  if (data) {
      console.log(data);
  }
})
.catch(error => console.error('Error:', error));




function deleteStudent(studentId) {
  fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (response.ok) {
          console.log(`Diák (ID: ${studentId}) sikeresen törölve`);
      } else {
          console.error('Hiba történt a diák törlésekor');
      }
  })
  .catch(error => console.error('Hiba történt:', error));
}

deleteStudent(4);
