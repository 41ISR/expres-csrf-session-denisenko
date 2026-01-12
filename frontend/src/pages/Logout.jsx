import { useEffect } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const { clearUser } = useAuthStore()
    const navigate = useNavigate()
    useEffect(() => {
        const logUserOut = async () => {
            await fetch("https://solid-xylophone-69qrv597w99hrpxq-3000.app.github.dev/auth/logout", {
                credentials: "include"
            })
            clearUser()
            navigate("/signin")
        }
        logUserOut()
    }, [])

    return <></>
}

export default Logout