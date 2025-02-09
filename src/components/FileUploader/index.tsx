import { useRef, useState } from "react";

const FileUploader = () => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem("profilePicture", base64String);
      };
      reader.readAsDataURL(file);
      window.location.reload();
    }
  };

  return (
    <div>
      <button className="button-upload w-40" onClick={handleClick}>
        <p className="font-moreSugar text-sm">Upload a file</p>
      </button>

      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUploader;
