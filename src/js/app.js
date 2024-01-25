document.addEventListener('alpine:init', () => {
    Alpine.data{'products', ( ) => ({
        items: [{ id: 1, name: 'Sale Cau Mah Neng 200gr', img: 'fotosale4.jpg', price: 15000} ],
        items: [{ id: 2, name: 'Sale Cau Mah Neng 500gr', img: 'fotosale2.jpg', price: 35000} ],
    })};
});