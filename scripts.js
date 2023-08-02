const btnGenerate = document.querySelector('#generate-pdf');

btnGenerate.addEventListener('click', () => {
  // conteúdo do PDF
  const content = document.querySelector('#content')

  // Configuração do arquivo final de PDF
  const options = {
    filename: "CV_Yuri_Tokio.pdf",
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
  }

  // Gerar e baixar o PDF
  html2pdf().set(options).from(content).save();

})
