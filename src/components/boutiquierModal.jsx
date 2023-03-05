import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import MyUpload from './myUpload';
import { signUp } from '../repository';
import { toast } from 'react-hot-toast';
const BoutiquierModal = ({ type, onClose }) => {

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const handleOk = () => {
    if (!form.logo) {
      toast.error("Logo manquant")
      return
    }
    if (!form.nom || !form.email || !form.password) {
      toast.error("Champs manquants")
      return
    }
    setLoading(true)
    signUp({ email: form.email, password: form.password,nom:form.nom,logo:form.logo }).then((r) => {
      console.log("New boutique", r)
    }).catch((e) => {
      console.log("Error", e)
      if (e.code === "auth/email-already-in-use") {
        toast.error("Email déjà utilisé")
      } else {
        toast.error("Erreur rencontrée")
      }


    }).finally(() => {
      setLoading(false)
    }
    )


  };

  const handleCancel = () => {
    onClose()
  };

  return (
    <>
      <Modal  confirmLoading={loading} title="Boutiquier"
        open={type === "b"} onOk={handleOk} onCancel={handleCancel}>
        <Form.Item label="Logo" required labelCol={{ span: 6 }}>

          <MyUpload onSuccess={(r) => {
            setForm({ ...form, logo: r.url })
          }} />
        </Form.Item>
        <Form.Item label="Nom" required labelCol={{ span: 6 }}>

          <Input value={form.nom} onChange={(e) => {
            setForm({ ...form, nom: e.target.value })
          }} />
        </Form.Item>
        <Form.Item label="Email" required labelCol={{ span: 6 }}>

          <Input value={form.email} onChange={(e) => {
            setForm({ ...form, email: e.target.value })
          }} />
        </Form.Item>
        <Form.Item label="Mot de passe" required labelCol={{ span: 6 }}>

          <Input type='password' value={form.password} onChange={(e) => {
            setForm({ ...form, password: e.target.value })
          }} />
        </Form.Item>

      </Modal>
    </>
  );
};

export default BoutiquierModal;