document.querySelectorAll('.card__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const card = checkbox.closest('.card');
        card.classList.toggle('card--favorito', checkbox.checked);
    });
});

const viajeros = document.querySelector('#viajeros');

viajeros.addEventListener('keydown', (e) => {
    if (!/[\d]/.test(e.key) && !['ArrowUp', 'ArrowDown', 'Tab', 'Backspace', 'Delete'].includes(e.key)) {
        e.preventDefault();
    }
});

viajeros.addEventListener('input', () => {
    if (viajeros.value === '' || isNaN(viajeros.value)) {
        viajeros.value = '';
    }
    if (viajeros.value.length > 2) {
        viajeros.value = viajeros.value.slice(0, 2);
    }
});