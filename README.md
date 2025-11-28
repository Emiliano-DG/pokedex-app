# 🎮 Pokédex App

Una aplicación móvil moderna y elegante de Pokédex desarrollada con React Native y Expo. Explora información detallada sobre tus Pokémon favoritos, incluyendo estadísticas, tipos, habilidades y más.

## ✨ Características

- 📱 **Interfaz moderna**: Diseño limpio y responsive con colores basados en los tipos de Pokémon
- 🔍 **Búsqueda de Pokémon**: Navega por una lista completa de Pokémon
- 📊 **Información detallada**: Visualiza estadísticas, habilidades, altura, peso y tipos de cada Pokémon
- 🎨 **Colores dinámicos**: Cada Pokémon muestra colores únicos según su tipo (agua, fuego, hierba, etc.)
- 🌐 **Multiplataforma**: Funciona en iOS, Android y Web
- ⚡ **Rendimiento optimizado**: Uso de React Query para caché y gestión eficiente de datos
- 📱 **Navegación fluida**: Implementada con Expo Router

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma para desarrollo React Native
- **TypeScript** - Tipado estático para mayor seguridad en el código
- **Expo Router** - Navegación basada en archivos
- **React Query (TanStack Query)** - Gestión de estado y caché de datos
- **PokeAPI** - API RESTful con información completa sobre Pokémon

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Expo CLI** (se instala automáticamente con el proyecto)
- Para desarrollo móvil nativo:
  - **Android Studio** (para Android)
  - **Xcode** (para iOS, solo en macOS)

## 🚀 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/Pokedex.git
cd Pokedex
```

2. **Navega al directorio del proyecto**

```bash
cd pokedex-app
```

3. **Instala las dependencias**

```bash
npm install
```

4. **Inicia el servidor de desarrollo**

```bash
npm start
```

O también puedes usar:

```bash
npx expo start
```

## 📱 Uso

Una vez iniciado el servidor, tienes varias opciones:

- **Para iOS**: Presiona `i` en la terminal o escanea el código QR con la app Expo Go
- **Para Android**: Presiona `a` en la terminal o escanea el código QR con la app Expo Go
- **Para Web**: Presiona `w` en la terminal

### Comandos Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run android    # Abre la app en emulador/dispositivo Android
npm run ios        # Abre la app en simulador/dispositivo iOS
npm run web        # Abre la app en el navegador web
npm run lint       # Ejecuta el linter
```

## 📁 Estructura del Proyecto

```
pokedex-app/
├── app/                  # Pantallas de la aplicación (Expo Router)
│   ├── index.tsx        # Pantalla principal (lista de Pokémon)
│   └── [id].tsx         # Pantalla de detalles del Pokémon
├── components/          # Componentes reutilizables
│   └── PokemonCard.tsx  # Tarjeta de Pokémon
├── hooks/               # Custom hooks
│   ├── usePokemon.ts   # Hook para obtener lista de Pokémon
│   └── usePokemonSpecies.ts # Hook para obtener especie del Pokémon
├── services/            # Servicios y llamadas a API
│   ├── pokemonService.ts     # Servicio para obtener Pokémon
│   └── pokemonSpecies.ts     # Servicio para obtener especies
├── types/               # Definiciones de tipos TypeScript
│   └── pokemon.ts       # Tipos relacionados con Pokémon
└── assets/              # Recursos estáticos (imágenes, etc.)
```

## 🎨 Características de Diseño

- **Colores por tipo**: Cada tipo de Pokémon tiene un color distintivo:
  - 🔥 Fuego: `#F08030`
  - 💧 Agua: `#6890F0`
  - 🌿 Hierba: `#78C850`
  - ⚡ Eléctrico: `#F8D030`
  - Y muchos más...

- **Tarjetas interactivas**: Las tarjetas de Pokémon tienen bordes y sombras dinámicas según su tipo
- **Barras de estadísticas**: Visualización gráfica de las estadísticas base de cada Pokémon

## 🔌 API Utilizada

Esta aplicación utiliza la [PokeAPI](https://pokeapi.co/), una API RESTful gratuita que proporciona información detallada sobre Pokémon.

- **Endpoint principal**: `https://pokeapi.co/api/v2/pokemon`
- **Límite inicial**: 10 Pokémon (configurable)




## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.


⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!


