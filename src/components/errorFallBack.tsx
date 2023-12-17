import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TryAgainButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const MyErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
}> = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>Oops! Page Crashed:</ErrorMessage>
      <pre>{error.message}</pre>
      <TryAgainButton type="submit" onClick={resetErrorBoundary}>
        Try again
      </TryAgainButton>
    </ErrorContainer>
  );
};
