import {useRef} from 'react'
const PdfViewer = () => {
    const pdfRef= useRef()
    const inRef= useRef()
    const viewPdf =()=>{
        //api call
    }
    return (
        <div className="pdf_container">
            <div className="pdf_submit">
            <input ref={inRef}  type="file" id="test" name="test" accept=".pdf,.doc"/>
            <button onClick={viewPdf}>View Pdf</button>
            </div>
            <embed
                ref={pdfRef}
                src="file:///C:/Users/user/Downloads/DS_CLass_TEST.pdf"
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                width="100%"
                height="93%"
            ></embed>
        </div>

    );
}

export default PdfViewer;