
fetch('https://vvri.pythonanywhere.com/api/courses')
  .then(response => response.json())
  .then(data => {
    if (data) {
      const kurzusList = document.getElementById('kurzus');
      kurzusList.innerHTML = '';

      data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name;
        kurzusList.appendChild(li);
      });
    }
  })
  .catch(error => console.error('Hiba:', error));

fetch('https://vvri.pythonanywhere.com/api/students')
  .then(response => response.json())
  .then(data => {
    if (data) {
      const diakList = document.getElementById('diak');
      diakList.innerHTML = ''; 

      data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name; 
        diakList.appendChild(li);
      });
    }
  })
  .catch(error => console.error('Hiba:', error));

function letrehozas(event) {
  event.preventDefault();
  const ujkurzus = document.getElementById('ujkur').value;

  fetch('https://vvri.pythonanywhere.com/api/courses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ name: ujkurzus })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    fetch('https://vvri.pythonanywhere.com/api/courses')
      .then(response => response.json())
      .then(data => {
        const kurzusList = document.getElementById('kurzus');
        const li = document.createElement('li');
        li.textContent = ujkurzus;
        kurzusList.appendChild(li);
      });
  })
  .catch(error => console.error('Hiba:', error));
}

function letrehozasDiak(event) {
  event.preventDefault(); 
  const ujdiak = document.getElementById('ujdia').value;

  fetch('https://vvri.pythonanywhere.com/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ name: ujdiak })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    fetch('https://vvri.pythonanywhere.com/api/students')
      .then(response => response.json())
      .then(data => {
        const diakList = document.getElementById('diak');
        const li = document.createElement('li');
        li.textContent = ujdiak;
        diakList.appendChild(li);
      });
  })
  .catch(error => console.error('Hiba:', error));
}

function modositas(event) {
  event.preventDefault();
  const levokur = document.getElementById('levokur').value;

  console.log(`Kurzus módosítva: ${levokur}`);
}

function modositasDiak(event) {
  event.preventDefault();
  const levodia = document.getElementById('levodia').value;

  console.log(`Diák módosítva: ${levodia}`);
}
function torlesDiak() {
  const levodia = document.getElementById('levodia').value;
  fetch(`https://vvri.pythonanywhere.com/api/students/${levodia}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (response.ok) {
          console.log(`Diák (név: ${levodia}) sikeresen törölve`);
          fetchDiakok(); 
      } else {
          console.error('Hiba történt a diák törlésekor');
      }
  })
  .catch(error => console.error('Hiba történt:', error));
}

function torlesKurzus() {
  const levokur = document.getElementById('levokur').value;
  fetch(`https://vvri.pythonanywhere.com/api/courses/${levokur}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (response.ok) {
          console.log(`Kurzus (név: ${levokur}) sikeresen törölve`);
          fetchKurzusok(); 
      } else {
          console.error('Hiba történt a kurzus törlésekor');
      }
  })
  .catch(error => console.error('Hiba történt:', error));
}

function fetchDiakok() {
  fetch('https://vvri.pythonanywhere.com/api/students')
      .then(response => response.json())
      .then(data => {
          const diakList = document.getElementById('diak');
          diakList.innerHTML = '';
          data.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element.name; 
              diakList.appendChild(li);
          });
      })
      .catch(error => console.error('Hiba:', error));
}

function fetchKurzusok() {
  fetch('https://vvri.pythonanywhere.com/api/courses')
      .then(response => response.json())
      .then(data => {
          const kurzusList = document.getElementById('kurzus');
          kurzusList.innerHTML = ''; 
          data.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element.name; 
              kurzusList.appendChild(li);
          });
      })
      .catch(error => console.error('Hiba:', error));
}
