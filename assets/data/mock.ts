import { ICatelogue, ICatelogueItem, ICatelogueProduct, IFilterItem, IProduct, IProductList, IOrderOverview, IOrderDetails, IAddress } from "./model"

export const newProducts: IProductList = {
    title: 'New products',
    products: [
        { id: 1, name: 'Casual Ring', background: '#F1EFF5', image: require('./../images/product-img-01.png'), amount: 1200 },
        { id: 2, name: 'Rose Gold Chain', background: '#F1EFF5', image: require('./../images/product2.png'), amount: 700 },
        { id: 3, name: 'Gold Bracelet', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 800 },
    ]
}

export const recommended: IProductList = {
    title: 'Recommended for you',
    products: [
        { id: 1, name: 'Casual Ring', background: '#F1EFF5', image: require('./../images/product-img-01.png'), amount: 1200 },
        { id: 2, name: 'Gold accessory set', background: '#F1EFF5', image: require('./../images/product4.png'), amount: 700 },
        { id: 3, name: 'Diamong White gold Ring', background: '#F1EFF5', image: require('./../images/product1.png'), amount: 800 },
    ]
}

export const favorites: IProduct[] = [
    { id: 3, name: 'Diamong White gold ring', background: '#F1EFF5', image: require('./../images/product1.png'), amount: 800 },
    { id: 2, name: 'Necklace', background: '#F1EFF5', image: require('./../images/product2.png'), amount: 700 },
    { id: 1, name: 'Rose gold chain', background: '#F1EFF5', image: require('./../images/product3.png'), amount: 800 },
    { id: 4, name: 'Gold accessory set', background: '#F1EFF5', image: require('./../images/product4.png'), amount: 700 },
    { id: 5, name: 'Pendant', background: '#F1EFF5', image: require('./../images/hiking-shoes-3054634_640-1.png'), amount: 1200 },
]

export const catelogues: ICatelogue[] = [
    { id: 1, name: 'Prepare your summer wardrobe', image: require('./../images/catelogue1.png') },
    { id: 2, name: 'The jewellery style secrets', image: require('./../images/catelogue2.png') },
    { id: 3, name: 'Engagement gifts', image: require('./../images/catelogue3.png') },
]



export const catelogueList: ICatelogueItem[] = [
    { id: 1, name: 'Malabar Gold', description: 'Necklaces, Bracelets', image: require('./../images/hiking-shoes-3054634_640-1.png') },
    { id: 2, name: 'Damas', description: 'Engagement, Wedding Bands', image: require('./../images/image-54.png') },
    { id: 3, name: 'JoyAlukkas', description: 'Diamond, Rose Gold', image: require('./../images/image-52.png') },
    { id: 4, name: 'Lulu Gold', description: 'Antiques, Heritage', image: require('./../images/image-58.png') },
    { id: 5, name: 'Atlas Jewellery', description: 'Couples, For you and for me', image: require('./../images/image-59.png') },
    { id: 6, name: 'Meralda', description: 'Earrings, ferronnière ', image: require('./../images/image-55.png') },
]

export const catelogueProductList: ICatelogueProduct[] = [
    { id: 1, name: 'Gemstone Pendant set', image: require('./../images/image-01.png'), price: 1200 },
    { id: 2, name: 'Diamond Wristband', image: require('./../images/image-02.png'), price: 1500 },
    { id: 3, name: 'Antique Precious', image: require('./../images/image-03.png'), price: 1000 },
    { id: 4, name: 'Everyday Bracelet ', image: require('./../images/image-04.png'), price: 900 },
    { id: 5, name: 'Gold Designer', image: require('./../images/image-05.png'), price: 1900 },
    { id: 6, name: 'Pearl Designer', image: require('./../images/image-06.png'), price: 2000 },
    { id: 7, name: 'Uncut Jewellery', image: require('./../images/product-img-02.png'), price: 1900 },
    { id: 8, name: 'Precious Stones', image: require('./../images/product4.png'), price: 2000 },
]

export const colorFilterList: IFilterItem[] = [
    { id: 1, name: 'Platinum', color: '#000' },
    { id: 2, name: 'Silver', color: '#c6c6c6' },
    { id: 3, name: 'Diamond', color: '#fff' },
    { id: 4, name: 'Gems', color: '#541EEF' },
    { id: 5, name: 'Antiques', color: '#00D72F' },
    { id: 6, name: 'Gold', color: '#FFD952' },
]

export const brandFilterList: IFilterItem[] = [
    { id: 1, name: 'Antiques' },
    { id: 2, name: 'Rings' },
    { id: 3, name: 'Chains' },
    { id: 4, name: 'Promise Rings' },
    { id: 5, name: 'Bangles' },
    { id: 6, name: 'Earrings' },
]

export const clothFilterList: IFilterItem[] = [
    { id: 1, name: 'Ruby' },
    { id: 2, name: 'Emerald' },
    { id: 3, name: 'Topaz' },
    { id: 4, name: 'Sapphire' },
    { id: 5, name: 'Jade' },
    { id: 6, name: 'Aquamarine' },
]

export const genderFilterList: IFilterItem[] = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
]

export const sizeFilterList: IFilterItem[] = [
    { id: 1, name: '18 karat' },
    { id: 2, name: '22 karat' },
    { id: 3, name: '24 karat' },
  
]

export const orderOverviewList: IOrderOverview[] = [
    {
        orderId: 'TFSdglUQas',
        deliveryTime: 'Today, 3:31 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 65,
        items: 'Diamond Wristband (1)',
        status: 'On the way to your location'
    },
    {
        orderId: 'KZvkoCeLHZ',
        deliveryTime: 'Yesterday, 06:16 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 165,
        items: 'Everyday Bracelet  (2)',
        status: 'Order Delivered'
    },
    {
        orderId: 'TjJBgHprtP',
        deliveryTime: '27 July 2023, 11:21 AM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 265,
        items: 'Gold accessory set (1)',
        status: 'Order Delivered'
    },
    {
        orderId: 'WOauZYCtDM',
        deliveryTime: '13 August 2023, 1:20 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 135,
        items: 'Platinum accessory (1)',
        status: 'Cancelled'
    },
    {
        orderId: 'AshdCyRUYS',
        deliveryTime: '07 June 2023, 3:31 PM',
        deliveryAddress: '37, South Gulshan, Circle-1',
        shippedFrom: 'Chillox, Banani',
        amount: 785,
        items: 'Promise Rings (1)',
        status: 'Order Delivered'
    },
]

export const orderDetails: IOrderDetails = {
    orderId: 'AshdCyRUYS',
    items: [
        {
            id: 1,
            name: 'Gemstone Pendant set',
            quantity: 1,
            price: 125.00,
            total: 125.00
        },
        {
            id: 2,
            name: 'Antique Precious',
            quantity: 2,
            price: 105.00,
            total: 210.00
        },
        {
            id: 3,
            name: 'Uncut Jewellery',
            quantity: 1,
            price: 160.00,
            total: 160.00
        }
    ],
    total: 495.00,
    discount: 0,
    deliveryCharges: 25.00,
    netTotal: 520.00,
    paymentMethod: 'Net Banking',
    timelines: [
        {
            label: '26 Jan 2022, 02:22 PM',
            details: 'Your order was placed',
        },
        {
            label: '27 Jan 2022, 04:20 PM',
            details: 'Your order was packed',
        },
        {
            label: '28 Jan 2022, 06:30 PM',
            details: 'Your order was shipped',
        },
        {
            label: '29 Jan 2022, 09:30 AM',
            details: 'Your order is on the way to you',
        }
    ],
    currentTimeline: 2,
}

export const addressList: IAddress[] = [
    {
        id: 1,
        houseNo: 'No 158',
        street: 'ROAD 1405',
        landmark: 'Near to Central Market, Manama',
        state: 'Manama',
        zipcode: '2470',
        selected: true,
    },
    {
        id: 2,
        houseNo: 'No 72',
        street: 'Road 440',
        landmark: 'Near to Amwaj Islands',
        state: 'Amwaj',
        zipcode: '3400',
        selected: false,
    },
    {
        id: 3,
        houseNo: 'No 386',
        street: 'Shaikh Abdullah Road',
        landmark: 'Near to City Center',
        state: 'Seef',
        zipcode: '6574',
        selected: false,
    }
]