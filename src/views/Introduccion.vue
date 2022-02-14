<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    span.colorg Bienvenido. 
    span Como verá en adelante, la información es base de desarrollo, con su buen manejo se logran resultados increíbles:
    
    figure.mt-5.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    .row.bgrimgintro
      .col-md-3.p-4
        figure
            img(src="@/assets/curso/imagen-banner-intro.png")
      .col-md-9.p-5
        p.mb-4 Para la elaboración de este componente, se abordaron varios autores conocidos en 
            span.colorg información y recolección de datos, 
            | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la 
            span.colorb gestión de empresas pecuarias
    //-.tarjeta.bgrimgintro.p-4.p-md-12.mb-5
      .row.justify-content-around.align-items-center
        .col-md-3.col-sm-3.col-lg-3.p-4
          figure
            img(src="@/assets/curso/imagen-banner-intro.png")
        
        .col-md-9.col-lg-9
          p.mb-4 Para la elaboración de este componente, se abordaron varios autores conocidos en 
            span.colorg información y recolección de datos, 
            | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la 
            span.colorb gestión de empresas pecuarias

    
               
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
