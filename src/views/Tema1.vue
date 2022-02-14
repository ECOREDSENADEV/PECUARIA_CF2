<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información

      .row.mb-5
        .col-md-4.mb-3
          span.colorg La información es la disposición de datos en un orden o estructura determinada bajo las reglas de un contexto específico, con lo que se les brinda a estos últimos alguna utilidad.
          span Los datos son, en principio, abstractos, por ejemplo, una serie de caracteres o dígitos numéricos, presentados a modo de listado o de forma desorganizada, no aportan información de utilidad, sin embargo, si se les dota de contexto y se justifica su ordenamiento, pueden llevar al entendimiento de una situación específica. 
        .col-md-4.mb-3
          figure
            img(src='@/assets/curso/tema1/img_infor.png', alt='Información')
        .col-md-4
          .col-3.d-none.d-lg-block.px-0
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
        .col-md-8
          p La información atraviesa un proceso que contiene cuatro etapas principales y que comprenden aquellas actividades derivadas de su recolección, análisis y conservación. Cada etapa detalla una serie de parámetros centrados en la mejora de la productividad, bien sea enfocada en la precisión de la información recolectada, o en la consecución de objetivos a partir de la interpretación de los datos dispuestos. El siguiente diagrama presenta las cuatro etapas del ciclo de vida de la información:
        .col-md-4
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
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Creación y captura: 
              p corresponde a la primera etapa del ciclo de vida de la información. Los datos pueden surgir a partir de diversas fuentes, siempre y cuando, las mismas se encuentren destinadas a suplir las necesidades de la organización. Algunas de las fuentes de información más utilizadas son las siguientes:
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/crea_cap.png', alt='Creación y captura: ')
            

        div(x="27.1%" y="57%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Datos preexistentes
              p pueden ser de otras organizaciones, empresas que pueden dedicarse al mismo sector o a la misma actividad, puesto que, de esta forma, se posibilita la homologación de los datos entre compañías, sin esfuerzos desproporcionados.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/datso_pre.png', alt='Datos preexistentes')
            

        div(x="27.1%" y="70%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Generación de información
              p a través de las actividades desarrolladas por los funcionarios encargados.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/gen_info.png', alt='Generación de información')
            

        div(x="27.1%" y="83%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Información disponible
              p en medios de acceso público, como libros, noticiarios, páginas web o redes sociales; la selección de estas fuentes estará supeditada a la naturaleza de la investigación y sus objetivos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/info_disp.png', alt='Información disponible')
            

        div(x="44.4%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Transmisión, almacenamiento y seguridad: 
              p Una vez la información ha sido recolectada, se continúa con la transmisión a los usuarios interesados. Para garantizar el acceso a los datos en periodos posteriores, es necesario su almacenaje en condiciones seguras que garanticen su integridad.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/trsn_alma_seguri.png', alt='Transmisión, almacenamiento y seguridad: ')
            

        div(x="44.4%" y="57%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Tranmisión:
              p la información puede ser relevante para diferentes actores en una misma organización. Los datos de venta son importantes para el área comercial, pero también lo son para el área de recaudo o de producción. Debido a esto, deben existir medios de transmisión de la información que permitan que esta llegue a todos los interesados. Las posibilidades van desde las soluciones integrales asociadas a softwares administrativos, hasta los programas de mensajería instantánea.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/transm.png', alt='Tranmisión')
            
        
        div(x="44.4%" y="70%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Almacenamiento:
              p tanto la información física como digital demandan espacios para su almacenamiento. Las bases de datos abordan esta tarea conservando la información según los criterios técnicos aplicados, de la misma forma que lo hace una estantería que archiva los documentos físicos. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/almac.png', alt='Almacenamiento')
            

        div(x="44.4%" y="83%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Seguridad:
              p cuando se trabaja con datos sensibles, deben existir sistemas encargados de facilitar la información a aquellos destinatarios cuando la requieran, pero de esta misma forma, deben implementarse medidas para que el acceso sea lo suficientemente controlado para evitar que personas no autorizadas accedan a ella. La información es un activo intangible de vital importancia para cualquier organización, puesto que compila datos variados y claves de la empresa, como clientes, fórmulas de producción o estrategias mercantiles; su publicación puede conllevar consecuencias graves, donde se pierden ventajas competitivas.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/seguri.png', alt='Datos preexistentes')
            

        div(x="61.1%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Gestión y trabajo colaborativo:  
              p debido a las diversas perspectivas desde donde se puede abordar la información, suele ser recomendable el trabajo colaborativo. Cuando existe multiplicidad de colaboradores, la productividad incrementa; es por ello que, usualmente, se designan funcionarios de cada área para sustraer los datos más relevantes para ellos, otorgando los permisos necesarios en una ventana de tiempo determinada.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/gest_trbj_col.png', alt='Gestión y trabajo colaborativo ')
            
          
        div(x="78.2%" y="45%" tooltip="Click para abrir")
          .row.bgrmodalciclo
            .col-md-1
            .col-md-6.mt-5
              h4.colorg Análisis y explotación de datos:   
              p debido a las diversas perspectivas desde donde se puede abordar la información, suele ser recomendable el trabajo colaborativo. Cuando existe multiplicidad de colaboradores, la productividad incrementa; es por ello que, usualmente, se designan funcionarios de cada área para sustraer los datos más relevantes para ellos, otorgando los permisos necesarios en una ventana de tiempo determinada.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/anali_explo.png', alt='Análisis y explotación de datos')
            


    
      #t1_3.titulo-segundo.color-acento-contenido
        .h4 1.3	Lenguaje técnico
      .row
        .col-md-4
         p La información debe presentarse de tal manera que sea entendible para su público objetivo; así, cuando es de interés general, el lenguaje debe usar terminología común para cualquier individuo, sin importar su profesión u oficio. Por otro lado, cuando se busca abordar temáticas técnicas propias de una disciplina muy concreta, es viable el uso de un lenguaje más preciso y de alto contenido técnico.
        .col-md-4.mb-3
          figure
            img(src='@/assets/curso/tema1/leng_tecn.jpg', alt='Análisis y explotación de datos')
        .col-md-4
          p El ser humano ha ampliado su intelecto en todas las direcciones, desde las ciencias de la salud, hasta las económicas, desde el aspecto deportivo, hasta el musical; y este crecimiento exponencial y multidireccional lo ha llevado a utilizar jergas muy específicas para cada campo del conocimiento. El lenguaje técnico se caracteriza por ser accesible únicamente para los estudiados en cierta materia, pero su uso es cada vez más popular, debido a la constante profundización en las temáticas objeto de estudio. 

      
      .row.bgrimg1_3.mb-5
        .col-md.d-none.d-lg-block.col-lg-2.p-5
          figure
             img(src='@/assets/curso/tema1/icon_1_2.svg', alt='Análisis y explotación de datos')
        .col-md-6.p-5
          p.colorg Conforme pasa el tiempo, el enriquecimiento de nuestro idioma se ve liderado por la          utilización de lenguajes técnicos para todas las disciplinas abordadas.
          span Castillo (2018) sugiere las siguientes características para este lenguaje:
        .col-md-4.p-4
          figure
             img(src='@/assets/curso/tema1/img_1_3.png', alt='imagen 1_3')
        
      
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          .row
            .col-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/img_infoa.svg', alt='Texto que describa la imagen')
                
          
        .tarjeta.color-acento-botones.p-3(x="30%" y="21%" numero="+")
          .h5.mb-2 Crecimiento exponencial: 
          p conforme más tiempo pasa, más acelerado es su crecimiento, es una situación natural en la sociedad actual, donde el acceso a la educación es cada vez más popular, y las nuevas tecnologías permiten la publicación a nivel global de toda clase de artículos que promueven el avance cultural.

        .tarjeta.color-acento-botones.p-3(x="70%" y="21%" numero="+")
          .h5.mb-2 Objetivo específico: 
          p debido a que la terminología solo puede ser plenamente entendida por los expertos en la materia estudiada, su uso se encuentra limitado a públicos específicos: un gremio, una profesión o incluso una temática particular. 
          
        .tarjeta.color-acento-botones.p-3(x="30%" y="75%" numero="+")
          .h5.mb-2 Coherencia, cohesión y adecuación: 
          p se considera coherente debido a su enfoque en un tema particular, mientras que su cohesión proviene del interés en generar afirmaciones a partir de diversos juicios e ideas que convergen en algo más concreto. Por último, se habla de adecuación debido a la forma en la que se perfila para ser dirigido a un público específico.

        .tarjeta.color-acento-botones.p-3(x="70%" y="75%" numero="+")
          .h5.mb-2 Carácter unívoco: 
          p el lenguaje técnico es tan cerrado a un tema particular que es muy poco probable encontrar más de un significado para sus términos. Esto quiere decir que no es para nada habitual evidenciar términos equivalentes, por lo que cada palabra siempre suele significar lo mismo.
    
      #t1_4.titulo-segundo.color-acento-contenido
        .h4 1.4	Confidencialidad

      .row
        .col-md-6.mb-2
          .col-md-12
            p La información es un bien preciado para cualquier individuo, natural o jurídico, puesto que a través de ello se puede acceder a eventos pasados para prever situaciones futuras. Este material histórico puede ser considerado sensible según las particularidades del mismo; por ejemplo, la dirección de residencia de una persona, su teléfono personal o los datos de sus cuentas bancarias son datos que no pueden ser publicados a un amplio grupo de terceros, debido a las consecuencias que ello puede traer.
          .col-md-12
            p.colorg La Constitución Política de 1991 ya consideró este tipo de eventos, por lo que en su Artículo 15 reguló el derecho a la intimidad de las personas, así:
          .col-md-12.bgrtext1_4.p-4
              span.colorg ARTÍCULO 15. 
              span Constitución Política. Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
        .col-md-6.mb-2
          figure
            img(src='@/assets/curso/tema1/img_1_4.png', alt='img_1_4')  
      .row
        .col-md-5.mb-2
          figure
            img(src='@/assets/curso/tema1/img1_4_2.png', alt='img1_4_2')
        .col-md-7
          .col-md-12
            p En la recolección, tratamiento y circulación de datos, se respetarán la libertad y demás garantías consagradas en la Constitución.
          .row
            .col-md-3.d-none.d-lg-block.col-lg-3
              figure
                img(src='@/assets/curso/tema1/ico_raya.svg', alt='ico_raya')
            .col-md-9
              p La correspondencia y demás formas de comunicación privada son inviolables. Solo pueden ser interceptadas o registradas mediante orden judicial, en los casos y con las formalidades que establezca la ley.
          .col-md-12
            p Para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado, 
             span.colorg podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley.
          .col-md-12
            p La información tiene muchas presentaciones y la carta magna aborda algunas de las más comunes y personales, como la correspondencia o medios de comunicación privada, pero también incluye otras de uso más comercial, como los bancos de datos, que suelen ser administrados por entidades públicas o empresas de carácter privado. 
      .row
        .col-md-1.d-none.d-lg-block.col-lg-1.pt-2
          figure
            img(src='@/assets/curso/tema1/ico_raya_2.svg', alt='ico_raya')
        .col-md-11
          p La reglamentación a este derecho constitucional se encuentra en la Ley estatutaria 1266 de 2008, donde 
            span.colorb se establece el tratamiento de la información contenida en las bases de datos. 
            span El Artículo 1 de la ley en mención limita su alcance, así: 

      .row
        .col-md-7
          .col-12.bgrtext1_4.p-4
            span.colorg Artículo 1. 
            span Objeto. La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos, y los demás derechos, libertades y garantías constitucionales relacionadas con la recolección, tratamiento y circulación de datos personales a que se refiere el Artículo 15 de la Constitución Política, así como el derecho a la información establecido en el Artículo 20 de la Constitución Política, particularmente en relación con la información financiera y crediticia, comercial, de servicios y la proveniente de terceros países.
          .col-12.mt-4
            P Posteriormente, en su Artículo 6, se enlistan los derechos con los que cuentan los titulares de la información contenida en las bases de datos y sus fuentes de información; asimismo, el artículo siguiente presenta los deberes de los operadores, las fuentes y los usuarios a la hora del registro, mantenimiento y comunicación de la información recolectada.
          .col-12
            P Finalmente, la Ley 1581 de 2012, junto a su decreto reglamentario emitido el año posterior (Decreto 1377 de 2013), complementan la regulación de la información de las bases de datos, incluyendo aspectos clave como las autorizaciones del uso de la información consignada y la debida gestión que deben dar los operadores. 
              span.colorg Actualmente, es la Superintendencia de Industria y Comercio la encargada de ejercer la supervisión de estas prácticas por parte de los diferentes actores de la economía en Colombia. 
        .col-md-5
          figure
            img(src='@/assets/curso/tema1/img1_4_3.png', alt='img1_4_3')

      .row.mb-5
        .col-md-3
          p Si el aprendiz desea profundizar en estas políticas, se recomienda la lectura de la normativa relacionada previamente, a través de las siguientes fuentes:
        .col-md-3
          a.boton.bgrtext1_4_1.indicador__container.btn.btn-primary(:href="('https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=34488')"
            target="_blank"
            type="application/web"
            @mouseover="mostrarIndicador = false"
          )
            span.colorw Ley 1266 de 2008
              i.fas.fa-file-link
              .indicador--click(v-if="mostrarIndicador")
            span 
            figure
              img(src='@/assets/curso/tema1/ico_raya.svg', alt='ico_raya')

        .col-md-3
          a.boton.bgrtext1_4.indicador__container.btn.btn-primary(:href="('http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html')"
            target="_blank"
            type="application/web"
            @mouseover="mostrarIndicador = false"
          )
            span Ley 1581 de 2012 
              i.fas.fa-file-link
              .indicador--click(v-if="mostrarIndicador")
            span 
            figure
              img(src='@/assets/curso/tema1/ico_raya.svg', alt='ico_raya')
          
        .col-md-3
          a.boton.bgrtext1_4_1.indicador__container.btn.btn-primary(:href="('http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081')"
            target="_blank"
            type="application/web"
            @mouseover="mostrarIndicador = false"
          )
            span.colorw Decreto 1377 de 2013  
              i.fas.fa-file-link
              .indicador--click(v-if="mostrarIndicador")
            span 
            figure
              img(src='@/assets/curso/tema1/ico_raya.svg', alt='ico_raya')
      

      #t1_5.titulo-segundo.color-acento-contenido
        .h4 1.5	Fuentes
      p.mb-3 Una fuente es el origen de los datos, de donde proviene la información. Según su procedencia, pueden clasificarse así:

      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          .row
            .col-md-2
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img1_5.svg', alt='Texto que describa la imagen')


        .tarjeta.color-acento-botones.p-3(x="43.5%" y="17%" numero="+")
          .h5.mb-2 Fuentes primarias: 
          p provienen de un trabajo intelectual original, donde su autor observó los hechos y los registró, sin soportarse en el trabajo de otros. Son considerados los datos más confiables, puesto que no sufren ningún tipo de transformación o adaptación y, por lo tanto, transmiten las ideas de la forma más fidedigna a la voluntad del autor. Ejemplos de estas fuentes son las encuestas, cuestionarios, libros o fotografías.

        .tarjeta.color-acento-botones.p-3(x="43.5%" y="81%" numero="+")
          .h5.mb-2 Fuentes secundarias:  
          p surgen de las fuentes primarias, es decir, se nutren de contenido ya registrado y recopilado, sometiéndolo a transformaciones o adaptaciones, para facilitar el proceso de transmisión o para complementar el trabajo realizado por el autor original. Ejemplos de este tipo de fuentes son los resúmenes, traducciones, reseñas o adaptaciones de contenido original. Usualmente, no son utilizadas en investigaciones, puesto que en el proceso de transformación pueden omitirse datos relevantes. 
           
             
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
