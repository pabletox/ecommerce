const products = [
    {
      id: "1",
      name: "Monitor Odisey",
      description: "Monitor Gamer Curvo Odyssey G55C Samsung, 32 Pulgadas QHD, 165Hz, 1ms(MPRT), 1000R , AMD FreeSync",
      price: 349990,
      stock: 10,
      image: "/img/monitor.jpg",
      category: "Monitor",
      brand: "Samsung"
    },
    {
      id: "2",
      name: "GeForce RTX 3050",
      description: "Tarjeta de Video MSI Nvidia GeForce RTX 3050 LP 6G OC, 14 Gbps, 6GB GDDR6, 96-bit, Low Profile",
      price: 489990,
      stock: 20,
      image: "/img/tarjeta_video.jpg",
      category: "Tarjeta_Video",
      brand: "MSI"
    },
    {
      id: "3",
      name: "Mouse Red Dragon",
      description: "Mouse Gamer Inalámbrico Redragon K1NG M916 PRO, 1000hz, Negro",
      price: 49990,
      stock: 7,
      image: "/img/mouse.jpg",
      category: "Mouse",
      brand: "Red Dragon"
    },
    {
      id: "4",
      name: "Stream Deck Elgato",
      description: "Stream Deck Elgato MK.2, 15 Teclas LCD Personalizables, Negro",
      price: 129990,
      stock: 6,
      image: "/img/streamdeck.jpg",
      category: "Otros",
      brand: "Elgato"
    },
    {
      id: "5",
      name: "Audífonos Gamer Checkpoint",
      description: "Audífonos Gamer Checkpoint HX-200 Akatsuki, 7.1 Virtual, Iluminación LED, Negro/Rojo",
      price: 44990,
      stock: 10,
      image: "/img/audifonos.png",
      category: "Audifono",
      brand: "Checkpoint"
    },
    {
      id: "6",
      name: "Mouse Red Dragon",
      description: "Mouse Gamer Inalámbrico Redragon K1NG M916 PRO, 1000hz, Blanco",
      price: 29890,
      stock: 22,
      image: "/img/mouse_blanco.jpg",
      category: "Mouse",
      brand: "Red Dragon"
    },
    {
      id: "7",
      name: "Teclado Red Dragon",
      description: "Teclado Gamer Redragon Fizz Pro, Mecánico, Switch Redragon Red, 65 %, Español, Negro",
      price: 49990,
      stock: 9,
      image: "/img/teclado_red_negro.jpeg",
      category: "Teclado",
      brand: "Red Dragon"
    },
    {
      id: "8",
      name: "Teclado Red Dragon",
      description: "Teclado Gamer Inalámbrico Redragon K673 Pro RGB, 81 Teclas, 75%, Switch Red, BT, Cream/Purple/Green",
      price: 57830,
      stock: 3,
      image: "/img/teclado_red_purple.png",
      category: "Teclado",
      brand: "Red Dragon"
    },
    {
      id: "9",
      name: "Mouse Corsair",
      description: "Mouse Gamer Inalámbrico Corsair M75 Air, Ultraligero 60g, Sensor Marksman 26K DPI, Black",
      price: 27930,
      stock: 4,
      image: "/img/mouse_corsair.jpg",
      category: "Mouse",
      brand: "Corsair"
    }
  ]
  const getProducts = () => {
    return new Promise( (resolve, reject)=> {
      setTimeout( ()=>{
        resolve(products)
      }, 500 )
    } )
  }

  const category = [
    {
      name:"Mouse"
    },
    {
      name:"Teclado"
    },
    {
      name:"Audifono"
    },
    {
      name:"Monitor"
    },
    {
      name:"Tarjeta_Video"
    },
    {
      name:"Otros"
    }
  ]
  const getCategory = () => {
    return new Promise( (resolve, reject)=> {
      setTimeout( ()=>{
        resolve(category)
      }, 500 )
    } )
  }



  export { getProducts, getCategory }