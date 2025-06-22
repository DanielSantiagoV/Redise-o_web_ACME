# 🚀 Acme Tech - Sitio Web Profesional v2.0
<p align="center"> 
  <img src="https://media.tenor.com/4IJowORGMmcAAAAi/what-inside-out-2.giff" width="300"/> 
</p>


## 📋 Descripción del Proyecto

**Acme Tech** es un sitio web corporativo moderno y completamente responsivo que presenta una empresa de tecnología ficticia especializada en soluciones de IA, ciencia de datos y SaaS. El proyecto ha sido completamente rediseñado y mejorado con tecnologías web modernas, funcionalidades interactivas avanzadas y capacidades de Progressive Web App (PWA).

### 🎯 Objetivos del Proyecto

- **Diseño Moderno**: Interfaz de usuario atractiva y profesional
- **Responsividad Completa**: Optimizado para todos los dispositivos
- **Interactividad Avanzada**: JavaScript moderno con funcionalidades dinámicas
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- **PWA Ready**: Capacidades de aplicación web progresiva
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **SEO Optimizado**: Mejor posicionamiento en buscadores

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Animaciones Suaves**: Transiciones y animaciones CSS/JS fluidas
- **Tipografía Optimizada**: Fuente Inter para mejor legibilidad
- **Paleta de Colores**: Esquema de colores profesional y coherente
- **Iconografía**: Font Awesome para iconos consistentes

### 📱 Responsividad
- **Mobile-First**: Diseño optimizado para dispositivos móviles
- **Breakpoints Inteligentes**: Adaptación perfecta a tablets y desktop
- **Navegación Adaptativa**: Menú hamburguesa para móviles
- **Grid System Moderno**: CSS Grid y Flexbox para layouts flexibles
- **Imágenes Responsivas**: Optimización automática según dispositivo

### ⚡ Funcionalidades JavaScript
- **Navegación Inteligente**: Menú móvil con animaciones
- **Contadores Animados**: Estadísticas con animación de números
- **Slider de Testimonios**: Carrusel interactivo con controles
- **Formularios Avanzados**: Validación en tiempo real y feedback
- **Efectos de Scroll**: Parallax y animaciones al hacer scroll
- **Notificaciones**: Sistema de notificaciones toast
- **Lazy Loading**: Carga diferida de imágenes
- **Intersection Observer**: Animaciones basadas en visibilidad
- **FAQ Interactivo**: Acordeón para preguntas frecuentes
- **Navegación por Teclado**: Soporte completo para accesibilidad

### 🔧 Tecnologías Avanzadas
- **Service Worker**: Cacheo inteligente y funcionalidad offline
- **PWA Features**: Manifest, instalación como app, notificaciones push
- **Performance Monitoring**: Monitoreo de Core Web Vitals
- **Background Sync**: Sincronización en segundo plano
- **Push Notifications**: Sistema de notificaciones push
- **Offline Support**: Funcionalidad completa sin conexión

### 🎯 SEO y Accesibilidad
- **Meta Tags Optimizados**: SEO completo con Open Graph
- **Estructura Semántica**: HTML5 semántico para mejor SEO
- **Alt Tags**: Descripciones para imágenes
- **ARIA Labels**: Etiquetas de accesibilidad
- **Navegación por Teclado**: Soporte completo
- **Contraste Optimizado**: Cumple estándares WCAG
- **Reduced Motion**: Respeto por preferencias de usuario

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Estructura semántica moderna
- **CSS3**: Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript ES6+**: Clases, módulos, async/await
- **Font Awesome 6.4.0**: Iconografía profesional
- **Google Fonts (Inter)**: Tipografía optimizada

### PWA y Performance
- **Service Worker**: Cacheo y funcionalidad offline
- **Web App Manifest**: Configuración PWA completa
- **Intersection Observer API**: Animaciones optimizadas
- **Local Storage**: Almacenamiento local
- **Background Sync API**: Sincronización offline

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **Responsive Design**: Mobile-first approach
- **Performance Optimization**: Lazy loading, minificación
- **Cross-browser Testing**: Compatibilidad completa

## 📁 Estructura del Proyecto

```
acme-tech-website/
├── 📄 index.html                 # Página principal
├── 📄 manifest.json              # Configuración PWA
├── 📄 sw.js                      # Service Worker
├── 📄 LICENSE                    # Licencia MIT
├── 📄 README.md                  # Documentación
├── 📁 css/
│   └── 📄 styles.css             # Estilos principales
├── 📁 js/
│   └── 📄 main.js                # JavaScript principal
├── 📁 html/
│   ├── 📄 servicios.html         # Página de servicios
│   ├── 📄 quienes_somos.html     # Página sobre nosotros
│   └── 📄 contacto.html          # Página de contacto
├── 📁 img/
│   ├── 📄 logo_acme.png          # Logo principal
│   └── 📄 fondo_tech.png         # Imagen de fondo
└── 📁 font/                      # Fuentes personalizadas
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desarrollo)

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/acme-tech-website.git
   cd acme-tech-website
   ```

2. **Abrir en navegador**
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Servidor local (recomendado)
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js
     npx serve .
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder al sitio**
   - URL: `http://localhost:8000`
   - El sitio funcionará completamente offline después de la primera carga

### Despliegue en Producción

1. **Subir archivos al servidor web**
2. **Configurar HTTPS** (requerido para PWA)
3. **Verificar Service Worker** en DevTools
4. **Probar funcionalidad offline**

## 🎨 Características de Diseño

### Sistema de Colores
```css
--primary-color: #2563eb      /* Azul principal */
--primary-dark: #1d4ed8       /* Azul oscuro */
--accent-color: #f59e0b       /* Naranja acento */
--success-color: #10b981      /* Verde éxito */
--error-color: #ef4444        /* Rojo error */
--bg-primary: #ffffff         /* Fondo principal */
--bg-secondary: #f8fafc       /* Fondo secundario */
--text-primary: #1e293b       /* Texto principal */
--text-secondary: #64748b     /* Texto secundario */
```

### Tipografía
- **Familia**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **Jerarquía**: Sistema de tamaños escalable
- **Legibilidad**: Optimizada para pantallas

### Componentes Reutilizables
- **Botones**: Primario, secundario, con estados
- **Cards**: Con hover effects y animaciones
- **Formularios**: Validación y feedback visual
- **Navegación**: Responsiva con animaciones
- **Modales**: Notificaciones y overlays

## ⚡ Optimizaciones de Rendimiento

### Carga Rápida
- **Lazy Loading**: Imágenes cargan según necesidad
- **Minificación**: CSS y JS optimizados
- **Compresión**: Assets comprimidos
- **Cacheo**: Service Worker para assets estáticos
- **CDN**: Fonts e iconos desde CDN

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Monitoreo de Performance
```javascript
// Monitoreo automático de Core Web Vitals
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`${entry.name}: ${entry.value}`);
    }
  });
  
  observer.observe({ 
    entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
  });
}
```

## 🔧 Funcionalidades JavaScript

### Clase Principal: AcmeTech
```javascript
class AcmeTech {
  constructor() {
    this.currentTestimonial = 0;
    this.testimonials = [];
    this.isLoading = true;
    this.init();
  }
  
  // Métodos principales
  init() { /* Inicialización */ }
  setupEventListeners() { /* Eventos */ }
  setupParticles() { /* Efectos visuales */ }
  setupTestimonialsSlider() { /* Slider */ }
  // ... más métodos
}
```

### Características Principales
- **Loader Screen**: Pantalla de carga animada
- **Particles Effect**: Efectos de partículas en hero
- **Typewriter Effect**: Animación de escritura
- **Smooth Scrolling**: Navegación suave
- **Form Validation**: Validación en tiempo real
- **Notification System**: Sistema de notificaciones
- **Keyboard Navigation**: Navegación por teclado
- **Performance Monitoring**: Monitoreo automático

## 📱 Progressive Web App (PWA)

### Características PWA
- **Instalable**: Se puede instalar como app nativa
- **Offline**: Funciona completamente sin internet
- **Push Notifications**: Notificaciones push
- **Background Sync**: Sincronización en segundo plano
- **App-like Experience**: Experiencia similar a app nativa

### Service Worker
```javascript
// Cacheo inteligente
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  // ... más assets
];

// Estrategia: Cache First, Network Fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### Manifest.json
```json
{
  "name": "Acme Tech - Innovación Tecnológica",
  "short_name": "Acme Tech",
  "display": "standalone",
  "theme_color": "#2563eb",
  "background_color": "#2563eb",
  "start_url": "/",
  "icons": [...],
  "shortcuts": [...]
}
```

## 🎯 SEO y Accesibilidad

### Meta Tags Optimizados
```html
<meta name="description" content="Acme Tech - Conectando el mundo con las mejores tecnologías para impactar compañías vanguardistas. Soluciones de IA, ciencia de datos y SaaS innovadoras." />
<meta name="keywords" content="tecnología, IA, ciencia de datos, SaaS, innovación, desarrollo web, consultoría tecnológica" />
<meta property="og:title" content="Acme Tech - Innovación Tecnológica" />
<meta property="og:description" content="Conectando el mundo con las mejores tecnologías para impactar compañías vanguardistas" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### Accesibilidad
- **ARIA Labels**: Etiquetas de accesibilidad completas
- **Keyboard Navigation**: Navegación completa por teclado
- **Screen Reader Support**: Compatible con lectores de pantalla
- **Color Contrast**: Cumple estándares WCAG 2.1
- **Reduced Motion**: Respeto por preferencias de usuario

## 📊 Métricas de Rendimiento

### Lighthouse Scores (Objetivo)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100
- **PWA**: 100

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes
- ✅ Minificación de CSS/JS
- ✅ Compresión de assets
- ✅ Cacheo inteligente
- ✅ Service Worker
- ✅ Critical CSS inline
- ✅ Font display: swap
- ✅ Preload de recursos críticos

## 🧪 Testing

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

### Dispositivos Testeados
- ✅ iPhone (iOS 14+)
- ✅ Android (Chrome)
- ✅ iPad (Safari)
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablets (varios tamaños)

### Herramientas de Testing
- **Lighthouse**: Performance y PWA
- **WebPageTest**: Análisis de rendimiento
- **BrowserStack**: Testing cross-browser
- **Accessibility Tools**: WCAG compliance

## 🚀 Roadmap y Futuras Mejoras

### Versión 2.1 (Próxima)
- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Chat en vivo
- [ ] Analytics avanzado
- [ ] A/B testing

### Versión 2.2 (Futura)
- [ ] E-commerce integrado
- [ ] Sistema de usuarios
- [ ] Dashboard administrativo
- [ ] API REST
- [ ] Microservicios

### Mejoras Técnicas
- [ ] TypeScript migration
- [ ] React/Vue.js integration
- [ ] GraphQL API
- [ ] Real-time features
- [ ] Advanced animations

## 🤝 Contribución

### Cómo Contribuir
1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución
- **Código**: Sigue las convenciones existentes
- **Testing**: Asegúrate de que todo funcione
- **Documentación**: Actualiza README si es necesario
- **Performance**: Mantén los scores de Lighthouse

### Estándares de Código
- **HTML**: Semántico y accesible
- **CSS**: BEM methodology, variables CSS
- **JavaScript**: ES6+, async/await, clases
- **Performance**: Optimización continua

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

```
MIT License

Copyright (c) 2024 Acme Tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contacto

### Información del Proyecto
- **Sitio Web**: [https://acmetech.com](https://acmetech.com)
- **Email**: info@acme.tech
- **Teléfono**: (+001) 555 8965
- **Twitter**: @acmetech

### Desarrollador
- **Nombre**: Equipo de Desarrollo Acme Tech
- **Email**: dev@acme.tech
- **GitHub**: [@acmetech](https://github.com/acmetech)

## 🙏 Agradecimientos

### Recursos Utilizados
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter
- **Unsplash**: Imágenes de stock
- **CSS Grid**: Layout system moderno
- **Service Worker API**: Funcionalidad offline

### Inspiración
- Diseños modernos de sitios web corporativos
- Mejores prácticas de UX/UI
- Estándares web modernos
- Comunidad de desarrolladores web

## 📈 Estadísticas del Proyecto

### Métricas de Desarrollo
- **Líneas de Código**: ~2,500+
- **Archivos**: 15+
- **Funcionalidades**: 25+
- **Tiempo de Desarrollo**: 40+ horas
- **Versiones**: 2.0 (actual)

### Características Implementadas
- ✅ Diseño responsivo completo
- ✅ JavaScript interactivo avanzado
- ✅ PWA con Service Worker
- ✅ SEO optimizado
- ✅ Accesibilidad completa
- ✅ Performance optimizada
- ✅ Animaciones fluidas
- ✅ Formularios inteligentes
- ✅ Sistema de notificaciones
- ✅ Navegación por teclado
- ✅ Offline functionality
- ✅ Push notifications
- ✅ Background sync
- ✅ Lazy loading
- ✅ Intersection Observer
- ✅ Typewriter effects
- ✅ Particles animation
- ✅ Testimonials slider
- ✅ Newsletter system
- ✅ Social media integration

---

**¡Gracias por usar Acme Tech! 🚀**

*Conectando el mundo con las mejores tecnologías para impactar compañías vanguardistas.*

---


### 🎵 Ambiente de Trabajo
- 🎧 [Mi Playlist de Programación](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

## 💭 Filosofía Personal

> "El código no es solo lo que hago. Es lo que soy. Cada línea de código es una oportunidad para crear algo extraordinario y dejar una huella en el mundo digital." - Daniel Santiago

---

<p align="center">
  Desarrollado con ❤️ por Daniel Santiago Vinasco<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visita mi GitHub</a></b> 🚀
</p>