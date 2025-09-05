import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Profile() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p className="text-center mt-10">Please log in first.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={() => auth.signOut()}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
