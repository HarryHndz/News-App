import { useEffect, useState } from "react";
import { onAuthStateChanged,type User } from "firebase/auth";
import {auth} from '../utils/firebaseConfig'
export default function Landing() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  },[])
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      {user ? <p>Hello, {user.refreshToken}</p> : <p>Please log in</p>}
    </div>
  );
}