<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de recolección
     
   
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/img.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 A la hora de llevar a cabo un estudio de cualquier naturaleza,  
          span.text-black es necesario preguntarse qué información será requerida y a través de cuál herramienta será recolectada. 
          | Para ello, es recomendable un análisis asociado a las necesidades que se esperan satisfacer y la naturaleza de los datos; una vez se tiene claridad sobre lo anterior, se proponen las metodologías y se elige aquella que resulte más efectiva dada la disponibilidad de recursos.
    br
    br    
    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1 Criterios de selección

    .row
      .col-md-5
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Elegir una metodología de recolección de información es uno de los pasos cruciales a la hora de efectuar cualquier tipo de investigación. Una decisión errónea en este aspecto puede conllevar el uso desmedido de recursos con resultados inútiles, o a un esfuerzo desproporcionado e innecesario. Debido a lo anterior, es importante contar con personal capacitado en la herramienta a utilizar, de tal forma que se reduzca el margen de error. A continuación, se presentan una serie de elementos a tener presente a la hora de elegir un método de recolección de información:
      
        .position-relative(@mouseover="indicadorImagenZoom = false")
          Zoom(
          lente="200" 
          :baja-resolucion="require('@/assets/curso/baja.png')" 
          :alta-resolucion="require('@/assets/curso/alta.png')"
        )
        .indicador--hover(v-if="indicadorImagenZoom")
      
      .col-md-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Naturaleza del estudio")
            .col-md-3
              figure
                img(src='@/assets/template/img-placeholder0.svg', alt='Texto que describa la imagen')
                 
            .col-md-9.mb-4.mb-md-0
              p la información a recolectar puede ser cuantitativa, cualitativa, o contar con una mixtura de las dos. Según su naturaleza, ciertas herramientas pueden ser más prácticas. Por ejemplo, una entrevista suele ser más efectiva para recolectar información cualitativa, mientras que un cuestionario puede facilitar la obtención de datos cuantitativos.
        
          .row(titulo="Objeto o hipótesis de investigación")
            .col-md-3
              figure
                img(src='@/assets/template/img-placeholder1.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p definir la problemática a abordar o la hipótesis que se espera poner a prueba brinda nociones respecto a los instrumentos de recolección de información más útiles. Se espera que los datos recogidos aporten a la comprobación o cuestionamiento de la problemática abordada, por lo que toda información debe cumplir un propósito.    

          .row(titulo="Recursos disponibles")
            .col-md-3
              figure
                img(src='@/assets/template/img-placeholder2.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p llevar a cabo un trabajo investigativo involucra capital, tiempo y personal. Según la metodología utilizada, los recursos pueden variar ampliamente. Usualmente, durante la elección, debe primar la idoneidad del método para obtener resultados; sin embargo, cuando los recursos son limitados, puede ser necesario decantarse por la opción que refleje la mejor relación costo-beneficio.
          
          .row(titulo="Trabajo en equipo")
            .col-md-3
              figure
                img(src='@/assets/template/img-placeholder3.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p delegar funciones y estructurar el trabajo de forma organizada contribuye a la eficiencia en el proceso de recolección de información. Coordinar el trabajo puede reducir costos y optimizar los resultados, es por ello que la planeación toma relevancia durante el proceso de elección de metodología.
      br
      br

    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2 Observación
      
    .row
        .col-md-2
          figure  
            img(src="@/assets/template/img2.2.svg")

        .col-md-10
              p A través de la acción de la observación, el ser humano percibe su entorno; gracias a ello, es capaz de registrar situaciones y fenómenos ocurridos en un lugar y momento determinados. En cierto sentido, funciona como un sistema de recolección de información, puesto que lleva a identificar eventos asociados a algún estímulo en particular y se comporta conforme se muestra a continuación:
    br
    br
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_2_1.titulo.tercer       
              .h5.text-black Recomendaciones para el observador.
    .row
      .col-lg-4
        .cajon.p-4.mb-4
                p Con miras a obtener la mayor cantidad y calidad de información, se presentan las siguientes recomendaciones para el observador: 
        figure 
          img(src="@/assets/curso/img2.2.1.svg")
      .col-lg-8
        .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Definir el objeto de la observación") en muchas ocasiones, la falta de un objetivo definido nubla el juicio de los investigadores y lleva a que su atención se disperse en aspectos de menor relevancia. Es importante definir el sujeto o fenómeno, los comportamientos o las características que se quiere observar, de la manera más específica posible, para centrarse solo en ello.
          
          p.text-small(numero="2" titulo="Diseñar herramientas idóneas") para que la observación siga un esquema concreto, donde los datos obtenidos puedan ser registrados de forma precisa y oportuna.
          
          p.text-small(numero="3" titulo="Diseñar una planeación") para ser aplicada de manera estricta, donde se definan las actividades previas y aquellas que pondrán a prueba las afirmaciones estudiadas, de tal forma que se den todas las condiciones necesarias para que el trabajo brinde resultados.
          
          p.text-small(numero="4" titulo="Asignar labores y distribuir el trabajo") : de tal forma que el equipo involucrado realice las tareas de forma organizada y eficiente. Esto solo aplica para los trabajos investigativos que requieran de más de un investigador o colaborador.
    br
    br
    #t_2_2_2.titulo.tercer       
              .h5.text-black Modalidades de observación.
    .col-lg-12
      .cajon.p-4.mb-4
        p La observación puede clasificarse según diversos criterios, a continuación, se presentan los sistemas que gozan de mayor aceptación: 
        
      h3 Imagen Infográfica A
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/img_infoA.svg', alt='Texto que describa la imagen')
            
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

    #t_2_3.titulo-segundo
      .h4 2.3 Entrevista

    


    #t_2_4.titulo-segundo
      .h4 2.4 Encuesta

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3b8VctSm558" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_5.titulo-segundo
      .h4 2.5 Analisis de contenido

    p.mb-4 Visualización de videos con diferentes tipos de preguntas o anotaciones.

    figure.mb-5
      .video
        iframe(src="https://vizia.co/videos/94d994c5fe93f1b08a60eb/embed" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390")

    #t_2_6.titulo-segundo
      .h4 2.6 Infografías

    p.mb-4 Es una herramienta de comunicación de alta precisión, el cual tiene una narrativa gráfica con un texto corto acompañada de elementos visuales que tienen como intención de captar rápidamente la atención del lector. 

    figure.mb-5
      img(src='@/assets/curso/infografia-1.jpg', alt='Infografía Fundamentos del Servicio de Interpretación')
      figcaption Fundamentos del Servicio de Interpretación

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Fundamentos del Servicio de Interpretación
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/fundamentos_del_servicio_de_Interpretacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-2.jpg', alt='Infografía Plan de Negocios')
      figcaption Plan de Negocios

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Plan de Negocios
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/plan_de_negocios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-3.jpg', alt='Infografía Cobertura poblacional')
      figcaption Cobertura poblacional

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Cobertura poblacional
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/cobertura_poblacional.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-4.jpg', alt='Infografía Historia de las microfinanzas: Mohammad Yunus')
      figcaption Historia de las microfinanzas: Mohammad Yunus

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Historia de las microfinanzas: Mohammad Yunus
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/historia_de_las_microfinanzas_mohammad_yunus.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-5.jpg', alt='Infografía Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica')
      figcaption Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/psicologia_de_la_moda.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

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
