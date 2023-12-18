import React from "react";
import DOMPurify from "dompurify";
import { Box } from "@mui/material";

type SanitizedHtmlDisplayProps = {
  htmlContent: string;
};

export const SanitizedHtmlDisplay = ({
  htmlContent,
}: SanitizedHtmlDisplayProps) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return <Box dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};
