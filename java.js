document.addEventListener('DOMContentLoaded', () => {
       const clearSearchButton = document.getElementById('clearSearch');
         const noResultsMessage = document.getElementById('noResultsMessage');
        const ssearch = document.getElementById("ididinput");
        const movee = document.getElementById("idmove");
        const terminator = document.querySelectorAll(".movie-card")
    const filterMovies = () => {
        const searchTerm = ssearch.value.toLowerCase().trim();
        let foundResults = false;
        terminator.forEach(card=>{
        const title = card.dataset.title.toLowerCase();
        const genres = card.dataset.genres.toLowerCase()
        if (title.includes(searchTerm) || genres.includes(searchTerm) || searchTerm === '') {
                card.classList.remove('hidden');
                foundResults = true;
            } else {
                card.classList.add('hidden');
            }
        })
        // Показуємо/приховуємо повідомлення "немає результатів"
        if (foundResults) {
            noResultsMessage.classList.add('hidden');
        } else {
            noResultsMessage.classList.remove('hidden');
        }

        // Показуємо/приховуємо кнопку очищення
        if (searchTerm.length > 0) {
            clearSearchButton.classList.add('visible');
        } else {
            clearSearchButton.classList.remove('visible');
        }
    };

    // Слухач подій для поля пошуку
    ssearch.addEventListener('keyup', filterMovies);

    // Слухач подій для кнопки очищення пошуку
    clearSearchButton.addEventListener('click', () => {
        ssearch.value = ''; // Очищуємо поле вводу
        filterMovies(); // Запускаємо фільтрацію, щоб показати всі фільми
        ssearch.focus(); // Повертаємо фокус на поле пошуку
    });


    filterMovies(); 
});
