productos = ['Manzanas', 'Bananas', 'Cerezas', 'Duraznos', 'Fresas'];

for ( producto of productos) {
    
    h2 = document.createElement('h2');

    h2.innerHTML = producto;

    document.body.appendChild(h2);
    
}
