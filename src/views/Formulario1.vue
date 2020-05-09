<template>
  <div class="formulario row pb-3 mb-3 ">
   <div class="col-12 row justify-content-center"><button class="btn col-2" @click="downloadWithCSS">Descarga</button></div>
   
    <div class="canvas1 row col-12">
    <div id="canvas" ref="content" class="pt-5">
      <div class="iconos m-0 row">
        <div class="iconoCastilla col-2">
          <img src="../assets/logjunta.jpg" class="img-fluid" />
        </div>
        <div class="titulo col-8">
         <b> <u>
            CONSEJERIA DE EDUCACIÓN, CULTURA Y DEPORTES <br>DIRECCIÓN GENERAL DE ORGANIZACIÓN,CALIDAD EDUCATICA Y FORMACIÓN PROFESIONAL
          </u></b>
        </div>
        <div class="iconoEU col-2">
          <img src="../assets/eu.png" class="img-fluid" />
        </div>
      </div>
      <div class="relacionAlumnos m-0 row">
        <div class="col-12 rela">
          <h7>
            CONVENIO CENTRO DOCENTE-EMPRESA PARA EL DESARROLLO DE LA
            <br />FORMACIÓN EN CENTROS DE TRABAJO
          </h7>
        </div>
        <div class="vacio col-12 row">
          <div class="col-3"></div>
          <div class="col-6 rela">
            <div><u>RELACIÓN DE ALUMNOS</u>(*)</div>
          </div>
          <div class="col-3 ">
            <div class="borde">Anexo I</div>
          </div>
        </div>
        <div class="col-12 bordes fuente">
          Relación de alumnos acogidos al CONVENIO específico número 088/18 suscrito con fecha 12 de Marzo de 2018
          entre el Centro educativo I.E.S Azarquiel y la empresa Toledo software distribución, que realizarán Formación
          en Centros de Trabajo (F.C.T.) durante el período abajo indicado.
        </div>
      </div>
      <div class="tablaDatos m-0">
        <div class="cicl">CICLO FORMATIVO DESARROLLO DE APLICACIONES WEB Curso académico 2019/20</div>
        <table>
          <tr id="tr1" class="topTabla">
            <td id="td1">APELLIDOS Y NOMBRE</td>
            <td id="td1">DNI</td>
            <td id="td1">HORARIO DIARIO</td>
            <td id="td1">NÚMERO HORAS</td>
            <td id="td1">FECHA DE COMIENZO</td>
            <td id="td1">FECHA DE FINALIZACION</td>
          </tr>
          <tr v-for="(user,index) in usuarios" v-bind:key="index">
           <td id="td1">{{user.nombre+" "+user.apellidos}}</td>
           <td id="td1">{{user.nif}}</td>
           <td id="td1">9:00-18:30</td>
           <td id="td1">{{centros[0].ciclos[0].horaPracticas}}</td>
            <td id="td1">7/10/2019</td>
            <td id="td1">10/01/2020</td>
       
          </tr>
            
        </table>
      </div>
      <div class="firma m-0 row">
     
        <div
          class="conv"
        >En cumplimiento de la Cláusula Cuarta del CONVENIO específico de colaboración, se procede a designar al Profesor-Tutor del Centro docente, que será D. SEBASTIÁN RUBIO VALERO, y al responsable de la Empresa o Entidad, que será D. JUAN JOSÉ GONZALEZ DE TORRES.</div>
        <div class="cuadroFirma col-12 m-0 row">
          <div class="col-12">En Toledo a 4 de Octubre 2019</div>
          <div class="col-4 mb-5">El Director del Centro Docente</div>
          <div class="col-4"></div>
          <div class="col-4 mb-5">El Representante del Centro de Trabajo</div>
          <div class="col-4 my-3">Fdo.: JESÚS GARCÍA NOVILLO</div>
          <div class="col-4"></div>
          <div class="col-4 my-3">Fdo.: JUAN JOSÉ GONZALEZ DE TORRES</div>
        </div>
        <div class="letra">(*) Se realizará una para cada Ciclo Formativo o Especialidad</div>
      </div>
    </div>
    </div>
     
  </div>
</template>

<script>

import { mapState } from 'vuex'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "Formulario",
  props: {
    msg: String
  },
  computed: {
    ...mapState(['usuarios','centros','ma']),
  },
  methods: {
    downloadWithCSS() {
      html2canvas(document.getElementById("canvas")).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        var width = pdf.internal.pageSize.getWidth() / 1.2;
        var height = pdf.internal.pageSize.getHeight() / 1.2;

        pdf.addImage(imgData, "PNG", 5, 10, width, height);
        pdf.save("download.pdf");
      });
    },
    download() {
      const doc = new jsPDF();
      /** WITHOUT CSS */
      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {});
      doc.save("sample.pdf");
    }
  }
};
</script>

<style>
#canvas {
  padding-right: 15px;
  padding: 10px;
  height: 842px;
  width: 595px;
}
.canvas1{
  background-color: white;
  color: black;
 border: 1px solid black;
  justify-content: center;
}
.topTabla {
  background-color: rgb(228, 228, 228);
}
.vacio {
  height: 50px;
  justify-content: center;
}
.cicl {
  text-align: left;
  font-size: 13px;
}
.rela{
  font-size: 11px;
  color: rgb(146, 145, 142);
}
.titulo {
  font-size: 8px;
}

.bordes {
  border: 1px solid black;

}
.fuente{
    font-size: 11px;
  text-align: left;
}
.borde {
  border: 1px solid black;
  font-size: 11px;
}
button {
  width: 150px;
}
table {
  font-size: 12px;
}
.conv {
  font-size: 12px;
  text-align: left;
}
#tr1 {
  vertical-align: top;
  border: 1px solid black;
   border-spacing: 0;
}
#td1 {
  vertical-align: top;
  border: 1px solid black;
  width: 200px;
}
.cuadroFirma {
  font-size: 13px;
  border: 3px double black;
}
.letra {
  text-align: left;
  font-size: 9px;
}
.formulario{
  justify-content: center;
}
</style>