fetch('https://vvri.pythonanywhere.com/api/courses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset = UTF8'
    },
    body: JSON.stringify({
      "name": "informatika",
      "student":{
        "id": 1,
        "name": "ASDF",
        "class": "2/14.b"
      },
      "student":{
        "id": 2,
        "name": "FDSA",
        "class": "2/14.b"
      },
      "name": "vallalkozas",
      "student":{
        "id": 1,
        "name": "ASDF",
        "class": "2/14.b"
      },
      "student":{
        "id": 2,
        "name": "FDSA",
        "class": "2/14.b"
      },
        },
      }
    .then(response => response.json())
    .then(data => {if (data) {
        data.forEach(element => {
            console.log(element);
        });
    }})
    .catch(error => console.error('Error:', error));