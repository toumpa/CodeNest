document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const menu = button.nextElementSibling;
            if (menu) {
                menu.style.display = 'block';
            }
        });

        button.addEventListener('mouseout', () => {
            const menu = button.nextElementSibling;
            if (menu) {
                menu.style.display = 'none';
            }
        });

        const menu = button.nextElementSibling;
        if (menu) {
            menu.addEventListener('mouseover', () => {
                menu.style.display = 'block';
            });

            menu.addEventListener('mouseout', () => {
                menu.style.display = 'none';
            });
        }
    });
});