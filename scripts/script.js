const SearchInput = document.querySelector('article input[type="search"]');
SearchInput.addEventListener('input', function() {
    const filter = SearchInput.value.toLowerCase();
    const mugshots = document.querySelectorAll('.mugshot');

    mugshots.forEach(mugshot => {
        const name = mugshot.querySelector('p').textContent.toLowerCase()

        if(name.includes(filter)) {
            mugshot.style.display = '';
        } else {
            mugshot.style.display = 'none'
        }
    })
});

const studenten = document.querySelectorAll('.mugshot.student');
const meerFotosKnop = document.querySelector('.meer-fotos');

studenten.forEach((student, index) => {
  if (index >= 4) {
    student.classList.add('hidden');
  }
});

meerFotosKnop.addEventListener('click', () => {
  studenten.forEach(student => student.classList.remove('hidden'));
  meerFotosKnop.style.display = 'none';
});
