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
    #t_2_1.titulo-segundo
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
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                 
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
    
    #t_2_3.titulo-segundo
      .h4 2.3 Motion + Presentador

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_4.titulo-segundo
      .h4 2.4 Animación 2D

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3b8VctSm558" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_5.titulo-segundo
      .h4 2.5 Video interactivo

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
