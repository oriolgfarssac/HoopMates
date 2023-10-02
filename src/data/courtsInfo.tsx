const courtsInfo = [
    {
        id: 0,
        index: 0,
        name: 'Pista Plaça de les Glòries',
        ubication: 'https://www.google.es/maps/place/Pista+de+b%C3%A0squet+de+la+Pla%C3%A7a+de+les+Gl%C3%B2ries/@41.404564,2.1859298,17.42z/data=!4m6!3m5!1s0x12a4a37ce4251801:0xaa8545c5694b0203!8m2!3d41.4043302!4d2.1872355!16s%2Fg%2F11h57pw6g3?entry=ttu',
        picture: '/courtsPics/gloriesGran.jpg',
        people: 2,
    },
    {
        id: 1,
        index: 1,
        name: 'Pista Parc del Poblenou',
        ubication: 'https://www.google.com/maps/place/Pista+de+b%C3%A0squet+Parc+del+Poblenou/@41.4078458,2.1906007,15z/data=!4m10!1m2!2m1!1sPista+de+b%C3%A0squet+Parc+del+Poblenou!3m6!1s0x12a4a38267fa9657:0x7f35fc48741d6f03!8m2!3d41.3953879!4d2.2045535!15sCiNQaXN0YSBkZSBiw6BzcXVldCBQYXJjIGRlbCBQb2JsZW5vdZIBEGJhc2tldGJhbGxfY291cnTgAQA!16s%2Fg%2F11g1921b4j?entry=ttu',
        picture: '/courtsPics/parcPoblenou.jpg',
        people: 3,
    },
    {
        id: 2,
        index: 2,
        name: 'Pista Petita Plaça Glòries',
        ubication: 'https://www.google.es/maps/place/Pista+de+B%C3%A0squet+exterior/@41.4030819,2.1842217,20.25z/data=!4m14!1m7!3m6!1s0x12a4a38267fa9657:0x7f35fc48741d6f03!2sPista+de+b%C3%A0squet+Parc+del+Poblenou!8m2!3d41.3953879!4d2.2045535!16s%2Fg%2F11g1921b4j!3m5!1s0x12a4a30704e84921:0xdbdf56d246e43665!8m2!3d41.4031094!4d2.1845516!16s%2Fg%2F11j352f4tc?entry=ttu',
        picture: '/courtsPics/poblenouGran.jpg',
        people: 15,
    },
    {
        index: 3,
        name: 'Parc de la Barceloneta',
        ubication: 'https://www.google.com/maps/place/Pista+de+b%C3%A0squet+del+Parc+de+la+Barceloneta/@41.3831406,2.1929962,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a306431e550d:0xfca84cf22efca2e4!8m2!3d41.3831406!4d2.1929962!16s%2Fg%2F11c47snrpz?hl=ca&entry=ttu',
        picture: '/courtsPics/barceloneta.jpeg',
        people: 5,
    },
    {
        index: 4,
        name: "Pista Parc de l'Espanya",
        ubication: 'https://www.google.com/maps/place/Basketball+court/@41.3770486,2.1406019,19z/data=!4m7!3m6!1s0x12a49960f05f344b:0x4e393a0d08d691eb!8m2!3d41.3773439!4d2.1407807!15sChBzdHJlZXRiYWxsIHNhbnRzWhIiEHN0cmVldGJhbGwgc2FudHOSARBiYXNrZXRiYWxsX2NvdXJ0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5LZGxwbWVYQkJSUkFC4AEA!16s%2Fg%2F11rf6rl0v7?hl=ca&entry=tts',
        picture: '/courtsPics/parcEspanya.jpeg',
        people: 5,
    },
    {
        index: 5,
        name: "Pista Bon Pastor",
        ubication: 'https://www.google.com/maps/place/Basketball+court/@41.3770486,2.1406019,19z/data=!4m7!3m6!1s0x12a49960f05f344b:0x4e393a0d08d691eb!8m2!3d41.3773439!4d2.1407807!15sChBzdHJlZXRiYWxsIHNhbnRzWhIiEHN0cmVldGJhbGwgc2FudHOSARBiYXNrZXRiYWxsX2NvdXJ0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5LZGxwbWVYQkJSUkFC4AEA!16s%2Fg%2F11rf6rl0v7?hl=ca&entry=tts',
        picture: '/courtsPics/bonPastor.png',
        people: 4,
    },
    {
        index: 6,
        name: "Pista Parc del Clot",
        ubication: 'https://www.google.com/maps/place/Pista+de+B%C3%A0squet+Parc+del+Clot/@41.4080891,2.1896395,15z/data=!4m7!3m6!1s0x12a4a325ce5e9017:0x87a8c79f4dfbdc5c!8m2!3d41.4080099!4d2.1900812!15sChFQaXN0YSBkZSBiw6BzcXVldJIBEGJhc2tldGJhbGxfY291cnTgAQA!16s%2Fg%2F11c47rq1fv?entry=tts',
        picture: '/courtsPics/clot.png',
        people: 10,
    },
    {
        index: 7,
        name: "Pista Escola Industrial",
        ubication: 'https://www.google.com/maps/place/Pista+de+basket/@41.3880144,2.1291074,15z/data=!4m7!3m6!1s0x12a4a3002d41288f:0x2f7541b286b602f8!8m2!3d41.3880144!4d2.1466169!15sChFQaXN0YSBkZSBiw6BzcXVldJIBEGJhc2tldGJhbGxfY291cnTgAQA!16s%2Fg%2F11rwlt8fqy?entry=tts',
        picture: '/courtsPics/escola.png',
        people: 9,
    },  
];

export default courtsInfo;
