# 🏫 Salas Vacías FIC UDP

Aplicación web que permite a los estudiantes de la **Universidad Diego Portales** encontrar salas de clase vacías en la Facltad de Ingenieria y Ciencias en tiempo real.

🌐 **Demo en vivo:** [https://salas-vacias.vercel.app](https://salas-vacias.vercel.app)

## 📋 ¿Qué hace?

La aplicación muestra las salas disponibles (vacías) en dos edificios de la universidad:

- 🏢 **Edificio Ejército** (E441)
- 🏢 **Edificio Vergara** (V432)

### Características

- ✅ Consulta en tiempo real de salas vacías
- ✅ Filtrado automático por bloque horario actual
- ✅ Vista detallada por piso de cada edificio
- ✅ Interfaz intuitiva con Material UI

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/open-source-udp/salas-vacias.git

# Entrar al directorio
cd salas-vacias

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| [Next.js 14](https://nextjs.org/) | Framework de React |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Material UI](https://mui.com/) | Componentes de interfaz |
| [Axios](https://axios-http.com/) | Peticiones HTTP |
| [Vercel](https://vercel.com/) | Hosting y deployment |

## 📁 Estructura del proyecto

```
app/
├── page.tsx          # Página principal
├── axios/
│   └── getSalas.ts   # Obtención de datos de salas
├── card/
│   └── BuildingCard.tsx   # Tarjeta de edificio
├── modal/
│   └── BuildingModal.tsx  # Modal con detalle de salas
├── types/
│   └── Building.ts   # Tipos TypeScript
└── utils/
    ├── filters.ts    # Lógica de filtrado de salas
    └── time.js       # Utilidades de tiempo/bloques
```

## 🔄 ¿Cómo funciona?

1. **Obtiene los horarios** de todas las clases desde una fuente de datos externa
2. **Filtra por edificio** (Ejército o Vergara)
3. **Determina el bloque horario actual** según la hora del día
4. **Calcula las salas vacías** comparando las ocupadas vs todas las disponibles
5. **Muestra el resultado** en tarjetas interactivas

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es open source y está disponible para la comunidad UDP.

---

Hecho con ❤️ por [Open Source UDP](https://github.com/open-source-udp)
