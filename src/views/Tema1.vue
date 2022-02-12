<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información

      .row.mb-5
        .col-4
          span.colorg La información es la disposición de datos en un orden o estructura determinada bajo las reglas de un contexto específico, con lo que se les brinda a estos últimos alguna utilidad.
          span Los datos son, en principio, abstractos, por ejemplo, una serie de caracteres o dígitos numéricos, presentados a modo de listado o de forma desorganizada, no aportan información de utilidad, sin embargo, si se les dota de contexto y se justifica su ordenamiento, pueden llevar al entendimiento de una situación específica. 
        .col-4
          figure.mb-5
            img(src='@/assets/curso/tema1/img_infor.png', alt='Información')
        .col-4
          .col-3
            figure  
              img(src="@/assets/template/img2.2.svg")
            
          .col-12
            p Por ejemplo, una lista de números de dos cifras presentadas en forma vertical podría significar miles de cosas, sin embargo, si la columna se titula “edad de los participantes”, puede deducirse que cada valor listado representa los años de edad de personas que pertenecen a un grupo estudiado; cada dato adicional que se incluya brindará un mayor contexto y, por lo tanto, los datos se tornarán en información relevante. 

      #t1_1.titulo-segundo.color-acento-contenido
        .h4 1.1 usos
      p El uso de la información es casi interminable y, para cualquier empresa, será la forma de avanzar si le encuentran la forma ideal, tal como se narra a continuación:

      TabsC.color-primario.mb-5
        .py-3.py-md-4(titulo="la información es base de conocimiento")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 la información es base de conocimiento
              p La información persigue como principal propósito el enriquecimiento del conocimiento que se posee sobre algún  aspecto, esto conlleva a reducir los niveles de incertidumbre asociados a la temática en específico, bien sea para prever eventos, de otra forma inesperados, o para comprender todos los sucesos asociados. Extrapolando lo anterior al aspecto administrativo, la información puede aportar elementos de juicio para apoyar la toma de decisiones a cualquier nivel de la organización.          
            
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img_pest1.png', alt='la información es base de conocimiento')
                
        .py-3.py-md-4(titulo="Análisis de la información")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img_pest2.png', alt='Análisis de la información')
                
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
                img(src='@/assets/curso/tema1/img_pest3.png', alt='Curaduría de la información')
                

        .py-3.py-md-4(titulo="Valide los datos y las fuentes de información")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img_pest4.png', alt='Valide los datos y las fuentes de información')
                
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
                img(src='@/assets/curso/tema1/img_pest5.png', alt='Mercados y tendencias')
                
        
        

      #t1_2.titulo-segundo.color-acento-contenido
        .h4 1.2	Ciclo de vida
      .row  
        .col-8
          p La información atraviesa un proceso que contiene cuatro etapas principales y que comprenden aquellas actividades derivadas de su recolección, análisis y conservación. Cada etapa detalla una serie de parámetros centrados en la mejora de la productividad, bien sea enfocada en la precisión de la información recolectada, o en la consecución de objetivos a partir de la interpretación de los datos dispuestos. El siguiente diagrama presenta las cuatro etapas del ciclo de vida de la información:
        .col-4
          figure
            img(src='@/assets/curso/tema1/img_ciclo_1.svg', alt='Ciclo de vida de la información.')
      
      .titulo-quinto.color-acento-contenido.mt-5
         h4 Ciclo de vida de la información.
        
      ImagenInfograficaB.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img_inf_b.svg', alt='Ciclo de vida de la información.')
            
        div(x="27.1%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Creación y captura: 
              p corresponde a la primera etapa del ciclo de vida de la información. Los datos pueden surgir a partir de diversas fuentes, siempre y cuando, las mismas se encuentren destinadas a suplir las necesidades de la organización. Algunas de las fuentes de información más utilizadas son las siguientes:
            .col-4
              figure
                img(src='@/assets/curso/tema1/crea_cap.png', alt='Creación y captura: ')
            .col-1

        div(x="27.1%" y="57%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Datos preexistentes
              p pueden ser de otras organizaciones, empresas que pueden dedicarse al mismo sector o a la misma actividad, puesto que, de esta forma, se posibilita la homologación de los datos entre compañías, sin esfuerzos desproporcionados.
            .col-4
              figure
                img(src='@/assets/curso/tema1/datso_pre.png', alt='Datos preexistentes')
            .col-1

        div(x="27.1%" y="70%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Generación de información
              p a través de las actividades desarrolladas por los funcionarios encargados.
            .col-4
              figure
                img(src='@/assets/curso/tema1/gen_info.png', alt='Generación de información')
            .col-1

        div(x="27.1%" y="83%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Información disponible
              p en medios de acceso público, como libros, noticiarios, páginas web o redes sociales; la selección de estas fuentes estará supeditada a la naturaleza de la investigación y sus objetivos.
            .col-4
              figure
                img(src='@/assets/curso/tema1/info_disp.png', alt='Información disponible')
            .col-1

        div(x="44.4%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Transmisión, almacenamiento y seguridad: 
              p Una vez la información ha sido recolectada, se continúa con la transmisión a los usuarios interesados. Para garantizar el acceso a los datos en periodos posteriores, es necesario su almacenaje en condiciones seguras que garanticen su integridad.
            .col-4
              figure
                img(src='@/assets/curso/tema1/trsn_alma_seguri.png', alt='Transmisión, almacenamiento y seguridad: ')
            .col-1

        div(x="44.4%" y="57%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Tranmisión:
              p la información puede ser relevante para diferentes actores en una misma organización. Los datos de venta son importantes para el área comercial, pero también lo son para el área de recaudo o de producción. Debido a esto, deben existir medios de transmisión de la información que permitan que esta llegue a todos los interesados. Las posibilidades van desde las soluciones integrales asociadas a softwares administrativos, hasta los programas de mensajería instantánea.
            .col-4
              figure
                img(src='@/assets/curso/tema1/transm.png', alt='Tranmisión')
            .col-1
        
        div(x="44.4%" y="70%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Almacenamiento:
              p tanto la información física como digital demandan espacios para su almacenamiento. Las bases de datos abordan esta tarea conservando la información según los criterios técnicos aplicados, de la misma forma que lo hace una estantería que archiva los documentos físicos. 
            .col-4
              figure
                img(src='@/assets/curso/tema1/almac.png', alt='Almacenamiento')
            .col-1

        div(x="44.4%" y="83%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Seguridad:
              p cuando se trabaja con datos sensibles, deben existir sistemas encargados de facilitar la información a aquellos destinatarios cuando la requieran, pero de esta misma forma, deben implementarse medidas para que el acceso sea lo suficientemente controlado para evitar que personas no autorizadas accedan a ella. La información es un activo intangible de vital importancia para cualquier organización, puesto que compila datos variados y claves de la empresa, como clientes, fórmulas de producción o estrategias mercantiles; su publicación puede conllevar consecuencias graves, donde se pierden ventajas competitivas.
            .col-4
              figure
                img(src='@/assets/curso/tema1/seguri.png', alt='Datos preexistentes')
            .col-1

        div(x="61.1%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Gestión y trabajo colaborativo:  
              p debido a las diversas perspectivas desde donde se puede abordar la información, suele ser recomendable el trabajo colaborativo. Cuando existe multiplicidad de colaboradores, la productividad incrementa; es por ello que, usualmente, se designan funcionarios de cada área para sustraer los datos más relevantes para ellos, otorgando los permisos necesarios en una ventana de tiempo determinada.
            .col-4
              figure
                img(src='@/assets/curso/tema1/gest_trbj_col.png', alt='Gestión y trabajo colaborativo ')
            .col-1
          
        div(x="78.2%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-1
            .col-6.mt-5
              h4.colorg Análisis y explotación de datos:   
              p debido a las diversas perspectivas desde donde se puede abordar la información, suele ser recomendable el trabajo colaborativo. Cuando existe multiplicidad de colaboradores, la productividad incrementa; es por ello que, usualmente, se designan funcionarios de cada área para sustraer los datos más relevantes para ellos, otorgando los permisos necesarios en una ventana de tiempo determinada.
            .col-4
              figure
                img(src='@/assets/curso/tema1/anali_explo.png', alt='Análisis y explotación de datos')
            .col-1


    
      #t1_3.titulo-segundo.color-acento-contenido
        .h4 1.3	Lenguaje técnico
      .row.mt-5
        .col-4
         p La información debe presentarse de tal manera que sea entendible para su público objetivo; así, cuando es de interés general, el lenguaje debe usar terminología común para cualquier individuo, sin importar su profesión u oficio. Por otro lado, cuando se busca abordar temáticas técnicas propias de una disciplina muy concreta, es viable el uso de un lenguaje más preciso y de alto contenido técnico.
        .col-4
          figure
            img(src='@/assets/curso/tema1/leng_tecn.jpg', alt='Análisis y explotación de datos')
        .col-4
          p El ser humano ha ampliado su intelecto en todas las direcciones, desde las ciencias de la salud, hasta las económicas, desde el aspecto deportivo, hasta el musical; y este crecimiento exponencial y multidireccional lo ha llevado a utilizar jergas muy específicas para cada campo del conocimiento. El lenguaje técnico se caracteriza por ser accesible únicamente para los estudiados en cierta materia, pero su uso es cada vez más popular, debido a la constante profundización en las temáticas objeto de estudio. 

      
      .row.justify-content-around.align-items-center.bgrimg1_3
        .col-1
          figure
             img(src='@/assets/curso/tema1/icon_1_2.svg', alt='Análisis y explotación de datos')
        .col-6
          p.colorg Conforme pasa el tiempo, el enriquecimiento de nuestro idioma se ve liderado por la          utilización de lenguajes técnicos para todas las disciplinas abordadas.
          span Castillo (2018) sugiere las siguientes características para este lenguaje:
        .col-4
        .col-1

    
      #t1_4.titulo-segundo.color-acento-contenido
        .h4 1.4	Confidencialidad


      #t1_5.titulo-segundo.color-acento-contenido
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
