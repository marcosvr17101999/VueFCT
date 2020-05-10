<template>
  <div class="formulario2 row pb-3 mb-3">
    <div class="col-12 row justify-content-center"> <button class="btn col-2" @click="downloadWithCSS">Descarga</button></div>
   
    <div class="canvas1 row col-12">
    <div id="canvas" ref="content" class="pt-5">
      <div class="iconos row">
        <div class="iconoCastilla col-2">
          <img src="../assets/logjunta.jpg" class="img-fluid" />
        </div>
        <div class="titulo col-8">
          <b>
            <u>
              CONSEJERIA DE EDUCACIÓN, CULTURA Y DEPORTES
              <br />DIRECCIÓN GENERAL DE ORGANIZACIÓN,CALIDAD EDUCATICA Y FORMACIÓN PROFESIONAL
            </u>
          </b>
        </div>
        <div class="iconoEU col-2">
          <img src="../assets/eu.png" class="img-fluid" />
        </div>
      </div>
      <div class="relacionAlumnos row">
        <div class=" col-12 row mx-0">
          <div class="col-12 ">
            <div id="formacion">
              <u>FORMACIÓN EN CENTROS DE TRABAJO</u>
            </div>
          </div>
          <div class="col-12 ">
            <div id="hoja">
              HOJA SEMANAL DEL ALUMNO
            </div>
          </div>
          <table id="tablatop">
            <tr>
              <td id="td" class="xc">
                CENTRO DOCENTE: {{centros[0].nombre}} CÓDIGO: 45003875
                <br />
                <br />ALUMNO: {{usuarios[0].nombre}} {{usuarios[0].apellidos}}
                <br />
                <br />PROFESOR – TUTOR: SEBASTIÁN RUBIO VALERO
              </td>
              <td id="td">
                CENTRO DE TRABAJO: {{empresa[0].nombre}}
                <br />
                <br />RESPONSABLE DE LA F.C.T.: {{empresa[0].tutores[0].nombreTutor}}
                <br />
                <br />ÁREA O DPTO. DEL CENTRO DE TRABAJO: 
              </td>
              <td id="td" class="anex"><br><br>ANEXO III</td>
            </tr>
            <tr>
              <td id="td">FAMILIA PROFESIONAL:{{centros[0].ciclos[0].familiaProfesional}}</td>
              <td id="td" colspan="2">PERIODO:</td>
            </tr>
            <tr>
              <td id="td">CICLO FORMATIVO, PCPI U OTRAS ENSEÑ.:{{centros[0].ciclos[0].denominacion}}</td>
              <td id="td" colspan="2">HORAS:{{centros[0].ciclos[0].horaPracticas}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="tablaJor mt-4">
        <table class="tablabajo">
          <tr>
            <td class="ptabla"></td>
            <td id="td" class="stabla">ACTIVIDADES DESARROLLADAS</td>
            <td id="td" class="ttabla">TIEMPO EMPLEADO</td>
            <td id="td" class="ctabla">OBSERVACIONES</td>
          </tr>
          <tr>
            <td id="td" >
              1ª
              JORNADA
            </td>
            <td id="td"></td>
            <td id="td"></td>
            <td id="td"></td>
          </tr>
          <tr>
            <td id="td" >
              2ª
              JORNADA
            </td>
            <td id="td"></td>
            <td id="td"></td>
            <td id="td"></td>
          </tr>
          <tr>
            <td id="td" >
              3ª
              JORNADA
            </td>
            <td id="td"></td>
            <td id="td"></td>
            <td id="td"></td>
          </tr>
          <tr>
            <td id="td">
              4ª
              JORNADA
            </td>
            <td id="td"></td>
            <td id="td"></td>
            <td id="td"></td>
          </tr>
          <tr>
            <td id="td">
              5ª
              JORNADA
            </td>
            <td id="td"></td>
            <td id="td"></td>
            <td id="td"></td>
          </tr>
        </table>
      </div>
      <div class="abajo row">
        <div class="col-4">FIRMA DEL ALUMNO</div>
        <div class="col-4">
          Vº Bº EL RESPONSABLE
          <br />DEL CENTRO DE TRABAJO
        </div>
        <div class="col-4">Vº Bº PROFESOR-TUTOR</div>
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
  name: "Formulario2",
  props: {
    msg: String
  },
  computed: {
    ...mapState(['usuarios','centros','ma','empresa']),
  },
  methods: {
    downloadWithCSS() {
      html2canvas(document.querySelector("#canvas")).then(canvas => {
        const imgData = canvas.toDataURL("image/jpeg","image/jpeg");
        const pdf = new jsPDF();

        var width = pdf.internal.pageSize.getWidth() / 1.1;
        var height = pdf.internal.pageSize.getHeight() / 1.1;

        pdf.addImage(imgData, "jpeg", 7, 10, width, height);
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

<style >

.btn{
  color:#AB42B3;
}
#hoja{
  font-size: 12px;
}
#formacion{
  font-size: 11px;
}
.xc{
  width: 50%;
  
}
#tr {
  vertical-align: top;
  border: 1px solid black;
   border-spacing: 0;
}
#td {
  vertical-align: top;
  border: 1px solid black;
 
}
#tablatop{
  font-size: 8px;
  text-align: left;
  table-layout: fixed;
    width: 100%;
}
.abajo {
  font-size: 10px;
}
.canvas1{
  background-color: white;
  color: black;
 border: 1px solid black;
  justify-content: center;
}
#canvas {
  padding-right: 15px;
  padding: 10px;
  height: 842px;
  width: 595px;

}
.anex {
  text-align: center;
}
.titulo {
  font-size: 8px;
}
.letr {
  font-size: 6px;
  text-align: left;
}
button {
  width: 150px;
}
.forma {
  width: 100%;
}
.anex{
  text-align: center;
  
}
.tablabajo{
  font-size: 11px;
  width: 100%;
  table-layout: fixed;
}
.ptabla{
  width: 17%;
}
.stabla{
  width: 38%;
}
.ttabla{
  width: 20%;
}
.ctabla{
  width: 25%;
}
.formulario2{
  justify-content: center;
}
</style>