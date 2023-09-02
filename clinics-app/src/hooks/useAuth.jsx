import { useContext } from "react"
import AuthContext from "../components/Context/AuthProvider"

function CustomAuth() {
  return (
    useContext(AuthContext)
  )
}

export default CustomAuth