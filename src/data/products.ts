export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  version: string;
  license: 'Compra única' | 'Suscripción';
  featured: boolean;
  accent: string;
  features: string[];
  dependencies: string[];
  changelog: string[];
  docs: string[];
};

// Demo catalog: replace these entries with the real ARX | STUDIO plugins.
export const products: Product[] = [
  {
    slug: 'arx-core', name: 'ARX Core', tagline: 'The foundation layer for serious servers.',
    description: 'El núcleo de herramientas para servidores Minecraft. Centraliza utilidades, rendimiento y una API limpia para que tus plugins trabajen mejor juntos.',
    price: 9.99, category: 'Infrastructure', version: '1.20 - 1.21.4', license: 'Compra única', featured: true, accent: '#e7ff4f',
    features: ['API extensible para desarrolladores', 'Sistema de configuración tipado', 'Telemetría de rendimiento local', 'Compatibilidad Paper optimizada'],
    dependencies: ['Paper 1.20+', 'Java 21'], changelog: ['v0.1.0 - Demo inicial del producto'], docs: ['Instalación', 'Configuración', 'Comandos', 'Permisos', 'Config.yml', 'Integraciones', 'FAQ']
  },
  {
    slug: 'arx-economy', name: 'ARX Economy', tagline: 'A stable economy players can trust.',
    description: 'Una economía modular para crear tiendas, balances y recompensas con reglas claras y una experiencia consistente para tu comunidad.',
    price: 14.99, category: 'Gameplay', version: '1.20 - 1.21.4', license: 'Compra única', featured: true, accent: '#70d6ff',
    features: ['Balances offline y online', 'API de transacciones auditable', 'Integración con PlaceholderAPI', 'Comandos administrativos seguros'],
    dependencies: ['ARX Core', 'Paper 1.20+', 'Java 21'], changelog: ['v0.1.0 - Demo inicial del producto'], docs: ['Instalación', 'Configuración', 'Comandos', 'Permisos', 'Config.yml', 'Integraciones', 'FAQ']
  },
  {
    slug: 'arx-moderation', name: 'ARX Moderation', tagline: 'Calm, clear tools for busy teams.',
    description: 'Herramientas de moderación pensadas para equipos que necesitan contexto, velocidad y registros fiables sin llenar el servidor de ruido.',
    price: 12.99, category: 'Operations', version: '1.20 - 1.21.4', license: 'Compra única', featured: true, accent: '#ff9f68',
    features: ['Historial de acciones con contexto', 'Sanciones temporales y permanentes', 'Alertas configurables para staff', 'Exportación de logs legible'],
    dependencies: ['ARX Core', 'Paper 1.20+', 'Java 21'], changelog: ['v0.1.0 - Demo inicial del producto'], docs: ['Instalación', 'Configuración', 'Comandos', 'Permisos', 'Config.yml', 'Integraciones', 'FAQ']
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
