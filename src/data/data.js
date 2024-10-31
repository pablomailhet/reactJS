const categories = [
    {
        id: "engines",
        name: "Engines",
        image: {
            url: "/img/category/engines.jpg",
            alt: ""
        }
    },
    {
        id: "esc",
        name: "ESC",
        image: {
            url: "/img/category/esc.jpg",
            alt: ""
        }
    },
    {
        id: "propellers",
        name: "Propellers",
        image: {
            url: "/img/category/propellers.jpg",
            alt: ""
        }
    },
    {
        id: "fc",
        name: "Flight Controllers",
        image: {
            url: "/img/category/fc.jpg",
            alt: ""
        }
    },
    {
        id: "goggles",
        name: "Goggles",
        image: {
            url: "/img/category/goggles.jpg",
            alt: ""
        }
    },
    {
        id: "vtx",
        name: "Video Transmitters",
        image: {
            url: "/img/category/vtx.jpg",
            alt: ""
        }
    },
    {
        id: "cameras",
        name: "Cameras",
        image: {
            url: "/img/category/cameras.jpg",
            alt: ""
        }
    },
    {
        id: "antennas",
        name: "Antennas",
        image: {
            url: "/img/category/antennas.jpg",
            alt: ""
        }
    }
]

const products = [
    {
        id: 1,
        categoryId: "engines",
        name: "TM F40pro",
        description: "Fpv Racing Drone Motor.",
        image: {
            url: "/img/engines/f40pro.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 11.256,
        stock: 4
    },
    {
        id: 2,
        categoryId: "engines",
        name: "TM Its",
        description: "Size 2208 2s to 4s",
        image: {
            url: "/img/engines/its2208.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 21.159,
        stock: 3
    },
    {
        id: 3,
        categoryId: "engines",
        name: "TM Velox",
        description: "Size 2207 3s to 4s",
        image: {
            url: "/img/engines/v2207.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 31.741,
        stock: 8
    },
    {
        id: 4,
        categoryId: "engines",
        name: "TM V3120",
        description: "Size 3120 4s to 6s",
        image: {
            url: "/img/engines/v3120.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 41.852,
        stock: 10
    },
    {
        id: 5,
        categoryId: "esc",
        name: "F35A 3-6S",
        description: "Fast Response, High Efficiency y Less Heat",
        image: {
            url: "/img/esc/f35a.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 52,
        stock: 2
    },
    {
        id: 6,
        categoryId: "esc",
        name: "F55A PROII 6S 4IN1",
        description: "Explosive Power, Fast Response y Prominent Reliability",
        image: {
            url: "/img/esc/f55aproII.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 62,
        stock: 5
    },
    {
        id: 7,
        categoryId: "esc",
        name: "F66A MINI 6S 4IN1",
        description: "High Current and High Voltage, all nfet.",
        image: {
            url: "/img/esc/f66apro.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 72,
        stock: 6
    },
    {
        id: 8,
        categoryId: "esc",
        name: "MINI F45A 6S 4IN1",
        description: "Mini Body, strong performance",
        image: {
            url: "/img/esc/minif45a.jpg",
            alt: "imagen de un motor para avion a radio control"
        },
        price: 82,
        stock: 1
    },
    {
        id: 9,
        categoryId: "propellers",
        name: "5x5, 3 blade",
        description: "GF-5127.5-Proxy-1",
        image: {
            url: "/img/propellers/prop09.jpg",
            alt: ""
        },
        price: 19.1,
        stock: 10
    },
    {
        id: 10,
        categoryId: "propellers",
        name: "15x7 2 blade",
        description: "HQ-15X7-Black",
        image: {
            url: "/img/propellers/prop10.jpg",
            alt: ""
        },
        price: 15.23,
        stock: 1
    },
    {
        id: 11,
        categoryId: "propellers",
        name: "9x4 4 blade",
        description: "HQ DT90MMX4 for Cinewhoop pink",
        image: {
            url: "/img/propellers/prop11.jpg",
            alt: ""
        },
        price: 18.2,
        stock: 6
    },
    {
        id: 12,
        categoryId: "propellers",
        name: "2.9x5 5 blade",
        description: "HQ DT2.9X2.5X5 for DJI Avata",
        image: {
            url: "/img/propellers/prop12.jpg",
            alt: ""
        },
        price: 8.2,
        stock: 3
    },
    {
        id: 13,
        categoryId: "fc",
        name: "H743 Slim V3",
        description: "Mateksys Flight Controller H743 Slim V3",
        image: {
            url: "/img/fc/fc13.jpg",
            alt: ""
        },
        price: 96.99,
        stock: 8
    },
    {
        id: 14,
        categoryId: "fc",
        name: "STM32 H7",
        description: "Kiss Ultra FCFC V2 Flight Controller",
        image: {
            url: "/img/fc/fc14.jpg",
            alt: ""
        },
        price: 98.31,
        stock: 7
    },
    {
        id: 15,
        categoryId: "fc",
        name: "STM32 F405RGT6",
        description: "Mateksys Flight Controller F405-WTE",
        image: {
            url: "/img/fc/fc15.jpg",
            alt: ""
        },
        price: 75.45,
        stock: 4
    },
    {
        id: 16,
        categoryId: "fc",
        name: "AT32F435RMT7",
        description: "TBS Lucid FC Pro",
        image: {
            url: "/img/fc/fc16.jpg",
            alt: ""
        },
        price: 49.95,
        stock: 7
    },
    {
        id: 17,
        categoryId: "goggles",
        name: "Walksnail Avatar HD Goggles L",
        description: "The Avatar HD system adopts industry-leading H.265 encoding technology",
        image: {
            url: "/img/goggles/gog17.jpg",
            alt: ""
        },
        price: 199,
        stock: 9
    },
    {
        id: 18,
        categoryId: "goggles",
        name: "Skyzone SKY04X PRO Oled FPV",
        description: "The SKY04X PRO is the upgrade version of SKY04X",
        image: {
            url: "/img/goggles/gog18.jpg",
            alt: ""
        },
        price: 499,
        stock: 10
    },
    {
        id: 19,
        categoryId: "goggles",
        name: "Walksnail Avatar HD Goggles X",
        description: "As the Walksnail Avatar born",
        image: {
            url: "/img/goggles/gog19.jpg",
            alt: ""
        },
        price: 459,
        stock: 5
    },
    {
        id: 20,
        categoryId: "goggles",
        name: "SJ RHD430 FPV Goggles",
        description: "SJ RHD430 5.8G 800*480 4.3inch 40CH Diversity DVR FPV Goggles",
        image: {
            url: "/img/goggles/gog20.jpg",
            alt: ""
        },
        price: 59.95,
        stock: 2
    },
    {
        id: 21,
        categoryId: "vtx",
        name: "Walksnail Avatar HD GT Kit (2W)",
        description: "Camera: Resolution: 1080P/60fps; 1080P/100fps; 720P/120fps; 720P/60fps, Transmitter Power (EIRP): FCC: <30dBm, MAX:33dBm ; CE: <14dBm; SRRC: <20dBm; MIC: <25dBm",
        image: {
            url: "/img/vtx/vtx21.jpg",
            alt: ""
        },
        price: 179,
        stock: 6
    },
    {
        id: 22,
        categoryId: "vtx",
        name: "TBS Unify Pro32 DP (MMCX)",
        description: "The TBS UNIFY PRO32 DP (MMCX), is a high-quality video transmitter",
        image: {
            url: "/img/vtx/vtx22.jpg",
            alt: ""
        },
        price: 49.95,
        stock: 9
    },
    {
        id: 23,
        categoryId: "vtx",
        name: "TBS Unify Pro32 HV (MMCX)",
        description: "Ultra-clean transmission (up to 16 pilots at once!)",
        image: {
            url: "/img/vtx/vtx23.jpg",
            alt: ""
        },
        price: 49.95,
        stock: 7
    },
    {
        id: 24,
        categoryId: "vtx",
        name: "TBS Unify Pro 5G8 HV Race (SMA)",
        description: "Distilling the smallest, lightest and most powerful video transmitters",
        image: {
            url: "/img/vtx/vtx24.jpg",
            alt: ""
        },
        price: 24.95,
        stock: 8
    },
    {
        id: 25,
        categoryId: "cameras",
        name: "Caddx Ratel 2 - 2.1mm (Red)",
        description: "Starlight 1200TVL 2.1mm Lens FOV 165° NTSC/PAL 16:9/4:3 ",
        image: {
            url: "/img/cameras/cam25.jpg",
            alt: ""
        },
        price: 30.99,
        stock: 4
    },
    {
        id: 26,
        categoryId: "cameras",
        name: "RunCam Racer Nano 4",
        description: "Image Sensor: Super WDR CMOS Sensor Horizontal Resolution: 1200TVL",
        image: {
            url: "/img/cameras/cam26.jpg",
            alt: ""
        },
        price: 34.99,
        stock: 3
    },
    {
        id: 27,
        categoryId: "cameras",
        name: "Walksnail Avatar Camera",
        description: "The Walksnail Avatar HD Camera is a digital camera that works with the Walksnail Avatar and Fat Shark HD Dominator systems",
        image: {
            url: "/img/cameras/cam27.jpg",
            alt: ""
        },
        price: 59,
        stock: 5
    },
    {
        id: 28,
        categoryId: "cameras",
        name: "NBD BeeEye FPV Camera",
        description: "A replacement camera for the AcroBee. Can be used as a replacement camera for other applications too",
        image: {
            url: "/img/cameras/cam28.jpg",
            alt: ""
        },
        price: 12.99,
        stock: 2
    },
    {
        id: 29,
        categoryId: "antennas",
        name: "Walksnail Avatar Vtx Antenna (2pcs)",
        description: "The Walksnail Avatar HD VTX Antenna works with HD systems",
        image: {
            url: "/img/antennas/ant29.jpg",
            alt: ""
        },
        price: 15.9,
        stock: 10
    },
    {
        id: 30,
        categoryId: "antennas",
        name: "VAS Ethix Crosshair Extreme (RHCP) 5.8GHZ",
        description: "FPVs favorite patch antenna gets an Ethix makeover",
        image: {
            url: "/img/antennas/ant30.jpg",
            alt: ""
        },
        price: 37.99,
        stock: 7
    },
    {
        id: 31,
        categoryId: "antennas",
        name: "VAS 5.8GHz Crosshair XTreme Diversity System",
        description: "The Crosshair™ XTreme Diversity System",
        image: {
            url: "/img/antennas/ant31.jpg",
            alt: ""
        },
        price: 64.95,
        stock: 3
    },
    {
        id: 32,
        categoryId: "antennas",
        name: "VAS 5.8GHz Tiny Whoop Dipole",
        description: "When it comes to micro quads, every gram matters",
        image: {
            url: "/img/antennas/ant32.jpg",
            alt: ""
        },
        price: 12.99,
        stock: 8
    }
]


const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 250)
    })
}

export { getCategories, getProducts }