let cakes = [
    {
        name: 'Pain Au Chocolat',
        slug: 'pain-au-chocolat',
        price: '$6.50',
        image: '/assets/product-1-300px.jpg',
        detail: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Parturient montes nascetur ridiculus mus mauris vitae ultricies.'
    },
    {
        name: 'Blueberry Cupcakes',
        slug: 'blueberry-cupcakes',
        price: '$4.00',
        image: '/assets/product-2-300px.jpg',
        detail: 'Tristique senectus et netus et malesuada fames. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Id faucibus nisl tincidunt eget nullam non nisi est.'
    },
    {
        name: 'Mini Subway Cookies',
        slug: 'mini-subway-cookies',
        price: '$3.20',
        image: '/assets/product-3-300px.jpg',
        detail: 'Rutrum quisque non tellus orci ac auctor augue. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Turpis massa sed elementum tempus. Ut sem nulla pharetra diam sit amet.'
    }
];

function updateDB() {
    return new Promise((res, rej) => {
        return res([...cakes]);
    });
}

export function getInitialCakes() {
    updateDB()
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
}
