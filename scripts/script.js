const SearchInput = document.querySelector('article input[type="search"]');
SearchInput.addEventListener('input', function() {
    const filter = SearchInput.value.toLowerCase();
    const mugshots = document.querySelectorAll('.mugshot');

    mugshots.forEach(mugshot => {
        const name = mugshot.querySelector('h3').textContent.toLowerCase()

        if(name.includes(filter)) {
            mugshot.style.display = '';
        } else {
            mugshot.style.display = 'none'
        }
    })
});