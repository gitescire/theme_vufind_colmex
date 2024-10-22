document.addEventListener('DOMContentLoaded', function () {

const items = document.querySelectorAll('.accordion-item button');

items.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const content = document.getElementById(targetId);
        const icon = item.querySelector('i');

        const isActive = content.classList.contains('active');

        const activeItem = document.querySelector('.accordion-content.active');
        const activeButton = document.querySelector('.accordion-item button.active');

        if (activeItem && activeItem !== content) {
            activeItem.classList.remove('active');
            const activeIcon = activeButton.querySelector('i.rotated');
            if (activeIcon) activeIcon.classList.remove('rotated');
            activeButton.classList.remove('active');
        }

        if (!isActive) {
            content.classList.add('active');
            icon.classList.add('rotated');
            item.classList.add('active');
        } else {
            content.classList.remove('active');
            icon.classList.remove('rotated');
            item.classList.remove('active');
        }
    });
});

//Funcion para cambiar de lugar el contenido en dispositivos moviles y se muestren
//debajo de su respectiva categoria
function moveContentToAccordion() {
    const isMobile = window.innerWidth <= 480;
    const accordion = document.querySelector('.accordion');

    document.querySelectorAll('.accordion-content').forEach(content => {
        const targetId = content.id;
        const button = document.querySelector(`button[data-target="${targetId}"]`);

        if (isMobile) {
            button.insertAdjacentElement('afterend', content);
        } else {
            document.querySelector('.maindiv').appendChild(content);
        }
    });
}

function activateFirstAccordionItem() {
    if (window.innerWidth > 768) { 
        const firstItem = items[0];
        const firstContent = document.getElementById(firstItem.getAttribute('data-target'));
        const firstIcon = firstItem.querySelector('i');

        firstContent.classList.add('active');
        firstIcon.classList.add('rotated');
        firstItem.classList.add('active');
    }
}

window.addEventListener('resize', moveContentToAccordion);

moveContentToAccordion();
activateFirstAccordionItem();

});
