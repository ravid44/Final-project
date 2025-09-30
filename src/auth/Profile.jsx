import React, { useState } from "react";
import { updateProfile } from "../services/profile";
import { NavbarComponent } from "../nav/navigation";
export default function Profile() {
  const [bio, setBio] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token"); // ✅ you must have saved token at login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const data = await updateProfile(token, bio, profileUrl);
      setMessage("Profile updated ✅");
      console.log("Updated profile:", data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <section>
      <NavbarComponent />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-[10rem] p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Update Profile</h2>
        {message && <p>{message}</p>}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Bio</label>
          <textarea
            className="w-full border p-2 rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Profile URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            placeholder="https://example.com/me.png"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}
