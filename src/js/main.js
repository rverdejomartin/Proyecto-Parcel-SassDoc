document.querySelectorAll('.card__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const card = checkbox.closest('.card');
        card.classList.toggle('card--favorito', checkbox.checked);
    });
});