import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import demoFile from "./MyCV.pdf";
const textcolor = {
  one: { color: "#F57C00" },
  two: { color: "#FFB74D" },
};
function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <section className="bg-white mt-2 p-2">
      <div className="section-title">
        <h2 className="fw-bold text-uppercase">
          <strong style={textcolor.one}>Resume</strong>
        </h2>
      </div>
      <div className="container-md">
        <Worker
          className="card"
          workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js"
        >
          <div className="container-sm" style={{ height: "720px" }}>
            <Viewer
              fileUrl={demoFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </div>
    </section>
  );
}

export default Resume;
