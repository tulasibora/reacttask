import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  color: "gray",
});

export default function InputFileUpload({ filename, setFileName }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName([...filename, file]);
    }
  };
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      onChange={(e) => handleFileChange(e)}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
