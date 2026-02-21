export default function CertificateViewer({ certificate }) {
  if (!certificate.pdf) {
    return (
      <div className="rounded-lg border-2 border-dashed border-sage/30 bg-sage/5 p-8 text-center dark:border-sage/20 dark:bg-sage/5">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          No PDF certificate available
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* PDF Embed Viewer with Theme Styling */}
      <div className="rounded-lg border border-sage/20 bg-gradient-to-br from-slate-50 to-white p-4 shadow-inner dark:border-sage/10 dark:from-slate-900 dark:to-slate-800 dark:shadow-inner">
        <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800">
          <embed
            src={certificate.pdf}
            type="application/pdf"
            width="100%"
            height="500px"
            title={certificate.title}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Open in Full Screen Button */}
      <a
        href={certificate.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-sage/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-sage dark:bg-sage/80 dark:hover:bg-sage text-center"
      >
        View Full Certificate
      </a>
    </div>
  );
}
