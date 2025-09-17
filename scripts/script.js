const SearchInput = document.querySelector('article input[type="search"]');
const studenten = document.querySelectorAll('.mugshot.student');
const meerFotosKnop = document.querySelector('.meer-fotos');

function getMaxVisible() {
  const w = window.innerWidth;

  if (w <= 790) {
    return 4;
  } else if (w <= 1400) {
    return 4;
  } else {
    return 6;
  }
}


function toonStandaard() {
  const maxVisible = getMaxVisible();

  studenten.forEach((student, index) => {
    if (index < maxVisible) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  });
}

toonStandaard();

window.addEventListener('resize', toonStandaard);

SearchInput.addEventListener('input', function() {
  const filter = SearchInput.value.toLowerCase();

  studenten.forEach(student => {
    const nameEl = student.querySelector('figcaption p') || student.querySelector('p');
    const name = nameEl ? nameEl.textContent.toLowerCase() : '';

    if (name.includes(filter)) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  });

  if (filter.length > 0) {
    meerFotosKnop.style.display = 'none';
  } else {
    meerFotosKnop.style.display = '';
    toonStandaard();
  }
});

let allesZichtbaar = false;
meerFotosKnop.addEventListener('click', () => {
    if (!allesZichtbaar) {
        studenten.forEach(student => student.style.display = '');
        meerFotosKnop.textContent = "Minder foto's";
        allesZichtbaar = true;
    } else {
        toonStandaard();
        meerFotosKnop.textContent = "Meer foto's";
        allesZichtbaar = false;
    }
});
