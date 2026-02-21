import { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiChevronLeft, FiChevronRight, FiUpload } from "react-icons/fi";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).href;

export default function PDFViewer({
  project,
  isOwner = false,
  scrollable = false,
  height = 520,
  pageWidth = 500,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError(error.message);
    setIsLoading(false);
  };

  const goToPreviousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File to upload:", file.name);
      alert("PDF upload feature - connect to your backend service");
    }
  };

  if (!project.pdf) {
    return (
      <div className="rounded-lg border-2 border-dashed border-sage/30 bg-sage/5 p-8 text-center dark:border-sage/20 dark:bg-sage/5">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          No PDF uploaded yet
        </p>
        {isOwner && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-3 inline-flex items-center gap-2 rounded bg-sage text-white px-4 py-2 text-sm font-medium transition hover:bg-sage/90"
          >
            <FiUpload size={16} />
            Upload PDF
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    );
  }

  const pages = Array.from({ length: numPages || 0 }, (_, i) => i + 1);

  return (
    <div className="space-y-4">
      <div
        className="overflow-auto rounded-lg border border-sage/20 bg-slate-50 dark:border-sage/10 dark:bg-slate-800/50"
        style={scrollable ? { maxHeight: `${height}px` } : undefined}
      >
        {isLoading && (
          <div className="flex h-96 items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400">Loading PDF...</p>
          </div>
        )}
        {error && (
          <div className="flex h-96 items-center justify-center">
            <p className="text-red-500">Error loading PDF: {error}</p>
          </div>
        )}
        {!error && (
          <Document
            file={project.pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
          >
            {scrollable ? (
              <div className="flex flex-col gap-4 p-4">
                {pages.map((page) => (
                  <Page
                    key={page}
                    pageNumber={page}
                    width={pageWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </div>
            ) : (
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderAnnotationLayer={false}
              />
            )}
          </Document>
        )}
      </div>

      <div className="flex items-center justify-between">
        {!scrollable && numPages && (
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="rounded border border-sage/30 bg-white p-2 text-sage transition hover:bg-sage/5 disabled:opacity-50 dark:border-sage/20 dark:bg-slate-900 dark:hover:bg-slate-800"
              aria-label="Previous page"
            >
              <FiChevronLeft size={18} />
            </button>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="rounded border border-sage/30 bg-white p-2 text-sage transition hover:bg-sage/5 disabled:opacity-50 dark:border-sage/20 dark:bg-slate-900 dark:hover:bg-slate-800"
              aria-label="Next page"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          {isOwner && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded bg-sage/10 px-3 py-2 text-sm font-medium text-sage transition hover:bg-sage/20 dark:bg-sage/5 dark:hover:bg-sage/10"
            >
              <FiUpload size={16} />
              Replace
            </button>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
