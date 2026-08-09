"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const PdfViewer = dynamic(() => Promise.resolve(PDFContent), {
  loading: () => <div className="w-full h-96  animate-pulse  rounded-2xl" />,
  ssr: false,
});

function PDFContent() {
  return (
    <div className="w-full h-96 md:h-screen ">
      <iframe
        src="/regulamin.pdf"
        className="w-full h-full rounded-2xl "
        title="Regulamin serwera"
        aria-label="Dokument regulaminu serwera"
        allow="fullscreen"
      />
    </div>
  );
}

export default function RegulaminPage() {
  return (
    <main className="flex flex-col items-center justify-center  px-4 py-4 md:py-8 ">
      <h1 className="text-fluid-h1 font-bold mb-4 md:mb-8 text-center ">
        Regulamin serwera
      </h1>

      <Suspense
        fallback={<div className=" h-96  animate-pulse  rounded-2xl" />}
      >
        <PdfViewer />
      </Suspense>

      <div className="mt-6 md:mt-8 text-center text-fluid-subtle">
        <p>
          Jeśli dokument się nie załaduje,{" "}
          <a
            href="/regulamin.pdf"
            download
            className="text-blue-500 hover:text-blue-900 underline font-semibold"
          >
            pobierz PDF
          </a>
        </p>
      </div>
    </main>
  );
}
