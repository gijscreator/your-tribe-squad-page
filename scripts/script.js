const SearchInput = document.querySelector('article input[type="search"]');
const studenten = document.querySelectorAll('.mugshot.student');
const meerFotosKnop = document.querySelector('.meer-fotos');

studenten.forEach((student, index) => {
  if (index >= 4) {
    student.style.display = 'none';
  }
});

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
        studenten.forEach((student, index) => {
            if (index >= 4) {
                student.style.display = 'none';
            } else {
                student.style.display = '';
            }
        });
    }
});

meerFotosKnop.addEventListener('click', () => {
    studenten.forEach(student => {
        student.style.display = '';
    });
    meerFotosKnop.style.display = 'none';
});
