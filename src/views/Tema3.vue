<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ofimática
    
    .row
      .col-md-5
        p La ofimática 
          span.colorg es la respuesta a un mundo cambiante y a un ambiente organizacional cada vez más complejo, 
          | adicionando más procesos productivos que se ejecutan de manera simultánea. Las herramientas tecnológicas han permitido mantener el ritmo de los avances empresariales, brindando facilidades para el control, registro y conservación de la información.
      .col-md-3
        figure
            img(src='@/assets/curso/tema3/img-3.svg', alt='img tema 3')
      
      .col-md-4
        .col-md-3.d-none.d-lg-block.col-lg-2.px-0
          figure
            img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
        .col-md-12.p-2
          p Con la ofimática, es posible mantener el control de innumerables tareas ejecutadas al interior de la empresa. El término es un acrónimo compuesto por las palabras oficina e informático, por lo que se deduce que surge como una herramienta tecnológica que brinda apoyo a tareas administrativas. 

    .row
      .col-md-5
        figure
            img(src='@/assets/curso/tema3/img-31.png', alt='ico_raya')
      .col-md-7.bgrtext1_4.p-4
        p Pero esta no se reduce a las herramientas en sí mismas, también incluye los sistemas y métodos necesarios para operarlos, de tal forma que las labores operativas sean paulatinamente reemplazadas por programas automatizados. Al final, los resultados obtenidos deben dirigirse a un procesamiento de datos casi inmediato, una planeación asistida, una programación de tareas, la designación de personal responsable y el seguimiento de los compromisos. 
    
    #t3_1.titulo-segundo.color-acento-contenido.mb-5
      .h4 3.1 Uso

    
    .row.mb-3
      .col-md-5.mb-3
        .col-md-12
          p Como se ha mencionado previamente, la ofimática busca facilitar el trabajo propio de una oficina, y para ello, ofrece herramientas que ofrecen apoyo para estas tareas. Las siguientes son algunas de las funciones que se desprenden de este concepto:
        .col-md-12
          figure
            img(src='@/assets/curso/tema3/img-32.png', alt='ico_raya')
      .col-md-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Elaboración y procesamiento de documentos: ")
            .col-md-12.mb-4.mb-md-0
              p diseñar documentos y papeles de trabajo cumpliendo con los estándares propuestos por la empresa brinda uniformidad y otorga una identidad característica. Las herramientas más populares para esto son los procesadores de texto y las hojas de cálculo, puesto que cumplen con las tareas típicas de la labor administrativa de una empresa: el diligenciamiento de oficios, y la elaboración de tablas con operaciones aritméticas.
          
          .row(titulo="Registro documental:  ")
            .col-md-12.mb-4.mb-md-0
              p otra utilidad fundamental de la ofimática es la de gestionar los documentos y llevar un registro de su trazabilidad con el que sea posible consultar la fecha y hora de su creación y posteriores modificaciones. Esto garantiza el respaldo de los datos a través de diversos mecanismos y mejora la calidad de la supervisión.
          
          .row(titulo="Consulta automatizada:   ")
            .col-md-12.mb-4.mb-md-0
              p la indización de los documentos permite que su consulta a través de medios electrónicos sea mucho más veloz. Existen softwares con utilidades que permiten consultar a partir de criterios de búsqueda específicos, ya sea por tipo de documento, palabras clave en su nombre o contenido, dimensiones, entre otros.
          
          .row(titulo="Comunicación instantánea:   ")
            .col-md-12.mb-4.mb-md-0
              p la transmisión oportuna y efectiva de datos es uno de los objetivos de cualquier sistema administrativo. Las organizaciones funcionan como organismos en los que todas las áreas interactúan entre sí, por lo que el poder compartir toda clase de información de forma instantánea, sin importar las distancias o las dimensiones de lo que se desea enviar, aporta nuevas posibilidades para la administración de una empresa.
          
          .row(titulo="Teletrabajo:  ")
            .col-md-12.mb-4.mb-md-0
              p en los últimos años, esta modalidad de trabajo ha venido tomando más fuerza. El teletrabajo consiste en la ejecución de las labores propias de la relación laboral desde la distancia, haciendo uso de herramientas tecnológicas que permitan acceder a la información de la compañía, de la misma forma en la que garantizan la recepción de los datos producidos por el trabajador. Esta modalidad ofrece grandes ventajas, como la reducción de costos de desplazamiento, o de alquiler de oficinas de gran capacidad, debido a que los trabajadores pueden laborar desde casa. Puede considerarse la evolución lógica del modelo de trabajo tradicional, donde los dispositivos electrónicos empiezan a tomar poco a poco más protagonismo.
    #t3_2.titulo-segundo.color-acento-contenido.mb-5
      .h4 3.2 Herramientas ofimáticas  

    .row.mb-3
      .col-md.d-none.d-lg-block.col-lg-1.px-0
        figure
          img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')

      .col-md-12.col-lg-11  
        p Se consideran herramientas ofimáticas los programas informáticos que cumplen con los objetivos descritos previamente. Funcionan a través de aplicativos que permiten desarrollar actividades varias y tan exigentes como el mundo organizacional demanda en la actualidad. A continuación, se relacionan algunas de las herramientas de mayor demanda en ofimática:
    .row.mb-3
      .col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Procesadores de texto: ")
            .col-md-12.mb-4.mb-md-0
              p en ellos se elaboran documentos de texto, como cartas, memorandos o comunicados. Su punto fuerte radica en la generación de documentos con contenido alfanumérico, habilitando su modificación casi permanente, en aspectos que van desde la ortografía, presentación o redacción. Con el pasar del tiempo, han adicionado más funcionalidades complementarias, como la evaluación de la redacción o sintaxis, la proposición de sinónimos, la inserción de formas o imágenes, entre otras. 
          
          .row(titulo="Hojas de cálculo:  ")
            .col-md-12.mb-4.mb-md-0
              p simulan una hoja de trabajo cuadriculada, puesto que su mecánica se centra en el diligenciamiento de casillas para realizar operaciones matemáticas y análisis estadísticos. Su principal enfoque es el del procesamiento de datos cuantitativos, permitiendo efectuar los cálculos de manera prácticamente instantánea. En la actualidad, incluyen utilidades adicionales, como la elaboración de gráficos o diagramas y el cálculo avanzado de estimaciones o proyecciones.
          
          .row(titulo="Presentación multimedia:   ")
            .col-md-12.mb-4.mb-md-0
              p los reproductores de contenido multimedia posibilitan la visualización y escucha de videos, audios, imágenes o fotografías. Son de especial utilidad en casos donde se espera conservar evidencias o generar copias rápidas de documentos físicos. Facilitan el registro de datos diferentes al texto, enriqueciendo el contenido del archivo de la empresa. 
          
          .row(titulo="Bases de datos:    ")
            .col-md-12.mb-4.mb-md-0
              p son herramientas destinadas a la conservación de la información según los criterios establecidos por el usuario. Su principal utilidad es la velocidad de búsqueda que ofrecen a documentos de cualquier naturaleza; en ellos se pueden almacenar cantidades significantes de información en ambientes de fácil acceso.

          .row(titulo="Programas de mensajería: ")
            .col-md-12.mb-4.mb-md-0
              p los aplicativos pertenecientes a esta categoría permiten la comunicación de forma inmediata o en diferido, así como el envío y recepción de paquetes de información a través de la red. En el presente, es posible enviar casi cualquier tipo de información por alguno de estos sistemas en apenas unos cuantos minutos.

          .row(titulo="Utilidades:  ")
            .col-md-12.mb-4.mb-md-0
              p son aquellos programas que aportan facilidades para tareas más concretas que los anteriores. Suelen ser más ligeros, sencillos y focalizados. Ejemplos de estos son los gestores de notas de audio o texto, calculadoras, agendas, relojes y temporizadores, entre otros. Su objetivo se centra en abordar tareas sencillas de forma más rápida y eficiente que lo que implicaría el uso de los otros sistemas mencionados previamente. 
          
      .col-md-5
        figure
          img(src='@/assets/curso/tema3/img-33.png', alt='ico_raya')

    
    #t3_3.titulo-segundo.color-acento-contenido.mb-5
      .h4 3.3	Softwares de recolección de datos

    p La recolección de datos es una de las mejoras constantes que se ha hecho en la forma de la información y una de las mejoras notables son los programas software con los que se hace esta gestión desde las TIC, tal como se menciona a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p Actualmente, el uso de estas herramientas es tan ampliamente aceptado que, en muchas ocasiones, los usuarios no son siquiera conscientes de su utilidad. En la cotidianidad de la gente, se puede evidenciar el uso de algunas de estas aplicaciones, como las siguientes:

    .row.mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/tema3/img33.png', alt='ico_raya')
      .col-md-7
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Grabadoras de audio y video: ")
            .col-md-12.mb-4.mb-md-0
              p.text-small prácticamente, la totalidad de los celulares ofrecidos en la actualidad cuenta con una cámara fotográfica integrada. Con el paso del tiempo, la calidad de los lentes utilizados ha ido mejorando, por lo que hoy día es posible obtener imágenes o videos muy fidedignos con solo un par de acciones. Con ello, la recolección de información en campo ya no demanda grandes inversiones ni una logística compleja, haciendo aún más viables metodologías de recolección de información como la observación y la encuesta. 
                     
          .row(numero="2" titulo="Encuestas electrónicas: ")
            .col-md-12.mb-4.mb-md-0
              p.text-small el sistema tradicional de las encuestas demandaba un trabajo significativo en cuanto a su diseño, impresión, consumo de recursos y el transporte de los documentos hasta la población objeto de estudio; el retorno de estos insumos tras la recolección de información también resultaba costoso, sin contar los riesgos asumidos, como la pérdida de contenido o su deterioro por las condiciones a las que se sometían. Además, una vez recopilados los datos, se hacía necesario transcribirlos en limpio para su posterior tabulación o consolidación, lo que implicaba una gran cantidad de esfuerzo solo organizando la información. 
          
          .row(numero="3" titulo="Sistemas modulares integrados:")
            .col-md-12.mb-4.mb-md-0
              p.text-small comprenden las soluciones más complejas mencionadas hasta ahora, funcionan integrando diversas funcionalidades a través de módulos independientes. Bajo este sistema, se permite la generación de reportes cruzados provenientes de distintos módulos; normalmente, cada módulo satisface las necesidades de un área organizacional, así, el área comercial usa uno diferente al del área de tesorería o al de contabilidad. La magnitud y complejidad de cada sistema modular dependerá de la empresa que lo adquiera, puesto que, en principio, con un solo módulo, ya se pueden cubrir las tareas básicas; si las necesidades de la empresa así lo requieren, podrán implementarse módulos adicionales.
          
    #t3_4.titulo-segundo.color-acento-contenido.mb-5
      .h4 3.4	Licencias

    .row.mb-3
      .col-md.d-none.d-lg-block.col-lg-1.px-0
        figure
          img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')

      .col-md-12.col-lg-11  
        p Los aplicativos informáticos mencionados suelen requerir de autorizaciones por parte del equipo de desarrollo y titular de la propiedad intelectual. Las modalidades disponibles van desde las opciones gratuitas hasta la suscripción de pago por tiempo limitado. Las siguientes son algunas de las alternativas que gozan de mayor popularidad en la actualidad:
    
    .tarjeta.bgrsly.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Software libre: 
            p los programas pueden ser usados para cualquier propósito, el acceso al mismo es tan amplio que se pueden hacer todas las modificaciones que el usuario necesite para adaptarlo a sus necesidades. Esto implica que su distribución al público no cuenta con limitaciones, por lo que su desarrollo suele provenir de trabajos colaborativos, donde una comunidad interactúa para mejorar las funcionalidades a partir de un punto base entregado por los desarrolladores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='Imagen 1')
        
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Software semilibre:  
            p en principio, cuenta con prácticamente las mismas libertades que ofrece el software libre, las limitaciones que lo diferencian del anterior se asocian a aspectos comerciales (puesta a la venta de versiones modificadas) o su vinculación con sistemas operativos libres.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='Imagen 2')

        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Software freeware:   
            p Los programas pertenecientes a esta categoría siguen siendo de uso gratuito, sin embargo, los usuarios tienen restringido su acceso al código fuente para modificarlo, dado que suele estar protegido con derechos de autor. El ejemplo más común de este tipo de software es la suite de Google, que incluye aplicaciones como Drive, Gmail, calendario u hojas de cálculo. En esta categoría, se pueden implantar ciertas limitaciones de funciones avanzadas o de almacenamiento, que pueden ser desbloqueadas con el pago de una membresía.  
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='Imagen 3')
        
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Software propietario:   
            p son aplicativos con limitaciones tanto de uso como de distribución o modificación del código fuente. Estos softwares pueden otorgar ciertos permisos de acceso para modificaciones solo a ciertos usuarios, sin embargo, sin expresa autorización, no podrán ser utilizados por ninguna otra persona. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='Imagen 1')
        
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Software comercial:    
            p cuentan con toda clase de limitaciones de forma similar al software propietario, pero con la posibilidad de levantar las limitaciones de uso a cambio de un pago. En el campo de la ofimática, el ejemplo más popular es el de la suite de Office, desarrollada por Microsoft. Su acceso está restringido a quien compre la licencia vitalicia de uno de sus programas o pague de forma periódica su suscripción anual, llamada Office 365. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='Imagen 2')

        .row
          .col-md-6.mb-4.mb-md-0.p-5
            h3.colorb Demo:    
            p son las versiones de prueba de programas que tienen una versión completa y, usualmente, de pago. Para acceder al contenido completo, se hace necesario un desembolso de dinero de forma periódica o a través de la adquisición de una licencia vitalicia. Su propósito es permitir un uso restringido del aplicativo, para otorgarle la oportunidad al usuario de probar si cumple con sus necesidades antes de efectuar el pago.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='Imagen 3')
              
        
          



           
              
        
 
      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
