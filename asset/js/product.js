let products = [
    {
        name:"X3 Bluetooth Gamepad",
        image: "asset/img/g92-2-500x500 1.png",
        newPrice: "$1420",
        oldPrice: "1460",
        description: "Wireless Vibration Controller Wireless Mobile Game Controller Pad Bluetooth Phone Gamepad Joystick Game Handle With Retractable Phone Holder Clip Compatible For Android /iOS Smartphone"
    },
    {
        name:"AK-900 Wired Keyboard",
        image: "asset/img/Frame 612.png",
        newPrice: "$960",
        oldPrice: "1460",
        description: "The set includes a high-performance gaming keyboard and a precision mouse + original mouse pad, both of which connect seamlessly via USB. The keyboard features a stunning illuminated design that not only adds style to your gaming setup, but also improves visibility in low-light environments. The keyboard's keys are ergonomically laid out and feel comfortable in your hand, allowing you to game for hours without any discomfort or fatigue!"
    },
    {
        name: "IPS LCD Gaming Monitor",
        image: "asset/img/g27cq4-500x500 1.png",
        newPrice: "$370",
        oldPrice: "",
        description: "The LG MyView Smart Monitor is built for seamless multitasking, whether you're working, playing, or streaming. Connect the 34 21:9 curved display to your laptop, desktop, or gaming console for an immersive experience. Plus, with the built-in LG webOS, you can easily stream your favorite shows from top app LG Magic Remote Included: Control your content effortlessly with the included LG Magic Remote. It allows easy navigation of on-screen content, and with voice commands, you can play and control your favorite content hands-freeAccess Your Favorite Streaming Services: Powered by webOS23, quickly access Netflix, Prime Video, TV, Disney+, HBO Max, and over 300 free LG Channels, offering a variety of content from comedy and movies to sports34 Ultra-Wide 21:9 Panoramic Cinema: Experience the 34 ultrawide QHD (3440x1440) display with a 21:9 aspect ratio, offering 34% more screen real estate than a 16:9 display. The 1800R curve of the monitor enhances the viewing experience, pulling you into the action just like a movie theater",
    },
    {
        name: "S-Series Comfort Chair",
        image:"asset/img/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
        newPrice: "$375",
        oldPrice: "",
        description: "Breathable & Comfortable: Breathable high density strength mesh material allows air to circulate, prevent body heat and moisture build up. Keeping you cool and comfortable throughout the dayErgonomic Design: Ergonomic lumbar support hugs your lower back and enhances the natural curve of your spine. The pneumatic adjustment lever will allow you to easily adjust the seat to your desired height. Adjustable tilt tension, greatly help to eliminates leg fatigueAdjustable Height & 360° Swivel: Adjustable back height and headrest with reclining option, which makes the user more comfortable during work hours. Dual-wheel PU casters support 360° Swivel freely and move very easilyEasy to Install: The instructions are very easy to follow, you just need to count a few screws and bolts, you can assemble it. And easy to be washedAdjustable Mesh Executive Office Computer Desk Ergonomic Chair, contemporary ergonomic mesh back home & office chair, is designed to provide exceptional back support and to prevent body heat and moisture build up.Features:- Wheel Support 360° swivel freely and move very easily.- Adjustable tilt tension and seat height, greatly help to eliminates leg fatigue.- Forward and backward rotating, up and dowm adjustment armrest.Material Type: PP + Aluminum alloy Feet + PU Wheel +  MeshFeature: Adjustable Seat, Armrest, HeadrestPackage Weight: 45.5 Lbs (20.65 kg)Package Size: 28.35x 13.38x 24.8 inches (72x 34x 63 cm)",
    },
    {
        name: "HITHIUM HeroEE 16 51.2V",
        image: "asset/img/invarter-removebg-preview.png",
        newPrice: "$1,808.86",
        oldPrice: "",
        description: "Powerful Output · Reliable Energy AnywhereHiTHIUM HeroEE 16 portable power station is designed for outdoor emergency backup, and high-power device charging. Equipped with 16wh LiFePO4 battery, it supports simultaneous charging of multiple devices—compatible with laptops, smartphones, induction cookers, power tools, and more. With versatile input options including AC and solar energy charging, it meets the demands of various scenarios. The built-in smart temperature control system and multiple safety protections ensure worry-free use. Whether you're camping, working on-site, or facing a power outage at home, HiTHIUM HeroEE 16 is your dependable mobile energy source.",
    },
    {
        name: "Kz EDX Pro In-Ear Stage",
        image: "asset/img/earp-removebg-preview.png",
        newPrice: "$8.24",
        oldPrice: "",
        description: "As a re-optimization product, EDX Pro s fully upgraded in configuration, interface, cable and appearance, which highly restores on-the-spot atmosphere and gives you shock bass quality.",
    },
    {
        name: "EASYPIE EasyPie 20000",
        image: "asset/img/powerbank-removebg-preview.png",
        newPrice: "$4.66",
        oldPrice: "",
        description: "EASYPIE EasyPie 20000mAh Dual Fast Charge 64W Type-C And Micro-USB Portable Power Bank",
    },
    {
        name: "ALagzi 2025 Men's Martin Boots Work Boots - Brown",
        image: "asset/img/shoes-removebg-preview.png",
        newPrice: "$8.39",
        oldPrice: "",
        description: "It is an elegant, comfortable and refreshing shoe derived from the latest model of the year.The rod is the most popular style of the year, it is cool and versatile. The upper texture is comfortable, soft, relaxed and elegant. The interior is designed with vents that allow you to breathe freely and comfortably, so you won’t feel your feet easily if you wear them for long periods. The sole is made of non-slip rubber, soft and comfortable.",
    },
]

let productId = window.location.search.split("=")[1]

let product = products[productId]

let elmName = document.querySelector(".hnh")
let elmPriceNew = document.querySelector(".product-detail__price")
let elmDescription = document.querySelector(".Detail-about")
let elmImage = document.querySelector("#detail-image")

elmName.innerText = product.name 
elmImage.setAttribute("src", product.image)
elmPriceNew.innerText = product.newPrice
elmDescription.innerText = product.description  




let readMore = document.querySelector(".read-more")
let seeLess = document.querySelector(".see-less")
let productDescription = document.querySelector(".Detail-about")

function clickReadMore (){
    readMore.style.display = "none"
    seeLess.style.display = "block"
    productDescription.classList.remove("second-detail")
}
readMore.addEventListener("click", clickReadMore)

function clickSeeLess (){
    readMore.style.display = "block"
    seeLess.style.display = "none"
    productDescription.classList.add("second-detail")
}
seeLess.addEventListener("click", clickSeeLess)