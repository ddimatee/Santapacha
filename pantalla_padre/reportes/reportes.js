function regresar() {
  window.history.back();
}

function descargarPDF() {
  const element = document.getElementById('contenido-reporte');
  html2pdf().from(element).save('reporte_academico.pdf');
}

function descargarExcel() {
  const html = document.getElementById('contenido-reporte').outerHTML;
  const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'reporte_academico.xls';
  link.click();
}

function descargarWord() {
  const html = '<html><head><meta charset="utf-8"></head><body>' +
               document.getElementById('contenido-reporte').innerHTML +
               '</body></html>';
  const blob = new Blob([html], { type: 'application/msword' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'reporte_academico.doc';
  link.click();
}
