import React from "react";
import { IconButton, Avatar } from "@mui/material/";
function AvatarUpload() {
  const [file, setFile] = React.useState(null);

  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setFile(file);
    }
  };
  return (
    <div className='App'>
      <input
        type='file'
        onChange={handleChange}
        id='upload'
        accept='image/*'
        style={{ display: "none" }}
      />
      <label htmlFor='upload'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <Avatar
            id='avatar'
            src={file}
            style={{
              width: "60px",
              height: "60px",
            }}
          />
        </IconButton>
      </label>
      <label htmlFor='avatar' />
    </div>
  );
}
export default AvatarUpload;
