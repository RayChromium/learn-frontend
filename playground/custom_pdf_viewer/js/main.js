const url = './docs/CV-Cai-Rui.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
      canvas = document.querySelector('#pdf-render'),
      ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {

}

// Get the document
pdfjsLib.getDocument(url).promise.then( pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);
} );