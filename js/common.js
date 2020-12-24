$('.owl-carousel').owlCarousel({
    items: 1,
    mouseDrag: false,
    nav: true,
})

$('.owl-nav button.owl-prev')[0].addEventListener('click', () => {
    let id = $('.product-present__description.active')[0].getAttribute('id').split('product-present__description-')[1];
    if (id == 1) return;
    document.querySelector(`#product-present__description-${id}`).classList.toggle('active');
    document.querySelector(`#product-present__description-${--id}`).classList.toggle('active');
});

$('.owl-nav button.owl-next')[0].addEventListener('click', () => {
    let id = $('.product-present__description.active')[0].getAttribute('id').split('product-present__description-')[1];
    if (id == 3) return;
    document.querySelector(`#product-present__description-${id}`).classList.toggle('active');
    document.querySelector(`#product-present__description-${++id}`).classList.toggle('active');
});