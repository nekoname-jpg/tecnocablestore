// Número oficial de WhatsApp del asesor de TECNOCABLE
const WHATSAPP_ASESOR = "5804129945608";

// Base de datos de productos (puedes editar precios, nombres y rutas de imágenes)
const productos = [
    {
        id: 1,
        nombre: "Teclado Mecánico LEAVEN K550 Blanco RGB Gamer",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Teclado mecánico compacto con switches rojos silenciosos e iluminación RGB personalizable.",
        specs: ["Switches mecánicos de alta respuesta", "Retroiluminación RGB con 18 modos", "Cable trenzado USB-C desmontable"],
        imagenes: [
            "imagenesTecnocable/leaven k550.jpeg",
            "imagenesTecnocable/ensamblajeyang.jpg"
        ]
    },
    {
        id: 2,
        nombre: "Fuentes de poder AZZA 750w certificadas BRONZE 80PLUS",
        categoria: "componentes",
        categoriaLabel: "Componentes",
        precio: 80.00,
        descripcion: "Fuentes de poder de la linea AZZA, con una capacidad de 750 watts y una certificación BRONZE 80 PLUS.",
        specs: ["Fuente de Poder", "Certificación Bronze 80PLUS", "750watts","Garantía directa en tienda"],
        imagenes: [
            "imagenesTecnocable/fuentes certificadas 750w bronce.jpeg",
            "imagenesTecnocable/mantenimientomodif.jpg"
        ]
    },
    {
        id: 3,
        nombre: "COMBO EL YANG 16GB RAM DDR4",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 680.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD NVMe 512GB", "Case vidrio templado + 4 ventiladores ARGB"],
        imagenes: [
            "imagenesTecnocable/ensamblajeyang.jpg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
    {
        id: 4,
        nombre: "Bobina / Patch Cord Cable UTP Cat6",
        categoria: "redes",
        categoriaLabel: "Redes y Cables",
        precio: 18.00,
        descripcion: "Cableado estructurado de alta velocidad para redes domésticas, oficinas y cámaras de seguridad.",
        specs: ["Categoría 6 Gigabit Ethernet", "Conectores RJ45 certificados", "Alta resistencia a interferencias"],
        imagenes: [
            "imagenesTecnocable/oficina.jpg",
            "imagenesTecnocable/mantenimientomodif.jpg"
        ]
    },
    {
        id: 5,
        nombre: "Mouse Gamer JERTECH Nasus W200 12.000 DPI",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 28.00,
        descripcion: "Diseño ergonómico ultraligero con sensor óptico de precisión y botones programables.",
        specs: ["Sensor ajustable hasta 12.000 DPI", "6 botones programables", "Peso ligero de 68g"],
        imagenes: [
            "imagenesTecnocable/nasus w200 jertech.jpeg"
        ]
    },
    {
        id: 6,
        nombre: "Procesadores RYZEN 5, 7",
        categoria: "componentes",
        categoriaLabel: "Componentes",
        precio: 52.00,
        descripcion: "Finalmente llegan a nuestra linea de productos los procesadores AMD Ryzen, ¡Tenemos de la serie que necesites!",
        specs: ["AMD Ryzen 5 8600", "AMD Ryzen 5 5600GT", "¡Y más!"],
        imagenes: [
            "imagenesTecnocable/procesadores.jpeg"
        ]
    },
    {
        id: 7,
        nombre: "COMBO EL YIN 16GB RAM DDR4",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 680.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD NVMe 512GB", "Case vidrio templado + 4 ventiladores ARGB"],
        imagenes: [
            "imagenesTecnocable/yin.jpg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
    {
        id: 8,
        nombre: "Audifonos Gamers RGB ONIKUMA B60 Negros",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 40.00,
        descripcion: "Audifonos con sonido envolvente de alta gama, giratorios y ajustables, con jack 3.5mm, con gran compatibilidad en distintas plataformas.",
        specs: ["Sonido envolvente", "Ajustables", "Giratorios", "Audio jack 3.5mm"],
        imagenes: [
            "imagenesTecnocable/onikuma b60.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 9,
        nombre: "Audifono Gamer ONIKUMA GT806 Blancos",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Audifonos inalámbricos ONIKUMA, con sonido envolvente y microfono con cancelación de ruido, RGB Blancos.",
        specs: ["Inalámbricos", "Microfono con Cancelación de ruido","RGB con tres modos", "BT 2.4G"],
        imagenes: [
            "imagenesTecnocable/onikuma gt806 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 10,
        nombre: "Audifono Gamer ONIKUMA GT806 Negros RGB",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 60.00,
        descripcion: "Audifonos inalámbricos ONIKUMA, con sonido envolvente y microno con cancelación de ruido, RGB Negros.",
        specs: ["Inalámbricos", "Microfono con Cancelación de ruido", "RGB con tres modos", "BT 2.4G"],
        imagenes: [
            "imagenesTecnocable/onikuma gt806.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 11,
        nombre: "Audifono Gamer ONIKUMA K8 Negros",
        categoria: "perifericos",
        categoriaLabel: "Perifericos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA ajustables, con sonido envolvente y microfono con cancelación de ruido, con 6 tipos de iluminación, negros.",
        specs: ["RGB con 6 modos", "Microfono con Cancelación de ruido", "Cableado", "Sonido Envolvente"],
        imagenes: [
            "imagenesTecnocable/onikuma k8.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 12,
        nombre: "Audifono Gamer ONIKUMA X13 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA X13 ajustables con sonido envolvente y microfono con cancelación de ruido, con RGB, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado"],
        imagenes: [
            "imagenesTecnocable/onikuma x13 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 13,
        nombre: "Audifono Gamer ONIKUMA X22 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA X22 ajustables de cable tipo USB y cable jack 3.5mm con sonido envolvente y microfono con cancelación de ruido, con RGB, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado", "Ajustables", "USB", "Audio jack 3.5mm"],
        imagenes: [
            "imagenesTecnocable/onikuma x22.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 14,
        nombre: "Audifono Gamer ONIKUMA X25 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA X25 ajustables con sonido envolvente 3D, microfono con cancelación de ruido capaz de rotar hasta 360°, con cables USB y audio jack 3.5mm, RGB dinámico, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado", "USB", "Audio jack 3.5mm"],
        imagenes: [
            "imagenesTecnocable/onikuma x25.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 15,
        nombre: "Audifono Gamer ONIKUMA X26 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA X26 ajustables con sonido envolvente y microfono con cancelación de ruido, ergonomicos y comodos al uso, con una alta compatibilidad en distintas plataformas, con RGB, negros, solo 356g",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado"],
        imagenes: [
            "imagenesTecnocable/onikuma x26 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 16,
        nombre: "Audifono Gamer ONIKUMA K8 blancos",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA K8 ajustables con sonido envolvente y microfono con cancelación de ruido, RGB con 6 luces, 3.5mm jack y USB, blancos",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado"],
        imagenes: [
            "imagenesTecnocable/Onikuma K8 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 17,
        nombre: "Audifono Gamer ONIKUMA K8 camuflados",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA K8 ajustables con sonido envolvente y microfono con cancelación de ruido, RGB con 6 luces, 3.5mm jack y USB, camuflados ",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado"],
        imagenes: [
            "imagenesTecnocable/Onikuma k8 camuflados.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 18,
        nombre: "Audifono Gamer ONIKUMA GT806 RGB blancos",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 60.00,
        descripcion: "Audifonos ONIKUMA GT806 ajustables con sonido envolvente y microfono con cancelación de ruido, con RGB, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Inalámbricos", "2.4 BT"],
        imagenes: [
            "imagenesTecnocable/onikuma gt806 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 19,
        nombre: "Audifono Gamer ONIKUMA B100 negros",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 70.00,
        descripcion: "Audifonos ONIKUMA B100 inalámbricos con una duracion de hasta 60 horas, ajustables con sonido envolvente y microfono con cancelación de ruido, con RGB, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Inalámbricos", "2.4 BT", "Audio jack 3.5mm", "Entrada tipo C", "USB"],
        imagenes: [
            "imagenesTecnocable/onikuma b100 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 20,
        nombre: "Audifono Gamer ONIKUMA B100 blancos",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Audifonos ONIKUMA B100 inalámbricos con una duracion de hasta 60 horas, ajustables con sonido envolvente y microfono con cancelación de ruido, con RGB, blancos",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Inalámbricos", "2.4 BT", "Audio jack 3.5mm", "Entrada tipo C", "USB"],
        imagenes: [
            "imagenesTecnocable/onikuma b100 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 21,
        nombre: "Teclado mecánico Gamer ONIKUMA G38 ¡Don't bother me!",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Teclado mecánico gamer ONIKUMA G38, 98 teclas y conexion USB C, diseño ergonomico, formato compacto aproximadamente 36.5 cm de ancho y un peso ligero de tan solo 1.05 kg, una vida util de aproximadamente 50 millones de pulsaciones.",
        specs: ["Mecánico", "RGB", "98 teclas", "Cableado"],
        imagenes: [
            "imagenesTecnocable/onikuma g38 blanco.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 22,
        nombre: "Teclado mecánico Gamer ONIKUMA MT706 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Teclado Mecánico gamer ONIKUMA MT706 inalámbrico de 81 teclas con una duración de hasta 30 horas con RGB encendido, boton giratorio para controlar el volumen multimedia, con una latencia minima de 1ms perfecta para explotar tu potencial en juegos, teclas transparentes, con RGB dinámico, teclas y luces programables, una montura de junta de hasta 5 capas, negros",
        specs: ["Latencia 1ms", "RGB", "Inalámbrico", "81 teclas", "2.4 BT"],
        imagenes: [
            "imagenesTecnocable/onikuma m5706.jpeg",
            "imagenesTecnocable/ONIKUMA MT706 LAYERS.webp"
        ]
    },{
        id: 23,
        nombre: "Teclado Mecánico Gamer ONIKUMA G52 blanco",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Teclado mecánico gamer ONIKUMA G52, 82 teclas, vida útil de hasta 50 millones de pulsaciones, RGB dinámicos con hasta 16.8 millones de colores personalizable mediante combinaciones de teclas, cableado USB-C a USB-A, compatibilidad con Windows, Mac, iOS y Android, negros",
        specs: ["Latencia 1ms", "RGB", "Cableado", "81 teclas"],
        imagenes: [
            "imagenesTecnocable/onikuma g52 blanco.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 24,
        nombre: "Teclado Mecánico Gamer ONIKUMA G52 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Teclado mecánico gamer ONIKUMA G52, 82 teclas, vida útil de hasta 50 millones de pulsaciones, RGB dinámicos con hasta 16.8 millones de colores personalizable mediante combinaciones de teclas, cableado USB-C a USB-A, compatibilidad con Windows, Mac, iOS y Android, negros",
        specs: ["Sonido Envolvente", "RGB", "Microfono con Cancelación de ruido", "Cableado"],
        imagenes: [
            "imagenesTecnocable/onikuma g52 negro.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 25,
        nombre: "Audifono Gamer HP H100 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Audifonos HP H100 con un sonido estéreo y microfono de 6mm x 5mm,  con RGB, negros",
        specs: ["Sonido Estéreo", "RGB", "Microfono", "Cableado", "USB"],
        imagenes: [
            "imagenesTecnocable/hp h100 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 25,
        nombre: "Audifono Gamer HP H120 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Audifonos HP H120 con sonido estéreo 7.1 y microfono con sensibilidad -38 +/ -3dB, , con RGB, negros",
        specs: ["Sonido Estéreo", "RGB", "Microfono", "Cableado", "USB"],
        imagenes: [
            "imagenesTecnocable/HP H120.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 26,
        nombre: "Teclado Mecánico Gamer HP GK100 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Teclado Mecánico Gamer HP GK100 RGB negro, con 105 teclas, una vida util de hasta 50 millones de pulsaciones, compatible con Windows 10 y Mac OS, cableado y un peso de 810g",
        specs: ["Mecánico", "RGB", "105 teclas", "Cableado"],
        imagenes: [
            "imagenesTecnocable/hp gk100.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 27,
        nombre: "Teclado Mecánico Gamer LEAVEN K68 blanco",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K68 blanco, con RGB, de 68 teclas, diseño ergonómico.",
        specs: ["Mecánico", "RGB", "Cableado", "68 teclas", "Ergonómico"],
        imagenes: [
            "imagenesTecnocable/leaven k68 blanco.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 28,
        nombre: "Teclado Mecánico Gamer LEAVEN K68 rosa",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 45.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K68 rosa, con RGB, de 68 teclas, diseño ergonómico.",
        specs: ["Mecánico", "RGB", "Cableado", "68 teclas", "Ergonómico"],
        imagenes: [
            "imagenesTecnocable/leaven k68 rosa.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 29,
        nombre: "Teclado Mecánico Gamer LEAVEN K550 Blanco",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K550 Blanco cableado USB 2.0, con 87 teclas, una vida útil de 50 millones de pulsaciones, diseño ergonómico, con un peso de 760g",
        specs: ["Mecánico", "RGB", "87 Teclas", "Cableado"],
        imagenes: [
            "imagenesTecnocable/leaven k550 blanco.jpeg",
            "imagenesTecnocable/leaven k550.jpg"
        ]
    },
    {
        id: 30,
        nombre: "Teclado Mecánico Gamer LEAVEN K610",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K610 Inalámbrico con bluetooth 5.0 y 2.4GHz, con 61 teclas, diseño ergonómico, con un peso de 400g, compatible con Windows 10, Mac OS y dispositivos móviles, RGB con 16.8 millones de colores",
        specs: ["Mecánico", "RGB", "87 Teclas", "Cableado", "Inalámbrico", "2.4 BT", "5.0 BT"],
        imagenes: [
            "imagenesTecnocable/leaven k610.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    
    {
        id: 31,
        nombre: "Teclado Mecánico Gamer LEAVEN K620",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 37.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K610 Inalámbrico con bluetooth, con 61 teclas, RGB con 16 millones de colores, diseño ergonómico, bateria de 1200mAh, compatible con Windows y Mac OS, con un peso de 650g",
        specs: ["Mecánico", "RGB", "61 Teclas", "Inalámbrico","Cableado", "650g"],
        imagenes: [
            "imagenesTecnocable/leaven k620 blanco-negro.jpeg",
            "imagenesTecnocable/leaven k620.jpeg"
        ]
    },
    {
        id: 32,
        nombre: "Teclado Mecánico Gamer LEAVEN K620 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 37.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K610 Inalámbrico con bluetooth, con 61 teclas, RGB con 16 millones de colores, diseño ergonómico, bateria de 1200mAh, compatible con Windows y Mac OS, con un peso de 650g",
        specs: ["Mecánico", "RGB", "61 Teclas", "Inalámbrico","Cableado"],
        imagenes: [
            "imagenesTecnocable/leaven k620 negro.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 33,
        nombre: "Teclado Mecánico Gamer LEAVEN K620 rosa",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 37.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K610 Inalámbrico con bluetooth, con 61 teclas, RGB con 16 millones de colores, diseño ergonómico, bateria de 1200mAh, compatible con Windows y Mac OS, con un peso de 650g",
        specs: ["Mecánico", "RGB", "61 Teclas", "Inalámbrico","Cableado"],
        imagenes: [
            "imagenesTecnocable/leaven k620 rosa.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 34,
        nombre: "Teclado Mecánico Gamer LEAVEN K840 Blanco Transparente",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K840 RGB de 84 teclas, diseño transparente blanco, teclas intercambiables y programables a tu gusto, con un peso de 0.7kg",
        specs: ["Mecánico", "RGB", "84 Teclas", "USB Tipo C","Cableado"],
        imagenes: [
            "imagenesTecnocable/leaven k840.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 35,
        nombre: "Teclado Mecánico Gamer LEAVEN K660",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 47.00,
        descripcion: "Teclado Mecánico Gamer LEAVEN K840 RGB de 104 teclas galvanizadas, con soporte impermeable.",
        specs: ["Mecánico", "RGB", "104 Teclas", "USB","Cableado"],
        imagenes: [
            "imagenesTecnocable/leaven mecanico rgb.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 36,
        nombre: "Cámara WEBCAM PRIMUS VISUS 1LS",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Cámara 2K WEBCAM PRIMUS VISUS 1LS, con una resolución de video de 2560x1440P|1280x720|640x480 y una resolución de fotos de 2960x1666, con una frecuencia de cuadros de 1080p@60FPS | 2K@60FPS,un angulo de vision de D=74.38 / H=66.91 / V=40.91°, con salida de videos en formato YUY2/MJPEG/H.264/H.265 y con salida de imagenes en formato JPEG, cableado con conexión USB 2.0 y compatible en Windows, Chromebooks, Linux y MacOS",
        specs: ["2K WEBCAM", "Salida en formato JPEG", "Auto-Enfoque", "Cableado", "USB 2.0", "Resolucion de video de 2560x1440P", "Resolución de imagenes de 2960x1666"],
        imagenes: [
            "imagenesTecnocable/webcam primus visus 1ls.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 37,
        nombre: "Teclado Mecánico Gamer PRIMUS BALLISTA 61T Negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Teclado Mecánico Gamer PRIMUS BALLISTA 61T, diseño compacto y sencillo para tu escritorio, con conexión por cable USB tipo C",
        specs: ["Mecánico", "RGB", "77 Teclas", "USB","Cableado"],
        imagenes: [
            "imagenesTecnocable/primus ballista 61t.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 38,
        nombre: "Mouse Óptico Gamer PRIMUS GLADIUS 12800P",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer PRIMUS GLADIUS 12800P 12800 DPI, con una velocidad de respuesta predeterminada de 500hz, una frecuencia de imagen de 7000 FPS, velocidad maxima de 60IPS y una aceleración máxima de 20 G, 8 botones en los laterales programables, contiene un peso de 155.92g",
        specs: ["Mouse Óptico","12800 DPI","Aceleración de 20 G", "RGB"],
        imagenes: [
            "imagenesTecnocable/primus gladius 12800p.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 39,
        nombre: "Controlador de juegos móvil PRIMUS VICTOR 01BT",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 70.00,
        descripcion: "Controlador de juegos movil PRIMUS VICTOR 01BT, con Bluetooth 5.0, hasta 10 horas de juego continuo y 3 horas de carga, modo turbo y funcion clear, joysticks con tecnología HALL 3D y RGB desactivable",
        specs: ["Inalámbrico", "RGB", "Controlador de juegos", "Bluetooth 5.0", "Joysticks HALL 3D"],
        imagenes: [
            "imagenesTecnocable/primus victor 01bt.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 40,
        nombre: "Teclado Mecánico Gamer Acer NITRO 0KW239",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Teclado Mecánico Gamer 60% Acer NITRO 0KW239 RGB, con anti-ghosting y keycaps de doble inyección, 61 teclas y una conexión USB-C y USB-A desmontables ",
        specs: ["Mecánico", "RGB", "61 teclas", "Cableado", "60%"],
        imagenes: [
            "imagenesTecnocable/teclado acer dkw239.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 41,
        nombre: "Teclado Mecánico Gamer ONIKUMA G55 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 40.00,
        descripcion: "Teclado Mecánico Gamer ONIKUMA G55 negro, 61 teclas, diseño ergonómico y compacto, RGB ",
        specs: ["Mecánico", "RGB", "61 teclas", "Cableado",],
        imagenes: [
            "imagenesTecnocable/teclado onikuma g55 negro.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    {
        id: 42,
        nombre: "Mouse Óptico Gamer ONIKUMA CW902 negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer ONIKUMA CW902 Negro, 6400 DPI ajustable en seis niveles 800/1600/2400/3200/4800/6400 cada nivel con su propia luz RGB, 7 botones programables, compatible con Windows (10/8.1/8/7/Vista/XP) y Linux, diseño liviano y ergonómico",
        specs: ["Óptico", "RGB", "7 Botones programables", "Cableado", "6400 DPI", "Ajustable"],
        imagenes: [
            "imagenesTecnocable/mouse onikuma cw902 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 43,
        nombre: "Mouse Óptico Gamer ONIKUMA CW905 blanco",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Mouse Óptico Gamer ONIKUMA CW905 Blanco, 6400 DPI con niveles ajustables y cada nivel tiene su propia luz RGB 800 verde/1600 rosa/2400 azul/3200 rojo/4800 celeste/ 6400 amarillo, 7 botones programables, diseño ergonómico",
        specs: ["Óptico", "RGB", "7 Botones programables","Ergonómico","Conecta y juega" ,"Cableado", "6400 DPI"],
        imagenes: [
            "imagenesTecnocable/mouse onikuma cw905 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 44,
        nombre: "Mouse Óptico Gamer ONIKUMA CW917 Blanco",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer ONIKUMA CW917, diseño ergonómico y confiable, Dual-mode Cableado e inalámbrico 2.4ghz, 4,800 DPI maximo y ajustable en 5 niveles (800/1200/1600/2400/4800), con una vida útil de 20 millones de pulsaciones, un tiempo de respuesta de 1ms, con una amplia compatibilidad de sistemas (desde Windows 7 a Windows 11).",
        specs: ["Óptico", "RGB", "Dual-mode","Ergonómico", "Inalámbrico", "Cableado", "4800 DPI"],
        imagenes: [
            "imagenesTecnocable/mouse onikuma cw917 blancos.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 45,
        nombre: "Mouse Óptico Gamer ONIKUMA CW917 Negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer ONIKUMA CW917, diseño ergonómico y confiable, Dual-mode Cableado e inalámbrico 2.4ghz, 4,800 DPI maximo y ajustable en 5 niveles (800/1200/1600/2400/4800), con una vida útil de 20 millones de pulsaciones, un tiempo de respuesta de 1ms, con una amplia compatibilidad de sistemas (desde Windows 7 a Windows 11).",
        specs: ["Óptico", "RGB", "Dual-mode","Ergonómico", "Inalámbrico", "Cableado", "4800 DPI"],
        imagenes: [
            "imagenesTecnocable/mouse onikuma cw917 negros.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 46,
        nombre: "Mouse Óptico Gamer ONIKUMA CW917 Negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer ONIKUMA CW917, diseño ergonómico y confiable, Dual-mode Cableado e inalámbrico 2.4ghz, 4,800 DPI maximo y ajustable en 5 niveles (800/1200/1600/2400/4800), con una vida útil de 20 millones de pulsaciones, un tiempo de respuesta de 1ms, con una amplia compatibilidad de sistemas (desde Windows 7 a Windows 11).",
        specs: ["Óptico", "RGB", "Dual-mode","Ergonómico", "Inalámbrico", "Cableado", "4800 DPI"],
        imagenes: [
            "imagenesTecnocable/mouse onikuma cw917.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 47,
        nombre: "Mouse Óptico Gamer RAZER Deathadder Essential",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer RAZER Deathadder Essential, 5 botones programables, con una vida util de mas de 10 millones de clicks, un sensor óptico de 6,400 DPI, ¿que esperas? #GOGREENWITHRAZER",
        specs: ["Mouse", "Óptico", "5 Botones programables", "Cableado", "6,400 DPI"],
        imagenes: [
            "imagenesTecnocable/mouse razer geatharded essential.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 48,
        nombre: "COMBO Mouse óptico Gamer + Teclado Mecánico Gamer MSI Forge GK110",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 55.00,
        descripcion: "Combo Mouse óptico Gamer + Teclado Mecánico Gamer MSI Forge GK100, cableados con conectividad USB 2.0, Mouse con 6,400 DPI ajustables en 4 niveles (1000/1600/3200/6400), 7 botones programables, Teclado con 108 teclas y una durabilidad de 10+ millones de pulsaciones, compatibilidad con sistema Windows 10 para arriba",
        specs: ["Mecánico", "RGB", "108 teclas", "COMBO", "6.400 DPI", "Teclas duraderas e intercambiables", "USB 2.0", "Cableado"],
        imagenes: [
            "imagenesTecnocable/msi combo forge gk110.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 49,
        nombre: "Mouse Óptico Gamer STRIG GM2150 ",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Mouse Óptico Gamer STRIG GM2150, cableado con una conectividad USB 2.0, 12.800 DPI ajustables en 7 niveles (de 800 a 12,800), 8 botones ergonómicos personalizables y luces RGB con 6 efectos visuales",
        specs: ["Óptico", "RGB", "USB 2.0", "12800 DPI", "8 Botones programables", "Conecta y juega"],
        imagenes: [
            "imagenesTecnocable/strig gm2150.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 50,
        nombre: "Control XBOX 360 Negro",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Control XBOX 360 Negro, listo para enlazarse y jugar, Joysticks analógicos, botones frontales, versión inalámbrica de 2.4ghz con un alcance aproximado de 9 metros, alimentados por dos pilas AA o baterías recargables",
        specs: ["Control", "Conecta y juega", "XBOX 360", "Inalámbrico", "2.4 ghz"],
        imagenes: [
            "imagenesTecnocable/control xbox 360.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 51,
        nombre: "Controles PS4 Blanco y Negro ",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Controles PS4 Blanco y Negro, listo para enlazarse y jugar, Joysticks analógicos, botones frontales, versión inalámbrica de 2.4ghz con un alcance aproximado de 9 m.",
        specs: ["Control", "Conecta y juega", "PlayStation 4", "Inalámbrico", "2.4 ghz"],
        imagenes: [
            "imagenesTecnocable/controles ps4 blanco y negro.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 52,
        nombre: "Controles PS4 CyberPunk 2077 y Azul",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Controles PS4 CyberPunk 2077 y Azul, listo para enlazarse y jugar, Joysticks analógicos, botones frontales, versión inalámbrica de 2.4ghz con un alcance aproximado de 9 metros.",
        specs: ["Control", "Conecta y juega", "PlayStation 4", "Inalámbrico", "2.4 ghz"],
        imagenes: [
            "imagenesTecnocable/controles ps4 cyberpunk, azul.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 53,
        nombre: "Controles PS4 Red Dead Redemption II y GTA V",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Controles PS4 Red Dead Redemption II y GTA V, listo para enlazarse y jugar, Joysticks analógicos, botones frontales, versión inalámbrica de 2.4ghz con un alcance aproximado de 9 metros.",
        specs: ["Control", "Conecta y juega", "PlayStation 4", "Inalámbrico", "2.4 ghz"],
        imagenes: [
            "imagenesTecnocable/controles ps4.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 54,
        nombre: "Control PS3 Rojo",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 25.00,
        descripcion: "Control PS3 Rojo, listo para enlazarse y jugar, Joysticks analógicos, botones frontales, versión inalámbrica de 2.4ghz.",
        specs: ["Control", "Conecta y juega", "PlayStation 3", "Inalámbrico", "2.4 ghz"],
        imagenes: [
            "imagenesTecnocable/controles ps3.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 55,
        nombre: "Monitor ASTRA Curvo 165hz",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Monitor ASTRA Curvo de 165hz de 23 pulgadas, listo para instalar y dominar el juego.",
        specs: ["Monitor", "ASTRA", "Curvo", "165hz"],
        imagenes: [
            "imagenesTecnocable/monitor astra curvo 165hz.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 56,
        nombre: "Monitor ASTRA CURVO 180hz",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Monitor ASTRA Curvo 180hz de 27 pulgadas, listo para instalar y dominar el juego.",
        specs: ["Monitor", "ASTRA", "Curvo", "165hz"],
        imagenes: [
            "imagenesTecnocable/monitor astra 180hz.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 57,
        nombre: "Monitor ASTRA PLANO 100hz",
        categoria: "perifericos",
        categoriaLabel: "Periféricos",
        precio: 35.00,
        descripcion: "Monitor ASTRA plano 100hz de 21.5 pulgadas, listo para instalar y dominar el juego.",
        specs: ["Monitor", "ASTRA", "Curvo", "165hz"],
        imagenes: [
            "imagenesTecnocable/monitor astra plano 100hz.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 58,
        nombre: "Case Gamer AZZA Iris 330 Negro",
        categoria: "componentes",
        categoriaLabel: "Componentes",
        precio: 45.00,
        descripcion: "Case AZZA Iris 330 Negro, RGB Dinámico, para placas Micro-ATX y ATX, 4 Ventiladores",
        specs: ["Case", "RGB", "4 Ventiladores", "Micro-ATX", "ATX"],
        imagenes: [
            "imagenesTecnocable/case iris 330 negro azza.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 59,
        nombre: "Case Gamer AZZA Spectra Black",
        categoria: "componentes",
        categoriaLabel: "Componentes",
        precio: 55.00,
        descripcion: "Case Gamer AZZA Spectra Black, RGB Dinámico, para placas Micro-ATX y ATX, 4 Ventiladores",
        specs: ["Case", "RGB", "4 Ventiladores", "Micro-ATX", "ATX"],
        imagenes: [
            "imagenesTecnocable/case gaming spectra black.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },{
        id: 60,
        nombre: "Case Gamer ASTRA C16-ASC16",
        categoria: "componentes",
        categoriaLabel: "Componentes",
        precio: 55.00,
        descripcion: "Case Gamer AZZA Spectra Black, RGB Dinámico, para placas Micro-ATX y ATX, 4 Ventiladores",
        specs: ["Case", "RGB", "4 Ventiladores", "Micro-ATX", "ATX"],
        imagenes: [
            "imagenesTecnocable/case c16 asc16 astra.jpeg",
            "imagenesTecnocable/ventaperifericosimgsimple.jpg"
        ]
    },
    
    {
        id: 61,
        nombre: "COMBO OFICINA 1",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 395.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM", "SSD 128GB", "Procesador Intel i3-4160", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 1.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 62,
        nombre: "COMBO OFICINA 2",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 350.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR3 ", "SSD 120GB", "Procesador Intel Celeron G1820", "Monitor AUCE 18.5 pulgadas", "Windows 10"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 2.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
    {
        id: 63,
        nombre: "COMBO OFICINA 3",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 767.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["16GB RAM DDR4 3200MHZ", "SSD 256GB", "Procesador Intel i7-7700", "Monitor 18.5 pulgadas", "Windows 11 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 3.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 64,
        nombre: "COMBO OFICINA 4",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 446.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR4 2600MHZ", "SSD 120GB", "Procesador Intel i5-7400", "Monitor 18.5 pulgadas", "Windows 11 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 4.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 65,
        nombre: "COMBO OFICINA 5",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 455.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DRR3 1600MHZ", "SSD 240GB", "Procesador Intel i3-4160", "Monitor 21.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 5.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 66,
        nombre: "COMBO OFICINA 6",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 335.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DRR3 1600MHZ", "SSD 120GB", "Procesador Intel i5-2400", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 6.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 67,
        nombre: "COMBO OFICINA 7",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 446.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR4 2600MHZ", "SSD 128GB", "Procesador Intel i5-7400", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 7.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 68,
        nombre: "COMBO OFICINA 8",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 383.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR3 1600MHZ", "SSD 120GB", "Procesador Intel i3-4130", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 8.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 69,
        nombre: "COMBO OFICINA 9",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 458.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR3 1600MHZ", "SSD 120GB", "Procesador Intel i5-4590", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 9.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 70,
        nombre: "COMBO OFICINA 10",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 350.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR3 1600MHZ", "HDD 500GB SATA", "Procesador Intel i3-3240", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 10.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 71,
        nombre: "COMBO OFICINA 11",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 558.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DDR4 2600MHZ", "SSD 128GB SATA", "Procesador Intel i5-7400", "Monitor 18.5 pulgadas", "Windows 11 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 11.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
{
        id: 72,
        nombre: "COMBO OFICINA 12",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 300.00,
        descripcion: "Equipo enfocado en la oficina, ideal para tareas productivas y multitarea.",
        specs: ["8GB RAM DRR3 1600MHZ", "HDD 500GB SATA", "Procesador Intel i5-2400", "Monitor 18.5 pulgadas", "Windows 10 Pro"],
        imagenes: [
            "imagenesTecnocable/Combo ofina 12.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },


    {
        id: 73,
        nombre: "COMBO AURA",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1367.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR5 5600MHz", "SSD 512GB SATA", "Case Gaming RGB", "Graficos integrados Radeon 760M", "Procesador AMD Ryzen 5 8600G"],
        imagenes: [
            "imagenesTecnocable/Combo Aura.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 74,
        nombre: "COMBO BABY BOSS",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 705.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["8GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RGB", "Graficos AMD", "Procesador AMD Ryzen 3 5300G"],
        imagenes: [
            "imagenesTecnocable/Combo Baby Boos.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
    {
        id: 75,
        nombre: "COMBO BABY",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 543.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["8GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RGB", "Graficos AMD", "Procesador AMD Ryzen 3 3200G"],
        imagenes: [
            "imagenesTecnocable/Combo Baby.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 76,
        nombre: "COMBO BERLIN",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1283.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD M.2 512GB", "Case Gaming RGB", "Graficos integrados AMD", "Procesador AMD Ryzen 7 5700G"],
        imagenes: [
            "imagenesTecnocable/Combo Berlin.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 77,
        nombre: "COMBO JUNIOR",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 887.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["8GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RGB", "Tarjeta Grafica RX 480/RX 470/RX 570", "Procesador Intel Core i7-6700"],
        imagenes: [
            "imagenesTecnocable/Combo Junior RGB.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 78,
        nombre: "COMBO JUNIOR PRO",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1080.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD 512GB SATA", "Case Gaming RGB", "Tarjeta Grafica RX 480/RX 470/RX 570", "Procesador Intel Core i7-7700"],
        imagenes: [
            "imagenesTecnocable/Combo Junior.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 79,
        nombre: "COMBO KRATOS",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 849.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RGB", "Tarjeta Grafica RX 570 4GB", "Procesador Intel XEON E2650 V4"],
        imagenes: [
            "imagenesTecnocable/Combo Kratos.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 80,
        nombre: "COMBO LOKI",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1519.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RGB", "Tarjeta Grafica RX 6600 8GB", "Procesador Intel Core i3-12100F"],
        imagenes: [
            "imagenesTecnocable/Combo Loki.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 81,
        nombre: "COMBO MADMAX",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1115.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["32GB RAM DDR4 3200MHz", "SSD 512GB SATA", "Case Gaming RGB", "Tarjeta Grafica RX 580 8GB", "Procesador Intel XEON E2680 V4"],
        imagenes: [
            "imagenesTecnocable/Combo MadMax.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 82,
        nombre: "COMBO RAGNAROK",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 4425.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["32GB RAM DDR5 5600MHz", "M.2 2TB ", "Case Gaming", "Tarjeta Grafica RTX 5070 12GB", "Procesador AMD Ryzen 7 9700X3D"],
        imagenes: [
            "imagenesTecnocable/Combo Ragnarok.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 83,
        nombre: "COMBO RAPTOR",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1548.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "M.2 512 NVME", "Case Gaming RGB", "Tarjeta Grafica RX6500XT 4GB", "Procesador AMD Ryzen 7 5700X"],
        imagenes: [
            "imagenesTecnocable/Combo Raptor.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 84,
        nombre: "COMBO RAPTOR PRO",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1946.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["32GB RAM DDR4 3200MHz", "M.2 1TB NVME", "Case Gaming RGB", "Tarjeta Grafica RX7600 8GB", "Procesador AMD Ryzen 7 5700X"],
        imagenes: [
            "imagenesTecnocable/Combo Raptor pro.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 85,
        nombre: "COMBO READY",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1562.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR5 5600MHz", "SSD 512GB SATA", "Case Gaming RBG", "Tarjeta Grafica GTX 1650 4G", "Procesador AMD Ryzen 5 7600X"],
        imagenes: [
            "imagenesTecnocable/Combo Ready.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 86,
        nombre: "COMBO Sky Blue",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 856.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["8GB RAM DDR4 3200MHz", "SSD 256GB SATA", "Case Gaming RBG", "Tarjeta Grafica RX 480/RX 470/RX 570", "Procesador AMD Ryzen 5 5500"],
        imagenes: [
            "imagenesTecnocable/Combo SkyBlue.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 87,
        nombre: "COMBO SKYWALKER",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 1122.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["16GB RAM DDR4 3200MHz", "SSD 512GB SATA", "Case Gaming RBG", "Tarjeta Grafica RX 480/RX 470/RX 570", "Procesador AMD Ryzen 5 5500"],
        imagenes: [
            "imagenesTecnocable/Combo Skywalker.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },

    {
        id: 88,
        nombre: "COMBO SPIRIT",
        categoria: "pc",
        categoriaLabel: "PC Ensambladas",
        precio: 3140.00,
        descripcion: "Equipo listo para jugar y trabajar con flujo de aire optimizado y gestión profesional de cables.",
        specs: ["32GB RAM DDR5 JEMIP 5600MHz", "SSD M.2 1TB", "Case Gaming RBG", "Tarjeta Grafica MSI RTX 5060TI 8GB"],
        imagenes: [
            "imagenesTecnocable/Combo Spirit.jpeg",
            "imagenesTecnocable/oficina.jpg"
        ]
    },
];

let carrito = JSON.parse(localStorage.getItem("tecnocable_cart")) || [];
let categoriaActual = "todos";
let textoBusqueda = "";

const grid = document.getElementById("catalogo-grid");
const searchInput = document.getElementById("catalogo-search");
const filterBtns = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("product-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const modalMainImg = document.getElementById("modal-main-img");
const zoomContainer = document.getElementById("zoom-container");
const modalThumbnails = document.getElementById("modal-thumbnails");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalSpecs = document.getElementById("modal-specs");
const modalAddBtn = document.getElementById("modal-add-btn");

const cartDrawer = document.getElementById("cart-drawer");
const cartOpenBtn = document.getElementById("cart-open-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const whatsappCheckoutBtn = document.getElementById("whatsapp-checkout-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const customerNameInput = document.getElementById("customer-name");

function renderCatalogo() {
    const filtrados = productos.filter(prod => {
        const coincideCategoria = categoriaActual === "todos" || prod.categoria === categoriaActual;
        const coincideTexto = prod.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                              prod.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
        return coincideCategoria && coincideTexto;
    });

    if (filtrados.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; padding: 30px;">No se encontraron productos con ese criterio.</p>`;
        return;
    }

    grid.innerHTML = filtrados.map(prod => `
        <article class="product-card">
            <div class="product-img-wrapper" onclick="abrirModalProducto(${prod.id})">
                <span class="product-badge">${prod.categoriaLabel}</span>
                <img src="${prod.imagenes[0]}" alt="${prod.nombre}" loading="lazy">
                <div class="img-overlay-hint">
                    <i class="bi bi-arrows-fullscreen"></i> Ver detalles
                </div>
            </div>
            <div class="product-info">
                <div>
                    <h3 class="product-title">${prod.nombre}</h3>
                    <p class="product-short-desc">${prod.descripcion}</p>
                </div>
                <div class="product-bottom">
                    <span class="product-price">$${prod.precio.toFixed(2)}</span>
                    <button class="btn-add-cart" onclick="agregarAlCarrito(${prod.id})">
                        <i class="bi bi-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

function abrirModalProducto(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    modalCategory.textContent = prod.categoriaLabel;
    modalTitle.textContent = prod.nombre;
    modalPrice.textContent = `$${prod.precio.toFixed(2)}`;
    modalDesc.textContent = prod.descripcion;
    modalMainImg.src = prod.imagenes[0];

    modalSpecs.innerHTML = prod.specs.map(spec => `<li>${spec}</li>`).join("");

    modalThumbnails.innerHTML = prod.imagenes.map((imgSrc, index) => `
        <img src="${imgSrc}" class="${index === 0 ? 'active' : ''}" onclick="cambiarImagenModal(this, '${imgSrc}')" alt="Miniatura ${index + 1}">
    `).join("");

    modalAddBtn.onclick = () => {
        agregarAlCarrito(prod.id);
        cerrarModalProducto();
    };

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

function cambiarImagenModal(thumbEl, src) {
    modalMainImg.src = src;
    document.querySelectorAll("#modal-thumbnails img").forEach(img => img.classList.remove("active"));
    thumbEl.classList.add("active");
}

function cerrarModalProducto() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalMainImg.style.transform = "scale(1)";
}

zoomContainer.addEventListener("mousemove", (e) => {
    const rect = zoomContainer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    modalMainImg.style.transformOrigin = `${x}% ${y}%`;
    modalMainImg.style.transform = "scale(1.85)";
});

zoomContainer.addEventListener("mouseleave", () => {
    modalMainImg.style.transformOrigin = "center center";
    modalMainImg.style.transform = "scale(1)";
});

modalClose.addEventListener("click", cerrarModalProducto);
modalBackdrop.addEventListener("click", cerrarModalProducto);

function agregarAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    const existente = carrito.find(item => item.id === id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }

    guardarYActualizarCarrito();
    abrirCarrito();
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;

    item.cantidad += delta;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i.id !== id);
    }
    guardarYActualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(i => i.id !== id);
    guardarYActualizarCarrito();
}

function guardarYActualizarCarrito() {
    localStorage.setItem("tecnocable_cart", JSON.stringify(carrito));
    renderCarrito();
}

function renderCarrito() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    cartCountEl.textContent = totalItems;
    cartTotalEl.textContent = `$${totalPrecio.toFixed(2)}`;
    whatsappCheckoutBtn.disabled = carrito.length === 0;

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="bi bi-cart-x" style="font-size: 2.5rem;"></i>
                <p>Tu carrito está vacío.<br>Explora el catálogo y agrega productos.</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <img src="${item.imagenes[0]}" alt="${item.nombre}">
            <div class="cart-item-info">
                <h4>${item.nombre}</h4>
                <span>$${item.precio.toFixed(2)} c/u</span>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="qty-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                <button class="remove-item-btn" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join("");
}

whatsappCheckoutBtn.addEventListener("click", () => {
    if (carrito.length === 0) return;

    const nombreCliente = customerNameInput.value.trim();
    const saludo = nombreCliente 
        ? `¡Hola TECNOCABLE! Mi nombre es *${nombreCliente}* y me gustaría realizar el siguiente pedido:

`
        : `¡Hola TECNOCABLE! Me gustaría consultar disponibilidad y comprar los siguientes productos:

`;

    let detalleProductos = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        detalleProductos += `${index + 1}. *${item.nombre}* (x${item.cantidad}) - $${subtotal.toFixed(2)}
`;
    });

    const cierre = `
*Total estimado:* $${total.toFixed(2)}

¿Me confirman disponibilidad y métodos de pago?`;
    const mensajeFinal = encodeURIComponent(saludo + detalleProductos + cierre);

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${WHATSAPP_ASESOR}&text=${mensajeFinal}`;
    window.open(urlWhatsApp, "_blank");
});

function abrirCarrito() {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
}

function cerrarCarrito() {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
}

cartOpenBtn.addEventListener("click", abrirCarrito);
cartCloseBtn.addEventListener("click", cerrarCarrito);
cartOverlay.addEventListener("click", cerrarCarrito);

clearCartBtn.addEventListener("click", () => {
    carrito = [];
    guardarYActualizarCarrito();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        categoriaActual = btn.dataset.category;
        renderCatalogo();
    });
});

searchInput.addEventListener("input", (e) => {
    textoBusqueda = e.target.value;
    renderCatalogo();
});

renderCatalogo();
renderCarrito();
