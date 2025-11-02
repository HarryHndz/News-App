import { useSession } from "../hooks/useSession";

export default function Landing() {
  const {user} = useSession()
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      {user ? <p>Hello, {user.email}</p> : <p>Please log in</p>}
    </div>
  );
}