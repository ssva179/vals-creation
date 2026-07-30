export type GalleryImage = {
    type: "image";
    src: string;
    alt: string;
    title?: string;
};

export type GalleryVideo = {
    type: "video";
    src: string;
    title?: string;
    poster?: string;
};

export type GalleryMedia = GalleryImage | GalleryVideo;

export type GalleryCollection = {
    title: string;
    eyebrow: string;
    description: string;
    media: GalleryMedia[];
};

export const galleryCollections: Record<string, GalleryCollection> = {
    "food-carts": {
        title: "Food Cart Experiences",
        eyebrow: "Food & Dessert Experiences",
        description:
            "Explore our food and dessert cart setups, including paleta carts, charcuterie, cotton candy, elote, Dubai chocolate, mini pancakes, and other custom snack experiences.",
        media: [

            {
                type: "image",
                src: "/images/gallery/food-carts/dubai-chocolate/newdubai.JPEG",
                alt: "Dubai chocolate dessert display",
                title: "Dubai Chocolate",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai2.PNG",
                alt: "Dubai chocolate dessert display",
                title: "Dubai Chocolate",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_4.mov",
                title: "Dubai Chocolate",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_1.mov",
                title: "Dubai Chocolate",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_2.jpg",
                alt: "Dubai chocolate dessert display",
                title: "Dubai Chocolate",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_3.mov",
                title: "Dubai Chocolate",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_5.mov",
                title: "Dubai Chocolate",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/dubai-chocolate/dubai_1.25.MOV",
                title: "Dubai Chocolate",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/dubai-chocolate/woody3.JPEG",
                alt: "Dubai chocolate dessert display",
                title: "Dubai Chocolate",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/dubai-chocolate/woody2.jpg",
                alt: "Dubai chocolate dessert display",
                title: "Dubai Chocolate",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/paleta/paleta_1.png",
                alt: "White paleta cart styled for an event",
                title: "Paleta Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/paleta/paleta_2.jpg",
                alt: "Paleta cart decorated for a celebration",
                title: "Paleta Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/paleta/paleta_3.JPG",
                alt: "Paleta dessert display at an event",
                title: "Paleta Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/paleta/paleta_4.jpg",
                alt: "Custom paleta cart setup",
                title: "Paleta Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/paleta/paleta_5.JPG",
                alt: "Paleta cart with custom event styling",
                title: "Paleta Cart",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/paleta/paleta_6.mov",
                title: "Paleta & Ice Cream Cart",
            },

            {
                type: "image",
                src: "/images/gallery/food-carts/charcuterie/charcuterie_1.jpg",
                alt: "Charcuterie cart prepared for an event",
                title: "Charcuterie Cart",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/charcuterie/charcuterie_1.mov",
                title: "Charcuterie Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/charcuterie/charcuterie_2.png",
                alt: "Charcuterie display with custom event styling",
                title: "Charcuterie Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/charcuterie/charcuterie_3.png",
                alt: "Charcuterie cart display",
                title: "Charcuterie Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/charcuterie/charcuterie_4.png",
                alt: "Styled charcuterie experience",
                title: "Charcuterie Cart",
            },


            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_1.JPG",
                alt: "Cotton candy cart prepared for an event",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_2.png",
                alt: "Cotton candy station with event decor",
                title: "Cotton Candy",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/cotton-candy/cc_3.mov",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_4.png",
                alt: "Cotton candy display",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_5.png",
                alt: "Custom cotton candy cart",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_6.png",
                alt: "Cotton candy cart with custom decorations",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_7.jpg",
                alt: "Cotton candy station at a celebration",
                title: "Cotton Candy",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/cotton-candy/cc_8.jpg",
                alt: "Styled cotton candy experience",
                title: "Cotton Candy",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/elote/elote_1.mov",
                title: "Elote Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/elote/elote_2.jpg",
                alt: "Elote cart prepared for an event",
                title: "Elote Cart",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/elote/elote_3.jpg",
                alt: "Styled elote cart display",
                title: "Elote Cart",
            },

            {
                type: "image",
                src: "/images/gallery/food-carts/mini-pancake/minipan_1.jpg",
                alt: "Mini pancake cart styled for an event",
                title: "Mini Pancake Bar",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/mini-pancake/minipan_2.mov",
                title: "Mini Pancake Bar",
            },
            {
                type: "video",
                src: "/images/gallery/food-carts/mini-pancake/minipan_3.mov",
                title: "Mini Pancake Bar",
            },
            {
                type: "image",
                src: "/images/gallery/food-carts/mini-pancake/minpan_4.jpg",
                alt: "Mini pancake dessert setup",
                title: "Mini Pancake Bar",
            },
        ],
    },

    "interactive-experiences": {
        title: "Interactive Experiences",
        eyebrow: "Interactive Event Stations",
        description:
            "Create unforgettable moments with our hands on experience stations designed to entertain, inspire, and leave guests with a meaningful keepsake. Whether they're building a beautiful bouquet at our Bloom Bar or designing a custom baby onesie, each station transforms your celebration into a memorable experience your guests will love.",
        media: [
            {
                type: "video",
                src: "/images/gallery/interactive/bloom_1.mov",
                title: "Bloom Bar",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/bloom_2.png",
                alt: "Bloom bar arranged with flowers",
                title: "Bloom Bar",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/bloom_3.jpg",
                alt: "Interactive bloom bar at an event",
                title: "Bloom Bar",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/onesie14323.png",
                alt: "Onesie decorating station prepared for a baby shower",
                title: "Onesie Decorating Station",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/onesie_1.jpeg",
                alt: "Custom onesie decorating experience",
                title: "Onesie Decorating Station",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/onesie_2.png",
                alt: "Onesie decorating table with supplies",
                title: "Onesie Decorating Station",
            },
            {
                type: "image",
                src: "/images/gallery/interactive/onesie_3.png",
                alt: "Interactive baby shower onesie station",
                title: "Onesie Decorating Station",
            },
        ],
    },

    "marquee-letters": {
        title: "Marquee Letters",
        eyebrow: "Statement Rentals",
        description:
            "Explore illuminated marquee displays styled for birthdays, graduations, anniversaries, and milestone celebrations.",
        media: [
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_1.png",
                alt: "Illuminated marquee display at an event",
                title: "Marquee Display",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_2.png",
                alt: "Marquee numbers with balloon decor",
                title: "Marquee Numbers",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_3.png",
                alt: "Custom marquee number setup",
                title: "Marquee Numbers",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_4.jpg",
                alt: "Illuminated marquee letters styled for a celebration",
                title: "Marquee Letters",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_5.png",
                alt: "Marquee display with coordinated event decorations",
                title: "Marquee Display",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_6.png",
                alt: "Marquee numbers displayed with balloons",
                title: "Marquee Numbers",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_7.png",
                alt: "Custom marquee display for an event",
                title: "Marquee Display",
            },
            {
                type: "image",
                src: "/images/gallery/marquee/marquee_8.png",
                alt: "Illuminated marquee number display",
                title: "Marquee Numbers",
            },
        ],
    },

    "event-details": {
        title: "Event Styling & Details",
        eyebrow: "Custom Celebration Details",
        description:
            "Discover coordinated styling, custom dessert displays, signage, and thoughtful details designed to make each celebration feel personal and complete.",
        media: [
            {
                type: "image",
                src: "/images/gallery/custom/waffle2.jpg",
                alt: "Custom dessert option",
                title: "New Waffle on a Stick!",
            },
            {
                type: "image",
                src: "/images/gallery/custom/waffle.jpg",
                alt: "Custom dessert option",
                title: "New Waffle on a Stick!",
            },
            {
                type: "image",
                src: "/images/gallery/custom/charcuterie.png",
                alt: "Custom charcuterie display styled for an event",
                title: "Custom Charcuterie Display",
            },
            {
                type: "image",
                src: "/images/gallery/custom/custom.jpg",
                alt: "Personalized event setup and custom decor",
                title: "Custom Event Styling",
            },
            {
                type: "image",
                src: "/images/gallery/custom/customdessert.jpg",
                alt: "Custom dessert display prepared for a celebration",
                title: "Custom Dessert Display",
            },
            {
                type: "image",
                src: "/images/gallery/custom/newdubai.JPEG",
                alt: "Personalized event setup and custom decor",
                title: "Custom Event Styling",
            },
        ],
    },
};