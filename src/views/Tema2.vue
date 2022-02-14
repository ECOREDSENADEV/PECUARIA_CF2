<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de recolección
     
   
    .row.bgrbannertem2.p-5.mb-5
      .col-md-9.bgrtext1_4.p-5
        p.justify-conten A la hora de llevar a cabo un estudio de cualquier naturaleza,  
          span.colorg es necesario preguntarse qué información será requerida y a través de cuál herramienta será recolectada. 
          | Para ello, es recomendable un análisis asociado a las necesidades que se esperan satisfacer y la naturaleza de los datos; una vez se tiene claridad sobre lo anterior, se proponen las metodologías y se elige aquella que resulte más efectiva dada la disponibilidad de recursos.
      .col.d-none.d-lg-block.px-0
        figure
          img(src='@/assets/curso/tema2/img_banner2.svg', alt='Imagen Banner')    
        
    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1 Criterios de selección

    .row.mb-3
      .col-md-5
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Elegir una metodología de recolección de información es uno de los pasos cruciales a la hora de efectuar cualquier tipo de investigación. Una decisión errónea en este aspecto puede conllevar el uso desmedido de recursos con resultados inútiles, o a un esfuerzo desproporcionado e innecesario. Debido a lo anterior, es importante contar con personal capacitado en la herramienta a utilizar, de tal forma que se reduzca el margen de error. A continuación, se presentan una serie de elementos a tener presente a la hora de elegir un método de recolección de información:
      
        .position-relative(@mouseover="indicadorImagenZoom = false")
          Zoom(
          lente="200" 
          :baja-resolucion="require('@/assets/curso/tema2/baja.png')" 
          :alta-resolucion="require('@/assets/curso/tema2/alta.png')"
        )
        .indicador--hover(v-if="indicadorImagenZoom")
      
      .col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Naturaleza del estudio")
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/img-placeholder0.svg', alt='Texto que describa la imagen')
                 
            .col-md-9.mb-4.mb-md-0
              p la información a recolectar puede ser cuantitativa, cualitativa, o contar con una mixtura de las dos. Según su naturaleza, ciertas herramientas pueden ser más prácticas. Por ejemplo, una entrevista suele ser más efectiva para recolectar información cualitativa, mientras que un cuestionario puede facilitar la obtención de datos cuantitativos.
        
          .row(titulo="Objeto o hipótesis de investigación")
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/img-placeholder1.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p definir la problemática a abordar o la hipótesis que se espera poner a prueba brinda nociones respecto a los instrumentos de recolección de información más útiles. Se espera que los datos recogidos aporten a la comprobación o cuestionamiento de la problemática abordada, por lo que toda información debe cumplir un propósito.    

          .row(titulo="Recursos disponibles")
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/img-placeholder2.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p llevar a cabo un trabajo investigativo involucra capital, tiempo y personal. Según la metodología utilizada, los recursos pueden variar ampliamente. Usualmente, durante la elección, debe primar la idoneidad del método para obtener resultados; sin embargo, cuando los recursos son limitados, puede ser necesario decantarse por la opción que refleje la mejor relación costo-beneficio.
          
          .row(titulo="Trabajo en equipo")
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/img-placeholder3.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p delegar funciones y estructurar el trabajo de forma organizada contribuye a la eficiencia en el proceso de recolección de información. Coordinar el trabajo puede reducir costos y optimizar los resultados, es por ello que la planeación toma relevancia durante el proceso de elección de metodología.
     
    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2 Observación
      
    .row.mb-3
        .col-md-2.d-none.d-lg-block
          figure  
            img(src="@/assets/curso/tema2/img2.2.svg")

        .col-md-10
              p A través de la acción de la observación, el ser humano percibe su entorno; gracias a ello, es capaz de registrar situaciones y fenómenos ocurridos en un lugar y momento determinados. En cierto sentido, funciona como un sistema de recolección de información, puesto que lleva a identificar eventos asociados a algún estímulo en particular y se comporta conforme se muestra a continuación:
   
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-sexto.color-acento-contenido       
      h3 Recomendaciones para el observador.
    .row.mb-3
      .col-lg-4
        .cajon.p-4.mb-4
                p Con miras a obtener la mayor cantidad y calidad de información, se presentan las siguientes recomendaciones para el observador: 
        figure 
          img(src="@/assets/curso/tema2/img2.2.1.png")
      .col-lg-8
        .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Definir el objeto de la observación") en muchas ocasiones, la falta de un objetivo definido nubla el juicio de los investigadores y lleva a que su atención se disperse en aspectos de menor relevancia. Es importante definir el sujeto o fenómeno, los comportamientos o las características que se quiere observar, de la manera más específica posible, para centrarse solo en ello.
          
          p.text-small(numero="2" titulo="Diseñar herramientas idóneas") para que la observación siga un esquema concreto, donde los datos obtenidos puedan ser registrados de forma precisa y oportuna.
          
          p.text-small(numero="3" titulo="Diseñar una planeación") para ser aplicada de manera estricta, donde se definan las actividades previas y aquellas que pondrán a prueba las afirmaciones estudiadas, de tal forma que se den todas las condiciones necesarias para que el trabajo brinde resultados.
          
          p.text-small(numero="4" titulo="Asignar labores y distribuir el trabajo") : de tal forma que el equipo involucrado realice las tareas de forma organizada y eficiente. Esto solo aplica para los trabajos investigativos que requieran de más de un investigador o colaborador.
    
    .titulo-sexto.color-acento-contenido       
      h3 Modalidades de observación.
    .col-lg-12
      .cajon.p-4.mb-4
        p La observación puede clasificarse según diversos criterios, a continuación, se presentan los sistemas que gozan de mayor aceptación: 
        
      .titulo-quinto.color-acento-contenido 
        h3 Modalidades de observación.
      
      .row
        .col-md-2
        .col-md-7
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img_infoA.svg', alt='Texto que describa la imagen')
      
            .tarjeta.color-acento-botones.p-3(x="36.6%" y="10.3%" numero="+")
              .h5.mb-2 Según medios utilizados:
              p Este sistema se rige según el grado de estructuración usado por el observador, tanto para la recolección de los datos como para su registro.

            .tarjeta.color-acento-botones.p-3(x="36.6%" y="37.1%" numero="+")
              .h5.mb-2 Según participación del observador:
              p Según la naturaleza de la investigación, en algunas ocasiones, el observador puede hacerse partícipe del hecho estudiado.

            .tarjeta.color-acento-botones.p-3(x="36.6%" y="65.2%" numero="+")
              .h5.mb-2 Según aproximación al objeto: 
              p Este criterio contempla como elemento diferenciador la cercanía del observador con el fenómeno estudiado. Se diferencia un escenario en el que ejecuta las pruebas y analiza los eventos, o por el contrario, el material analizado proviene de terceros.

            .tarjeta.color-acento-botones.p-3(x="36.6%" y="89.4%" numero="+")
              .h5.mb-2 Según el lugar:
              p contempla las condiciones del lugar donde se desarrollan los hechos observables y a partir de ellas presenta la siguiente clasificación:

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="3.3%" numero="+")
              .h5.mb-2 Estructurada:
              p goza de un trabajo de planeación previo a la ejecución de la metodología, de tal forma que se haga uso de procedimientos estructurados de recopilación de datos. Suele delimitar el campo de observación, puesto que desde un inicio se define el alcance del estudio.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="16.9%" numero="+")
              .h5.mb-2 No estructurada:
              p no sigue ningún esquema previo para el registro de los datos, presenta amplias limitaciones en su ejecución, por lo que suele utilizarse en etapas tempranas de reconocimiento de los objetos a estudiar.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="30.6%" numero="+")
              .h5.mb-2 Participante:
              p cuando el observador tiene injerencia sobre el objeto de estudio, ejecutando acciones que afecten el fenómeno. Suele requerir de preparación previa para hacer la interacción más orgánica o menos forzada.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="44.5%" numero="+")
              .h5.mb-2 No participante: 
              p los hechos ocurren de manera ajena al observador, tiene una postura como espectador y se limita a registrar las situaciones.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="58%" numero="+")
              .h5.mb-2 Directa:
              p el observador contempla la situación de primera mano, evalúa los acontecimientos y presenta unas conclusiones a partir de ello. La información puede ser de mayor o menor calidad según la experticia del investigador y de lo estructurado del proceso.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="71.6%" numero="+")
              .h5.mb-2 Indirecta:
              p los datos provienen de fuentes de investigación y, por lo tanto, el observador realiza un trabajo de análisis a partir de fenómenos que no está presenciando directamente. En este sentido, existe un apoyo proveniente de otros investigadores, que suele presentarse en diversas formas, como encuestas o cuestionarios.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="82.8%" numero="+")
              .h5.mb-2 En la vida real:
              p estudia situaciones en las que el observador no tiene ningún tipo de participación, los hechos suceden en un ambiente completamente real, sin ninguna preparación o puesta en escena que los aleje de la realidad.

            .tarjeta.color-acento-botones.p-3(x="74.2%" y="96.7%" numero="+")
              .h5.mb-2 Experimental:
              p suelen ser llevados a cabo en ambientes controlados y manipulados por el equipo investigador. Aquí se busca provocar situaciones específicas, que se aproximen a los fenómenos que se quiere estudiar, velando por no modificar su estructura natural.

      .titulo-sexto.color-acento-contenido       
        h3 Instrumentos para la recolección de información.
     
      .row.mb-5
        .col-md-1.d-none.d-lg-block.px-0.pt-2
          figure
              img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
        .col-md-11
          p La observación puede 
            span.colorg considerarse una de las metodologías de recolección de datos más sencillas y de fácil aplicación, 
            |sin embargo, como cualquier otra, requiere de herramientas que permitan llevar un seguimiento de los avances conseguidos. Con esto, no solo se busca recolectar más información, sino contar con un registro organizado y controlado de todos los aspectos relevantes, que facilite el análisis y la interpretación. Los siguientes son algunos de los medios más utilizados:

      .titulo-sexto.color-acento-contenido       
        h3 Instrumentos para la recolección de información.
      
      .row
        .col-md-4
        .col-md-4
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img_circle.svg', alt='Imagen infografica')
                
            div(x="51%" y="7%" tooltip="Click para abrir")
              .row.bgrmodalciclo
                .col-md-1
                .col-md-6.mt-5
                  h4.colorg El diario:  
                  p en él se registran todos los hechos desde el inicio del trabajo de observación. Es una herramienta flexible, por lo que pueden anotarse todo tipo de sugerencias, ideas o comentarios, ya sean de naturaleza práctica o teórica. El nivel de detalle dependerá del juicio del observador, por lo que puede ser utilizado una vez se desarrolle una actividad determinada, una situación relevante o al final de la jornada.
                  | Su extensión dependerá de la complejidad del fenómeno estudiado y el nivel de detalle que busque el observador; se recomienda el uso de una escritura precisa, ordenada y clara para ser consultada por los colaboradores.

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img-diario.svg', alt='Creación y captura: ')
            div(x="15%" y="35%" tooltip="Click para abrir")
              .row.bgrmodalciclo
                .col-md-1
                .col-md-6.mt-5
                  h4.colorg Cuadros de trabajo:  
                  p suele ser una herramienta de uso posterior a las anteriores. Con ella, se busca la tabulación y ordenamiento de la información recopilada, a través del uso de tablas en las que las filas listen los participantes y las columnas las variables, o viceversa. Existe un sinnúmero de posibilidades a la hora de diseñar cuadros de trabajo, su flexibilidad depende enteramente de los recursos del investigador y su creatividad. 
                  span Se recomienda su uso para investigaciones con un alto componente cuantitativo, o con muchos sujetos a estudiar, puesto que la información puede consolidarse y presentarse de forma resumida, sin obviar detalles de relevancia.

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img-cuad-trab.svg', alt='Creación y captura: ')
            div(x="85%" y="35%" tooltip="Click para abrir")
              .row.bgrmodalciclo
                .col-md-1
                .col-md-6.mt-5
                  h4.colorg Cuaderno de notas 
                  p opera de forma semejante al diario, pero con la particularidad de ser portado por el investigador en todo momento. Lo anterior permite registrar los hechos de forma inmediata después de su ocurrencia, lo que dota de precisión su registro, pero, como contrapartida, su estructura será menos ordenada. 
                  span Puede funcionar en manera conjunta con el diario, haciendo uso del cuaderno de notas para registrar rápidamente cada situación que lo amerite, y del diario, al finalizar la jornada de trabajo, donde se registren los eventos con mayor calma y con una estructura mucho más robusta. 

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img-cuadr-notas.svg', alt='Creación y captura: ')
            div(x="31%" y="73%" tooltip="Click para abrir")
              .row.bgrmodalciclo
                .col-md-1
                .col-md-6.mt-5
                  h4.colorg Dispositivos mecánicos:
                  p en la actualidad, existen diversos mecanismos que pueden facilitar el proceso de registro en una investigación. Dispositivos como las cámaras fotográficas o las grabadoras de voz pueden recopilar información objetiva y ser reproducida de manera asíncrona para elevar el nivel de detalle.
                  span Se recomienda especial cuidado a la hora de compartir  la información registrada por estos medios, puesto que la privacidad de los participantes puede ser vulnerada, más aún si no se cuenta con un consentimiento previo al estudio.

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/imd-disp-meca.svg', alt='Creación y captura: ')
            div(x="73%" y="73%" tooltip="Click para abrir")
              .row.bgrmodalciclo
                .col-md-1
                .col-md-6.mt-5
                  h4.colorg Mapas: 
                  p son una herramienta que aporta un contexto a la investigación, dotándola de una dimensión física determinada. En esta categoría, se encuentran también los planos y cualquier otro tipo de representación gráfica que otorgue una noción respecto a ubicación o límites de la zona estudiada.
                  span Pueden ser tan detallados como el investigador considere; es recomendable que incluyan datos relevantes para el fenómeno. Por ejemplo, los estudios de mercado suelen estar delimitados a zonas geográficas específicas, por lo que un mapa de la ciudad, donde se resalte la localidad donde se realiza la investigación, puede también presentar otros datos, como género, edad o estrato económico, que pueden aportar para relacionar las variables a la hora de interpretar los resultados.

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img-mapas.svg', alt='Creación y captura: ')


      
      .row
        .col-md-6
          .row
            .col-md-12
              p El siguiente ejemplo presenta una lista de vehículos que un concesionario ofrece y con la que se busca determinar cuáles son las preferencias del público objetivo. Así, se listan los colores de los modelos que ingresaron a revisión periódica en una semana:
            .col-md-12
              .titulo-sexto.color-acento-contenido       
                span.text-black Tabla 1. 
                span Formato cuadro de trabajo
              .tabla-a.color-acento-contenido.mb-5 
                table.text-center
                  thead
                    tr.text-black
                      th Color
                      th Modelo 1
                      th Modelo 2
                      th Modelo 3
                      th Total
                  tbody
                    tr
                      td Blanco
                      td 8
                      td 9
                      td 9
                      td.text-black 26
                    tr
                      td Negro
                      td 10
                      td 7
                      td 8
                      td.text-black 25
                    tr
                      td Rojo
                      td 6
                      td 8
                      td 9
                      td.text-black 23
                    tr
                      td Gris
                      td 5
                      td 6
                      td 7
                      td.text-black 18
                    tr.text-black
                      td Total
                      td 29
                      td 30
                      td 33
                      td 92
        .col-md-6   
          figure
            img(src='@/assets/curso/tema2/img_tabla.png', alt='Imagen infografica') 

    .row.bgrimg2_2.mb-5
      .col-md-8.p-5
        p Gracias a la elaboración del cuadro de trabajo, se pueden alcanzar conclusiones que de otra  forma pasarían desapercibidas. Una tabla como esta puede aportar información de interés, por ejemplo, que el modelo 3 goza de una mayor aceptación comercial, que el color más popular es el blanco, o que la combinación más habitual es la del modelo 1 de color negro.
      .col-md-3.p-4
        figure
          img(src='@/assets/curso/tema2/img_baner2_2.png', alt='imagen 1_3')    

      
    #t_2_3.titulo-segundo.color-acento-contenido
      .h4 2.3 Entrevista
    
    p.mb-3 Las entrevistas son un concepto acercado de la mano, con el que se reciben los datos de la primera fuente:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .titulo-sexto.color-acento-contenido       
      h3.text-black Clasificación
    .row
      .col-md-1.d-none.d-lg-block.col-lg-1.px-0
        figure
          img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
      .col-md-11
        p La entrevista se compone mayoritariamente de un factor social, donde interactúan, en principio, un encuestador, haciendo las preguntas y dirigiendo la conversación, y un entrevistado, quien responde y aporta la información a su alcance. La forma de clasificación más común de esta metodología parte de la forma en la que se desarrolla esta interacción, presentando las siguientes tres categorías: 
    
    .row.mb-5
      .titulo-sexto.color-acento-contenido       
        h3.text-black Tipos de entrevista
      .row
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/img_tipoentre.svg', alt='ico_raya')
        
        .col-md-7.mb-5.mb-md-0
          //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Estructuradas") previo al acercamiento con el entrevistado, el investigador diseña un listado de preguntas establecido e inmodificable. Ofrecen especial utilidad para pruebas con un gran número de sujetos, dado que facilitan la comparación de respuestas y limitan las posibilidades de que los encuestados divaguen o pierdan el hilo conductor.
            
            p.text-small(numero="2" titulo="Semiestructuradas") enlistan una serie de tópicos que cumplen el papel de guía, las preguntas son abiertas y se diseñan para ofrecer un punto de referencia. Las temáticas son claras, pero el encuestador tendrá libertad de modificar el libreto según la situación lo requiera. Esta flexibilidad permite encaminar la entrevista a aquellos aspectos que se consideren más relevantes, adicionando preguntas o cambiando su orden para maximizar la obtención de información.
            
            p.text-small(numero="3" titulo="No estructuradas") este tipo de entrevistas no poseen ningún libreto ni guía inicial, de esta forma, se le cede toda la responsabilidad al entrevistador para indagar y obtener información. De esta categoría se desprenden dos tipos:
              
            p.text-small(numero="4" titulo="Focalizadas") aunque no tienen un guion, sí se fija una temática en específico, se esperan respuestas abiertas y espontáneas, mientras que el entrevistador deberá usar su pericia para encaminar la conversación a aquellos tópicos que aporten información de la temática elegida previamente

            p.text-small(numero="5" titulo="No dirigida o en profundidad") son entrevistas que buscan tocar diversos temas de interés sin profundizar en ningún área en concreto. Ejemplo de ellas son las que se encuentran en revistas o programas de farándula, donde el entrevistado responde todo tipo de preguntas profesionales y personales. Demandan una gran confianza y un ambiente de familiaridad para que el entrevistado sea más honesto y espontáneo, y para que los cambios de rumbo dictados por el entrevistador no se tomen a la defensiva.
         
  .container.tarjeta.tarjeta--azul.p-4.p-md-5

    .titulo-sexto.color-acento-contenido       
      h3 Posibilidades y limitaciones.
    p.mb-5 Al igual que las demás metodologías de recolección de información, la entrevista ofrece diversas posibilidades, a la vez que está sometida a una serie de limitaciones en su aplicación. Se presentan las de mayor relevancia, así:
    
    .row.mb-2
      .col-md-6
        .col-12
          h3 Posibilidades
          p Con este sistema, se puede profundizar ampliamente en cualquiera de los temas abordados, esto surge de la naturaleza de la información que se espera recolectar. Si las preguntas son abiertas, la gama de respuestas puede ser tan amplia como la diversidad misma de los entrevistados, incluso, el lenguaje no verbal o la emotividad tras una respuesta puede brindar más elementos de juicio a la hora de registrar la información
        .col-12.p-4.bgrtext2-posib
          p.colorw Gracias a la dinámica que surge entre el entrevistador y el entrevistado, es posible efectuar cambios durante la marcha, de tal forma que la conversación se torne más cómoda para ambas partes. Esta flexibilidad permite ahondar en los aspectos más relevantes de la investigación y puede aportar una confianza mayor, que lleve a respuestas profundas y sinceras.
        .col-12
          p Debido a que las preguntas suelen ser abiertas, es posible obtener información más allá de lo esperado. Esto permite reinterpretar la investigación en caso de ser necesario un replanteamiento según la evidencia indique.
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/img_posib.png', alt='ico_raya')
    
    .row.mb-2
      .col-md-6.mb-2
        figure
          img(src='@/assets/curso/tema2/img_posib2.png', alt='ico_raya')
      .col-md-6
        .col-12
          h3 Limitaciones
          p El formato de la entrevista se encuentra limitado por el factor tiempo. A más información que se quiera obtener de cada sujeto, más tiempo será demandado. La presencia permanente del investigador es obligatoria durante toda la entrevista si se busca un ambiente de cercanía. Dado que las personas suelen responder preguntas abiertas, tampoco se puede esperar que se respondan varios cuestionamientos al mismo tiempo.
        .row.mb-2
          .col-md-2.d-none.d-lg-block.col-lg-2.px-0
            figure
              img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
            figure
              img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
          .col-md-12.col-lg-10
            span.colorb El margen de error es más amplio que con otras metodologías, 
            span puesto que las preguntas abiertas y espontáneas se pueden prestar para diversas interpretaciones. Esta situación es aún más compleja si el juicio del investigador se ve afectado por su exceso o falta de empatía con el entrevistado, lo que puede generar sesgos en la información
        .col-12
          p La práctica ha demostrado que, usualmente, hay una gran brecha entre lo que un entrevistado hace y lo que dice que haría. Usualmente, los hechos son recordados con leves variaciones inconscientes; de la misma forma, preocupado por su imagen, puede responder que tomaría una posición o ejecutaría una acción de modo hipotético, mientras que en la realidad nunca lo haría. Es por ello que la calidad de las conclusiones alcanzadas está estrechamente relacionada con la honestidad que tengan los entrevistados, situación difícilmente medible con esta metodología.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5     
    .titulo-sexto.color-acento-contenido       
      h3 Pasos para su aplicación.
    p La correcta ejecución de una entrevista demanda el seguimiento de una serie de pasos que permitan abordar la actividad con el direccionamiento correcto. Para ello, resulta relevante centrarse en la función de la información que espera obtenerse. A continuación, se ofrece un listado de actividades que pueden tenerse presente para que la entrevista cumpla sus objetivos:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Definir la problemática a estudiar:
          p siempre debe partirse de la formulación de la problemática que se espera abordar. Esto funciona como justificación de la aplicación de la metodología. Se recomienda presentarla de forma precisa, dentro de un alcance de tiempo y espacio determinados.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso1.png', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img_paso2.png', alt='Texto que describa la imagen')
            
        .col-md-6
          h3 Identificar la población: 
          p dadas las limitaciones de tiempo y presupuesto que suele haber en este tipo de investigaciones, es prudente efectuar una delimitación de la población objeto de estudio. Los criterios a aplicar dependen del juicio del investigador, en función de la problemática y las metas de recolección de información que se planteen. La muestra elegida deberá corresponder con estos parámetros, para alcanzar los resultados más efectivos.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Planificar la entrevista: 
          p para maximizar la obtención de resultados, es recomendable un trabajo de planeación previo a la aplicación de la entrevista. En este boceto inicial, se deben plantear las preguntas principales, la ruta que se espera seguir, e incluso la elección del entrevistador. Para profundizar en esto, la entrevista puede dividirse en tres momentos fundamentales:
     
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso3.png', alt='Texto que describa la imagen')
            

      .row
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso4.png', alt='Texto que describa la imagen')
        
        .col-md-6.mb-4.mb-md-0
          h3 Comienzo: 
          p el principal objetivo de esta fase es crear un ambiente ameno y de confianza entre las partes. Las preguntas a formular aquí deben ser sencillas y llevar a respuestas que no demanden profundización ni tema específico; lo que se busca es delimitar el contexto de forma amplia y garantizar tranquilidad y voluntad para responder
      
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Desarrollo: 
          p en esta fase se debe brindar el espacio necesario para que el entrevistado responda tomando todo el tiempo que necesite, de tal forma que no se sienta presionado o que se busca evaluar sus conocimientos en la materia. El entrevistador debe intentar mantener una posición independiente de las respuestas, sin hacer juicios de valor aprobando o desaprobando la posición del entrevistado. Según su habilidad, podrá replantear una misma pregunta con diferente vocabulario para corroborar una posición y minimizar el sesgo a la hora de registrar la información obtenida.
     
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso5.png', alt='Texto que describa la imagen')
      
      .row
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso6.png', alt='Texto que describa la imagen')
        
        .col-md-6.mb-4.mb-md-0
          h3 Cierre: 
          p Para finalizar, se recomienda una ligera revisión de los temas que se esperaban abordar y, si la situación lo amerita, retomar temáticas que no se profundizaron lo suficiente. La despedida y el agradecimiento al invitado deben ofrecerse en un ambiente cálido y que siga generando la confianza de principio a fin de la entrevista, puesto que es posible obtener algún dato adicional en esta etapa. 
             
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Obtención y análisis de información: 
          p las respuestas abiertas y la modificación sobre la marcha de las entrevistas limitan sus posibilidades de estandarización. Es por ello que el registro demanda una revisión de las etapas descritas previamente. Para esto, se recomienda el uso de dispositivos mecánicos de registro, como las videocámaras o las grabadoras. De esta forma, se podrán revisar las respuestas que tengan mayor utilidad o generen más confusión. 
     
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/img_paso7.png', alt='Texto que describa la imagen')
            
    
    .row.bgrimg2_2.mb-5
      .col-md-8.p-5
        p Para el análisis de la información recolectada, se requerirá aún de más tiempo, puesto que las respuestas suelen estar abiertas a interpretación. El investigador debe ser conocedor de los temas estudiados para poder prestar un criterio válido y apropiado. Se recomienda listar las conclusiones más importantes y relacionar aspectos relevantes de la conversación que van más allá de las respuestas, como el ya mencionado lenguaje corporal o la disposición para abordar temas específicos por parte del entrevistado.
      .col-md-3.p-4
        figure
          img(src='@/assets/curso/tema2/img_banner_2_3.png', alt='imagen 1_3')
    
    #t_2_3.titulo-segundo.color-acento-contenido.mb-5
      .h4 2.4 Encuesta
    p La encuesta permite cuestionar a las personas que participaron en un hecho o suceso particular. Se le considera un método descriptivo debido a que favorece la identificación de hábitos, preferencias o ideas, entre otros.

    .row
      .col-md-4
        .col-md-3.d-none.d-lg-block.col-lg-3.px-0
          figure
            img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
        .col-md-12
          p Como en la mayoría de las investigaciones, 
            span.colorg hacer partícipes a todos los individuos de una población resultaría innecesariamente costoso y trabajoso, 
            | es por ello que este modelo apunta a selecciones aleatorias o controladas de los sujetos a estudiar. El grupo seleccionado se conoce como muestra, y los resultados alcanzados tras su estudio, así como las respectivas conclusiones, son extrapolados a la totalidad de la población que se pretende estudiar.
      .col-md-3.bgrcajonimg.p-4
        figure
            img(src='@/assets/curso/tema2/img-2-4-encu.svg', alt='img encuesta')
      .col-md-5.bgrtext1_4.p-5
        p La facilidad de aplicación de la encuesta la ha convertido en una estrategia de amplia aceptación; esto se debe, en primera medida, al avance de las herramientas tecnológicas que permiten alcanzar poblaciones mucho mayores, de forma efectiva y casi inmediata. Es común observar encuestas enviadas y diligenciadas con el teléfono celular o un ordenador con acceso a Internet; si son lo suficientemente breves, pueden responderse en unos cuantos minutos, lo que facilita aún más el reclutamiento de sujetos para ser objeto de estudio.

  .container.tarjeta.tarjeta--azul.p-4.p-md-5     
    .titulo-sexto.color-acento-contenido       
      h3 Posibilidades y limitaciones.
    
    .row
      .col-md-1.d-none.d-lg-block.col-lg-1.px-0
        figure
          img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
      .col-md-11.p-4
        p La metodología de la encuesta resulta muy práctica y de fácil aplicación para la recolección de datos, sin embargo, al igual que cualquier otro sistema, tiene desventajas que podrían no hacerla ideal en ciertas situaciones. Las cualidades y limitaciones de la encuesta son las siguientes: 
  
    .titulo-quinto.color-acento-contenido.mb3      
      h3 Posibilidades
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.colorbgrw.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img-sly-1.svg' alt='AvatarTop')
        
        p.text-center Su aplicación resulta más económica que la entrevista y la información recolectada puede abordar una gran variedad de temas.

      .tarjeta.colorbgrw.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img-sly-2.svg' alt='AvatarTop')
       
        p.text-center -	Puede ser aplicada a muestras mucho más grandes, por lo que las investigaciones que busquen predecir tendencias de poblaciones de grandes dimensiones, como regiones o países, suelen hacer uso de esta metodología.

      .tarjeta.colorbgrw.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img-sly-3.svg' alt='AvatarTop')
        
        p.text-center -	Las respuestas suelen ser anónimas, los encuestados no suelen dar detalles de su identidad, lo que otorga un confort que lleva a respuestas más honestas, donde no existirán represalias morales por una opinión controvertida.

      .tarjeta.colorbgrw.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
        
        p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.

    .titulo-quinto.color-acento-contenido.mb-3       
      h3 Limitaciones

    .row
      .col-md-1.col-lg-4.mb-2
        .tarjeta.colorbgrw.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sy-1.svg' alt='AvatarTop')
            
            p.text-center La información proviene de una fuente indirecta, ya que la realidad se percibe a través del juicio de terceros.
      .col-md-1.col-lg-4.mb-2
        .tarjeta.colorbgrw.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sy-3.svg' alt='AvatarTop')
            
            p.text-center La veracidad de los datos puede verse comprometida debido al uso de ayudas electrónicas, donde personas pueden efectuar la encuesta en repetidas ocasiones; además, la dependencia de la estabilidad de la red lleva a que situaciones ajenas a los investigadores puedan retrasar o comprometer la integridad de los datos.
      .col-md-1.col-lg-4.mb-2
        .tarjeta.colorbgrw.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sy-3.svg' alt='AvatarTop')
            
            p.text-center -	Debido a que la información se recolecta de manera impersonal, es decir, no hay un contacto directo con los encuestados, pueden surgir dudas o inquietudes que no sean resueltas con las instrucciones brindadas, lo que lleva a comprometer la veracidad de algunas respuestas que provengan de preguntas mal formuladas.
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5     
    .titulo-sexto.color-acento-contenido       
      h3 Instrumentos para la recolección de información.
          
    .row
      .col-md-1.d-none.d-lg-block.col-lg-1.px-0
        figure
          img(src='@/assets/curso/tema2/img2.2.svg', alt='ico_raya')
      .col-md-11.p-4
        p Esta metodología suele hacer uso, principalmente, de dos instrumentos de recolección de datos: el cuestionario y la cédula de entrevista. A continuación, se describe la información más importante de cada uno de ellos:
    
    .titulo-sexto.color-acento-contenido       
      h3 Cuestionario
    
    .row.mb-5
      .col-md-4.p-4
        p Enlista una serie de preguntas diseñadas por el investigador y otorga un espacio para diligenciar la respuesta por parte de los encuestados. 
          span.colorb A la hora de su elaboración, es recomendable una codificación que posibilite la tabulación y consolidación de respuestas a través de hojas de trabajo. 
          | debe propender por consultas que se satisfagan con respuestas cerradas (opción múltiple, si/no, falso o verdadero), para reducir el número de variables a estudiar.
      .col-md-3.bgrcajonimg2.p-5
        figure
            img(src='@/assets/curso/tema2/img-2-4-encu-2.svg', alt='img encuesta')
      .col-md-5.brgcajontext2.p-5
        p El fuerte de los cuestionarios radica en buscar información cuantitativa y descriptiva; a la hora de su elaboración, el investigador debe comprender la problemática sobre la que espera indagar, de tal manera que las preguntas se enfoquen en trabajar cada aspecto de relevancia para la investigación. Así pues, cada variable puede ser puesta a prueba por una o múltiples preguntas, en función del nivel de detalle que se busque.
    
    .row
      .col-md-4
        h3.colorb.text-center.pt-5 Para el diseño de preguntas se recomienda:
      
      .col-md-1.col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4").mb-5
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-1.svg' alt='AvatarTop')
            
            p.text-center Su aplicación resulta más económica que la entrevista y la información recolectada puede abordar una gran variedad de temas.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-2.svg' alt='AvatarTop')
          
            p.text-center -	Puede ser aplicada a muestras mucho más grandes, por lo que las investigaciones que busquen predecir tendencias de poblaciones de grandes dimensiones, como regiones o países, suelen hacer uso de esta metodología.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-3.svg' alt='AvatarTop')
            
            p.text-center -	Las respuestas suelen ser anónimas, los encuestados no suelen dar detalles de su identidad, lo que otorga un confort que lleva a respuestas más honestas, donde no existirán represalias morales por una opinión controvertida.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.
          
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.
          
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.
          
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.
          
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.
          
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img-sly-4.svg' alt='AvatarTop')
            
            p.text-center -	Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.

  
          

    

</template>

<script>
export default {
  name: 'Tema2',
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
