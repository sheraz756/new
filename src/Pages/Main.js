import "./main.css";
import "../index.css";
import React, { useState, useRef ,useEffect} from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import axios from 'axios'
const Main = ({ click,pdfDoc }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const fileInputRef = useRef();
//
const [loading, setLoading] = useState(false)

const [answer, setAnswer] = useState('');
const [userQuestion, setUserQuestion] = useState('');

const formData = new FormData();
formData.append('pdfDoc', pdfDoc);
formData.append('userQuestion', userQuestion);
const handleSend = async ()=>{
  try {
    setUserQuestion('');
    setLoading(true); // Show loading indicator while waiting for a response

    const response = await axios.post('http://34.229.38.34:5000/api/pdf/getResult', formData);
    setAnswer(response.data.chat_history);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false); // Hide loading indicator
  }
}
  // Declare an array of valid file types
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSend();
      }
    }

    // Attach the event listener to the document
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  }, []);

  return (
    <div class="sc-2d29d064-0 fosaaz">
      <div class="sc-2d29d064-1 aTnAc">
        <div class="sc-2d29d064-2 qwKcP">
          <div
            class="rpv-core__viewer rpv-core__viewer--light"
            data-testid="core__viewer"
            style={{ height: "100%", width: "100%" }}
          >
            <div
              class="rpv-core__inner-container"
              data-testid="core__inner-container"
              style={{ height: "100%" }}
            >
              <div class="rpv-default-layout__container">
                <div
                  data-testid="default-layout__main"
                  class="rpv-default-layout__main"
                >
                  <div
                    data-testid="default-layout__sidebar"
                    class="rpv-default-layout__sidebar rpv-default-layout__sidebar--ltr"
                  >
                    <div class="rpv-default-layout__sidebar-tabs">
                      <div
                        class="rpv-default-layout__sidebar-headers"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <div
                          aria-controls="rpv-default-layout__sidebar-content"
                          aria-selected="true"
                          class="rpv-default-layout__sidebar-header"
                          id="rpv-default-layout__sidebar-tab-0"
                          role="tab"
                        >
                          <div aria-describedby="rpv-core__tooltip-body-default-layout-sidebar-tab-0">
                            <button
                              aria-label="Thumbnail"
                              class="rpv-core__minimal-button rpv-core__minimal-button--selected"
                              type="button"
                            >
                              <svg
                                aria-hidden="true"
                                class="rpv-core__icon"
                                focusable="false"
                                height="16px"
                                viewBox="0 0 24 24"
                                width="16px"
                              >
                                <path
                                  d="M10.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z
            M23.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z
            M10.5,22.5 c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z
            M23.5,22.5c0,0.552-0.448,1-1,1 h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div
                          aria-controls="rpv-default-layout__sidebar-content"
                          aria-selected="false"
                          class="rpv-default-layout__sidebar-header"
                          id="rpv-default-layout__sidebar-tab-1"
                          role="tab"
                        >
                          <div aria-describedby="rpv-core__tooltip-body-default-layout-sidebar-tab-1">
                            <button
                              aria-label="Bookmark"
                              class="rpv-core__minimal-button"
                              type="button"
                            >
                              <svg
                                aria-hidden="true"
                                class="rpv-core__icon"
                                focusable="false"
                                height="16px"
                                viewBox="0 0 24 24"
                                width="16px"
                              >
                                <path
                                  d="M11.5,1.5h11c0.552,0,1,0.448,1,1v20c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h3
            M11.5,10.5c0,0.55-0.3,0.661-0.659,0.248L8,7.5l-2.844,3.246c-0.363,0.414-0.659,0.3-0.659-0.247v-9c0-0.552,0.448-1,1-1h5
            c0.552,0,1,0.448,1,1L11.5,10.5z
            M14.5,6.499h6
            M14.5,10.499h6 M3.5,14.499h17
            M3.5,18.499h16.497"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div
                          aria-controls="rpv-default-layout__sidebar-content"
                          aria-selected="false"
                          class="rpv-default-layout__sidebar-header"
                          id="rpv-default-layout__sidebar-tab-2"
                          role="tab"
                        >
                          <div aria-describedby="rpv-core__tooltip-body-default-layout-sidebar-tab-2">
                            <button
                              aria-label="Attachment"
                              class="rpv-core__minimal-button"
                              type="button"
                            >
                              <svg
                                aria-hidden="true"
                                class="rpv-core__icon"
                                focusable="false"
                                height="16px"
                                viewBox="0 0 24 24"
                                width="16px"
                              >
                                <path
                                  d="M7.618,15.345l8.666-8.666c0.78-0.812,2.071-0.838,2.883-0.058s0.838,2.071,0.058,2.883
            c-0.019,0.02-0.038,0.039-0.058,0.058L7.461,21.305c-1.593,1.593-4.175,1.592-5.767,0s-1.592-4.175,0-5.767c0,0,0,0,0,0
            L13.928,3.305c2.189-2.19,5.739-2.19,7.929-0.001s2.19,5.739,0,7.929l0,0L13.192,19.9"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-labelledby="rpv-default-layout__sidebar-tab-0"
                        id="rpv-default-layout__sidebar-content"
                        class="rpv-default-layout__sidebar-content rpv-default-layout__sidebar-content--ltr"
                        role="tabpanel"
                        tabindex="-1"
                      >
                        <div
                          class="rpv-thumbnail__list-container"
                          data-testid="thumbnail__list-container"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rpv-default-layout__body"
                    data-testid="default-layout__body"
                  >
                    <div class="rpv-default-layout__toolbar">
                      <div
                        data-testid="toolbar"
                        class="rpv-toolbar"
                        role="toolbar"
                        aria-orientation="horizontal"
                      >
                        <div class="rpv-toolbar__left">
                          <div class="rpv-toolbar__item">
                            <div
                              aria-expanded="false"
                              aria-haspopup="dialog"
                              aria-controls="rpv-core__popver-body-search"
                            >
                              <div aria-describedby="rpv-core__tooltip-body-search-popover">
                                <button
                                  aria-label="Search"
                                  aria-keyshortcuts="Ctrl+F"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="search__popover-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path
                                      d="M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z
            M23.5,23.5
            l-5.929-5.929"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-small">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-page-navigation-previous">
                                <button
                                  aria-label="Previous page"
                                  aria-disabled="true"
                                  class="rpv-core__minimal-button rpv-core__minimal-button--disabled"
                                  type="button"
                                  data-testid="page-navigation__previous-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path
                                      d="M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8
            L0.535,18.373"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-toolbar__item">
                            <span class="rpv-page-navigation__current-page-input">
                              <input
                                type="text"
                                data-testid="page-navigation__current-page-input"
                                aria-label="Enter a page number"
                                class="rpv-core__textbox"
                                placeholder=""
                                value="1"
                              />
                            </span>
                            <span class="rpv-toolbar__label">/ 9</span>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-small">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-page-navigation-next">
                                <button
                                  aria-label="Next page"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="page-navigation__next-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path
                                      d="M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043
            L23.541,5.627"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="rpv-toolbar__center">
                          <div class="rpv-toolbar__item">
                            <div aria-describedby="rpv-core__tooltip-body-zoom-out">
                              <button
                                aria-label="Zoom out"
                                aria-keyshortcuts="Ctrl+-"
                                class="rpv-core__minimal-button"
                                type="button"
                                data-testid="zoom__out-button"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="rpv-core__icon"
                                  focusable="false"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  width="16px"
                                >
                                  <path
                                    d="M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z
            M23.5,23.499
            l-5.929-5.929
            M5.5,10.499h10"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-small">
                            <div class="rpv-toolbar__item">
                              <div
                                aria-expanded="false"
                                aria-haspopup="menu"
                                aria-controls="rpv-core__popver-body-zoom"
                              >
                                <button
                                  aria-label="Zoom document"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="zoom__popover-target"
                                >
                                  <span class="rpv-zoom__popover-target">
                                    <span
                                      data-testid="zoom__popover-target-scale"
                                      class="rpv-zoom__popover-target-scale rpv-zoom__popover-target-scale--ltr"
                                    >
                                      98%
                                    </span>
                                    <span class="rpv-zoom__popover-target-arrow"></span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-toolbar__item">
                            <div aria-describedby="rpv-core__tooltip-body-zoom-in">
                              <button
                                aria-label="Zoom in"
                                aria-keyshortcuts="Ctrl+="
                                class="rpv-core__minimal-button"
                                type="button"
                                data-testid="zoom__in-button"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="rpv-core__icon"
                                  focusable="false"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  width="16px"
                                >
                                  <path d="M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z M23.5,23.499 l-5.929-5.929 M5.5,10.499h10 M10.5,5.499v10"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="rpv-toolbar__right">
                          <div class="rpv-core__display--hidden rpv-core__display--block-medium">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-theme-switch">
                                <button
                                  aria-label="Switch to the dark theme"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="theme__switch-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path d="M19.5,15.106l2.4-2.4a1,1,0,0,0,0-1.414l-2.4-2.4V5.5a1,1,0,0,0-1-1H15.106l-2.4-2.4a1,1,0,0,0-1.414,0l-2.4,2.4H5.5a1,1,0,0,0-1,1V8.894l-2.4,2.4a1,1,0,0,0,0,1.414l2.4,2.4V18.5a1,1,0,0,0,1,1H8.894l2.4,2.4a1,1,0,0,0,1.414,0l2.4-2.4H18.5a1,1,0,0,0,1-1Z"></path>
                                    <path d="M10,6.349a6,6,0,0,1,0,11.3,6,6,0,1,0,0-11.3Z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-medium">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-full-screen-enter">
                                <button
                                  aria-label="Full screen"
                                  aria-keyshortcuts="F11"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="full-screen__enter-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path d="M0.5 12L23.5 12"></path>
                                    <path d="M11.5 1L11.5 23"></path>
                                    <path d="M8.5 4L11.5 1 14.5 4"></path>
                                    <path d="M20.5 9L23.5 12 20.5 15"></path>
                                    <path d="M3.5 15L0.5 12 3.5 9"></path>
                                    <path d="M14.5 20L11.5 23 8.5 20"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-medium">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-open">
                                <div class="rpv-open__input-wrapper">
                                  <input
                                    accept=".pdf"
                                    class="rpv-open__input"
                                    tabindex="-1"
                                    title=""
                                    type="file"
                                  />
                                  <button
                                    aria-label="Open file"
                                    aria-keyshortcuts="Ctrl+O"
                                    class="rpv-core__minimal-button"
                                    type="button"
                                    data-testid="open__button"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      class="rpv-core__icon"
                                      focusable="false"
                                      height="16px"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                    >
                                      <path d="M18.5,7.5c.275,0,.341-.159.146-.354L12.354.854a.5.5,0,0,0-.708,0L5.354,7.147c-.2.195-.129.354.146.354h3v10a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V7.5Z"></path>
                                      <path d="M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-medium">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-get-file">
                                <button
                                  aria-label="Download"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="get-file__download-button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path d="M5.5,11.5c-.275,0-.341.159-.146.354l6.292,6.293a.5.5,0,0,0,.709,0l6.311-6.275c.2-.193.13-.353-.145-.355L15.5,11.5V1.5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V11a.5.5,0,0,1-.5.5Z"></path>
                                    <path d="M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-core__display--hidden rpv-core__display--block-medium">
                            <div class="rpv-toolbar__item">
                              <div aria-describedby="rpv-core__tooltip-body-print">
                                <button
                                  aria-label="Print"
                                  aria-keyshortcuts="Ctrl+P"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="print__button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path
                                      d="M7.5,19.499h9 M7.5,16.499h9 M5.5,16.5h-3c-1.103-0.003-1.997-0.897-2-2v-6c0.003-1.103,0.897-1.997,2-2h19
            c1.103,0.003,1.997,0.897,2,2v6c-0.003,1.103-0.897,1.997-2,2h-3
            M5.5,4.5v-4h9.586c0.265,0,0.52,0.105,0.707,0.293l2.414,2.414
            C18.395,3.394,18.5,3.649,18.5,3.914V4.5
            M18.5,22.5c0,0.552-0.448,1-1,1h-11c-0.552,0-1-0.448-1-1v-9h13V22.5z
            M3.5,8.499
            c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S2.948,8.499,3.5,8.499z
            M14.5,0.499v4h4"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="rpv-toolbar__item">
                            <div
                              aria-expanded="false"
                              aria-haspopup="menu"
                              aria-controls="rpv-core__popver-body-toolbar-more-actions"
                            >
                              <div aria-describedby="rpv-core__tooltip-body-toolbar-more-actions">
                                <button
                                  aria-label="More actions"
                                  class="rpv-core__minimal-button"
                                  type="button"
                                  data-testid="toolbar__more-actions-popover-target"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="rpv-core__icon"
                                    focusable="false"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                  >
                                    <path
                                      d="M12,0.5c1.381,0,2.5,1.119,2.5,2.5S13.381,5.5,12,5.5S9.5,4.381,9.5,3S10.619,0.5,12,0.5z
            M12,9.5
            c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5S9.5,13.381,9.5,12S10.619,9.5,12,9.5z
            M12,18.5c1.381,0,2.5,1.119,2.5,2.5
            s-1.119,2.5-2.5,2.5S9.5,22.381,9.5,21S10.619,18.5,12,18.5z"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pdf-container">
                      {/* Hidden file input triggered by the "Upload" button */}
                      {/* <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept=".pdf"
                    onChange={handlePdfFileChange}
                />
                {/* "Upload" button */}
                      {/* <button onClick={handleFileUpload}>Upload PDF</button> */}
                      {/* Conditionally render the Viewer if a PDF has been uploaded */}
                      {click ? (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.8.335/build/pdf.worker.min.js">
                          <Viewer
                            fileUrl={click}
                            plugins={[defaultLayoutPlugin]}
                          />
                        </Worker>
                      ) : (
                        <>No PDF file selected</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sc-2d29d064-3 iSHeEa">
        <div class="sc-2d29d064-4 dzJrIW">
          <div class="sc-48885856-0 eBXUWS">
            <div class="sc-48885856-1 bNHsCv">
              <div class="sc-48885856-2 dRGiEj"></div>
            </div>
            <div class="sc-9a9bde15-0 kFDhPg">
            {loading ? (
          // Show a loading indicator while waiting for the response
          <div className="loader">Loading...</div>
        ) : (
          // Display the API response when it's available
          <div>{answer}</div>
        )}
              <div class="absolute z-10 bottom-28 left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-sm  max-w-[95%] w-full sm:max-w-xl transition-all duration-300 ease h-0 hidden">
                <div class="p-4 pb-4">
                  <h3 class="font-medium text-lg mb-2">
                    Don't know what to ask? Try these ↓
                  </h3>
                  <ul class="m-0 list-disc list-outside pl-4">
                    <li class="mb-2 last:mb-0 p-0">
                      <span class="border-b border-b-transparent cursor-pointer hover:border-b-gray-400 text-gray-700">
                        Give me a summary of this document
                      </span>
                    </li>
                    <li class="mb-2 last:mb-0 p-0">
                      <span class="border-b border-b-transparent cursor-pointer hover:border-b-gray-400 text-gray-700">
                        How does Bitcoin work?
                      </span>
                    </li>
                    <li class="mb-2 last:mb-0 p-0">
                      <span class="border-b border-b-transparent cursor-pointer hover:border-b-gray-400 text-gray-700">
                        What are nodes?
                      </span>
                    </li>
                    <li class="mb-2 last:mb-0 p-0">
                      <span class="border-b border-b-transparent cursor-pointer hover:border-b-gray-400 text-gray-700">
                        What is proof-of-work?
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="flex items-center gap-4 p-4 pt-0">
                  <button
                    class="hover:text-brand text-brand"
                    title="Question ideas"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 font-semibold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="hover:text-brand text-gray-500"
                    title="Prompt library"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="hover:text-brand text-gray-500"
                    title="Settings"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="sc-f44562c1-0 boSApP">
                <div class="sc-f44562c1-1 cseGOX" style={{ maxWidth: "500px" }}>
                  <h3 class="font-semibold">Delete chat history</h3>
                  <div class="mt-3 mb-5">
                    Are you sure you want to delete your current chat history?
                  </div>
                  <div class="flex justify-between py-0">
                    <button
                      type="button"
                      class="text-white bg-brand disabled:bg-brand/80  font-medium rounded px-3 py-2.5 text-center w-full mr-2 flex justify-center items-center gap-2"
                    >
                      Delete
                    </button>
                    <button class="text-black/70 bg-[#f8f5ee] font-medium rounded px-3 py-2.5 text-center w-full border border-[#e5e3da]">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center gap-2 px-3 py-6">
                <button class="hover:text-brand" title="Prompt library">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M246 152a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6ZM56 70h18v18a6 6 0 0 0 12 0V70h18a6 6 0 0 0 0-12H86V40a6 6 0 0 0-12 0v18H56a6 6 0 0 0 0 12Zm128 124h-10v-10a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12Zm33.9-115.41L78.58 217.9a14 14 0 0 1-19.8 0l-20.69-20.69a14 14 0 0 1 0-19.8L177.41 38.1a14 14 0 0 1 19.8 0l20.69 20.69a14 14 0 0 1 0 19.8ZM167.51 112L144 88.49L46.58 185.9a2 2 0 0 0 0 2.83l20.69 20.68a2 2 0 0 0 2.82 0Zm41.9-44.73l-20.68-20.68a2 2 0 0 0-2.83 0L152.48 80L176 103.52l33.41-33.42a2 2 0 0 0 0-2.83Z"
                    ></path>
                  </svg>
                </button>
                <div class="sc-9a9bde15-1 iXIQPd max-w-3xl w-full">
                  <div class="sc-9a9bde15-2 eCAAyv">
                    <div class="sc-9a9bde15-3 iXBIsm">
                      <div class="sc-9a9bde15-4 dWfbMw">
                        <div class="sc-9a9bde15-5 hWpABM">
                          
                          <textarea
                            tabindex="0"
                            value={userQuestion}
                            onChange={(e)=>{setUserQuestion(e.target.value)}}
                            placeholder="Enter your question (max 1,000 characters)"
                            rows="1"
                            class="sc-9a9bde15-6 bkaCrr"
                            style={{
                              resize: "none",
                              maxHeight: "200px",
                              overflow: "hidden",
                              height: "26px",
                              bottom: "26px",
                            }}
                          ></textarea>
                          <button disabled="" onClick={handleSend} class="sc-9a9bde15-7 bwdSuz">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="22" y1="2" x2="11" y2="13"></line>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
