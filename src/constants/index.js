import {
    facebook,
    instagram,
    shieldTick,
    support,
    truckFast,
    twitter,
} from "../assets/icons";
import {
    bigMouse1,
    bigMouse2,
    bigMouse3,
    customer1,
    customer2,
    mouse1,
    mouse2,
    mouse3,
    mouse4,
} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: bigMouse1,
        bigShoe: bigMouse1,
    },
    {
        thumbnail: bigMouse2,
        bigShoe: bigMouse2,
    },
    {
        thumbnail: bigMouse3,
        bigShoe: bigMouse3,
    },
];

export const statistics = [
    { value: "1k+", label: "Brands" },
    { value: "500+", label: "Shops" },
    { value: "250k+", label: "Customers" },
];

export const products = [
    {
        imgURL: mouse1,
        name: "Logitech MX MASTER 3S",
        price: "$169.95",
        detail: "Meet MX Master 3S - an iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
    },
    {
        imgURL: mouse2,
        name: "Logitech SIGNATURE M650",
        price: "$59.95",
        detail: "You'll enjoy working with your Signature M650. Each mouse features a contoured shape, soft thumb area, and rubber side grips that keep your hand snug and in place. Get more comfort and focus more on what you need to get done.",
    },
    {
        imgURL: mouse3,
        name: "Logitech MX ERGO",
        price: "$220.20",
        detail: "Say no to fatigue or discomfort after a long day at work. MX ERGO is crafted for the shape of your hand and built for fast and precise tracking. Adjust your hand and wrist posture with the unique 0 or 20° tilt angle to conquer those lengthy decks and spreadsheets with ease — all the way from start to finish. ",
    },
    {
        imgURL: mouse4,
        name: "Logitech MX ANYWHERE 3S",
        price: "$139.95",
        detail: "Experience ultimate versatility with remarkable performance. An advanced compact mouse that lets you work wherever the work takes you. Now with next-level precision and responsiveness thanks to 8K DPI any-surface tracking and quiet clicks.",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext:
            "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext:
            "Experience worry-free transactions with our secure payment options.",
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext:
            "Our dedicated team is here to assist you every step of the way.",
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Morich Brown",
        rating: 4.5,
        feedback:
            "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    },
    {
        imgURL: customer2,
        customerName: "Lota Mongeskar",
        rating: 4.5,
        feedback:
            "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "PRO X SUPERLIGHT 2", link: "/" },
            { name: "G502 X PLUS GAMING MOUSE", link: "/" },
            { name: "G502 X LIGHTSPEED", link: "/" },
            { name: "G903 HERO", link: "/" },
            { name: "MX MASTER 3S", link: "/" },
            { name: "SIGNATURE M650", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About Us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How It Works", link: "/" },
            { name: "Privacy Policy", link: "/" },
            { name: "Payment Policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            {
                name: "customer@logitech.com",
                link: "mailto:customer@logitech.com",
            },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
