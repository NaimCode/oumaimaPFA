import React, { useEffect } from 'react'
import imgB from '../assets/boutiquier.svg'
import imgC from '../assets/user.svg'
import { Tag } from 'antd'
import BoutiquierModal from '../components/boutiquierModal'
import UserModal from '../components/userModal'
import AuthModal from '../components/authModal'
import { userStore } from '../state'
import { useNavigate } from "react-router-dom";
const Auth = () => {
    const [type, setType] = React.useState(undefined)
    const user = userStore((state) => state.user)
    const navigate = useNavigate();
    useEffect(() => {
        console.log(user)
        if (user) {
            navigate("/", { replace: true });
        }
    }, [navigate, user]);
    return (
        <div className='flex flex-col items-center justify-center h-screen'>

            <div className='flex flex-row gap-[100px] items-center justify-center'>
                <AuthType img={imgB} onClick={() => setType("b")} type={"je suis un boutiquier"} />
                <AuthType img={imgC} onClick={() => setType("u")} type={"je suis un utilisateur"} />
            </div>
            <BoutiquierModal type={type} onClose={() => setType(undefined)} />
            <UserModal type={type} onClose={() => setType(undefined)} />
            <AuthModal />
        </div>
    )
}

const AuthType = ({ img, type, onClick }) => {
    return (
        <div onClick={onClick} className='w-[400px] h-[300px] border-2 border-gray-500 cursor-pointer flex flex-col items-center gap-6 text-gray-500'>
            <img src={img} alt="auth type" className="h-[200px]" />
            <Tag color='blue'>{type}</Tag>
        </div>
    )
}
export default Auth