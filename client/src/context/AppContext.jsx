import { createContext, use, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const[showLogin,setShowLogin]=useState(false);

  const [token,setToken]=useState(localStorage.getItem('token'))

  const [credit,setCredit]=useState(false)

  const backendUrl=import.meta.env.VITE_BACKEND_URL

  const navigate=useNavigate()

  const loadCreditsData=async()=>{
    try {
     const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
  headers: { Authorization: `Bearer ${token}` },
});

      if(data.success){
         setCredit(data.credit || data.credits || data.user?.credits || 0); // ✅ flexible
      setUser(data.user || null);

      }
    } catch (error) {
       console.error("Credit fetch failed:", error);
    toast.error(error.response?.data?.message || error.message);
    }
  }
  const generateImage=async(prompt)=>{
    try {
     const { data } = await axios.post(`${backendUrl}/api/image/generate-image`, {prompt}, {
  headers: { Authorization: `Bearer ${token}` },
});

      if(data.success){

        loadCreditsData()
        return data.resultImage
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      loadCreditsData()
      if (error.response?.data?.creditBalance === 0) {
      navigate("/buy");

      }
    }

  }
  const logout=()=>{
    localStorage.removeItem('token');
    setToken('')
    setUser(null)
    setCredit(false);
  }



  useEffect(()=>{
    if(token){
      loadCreditsData()
    }

  },[token])

  const value = {
    user,
    setUser,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;