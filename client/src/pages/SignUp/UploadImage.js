import axios from "axios";

const REACT_APP_API_URL =
  "https://api.cloudinary.com/v1_1/insafsaid/image/upload";
const REACT_APP_API_KEY = "464834518153236";
const preset = "webank";

const UploadImg = (file, SetImage, SetProgress) => {
  // Initial File before upload
  const formData = new FormData();
  formData.append("file", file);
  formData.append("tags", `Articles`);
  formData.append("upload_preset", preset);
  formData.append("api_key", REACT_APP_API_KEY);
  formData.append("timestamp", (Date.now() / 1000) | 0);

  // To get the progress
  const config = {
    onUploadProgress: (progressEvent) => {
      SetProgress(
        Math.round((progressEvent.loaded / progressEvent.total) * 100)
      );
    },
  };

  // the axios upload
  return axios
    .post(REACT_APP_API_URL, formData, config, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((response) => {
      console.log(response);
      SetImage(response.data.secure_url);
    })
    .catch((error) => {
      console.log(error);
      //SetImg({...Img,error:true});
    });
};

export default UploadImg;
