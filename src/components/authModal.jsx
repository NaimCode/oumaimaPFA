import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { login, signUp } from '../repository';
import { toast } from 'react-hot-toast';

const AuthModal = () => {
    const [open, setOpen] = useState(true)
    const [form, setForm] = useState({})
const [loading, setLoading] = useState(false)
    const handleOk = () => {
        setLoading(true)
        login({ email: form.email, password: form.password }).then((userCredential) => {
 
            console.log("user", userCredential)
        })
            .catch((error) => {
                console.log("Error", error.code)
                if (error.code === "auth/user-not-found") {
                    toast.error("Compte non trouvé")
                }
                if (error.code === "auth/wrong-password") {
                    toast.error("Mot de passe incorrect")
                }
                if (error.code === "auth/invalid-email") {
                    toast.error("Email invalide")
                }
            }).finally(() => {
                setLoading(false)
              }
              )
    };

    const handleCancel = () => {
        // onClose()
        setOpen(false)
    };

    return (
        <>
            <Modal confirmLoading={loading} maskClosable={false} closable={false} cancelText="Je n'ai pas un compte" okText="Se connecter" title="Authentification"
                open={open} onOk={handleOk} onCancel={handleCancel}>
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

export default AuthModal;