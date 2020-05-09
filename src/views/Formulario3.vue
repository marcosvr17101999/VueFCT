<template>
  <div class="formulario3"  id="canvas" ref="content">
      <a href="">Primer Enlace</a><br>
      <a href="">Segundo Enlace</a><br>
      <a href="">Tercer Enlace</a><br>
      Formulario3
      <table>
          <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    <td>Celda 3</td>
  </tr>

      </table>
      <button @click="downloadWithCSS">Download</button>
    <br>
    <br>
    <button @click="download">Descarga</button>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
export default {
  name: "Formulario3",
  props: {
    msg: String
  },
  methods: {
    downloadWithCSS() {
       
     
      html2canvas(document.getElementById('canvas'))
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png',0.5);
        const pdf = new jsPDF();

        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = (pdf.internal.pageSize.getWidth())/1.2;
        const pdfHeight = ((imgProps.height * pdfWidth) / imgProps.width)/1;
        pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
        
      
      });
      
     
    },
    download() {
      const doc = new jsPDF();
      /** WITHOUT CSS */
      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
          
        });
      doc.save("sample.pdf");
    }
  }
};
</script>

<style>
.formulario3{
    background-color: burlywood;
    
}
button{
    width: 150px;
}
</style>