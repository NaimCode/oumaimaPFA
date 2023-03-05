import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { toast } from 'react-hot-toast';



export const ACTION_UPLOAD = `https://api.cloudinary.com/v1_1/dab7dxfh7/image/upload`;
export const UNSIGNE_UPLOAD = {
  upload_preset: "public",
  api_key: "125426688527763",
};
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      toast.error("Choisir une image (jpg ou png)");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
     toast.error("L'image doit être inférieure à 2 Mo");
    }
    return isJpgOrPng && isLt2M;
  };

const MyUpload = ({onSuccess}) => {
  const [isUploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
  
    const handleChange = (info) => {
      if (info.file.status === 'uploading') {
        setUploading(true);
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        onSuccess(info.file.response)
        getBase64(info.file.originFileObj, (url) => {
          
          setUploading(false);
          setImageUrl(url);
        });
      }
    };

  const uploadButton = (
    <div>
      {isUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>ajouter</div>
    </div>
  );

  return (
    <ImgCrop rotate>
      <Upload
        action={ACTION_UPLOAD}
        data={UNSIGNE_UPLOAD}
        listType="picture-card"
       // fileList={fileList}
       showUploadList={false}
       beforeUpload={beforeUpload}
       onChange={handleChange}
        
      >
         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
 
      </Upload>
    </ImgCrop>
  );
};

export default MyUpload;