export type ProjectCategory =
  | 'Fullstack Development'
  | 'IA – n8n'
  | 'Backend Development'
  | 'Mobile Development'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  role: string
  roleDescription: string
  duration: string
  client: string
  images: string[]
  features: string[]
  about: string
  built: string[]
}

export const categories: ProjectCategory[] = [
  'Fullstack Development',
  'IA – n8n',
  'Backend Development',
  'Mobile Development',
]

export const projects: Project[] = [
  {
    slug: 'tradeflow',
    title: 'TradeFlow',
    category: 'Fullstack Development',
    shortDescription:
      'Plataforma de gestión de operaciones de comercio exterior para Banco Galicia. Desarrollo fullstack con Next.js, NestJS y microservicios.',
    description:
      'Plataforma de gestión de operaciones de comercio exterior para Banco Galicia. Desarrollo fullstack con Next.js, NestJS y microservicios.',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Desarrollador Full Stack',
    roleDescription:
      'Diseño e implementación de nuevas funcionalidades, integración de APIs, desarrollo de microservicios y optimización de rendimiento.',
    duration: 'Mar 2024 – Oct 2024 (8 meses)',
    client: 'Banco Galicia',
    images: [
      '/projects/chef1.png',
      '/projects/chef2.png',
      '/projects/chef3.png',
     
    ],
    features: [
      'Gestión completa de operaciones de comercio exterior',
      'Integración con sistemas internos y externos',
      'Flujos de aprobación y validaciones complejas',
      'Reportes y dashboards en tiempo real',
      'Arquitectura de microservicios escalable',
    ],
    about:
      'TradeFlow es una plataforma interna utilizada por Banco Galicia para gestionar operaciones de comercio exterior de principio a fin. Permite controlar y monitorear importaciones y exportaciones, automatizar validaciones y generar reportes estratégicos en tiempo real. El sistema está construido con una arquitectura de microservicios, asegurando escalabilidad, mantenibilidad y alto rendimiento.',
    built: [
      'Módulo de operaciones e integración con APIs externas',
      'Microservicios de validación y orquestación de procesos',
      'Dashboards y reportes con métricas en tiempo real',
      'Optimización de consultas y performance de la plataforma',
    ],
  },
  {
    slug: 'automatizacion-con-ia',
    title: 'Automatización con IA',
    category: 'IA – n8n',
    shortDescription:
      'Flujos inteligentes con n8n integrando APIs, WhatsApp y OpenAI para automatizar procesos y atención al cliente.',
    description:
      'Flujos inteligentes con n8n integrando APIs, WhatsApp y OpenAI para automatizar procesos y atención al cliente.',
    tags: ['n8n', 'OpenAI', 'WhatsApp API', 'JSON'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Automation Engineer',
    roleDescription:
      'Diseño de flujos de automatización, integración de modelos de IA y conexión de múltiples servicios externos.',
    duration: 'Ene 2024 – Abr 2024 (4 meses)',
    client: 'Cliente privado',
    images: ['/projects/chef3.png', '/projects/chef1.png'],
    features: [
      'Flujos automatizados con n8n',
      'Integración con la API de WhatsApp',
      'Respuestas inteligentes con OpenAI',
      'Conexión con múltiples APIs externas',
    ],
    about:
      'Conjunto de automatizaciones construidas con n8n que integran WhatsApp, OpenAI y APIs externas para automatizar la atención al cliente y los procesos internos de la empresa.',
    built: [
      'Workflows de atención automatizada',
      'Integración con OpenAI para respuestas inteligentes',
      'Conectores personalizados para APIs externas',
    ],
  },
  {
    slug: 'auth-service',
    title: 'Auth Service',
    category: 'Backend Development',
    shortDescription:
      'Servicio de autenticación y autorización con Node.js, Express y JWT. Desplegado en AWS Lambda con base de datos PostgreSQL.',
    description:
      'Servicio de autenticación y autorización con Node.js, Express y JWT. Desplegado en AWS Lambda con base de datos PostgreSQL.',
    tags: ['Node.js', 'Express', 'JWT', 'AWS Lambda'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Backend Developer',
    roleDescription:
      'Diseño e implementación del servicio de autenticación, seguridad y despliegue serverless.',
    duration: 'Sep 2023 – Dic 2023 (4 meses)',
    client: 'Proyecto propio',
    images: ['/projects/chef2.png',],
    features: [
      'Autenticación basada en JWT',
      'Control de roles y permisos',
      'Despliegue serverless en AWS Lambda',
      'Base de datos PostgreSQL',
    ],
    about:
      'Servicio de autenticación y autorización reutilizable, con manejo de sesiones mediante JWT y control de acceso basado en roles, desplegado de forma serverless en AWS Lambda.',
    built: [
      'Sistema de autenticación con JWT y refresh tokens',
      'Middleware de autorización por roles',
      'Despliegue serverless y conexión a PostgreSQL',
    ],
  },
  {
    slug: 'visibly-mobile',
    title: 'Visibly Mobile',
    category: 'Mobile Development',
    shortDescription:
      'Aplicación móvil para gestión de exámenes ópticos. Desarrollada con React Native, Expo y TypeScript.',
    description:
      'Aplicación móvil para gestión de exámenes ópticos. Desarrollada con React Native, Expo y TypeScript.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Mobile Developer',
    roleDescription:
      'Desarrollo de la aplicación móvil multiplataforma, gestión de estado y experiencia de usuario.',
    duration: 'May 2023 – Ago 2023 (4 meses)',
    client: 'Visibly',
    images: ['/projects/', '/projects/chef1.png'],
    features: [
      'Gestión de exámenes ópticos',
      'Aplicación multiplataforma con Expo',
      'Gestión de estado con Zustand',
      'Interfaz fluida y accesible',
    ],
    about:
      'Aplicación móvil multiplataforma para gestionar exámenes ópticos, construida con React Native y Expo, con foco en una experiencia de usuario fluida.',
    built: [
      'UI de la aplicación con React Native',
      'Gestión de estado con Zustand',
      'Flujos de exámenes y resultados',
    ],
  },
  {
    slug: 'e-commerce-api',
    title: 'E-Commerce API',
    category: 'Backend Development',
    shortDescription:
      'API REST para e-commerce con gestión de productos, carrito y pagos. Arquitectura modular con Node.js.',
    description:
      'API REST para e-commerce con gestión de productos, carrito y pagos. Arquitectura modular con Node.js.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Backend Developer',
    roleDescription:
      'Diseño de la arquitectura modular, modelado de datos e integración de pagos.',
    duration: 'Feb 2023 – May 2023 (4 meses)',
    client: 'Proyecto propio',
    images: ['/projects/chef2.png', '/projects/chef3.png'],
    features: [
      'Gestión de productos y categorías',
      'Carrito de compras y órdenes',
      'Integración de pagos',
      'Arquitectura modular escalable',
    ],
    about:
      'API REST completa para una tienda online, con gestión de productos, carrito de compras, órdenes y pagos, construida con una arquitectura modular en Node.js.',
    built: [
      'Endpoints REST para productos y órdenes',
      'Lógica de carrito y checkout',
      'Integración de pasarela de pagos',
    ],
  },
  {
    slug: 'workflow-builder',
    title: 'Workflow Builder',
    category: 'IA – n8n',
    shortDescription:
      'Constructor de workflows automatizados con n8n y Webhooks. Integración con servicios externos y base de datos.',
    description:
      'Constructor de workflows automatizados con n8n y Webhooks. Integración con servicios externos y base de datos.',
    tags: ['n8n', 'Webhooks', 'PostgreSQL', 'API'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Automation Engineer',
    roleDescription:
      'Diseño y construcción de workflows automatizados e integraciones mediante webhooks.',
    duration: 'Oct 2022 – Ene 2023 (4 meses)',
    client: 'Cliente privado',
    images: ['/projects/chef1.png', '/projects/chef3.png'],
    features: [
      'Workflows automatizados con n8n',
      'Integración mediante Webhooks',
      'Conexión con servicios externos',
      'Persistencia en base de datos',
    ],
    about:
      'Herramienta interna para construir y orquestar workflows automatizados utilizando n8n y webhooks, integrando distintos servicios externos y una base de datos central.',
    built: [
      'Workflows configurables con n8n',
      'Endpoints de webhooks para disparar procesos',
      'Integración con base de datos y APIs',
    ],
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Fullstack Development',
    shortDescription:
      'Dashboard de métricas y reportes en tiempo real. Frontend con Next.js y backend con NestJS.',
    description:
      'Dashboard de métricas y reportes en tiempo real. Frontend con Next.js y backend con NestJS.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'WebSockets'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Desarrollador Full Stack',
    roleDescription:
      'Desarrollo del frontend y backend, visualización de datos y actualizaciones en tiempo real.',
    duration: 'Jun 2022 – Sep 2022 (4 meses)',
    client: 'Proyecto propio',
    images: ['/projects/chef3.png', '/projects/chef1.png'],
    features: [
      'Métricas y reportes en tiempo real',
      'Visualización de datos con gráficos',
      'Actualizaciones vía WebSockets',
      'Frontend con Next.js y backend con NestJS',
    ],
    about:
      'Dashboard de analítica que muestra métricas y reportes en tiempo real, con visualizaciones interactivas y actualizaciones en vivo mediante WebSockets.',
    built: [
      'Frontend de visualización con Next.js',
      'Backend de agregación de datos con NestJS',
      'Actualizaciones en tiempo real con WebSockets',
    ],
  },
  {
    slug: 'chat-app',
    title: 'Chat App',
    category: 'Mobile Development',
    shortDescription:
      'Aplicación de mensajería en tiempo real con WebSockets, notificaciones push y almacenamiento local.',
    description:
      'Aplicación de mensajería en tiempo real con WebSockets, notificaciones push y almacenamiento local.',
    tags: ['React Native', 'WebSockets', 'Expo', 'SQLite'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Mobile Developer',
    roleDescription:
      'Desarrollo de la aplicación de mensajería, conexión en tiempo real y notificaciones.',
    duration: 'Feb 2022 – May 2022 (4 meses)',
    client: 'Proyecto propio',
    images: ['/projects/', '/projects/chef2.png'],
    features: [
      'Mensajería en tiempo real',
      'Notificaciones push',
      'Almacenamiento local de mensajes',
      'Conexión vía WebSockets',
    ],
    about:
      'Aplicación de mensajería en tiempo real con soporte para notificaciones push y almacenamiento local de conversaciones, construida con React Native.',
    built: [
      'Mensajería en tiempo real con WebSockets',
      'Notificaciones push',
      'Persistencia local con SQLite',
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
