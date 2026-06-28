export type ProjectCategory =
  | 'Fullstack Development'
  | 'IA – n8n'
  | 'Backend Development'
  | 'Mobile Development'
  | 'QA Automation & DevOps'

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
  'QA Automation & DevOps',
]

export const projects: Project[] = [
  {
    slug: 'catering',
    title: 'Catering Service',
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
    images: ['/projects/automatizacionAtencionAlCliente.png','/projects/img-TechStore.jpeg', '/projects/img-TeachStore2.jpeg', ],
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
    client: 'Cliente privado',
    images: ['/projects/authservice.png','/projects/chef2.png',],
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
  // {
  //   slug: 'visibly-mobile',
  //   title: 'Visibly Mobile',
  //   category: 'Mobile Development',
  //   shortDescription:
  //     'Aplicación móvil para gestión de exámenes ópticos. Desarrollada con React Native, Expo y TypeScript.',
  //   description:
  //     'Aplicación móvil para gestión de exámenes ópticos. Desarrollada con React Native, Expo y TypeScript.',
  //   tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   role: 'Mobile Developer',
  //   roleDescription:
  //     'Desarrollo de la aplicación móvil multiplataforma, gestión de estado y experiencia de usuario.',
  //   duration: 'May 2023 – Ago 2023 (4 meses)',
  //   client: 'Visibly',
  //   images: ['/projects/', '/projects/chef1.png'],
  //   features: [
  //     'Gestión de exámenes ópticos',
  //     'Aplicación multiplataforma con Expo',
  //     'Gestión de estado con Zustand',
  //     'Interfaz fluida y accesible',
  //   ],
  //   about:
  //     'Aplicación móvil multiplataforma para gestionar exámenes ópticos, construida con React Native y Expo, con foco en una experiencia de usuario fluida.',
  //   built: [
  //     'UI de la aplicación con React Native',
  //     'Gestión de estado con Zustand',
  //     'Flujos de exámenes y resultados',
  //   ],
  // },
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
    client: 'Cliente privado',
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
    slug: 'automatizacion-facturas',
    title: 'Procesamiento Automático de Facturas',
    category: 'IA – n8n',
    shortDescription:
      'Constructor de workflows automatizados con n8n y Webhooks. Integración con servicios externos y base de datos.',
  description:
  'Desarrollé una solución de automatización para el procesamiento de facturas que permitía recibir documentos desde múltiples canales, extraer y validar información relevante, integrarla con sistemas externos y registrar los resultados en una base de datos centralizada. El objetivo fue reducir tareas manuales, minimizar errores operativos y acelerar el flujo de carga y validación de comprobantes mediante workflows automatizados en n8n.',
    tags: ['n8n', 'Webhooks', 'PostgreSQL', 'API'],
    liveUrl: '#',
    repoUrl: '#',
    role: 'Automation Engineer',
    roleDescription:
      'Diseño y construcción de workflows automatizados e integraciones mediante webhooks.',
    duration: 'Oct 2022 – Ene 2023 (4 meses)',
    client: 'Cliente privado',
    images: ['/projects/ProcesamientoAutomaticodeFacturas.png'],
    features: [
      'Workflows automatizados con n8n',
      'Integración mediante Webhooks',
      'Conexión con servicios externos',
      'Persistencia en base de datos',
    ],
   about:
  'Este proyecto surgió ante la necesidad de automatizar el tratamiento de facturas que eran procesadas manualmente por operadores. La solución permitió orquestar flujos de trabajo mediante n8n, recibir información a través de webhooks, validar datos, integrarse con APIs de terceros y almacenar los resultados en PostgreSQL. Gracias a la automatización se redujeron tiempos operativos, se mejoró la trazabilidad de los procesos y se disminuyeron errores humanos en la carga de información.',
    built: [
  'Diseño y desarrollo de workflows automatizados en n8n',
  'Implementación de webhooks para recepción y procesamiento de eventos',
  'Integración con APIs externas para validación y enriquecimiento de datos',
  'Persistencia de información y trazabilidad en PostgreSQL',
  'Manejo de errores, reintentos y monitoreo de procesos automatizados',
],
  },
 {
  slug: 'ecommerce-tecnologia',
  title: 'E-commerce de Tecnología',
  category: 'Fullstack Development',
  shortDescription:
    'Plataforma de comercio electrónico para la venta de productos tecnológicos con gestión de catálogo, promociones y experiencia de compra optimizada.',

  description:
    'Desarrollo Full Stack de una plataforma e-commerce orientada a la comercialización de productos tecnológicos, con catálogo dinámico, gestión de contenido y experiencia de compra responsive.',

  tags: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'NestJS',
    'Node.js',
    'PostgreSQL',
  ],

  liveUrl: '#',
  repoUrl: '#',

  role: 'Full Stack Developer',

  roleDescription:
    'Participación integral en el desarrollo del frontend, backend, APIs y base de datos, implementando funcionalidades comerciales y optimizando la experiencia de usuario.',

  duration: 'Jun 2022 – Sep 2022 (4 meses)',

  client: 'Cliente privado',

  images: [
    '/projects/img-TechStore.jpeg',
    '/projects/img-TeachStore2.jpeg',
  ],

  features: [
    'Catálogo de productos y categorías',
    'Búsqueda y filtrado avanzado',
    'Gestión de promociones y productos destacados',
    'Diseño responsive para dispositivos móviles y escritorio',
    'Panel de administración de contenido',
    'APIs REST para gestión comercial',
  ],

  about:
    'Desarrollo de una plataforma de comercio electrónico especializada en la venta de productos tecnológicos, diseñada para ofrecer una experiencia de compra moderna, rápida e intuitiva. La solución permite administrar de forma centralizada productos, categorías, promociones y contenido comercial, brindando una navegación optimizada y herramientas orientadas a mejorar la conversión y el engagement de los usuarios. Participé en todas las etapas del desarrollo, desde la construcción de la interfaz hasta la implementación de la lógica de negocio y la persistencia de datos.',

  built: [
    'Frontend desarrollado con React, TypeScript y Tailwind CSS',
    'Backend REST construido con NestJS y Node.js',
    'Modelado y administración de base de datos PostgreSQL',
    'Implementación de búsqueda y filtrado de productos',
    'Gestión de catálogo, promociones y contenido comercial',
    'Optimización de rendimiento y arquitectura escalable',
  ],
},
{
  slug: 'cafe-natural',
  title: 'Café Natural',
  category: 'Fullstack Development',
  shortDescription:
    'Sitio web corporativo para cafetería con catálogo digital, menú online, formularios de contacto y suscripción a newsletter.',

  description:
    'Desarrollo Full Stack de un sitio web moderno para una cafetería especializada en desayunos, brunch y productos artesanales, orientado a fortalecer la presencia digital de la marca y mejorar la interacción con clientes.',

  tags: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'Nodemailer',
  ],

  liveUrl: '#',
  repoUrl: '#',

  role: 'Full Stack Developer',

  roleDescription:
    'Desarrollo integral del frontend y backend, implementación del catálogo digital, formularios de contacto, newsletter, APIs REST y persistencia de datos.',

  duration: 'Feb 2023 – May 2023 (4 meses)',

  client: 'Cliente privado',

  images: [
    '/projects/cafeimg-2.jpeg',

  ],

  features: [
    'Sitio web responsive para cafetería',
    'Catálogo digital de productos',
    'Menú online con categorías',
    'Promociones y productos destacados',
    'Formulario de contacto',
    'Suscripción a newsletter',
    'Integración con servicio de mailing',
    'Gestión de contenido desde backend',
  ],

  about:
    'Desarrollo de un sitio web moderno para una cafetería especializada en desayunos, brunch y productos artesanales. El objetivo principal fue fortalecer la presencia digital de la marca, presentar su propuesta gastronómica y facilitar el descubrimiento de productos mediante una experiencia visual cálida, atractiva e intuitiva. La plataforma incluye secciones informativas, menú digital, categorías de productos, promociones destacadas y formularios de contacto orientados a captar potenciales clientes.',

  built: [
    'Frontend desarrollado con React, TypeScript y Tailwind CSS',
    'Diseño responsive optimizado para mobile y desktop',
    'Backend desarrollado con NestJS, Node.js y TypeScript',
    'APIs REST para gestión de contenido y productos',
    'Modelado y administración de base de datos PostgreSQL',
    'Implementación de formularios de contacto y newsletter',
    'Integración de Nodemailer para envío de comunicaciones',
    'Optimización de rendimiento, experiencia de usuario y posicionamiento web',
  ],
},
  // {
  //   slug: 'chat-app',
  //   title: 'Chat App',
  //   category: 'Mobile Development',
  //   shortDescription:
  //     'Aplicación de mensajería en tiempo real con WebSockets, notificaciones push y almacenamiento local.',
  //   description:
  //     'Aplicación de mensajería en tiempo real con WebSockets, notificaciones push y almacenamiento local.',
  //   tags: ['React Native', 'WebSockets', 'Expo', 'SQLite'],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   role: 'Mobile Developer',
  //   roleDescription:
  //     'Desarrollo de la aplicación de mensajería, conexión en tiempo real y notificaciones.',
  //   duration: 'Feb 2022 – May 2022 (4 meses)',
  //   client: 'Cliente privado',
  //   images: ['/projects/', '/projects/chef2.png'],
  //   features: [
  //     'Mensajería en tiempo real',
  //     'Notificaciones push',
  //     'Almacenamiento local de mensajes',
  //     'Conexión vía WebSockets',
  //   ],
  //   about:
  //     'Aplicación de mensajería en tiempo real con soporte para notificaciones push y almacenamiento local de conversaciones, construida con React Native.',
  //   built: [
  //     'Mensajería en tiempo real con WebSockets',
  //     'Notificaciones push',
  //     'Persistencia local con SQLite',
  //   ],
  // },
  //MOBILE
  {
  slug: 'finrecover-ui-ux-rebranding',
  title: 'FinRecover UI/UX Rebranding',
  category: 'Mobile Development',
  shortDescription:
    'Rediseño UI/UX mobile para una aplicación financiera, creando una nueva identidad visual, paleta de colores, componentes y pantallas optimizadas para iPhone.',
  description:
    'Proyecto de rebranding UI/UX para una app financiera mobile. Se trabajó en la actualización visual de pantallas clave, definición de paleta de colores, jerarquía visual, componentes reutilizables y adaptación del diseño a una experiencia mobile moderna.',
  tags: [
    'UI/UX',
    'Mobile Design',
    'React Native',
    'Expo',
    'Figma',
    'Design System',
  ],
  liveUrl: '#',
  repoUrl: '#',
  role: 'UI/UX Designer & Mobile Developer',
  roleDescription:
    'Diseñé nuevas propuestas visuales para las pantallas principales de la aplicación, definí la línea estética del rebranding y preparé la base visual para su implementación en React Native.',
  duration: 'Jun 2026 – Jul 2026',
  client: 'Jude M. Loza',
  images: [
    '/projects/4-design-option-D1.PNG',
    '/projects/4-design-option-D2.PNG',
    '/projects/4-design-option-D3.PNG',
     '/projects/4-design-option-D4.PNG',
      '/projects/4-design-option-D5.PNG',
       '/projects/4-design-option-D6.PNG',
        '/projects/4-design-option-D7.PNG',
         '/projects/4-design-option-D8.PNG',
          '/projects/4-design-option-D9.PNG',
           '/projects/4-design-option-D10.PNG',
            '/projects/4-design-option-D11.PNG',
             '/projects/4-design-option-D12.PNG',
  ],
  features: [
    'Rediseño visual de pantallas mobile',
    'Definición de paleta de colores y estilo visual',
    'Diseño responsive orientado a iPhone 14 Pro Max',
    'Rebranding de pantallas de autenticación',
    'Rebranding de dashboard, profile, transactions y plan screens',
    'Propuestas visuales comparativas para validación con cliente',
    'Optimización de jerarquía visual y experiencia de usuario',
  ],
  about:
    'FinRecover UI/UX Rebranding fue un proyecto enfocado en modernizar la experiencia visual de una aplicación financiera mobile. El trabajo consistió en generar diferentes propuestas de diseño, seleccionar una línea visual junto al cliente y extender ese estilo al resto de las pantallas principales. El objetivo fue lograr una interfaz más clara, profesional y consistente, manteniendo la identidad de marca y preparando el producto para una implementación escalable en React Native.',
  built: [
    'Exploración de estilos visuales y moodboards de referencia',
    'Diseño de pantallas mobile para iPhone 14 Pro Max',
    'Rebranding de login, welcome y register',
    'Rediseño de dashboard, financial basics, transactions y profile',
    'Definición de componentes visuales reutilizables',
    'Ajustes de colores, tipografía, espaciado y jerarquía',
    'Preparación visual para implementación en React Native y Expo',
  ],
},
{
  slug: 'poolso-finance-platform',
  title: 'Poolso - Intelligent Expense Management Platform',
  category: 'Fullstack Development',
  shortDescription:
    'Plataforma de gestión de gastos empresariales impulsada por IA, desarrollada para modernizar procesos financieros y automatizar el procesamiento de comprobantes.',

  description:
    'Lideré el desarrollo de un MVP desde cero, migrando una solución legacy en Power Apps hacia una arquitectura moderna basada en React Native y NestJS. Diseñé la arquitectura técnica, la automatización de procesos con IA y la integración de servicios cloud y herramientas de analítica.',

  tags: [
    'React Native',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'n8n',
    'OpenAI',
    'Azure Blob Storage',
    'Power BI',
    'Power Automate',
    'CI/CD',
  ],

  liveUrl: '#',
  repoUrl: '#',

  role: 'Tech Lead & Full Stack Consultant',

  roleDescription:
    'Responsable del diseño de arquitectura, liderazgo técnico, desarrollo full stack y definición de la estrategia de automatización e integración con inteligencia artificial.',

  duration: 'Junio 2025 – Diciembre 2025',

  client: 'Poolso (Chile)',

  images: [
    '/projects/rebranding-d-poolso1.png',
    '/projects/rebranding-d-poolso2.png',
  
  ],

  features: [
    'Gestión de gastos empresariales',
    'Procesamiento automático de comprobantes mediante IA',
    'Extracción estructurada de datos con LLMs',
    'Almacenamiento de documentos en Azure Blob Storage',
    'Dashboards y analítica con Power BI',
    'Automatización de procesos con n8n y Power Automate',
    'Arquitectura escalable basada en microservicios',
    'Pipelines CI/CD y testing automatizado',
  ],

  about:
    'Poolso es una plataforma de gestión financiera orientada a equipos empresariales, diseñada para simplificar el control de gastos y reducir tareas manuales mediante automatización e inteligencia artificial. El proyecto implicó la migración de una solución legacy hacia una arquitectura moderna y escalable, incorporando procesamiento inteligente de comprobantes, integraciones cloud y herramientas de analítica.',

  built: [
    'Diseño de la arquitectura técnica del MVP',
    'Desarrollo del backend con NestJS y TypeScript',
    'Desarrollo de la aplicación móvil con React Native',
    'Implementación de automatización de comprobantes con OpenAI',
    'Integración de flujos de trabajo con n8n y Power Automate',
    'Integración con Azure Blob Storage y Power BI',
    'Implementación de pipelines CI/CD y testing automatizado',
    'Definición de estándares de desarrollo y liderazgo técnico del proyecto',
  ],
},
//IA N8N
{
  slug: 'slack-ai-notifier-n8n',
  title: 'Slack AI Notifier',
  category: 'IA – n8n',
  shortDescription:
    'Workflow automatizado con n8n que recibe mensajes por webhook, los procesa con IA y envía notificaciones inteligentes a Slack.',
  description:
    'Automatización construida con n8n para recibir mensajes desde un webhook, normalizar el payload, procesar el contenido con OpenAI y enviar una notificación estructurada a un canal de Slack.',
  tags: ['n8n', 'OpenAI', 'Slack API', 'Webhooks', 'Automation'],
  liveUrl: '#',
  repoUrl: '#',
  role: 'Automation Engineer',
  roleDescription:
    'Diseñé el flujo de automatización, normalización de datos, integración con OpenAI y envío de notificaciones a Slack mediante credenciales y variables de entorno.',
  duration: '2024',
  client: 'Proyecto de automatización',
  images: ['/projects/flown8n-1.jpeg'],
  features: [
    'Recepción de mensajes mediante webhook',
    'Normalización del payload entrante',
    'Procesamiento del mensaje con OpenAI',
    'Generación automática de respuesta/resumen',
    'Envío de notificaciones a Slack',
    'Respuesta automática al webhook con estado de procesamiento',
  ],
  about:
    'Slack AI Notifier es un flujo automatizado diseñado para procesar mensajes entrantes desde un webhook, aplicar inteligencia artificial para generar una respuesta o resumen, y notificar al equipo mediante Slack. El objetivo fue reducir tareas manuales y centralizar alertas importantes en un canal operativo.',
  built: [
    'Webhook de entrada para recepción de mensajes',
    'Nodo de normalización y limpieza de datos',
    'Integración con OpenAI Chat Model',
    'Construcción de respuesta estructurada',
    'Integración con Slack para envío de mensajes',
    'Manejo de variables de entorno y credenciales',
    'Respuesta final al webhook con status success',
  ],
},
{
  slug: 'appointment-scheduling-n8n',
  title: 'Gestión de Agendamiento de Citas',
  category: 'IA – n8n',
  shortDescription:
    'Workflow inteligente con n8n para recibir solicitudes de citas, validar disponibilidad en Google Calendar y confirmar automáticamente por email o Slack.',
  description:
    'Automatización de agendamiento de citas construida con n8n, Google Calendar, OpenAI y notificaciones por email/Slack. El flujo interpreta solicitudes, verifica disponibilidad, crea eventos y envía confirmaciones automáticas.',
  tags: [
    'n8n',
    'OpenAI',
    'Google Calendar',
    'Email Automation',
    'Slack',
    'Webhooks',
  ],
  liveUrl: '#',
  repoUrl: '#',
  role: 'Automation Engineer',
  roleDescription:
    'Diseñé un flujo completo de automatización para interpretar solicitudes de agenda, validar datos, consultar disponibilidad, crear eventos en Google Calendar y enviar confirmaciones automáticas.',
  duration: '2024',
  client: 'Proyecto de automatización',
  images: ['/projects/flow-n8n2.jpeg'],
  features: [
    'Recepción de solicitudes de cita mediante webhook',
    'Validación y extracción de datos del payload',
    'Interpretación de solicitudes con OpenAI',
    'Verificación de disponibilidad en Google Calendar',
    'Creación automática de eventos',
    'Sugerencia de horarios alternativos si no hay disponibilidad',
    'Confirmación automática por email',
    'Notificación interna por Slack',
  ],
  about:
    'Este workflow permite automatizar el proceso de agendamiento de citas desde una solicitud entrante. El flujo interpreta el mensaje del usuario, extrae datos relevantes, consulta la disponibilidad en Google Calendar y decide si crear el evento o sugerir alternativas. Además, envía confirmaciones por email y notificaciones internas por Slack.',
  built: [
    'Webhook inicial para recibir solicitudes de agenda',
    'Validación y normalización de datos de entrada',
    'Integración con OpenAI para interpretar mensajes',
    'Consulta de eventos disponibles en Google Calendar',
    'Condicional de disponibilidad mediante nodo IF',
    'Creación automática de eventos en Google Calendar',
    'Envío de confirmaciones y alternativas por email',
    'Notificación final al equipo mediante Slack',
  ],
},

//GITHUB ACTIONS
{
  slug: 'qa-automation-reporting-platform',
  title: 'QA Automation Reporting Platform',
category: 'QA Automation & DevOps',
  shortDescription:
    'Sistema automatizado de reporting para QA que generaba históricos de ejecuciones, documentación en Confluence y creación automática de tickets en Jira mediante GitHub Actions.',

  description:
    'Desarrollé un flujo de automatización para el equipo de QA que permitía procesar los resultados de las ejecuciones automáticas de Playwright, generar documentación histórica en Confluence y reportar incidencias automáticamente en Jira. La solución fue implementada mediante GitHub Actions y scripts en Node.js, reduciendo el trabajo manual y mejorando la trazabilidad de las pruebas.',

  tags: [
    'GitHub Actions',
    'Node.js',
    'Playwright',
    'TypeScript',
    'Confluence API',
    'Jira API',
    'CI/CD',
    'QA Automation',
  ],

  liveUrl: '#',
  repoUrl: '#',

  role: 'QA Automation Engineer',

  roleDescription:
    'Diseño e implementación de pipelines de automatización para generación de reportes, documentación y gestión automática de incidencias.',

  duration: '1 año',

  client: 'Visibly',

  images: [
    '/projects/QAAutomation&DevOps.png',
  ],

  features: [
    'Ejecución automática de suites de Playwright',
    'Generación de históricos de ejecuciones',
    'Creación automática de documentación en Confluence',
    'Reporte automático de incidencias en Jira',
    'Integración con APIs de Atlassian',
    'Automatización mediante GitHub Actions',
    'Centralización de resultados de QA',
  ],

  about:
    'La solución fue creada para reducir el trabajo manual del equipo de QA y mejorar la visibilidad de las ejecuciones automatizadas. Cada pipeline procesaba los resultados de las pruebas, generaba documentación histórica en Confluence y reportaba automáticamente las incidencias detectadas en Jira, permitiendo un seguimiento más eficiente y una mejor trazabilidad de los defectos.',

  built: [
    'Desarrollo de workflows en GitHub Actions',
    'Implementación de scripts en Node.js y TypeScript',
    'Integración con las APIs de Jira y Confluence',
    'Procesamiento de resultados de Playwright',
    'Generación automática de históricos y reportes',
    'Creación automática de tickets de incidencias',
    'Automatización de procesos de QA y documentación',
  ],
}
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
