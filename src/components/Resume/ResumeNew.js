import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/pavan_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); 

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages); // ✅ store total pages
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download resume
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess} // ✅ important
            className="d-flex flex-column align-items-center"
          >
            {/* ✅ render ALL pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={index}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                style={{ marginBottom: "20px" }}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;