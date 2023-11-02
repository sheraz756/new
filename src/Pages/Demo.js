import React, { useRef, useState } from "react";
import "./demo.css";
import { Link } from "react-router-dom";
import Feature from "../components/Features/Feature";
import Main from "./Main";

const Demo = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [pdfDoc, setPdfDoc] = useState(null);

  const fileInputRef = useRef();

  // Declare an array of valid file types
  const fileType = ["application/pdf"];

  const handleFileUpload = async () => {
    fileInputRef.current.click(); // Trigger the hidden file input element
  };

  const [uploadedPdf, setUploadedPdf] = useState(null);
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    setPdfDoc(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUploadedPdf(url);
    }
    if (selectedFile) {
      // Check if the selected file type is valid
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select a valid PDF file");
      }
    } else {
      console.log("Select your file");
    }
  };

  return (
    <>
      <main>
        <div class="sc-67c87563-0 fQOOHf">
          <div class="sc-67c87563-1 bVtJuo">
            <div class="sc-67c87563-2 bsuEPg">
              <Link to='/' class="sc-67c87563-3 dQhaIx">
                
               
                
              
                <svg
                  viewBox="0 0 64 36"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-49c604f9-1 fSIuCc"
                >
                  <path
                    fill="black"
                    d="M41.3111 0H37.6444C30.3111 0 24.6889 4.15556 21.7556 9.28889C18.8222 3.91111 12.9556 0 5.86667 0H2.2C0.977781 0 0 0.977779 0 2.2V5.86667C0 16.1333 8.31111 24.2 18.3333 24.2H19.8V33C19.8 34.2222 20.7778 35.2 22 35.2C23.2222 35.2 24.2 34.2222 24.2 33V24.2H25.6667C35.6889 24.2 44 16.1333 44 5.86667V2.2C43.5111 0.977779 42.5333 0 41.3111 0ZM19.3111 19.5556H17.8444C10.2667 19.5556 4.15556 13.4444 4.15556 5.86667V4.4H5.62222C13.2 4.4 19.3111 10.5111 19.3111 18.0889V19.5556ZM39.1111 5.86667C39.1111 13.4444 33 19.5556 25.4222 19.5556H23.9556V18.0889C23.9556 10.5111 30.0667 4.4 37.6444 4.4H39.1111V5.86667Z"
                    class="sc-49c604f9-0 btsKug"
                  ></path>
                </svg>
                <span>SpotLight</span>
                </Link>
            </div>
            <div class="sc-67c87563-2 bsuEPg">
              <div style={{ display: "flex" }}>
                <div class="sc-67c87563-5 hRobpf">
                  {/* <input className="sc-7ff41d46-0 aEnZv" onClick={handleFileUpload} /> */}
                  {/* <input className="sc-7ff41d46-0 aEnZv" type="file" accept=".pdf" onChange={handlePdfFileChange} /> */}
                  {/* <span className="sc-7ff41d46-1 lbCzeA">
                            <svg color="#fff" className="sc-a8a76c9-0 fxXsFO" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z"></path>
                            </svg>
                        </span>
                        Upload */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf"
                    onChange={handlePdfFileChange}
                  />
                  {/* "Upload" button */}
                  <button
                    className="sc-7ff41d46-0 aEnZv"
                    onClick={handleFileUpload}
                  >
                    Upload PDF
                  </button>

                  {/* <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handlePdfFileChange}
                    /> */}
                </div>
                <a href="/" class="sc-67c87563-4 eaInef">
                  Go to homepage →
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Feature /> */}
        <Main click={uploadedPdf} pdfDoc={pdfDoc} />
      </main>
    </>
  );
};

export default Demo;
