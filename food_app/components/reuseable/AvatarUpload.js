import React, { useEffect, useCallback, useState } from "react";
import { IconButton, Avatar } from "@mui/material/";
import axios from "axios";
function AvatarUpload() {
  const [file, setFile] = React.useState(null);
  const [image, setImage] = useState(null);
  const handleChange = useCallback(
    (event) => {
      if (event.target.files.length > 0) {
        const file = URL.createObjectURL(event.target.files[0]);
        console.log(file);
        setFile(file);
      }
    },
    [file]
  );

  useEffect(() => {
    const uploadHandler = async () => {
      const response = await axios.post("http://localhost:4000/image", {
        image: file,
      });
      console.log(response);
      setImage(response.data);
    };
    uploadHandler();
  }, [handleChange]);

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
            src={image}
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
