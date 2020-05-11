<template>
  <div class="formulario3 row pb-3 mb-3 justify-content-center">
    <div class="col-12 row justify-content-center">
      <button class="btn col-2" @click="downloadWithCSS">Descarga</button>
    </div>

    <div class="canvas1 row col-8">
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
        <div class="fichaEstadistica">
          <div class="col-12 row justify-content-center">
            <div class="col-3 border">Anexo III</div>
          </div>
          <div class="col-12 border row px-0 mx-0">
            <table>
              <tr>
                <td colspan="13" class="border">
                  FICHA ESTADÍSTICA SEMESTRAL DE SEGUIMIENTO E INSERCIÓN LABORAL<br>
                  CORRESPONDIENTE AL 1º SEMESTRE DE 2019 A FECHA 20-12-2019<br>
                  (situación en la que se encuentra el alumnado una vez transcurridos los primeros seis meses desde la finalización de sus estudios y la obtención del título profesional)
                </td>
              </tr>
              <tr>
                <td colspan="13" class="border">NOMBRE DEL CENTRO EDUCATIVO Y LOCALIDAD:</td>
              </tr>
              <tr>
                <td colspan="1" class="border">
                  FAMILIA PROFESIONAL
                  (siglas)
                </td>
                <td colspan="1" class="border">
                  CICLO FORMATIVO
                  (F.P.B. – G.M. – G.S. nombre completo)
                </td>
                <td colspan="1" class="border">
                  ALUMNADO MATRICULADO
                  EN EL CURSO
                  (todos/as)
                </td>
                <td colspan="1" class="border">
                  ALUMNADO QUE HA REALIZADO LA F.C.T.
                  (en este semestre)
                </td>
                <td colspan="3" class="row p-0 m-0">
                  <div
                    class="col-12 border p-0 m-0"
                    style="height:72px"
                  >ALUMNADO QUE HA CONTINUADO ESTUDIOS</div>
                  <div class="col-4 border p-0 m-0" style="height:72px">F.P</div>
                  <div class="col-4 border p-0 m-0">UNIV.</div>
                  <div class="col-4 border p-0 m-0">OTROS</div>
                </td>
                <td colspan="1" class="border p-0 m-0">ALUMNADO QUE NO HA ENCONTRADO TRABAJO</td>
                <td colspan="4" class="row p-0 m-0">
                  <div
                    class="col-12 border p-0 m-0"
                    style="height:72px"
                  >ALUMNADO QUE SI HA ENCONTRADO TRABAJO</div>
                  <div class="col-3 border p-0 m-0" style="height:72px">EN LA MISMA EMPRESA</div>
                  <div class="col-3 border p-0 m-0">EN OTRA EMPRESA</div>
                  <div class="col-6 row p-0 m-0">
                    <div class="col-12 p-0 m-0" style="height:36px">TIPO DE CONTRATO</div>
                    <div class="col-6 border p-0 m-0" style="height:36px">FIJO</div>
                    <div class="col-6 border p-0 m-0" style="height:36px">OTRO</div>
                  </div>
                </td>
                <td colspan="1" class="border">ALUMNADO QUE NO HA CONTESTADO A LA ENCUESTA</td>
              </tr>

              <tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr>
              <tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr><tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr><tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr><tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr>
              <tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr>
              <tr>
                <td class="tm border">DAW</td>
                <td class="tm border">DISEÑO DE APLICACIONES WEB</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr>

              <tr>
                <td class="tm border" colspan="2">TOTALES:</td>
                <td class="tm border">22</td>
                <td class="tm border">20</td>
                <td class="row p-0 m-0">
                  <div class="col-4 border p-0 m-0 tm">3</div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                  <div class="col-4 border p-0 m-0 tm"></div>
                </td>
                <td class="tm border">4</td>
                <td class="tm row p-0 m-0">
                  <div class="col-3 border p-0 m-0 tm">7</div>
                  <div class="col-3 border p-0 m-0 tm">6</div>
                  <div class="col-3 border p-0 m-0 tm"></div>
                  <div class="col-3 border p-0 m-0 tm">X</div>
                </td>
                <td class="tm border">3</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="canvas1 row col-8">
      <div id="canvas2" ref="content" class="pt-5 row">
     
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
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "Formulario3",
  props: {
    msg: String
  },
  methods: {
    downloadWithCSS() {
       const pdf = new jsPDF();
      html2canvas(document.getElementById("canvas")).then(canvas => {
        const imgData = canvas.toDataURL("image/png", 0.5);
       

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth() / 1.2;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width / 1;
        
        pdf.addImage(imgData, "PNG", 20, 20, pdfWidth, pdfHeight);
        pdf.addPage();
      
      });
      html2canvas(document.getElementById("canvas2")).then(canvas => {
        const imgData = canvas.toDataURL("image/png", 0.5);
       

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth() / 1.2;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width / 1;
        
        pdf.addImage(imgData, "PNG", 20, 20, pdfWidth, pdfHeight);
     
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
.tm {
  height: 22px;
}
.formulario3 {
  font-size: 6px;
}
.a {
  font-size: 7px;
}
.canvas1 {
  background-color: white;
  color: black;
  border: 1px solid black;
  justify-content: center;
}
#canvas2 {
   padding-right: 15px;
  padding: 10px;
  height: 842px;
  width: 595px;
}
#canvas {
  padding-right: 15px;
  padding: 10px;
  height: 842px;
  width: 595px;
}
button {
  width: 150px;
}
.izq {
  font-size: 12px;
  text-align: left;
}
.fonttabla {
  font-size: 10px;
}
.titulo {
  font-size: 8px;
}
</style>