import React from 'react';
import {  Modal } from 'antd';


const UserModal = ({type,onClose}) => {


  const handleOk = () => {
  };

  const handleCancel = () => {
    onClose()
  };

  return (
    <>
      <Modal cancelText title="Utilisateur" 
      open={type==="u"} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
    </>
  );
};

export default UserModal;