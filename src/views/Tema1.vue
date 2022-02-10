<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información

      .row.mb-5
        .col-md-4
          p.text-black La información es la disposición de datos en un orden o estructura determinada bajo las reglas de un contexto específico, con lo que se les brinda a estos últimos alguna utilidad.
            | Los datos son, en principio, abstractos, por ejemplo, una serie de caracteres o dígitos numéricos, presentados a modo de listado o de forma desorganizada, no aportan información de utilidad, sin embargo, si se les dota de contexto y se justifica su ordenamiento, pueden llevar al entendimiento de una situación específica. 
        .col-md-4
          figure.mb-5
            img(src='@/assets/template/Img_1_tema1.svg', alt='Texto que describa la imagen')
        .col-md-1
          figure  
            img(src="@/assets/template/img2.2.svg")
        .col-md-3
          p Por ejemplo, una lista de números de dos cifras presentadas en forma vertical podría significar miles de cosas, sin embargo, si la columna se titula “edad de los participantes”, puede deducirse que cada valor listado representa los años de edad de personas que pertenecen a un grupo estudiado; cada dato adicional que se incluya brindará un mayor contexto y, por lo tanto, los datos se tornarán en información relevante. 

      #t_1_1.titulo-segundo.color-acento-contenido
        .h4 1.1 usos
      p El uso de la información es casi interminable y, para cualquier empresa, será la forma de avanzar si le encuentran la forma ideal, tal como se narra a continuación:

      TabsC.color-primario
        .py-3.py-md-4(titulo="la información es base de conocimiento")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 la información es base de conocimiento
              p La información persigue como principal propósito el enriquecimiento del conocimiento que se posee sobre algún  aspecto, esto conlleva a reducir los niveles de incertidumbre asociados a la temática en específico, bien sea para prever eventos, de otra forma inesperados, o para comprender todos los sucesos asociados. Extrapolando lo anterior al aspecto administrativo, la información puede aportar elementos de juicio para apoyar la toma de decisiones a cualquier nivel de la organización.          
            
            .col-md-6
              figure
                img(src='@/assets/template/pest_01.svg', alt='Texto que describa la imagen')
                
        .py-3.py-md-4(titulo="Análisis de la información")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/pest_02.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Análisis de la información
              p La información recolectada debe ser sometida a estudio o análisis, de lo contrario, solo será un compendio de datos agrupados sin un propósito establecido. Su interpretación permite la transformación en acciones o toma de medidas, o incluso, en la generación de nuevas ideas. En este aspecto, cabe mencionar que, a mayor calidad de la información recolectada, la precisión de las estrategias basadas en ella, su efectividad y la precisión de la nueva información generada, también será mayor.          
        
        .py-3.py-md-4(titulo="Curaduría de la información")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Curaduría de la información

              p La apropiación de los datos dispuestos requiere, a su vez, de un mínimo criterio en la materia objeto de estudio, cualquier persona que efectúe los análisis debe contar con una mentalidad abierta, no solo al aprendizaje, sino al cuestionamiento; en muchas ocasiones, la veracidad de la información debe ser puesta a prueba, dado que existen fuentes de información poco fiables, e incluso, es probable que existan sesgos en los datos si las estrategias utilizadas para su recolección no eran las más recomendables. 

            .col-md-6
              figure
                img(src='@/assets/template/pest_03.svg', alt='Texto que describa la imagen')
                

        .py-3.py-md-4(titulo="Valide los datos y las fuentes de información")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/pest_04.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Valide los datos y las fuentes de información
              p La toma de decisiones fundamentada en información imprecisa puede desembocar en la aplicación de medidas que no abordan las problemáticas desde la perspectiva correcta, y que por ello, no satisfagan las expectativas; y es que, en la actualidad, existen tantas fuentes de información de fácil acceso, como el Internet, las publicaciones, los estudios académicos, las noticias, entre otras, que se hace obligatorio el contraste entre ellas para determinar si hay coherencia.

        
        .py-3.py-md-4(titulo="Mercados y tendencias")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Mercados y tendencias
              p La oportunidad es otra cualidad imprescindible en la información, puesto que conocer los aspectos relevantes de un escenario específico de forma oportuna permite la toma de decisiones e implementación de medidas a tiempo. Ejemplo de esto es la entrada al mercado de un nuevo producto de la competencia, conocer de ello a tiempo permite implementar estrategias, como campañas publicitarias, para robustecer las ventas de los bienes ofrecidos por la empresa, o incluso la reducción de los precios de venta si con ello se ajustan a las nuevas condiciones de la oferta. 

            .col-md-6
              figure
                img(src='@/assets/template/pest_05.svg', alt='Texto que describa la imagen')
                
        
        

      #t_1_2.titulo-segundo.color-acento-contenido
        .h4 1.2	Ciclo de vida

    
      #t_1_3.titulo-segundo.color-acento-contenido
        .h4 1.3	Lenguaje técnico

    
      #t_1_4.titulo-segundo.color-acento-contenido
        .h4 1.4	Confidencialidad


      #t_1_5.titulo-segundo.color-acento-contenido
        .h4 1.5	Fuentes
 
      
</template>

<script>
//- import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    // borrar una vez el componente "Muestras" no se necesite
  },
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
