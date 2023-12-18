import React from "react";
import DOMPurify from "dompurify";

type SanitizedHtmlDisplayProps = {
  htmlContent: string;
};

export const SanitizedHtmlDisplay = ({
  htmlContent,
}: SanitizedHtmlDisplayProps) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};
