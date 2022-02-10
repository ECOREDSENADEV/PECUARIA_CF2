export default {
  global: {
    componenteFormativo: 'Información y recolección de datos',
    descripcionCurso:
      'El tratamiento de la información constituye una actividad clave e indispensable en la administración de cualquier unidad productiva, gracias a ello, es posible aprender de hechos pasados y anticiparse a situaciones problemáticas. Hacer uso de las metodologías y herramientas disponibles en la actualidad agilizará la gestión administrativa y otorgará más garantías en el manejo de los datos',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Uso',
            hash: 'Uso',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ciclo de vida',
            hash: 'Ciclo de vida',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lenguaje técnico',
            hash: 'Lenguaje técnico',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Confidencialidad',
            hash: 'Confidencialidad',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Fuentes',
            hash: 'Fuentes',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de recolección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de selección',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Observación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2.1',
            titulo: 'Recomendaciones para el observador',
            hash: 't_2_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2.2',
            titulo: 'Modalidades de observación',
            hash: 't_2_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2.3',
            titulo: 'Instrumentos para la recolección de información',
            hash: 't_2_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Entrevista',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3.1',
            titulo: 'Clasificación',
            hash: 't_2_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3.2',
            titulo: 'Posibilidades y limitaciones',
            hash: 't_2_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3.3',
            titulo: 'Pasos para su aplicación',
            hash: 't_2_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Encuesta',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4.1',
            titulo: 'Posibilidades y limitaciones',
            hash: 't_2_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4.2',
            titulo: 'Instrumentos para la recolección de información',
            hash: 't_2_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Análisis de contenido',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5.1',
            titulo: 'Aplicaciones',
            hash: 't_2_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5.2',
            titulo: 'Característicass',
            hash: 't_2_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5.3',
            titulo: 'Tipos de análisis',
            hash: 't_2_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5.3',
            titulo: 'Etapas',
            hash: 't_2_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ofimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Usos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas ofimáticas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Softwares de recolección de datos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Licencias',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castillo, I. (2018). Lenguaje técnico: características y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/lenguaje-tecnico/',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe [CEPAL]. (2020). Gestión de datos de investigación.',
      link:
        'https://biblioguias.cepal.org/gestion-de-datos-de-investigacion/tipos-datos',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const]. Art. 15. 7 de julio de 1991 (Colombia). ',
      link: 'https://www.acnur.org/fileadmin/Documentos/BDL/2001/0219.pdfs',
    },
    {
      referencia:
        'Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. Junio 27 de 2013. DO. Nº 48.834.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
    },
    {
      referencia:
        'Emanuelli, P., Egidos, D., Ortúzar, I., García, D., Dorado, C., Ulla, C., Cárcar, M. y Blanco, C. (2012) Herramientas de Metodología para investigar en comunicación: Técnicas de recolección y análisis de la información. Editorial Copy-Rápido. ',
      link:
        'https://filadd.com/doc/tomo2-1-manual-herramientas-de-metodol-para',
    },
    {
      referencia:
        'Ley 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diciembre 31 de 2008. DO. Nº 47.219 ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=34488',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. DO. Nº 48.587. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      referencia:
        'Pérez, A. (2020). Las 4 fases del ciclo de vida de los datos. OBS Business School.',
      link:
        'https://www.obsbusiness.school/blog/las-4-fases-del-ciclo-de-vida-de-los-datos',
    },
  ],
  glosario: [
    {
      termino: 'Encriptación',
      significado:
        'Sistema de seguridad en el que se modifican los archivos digitales mediante algoritmos para hacerlos ilegibles en caso de ser sustraídos sin autorización. ',
    },
    {
      termino: 'Unívoco',
      significado: 'Algo que siempre tiene el mismo significado.',
    },
    {
      termino: 'Fenómeno',
      significado:
        'Cualquier situación o manifestación que se percibe con los sentidos.',
    },
    {
      termino: 'Inferencia',
      significado: 'Que deduce una afirmación a  partir de otras.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'Derecho que se posee sobre una idea, concepto o cualquier creación surgida del intelecto humano.',
    },
    {
      termino: '<em>Software</em>',
      significado: 'Conjunto de programas para computadora. ',
    },
    {
      termino: 'Código fuente',
      significado:
        'Listado de instrucciones que parametrizan el funcionamiento de un software. ',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
