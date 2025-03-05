import React, { useState } from "react";
import { useFileUpload } from "./useFileUpload";

export const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { error, isLoading, execute, data } = useFileUpload();

  const handleUpload = async () => {
    if (file) {
      await execute(file);
      setFile(undefined);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {data && (
        <><h1>Odeslan soubor:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
      {file && (
        <div>
          <h1>Soubor</h1>
          <ul>
            <li>Jmeno: {file.name}</li>
            <li>Typ: {file.type}</li>
            <li>Velikost: {file.size} b</li>
          </ul>
          {error ? error : ""}
          {isLoading ? "Loading..." : ""}
        </div>
      )}
    </div>
  );
};
