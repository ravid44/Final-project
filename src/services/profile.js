// src/services/user.js
export async function updateProfile(token, bio, profileUrl) {
  const response = await fetch("https://blog-api.srengchipor.dev/users/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // ✅ token must be passed
    },
    body: JSON.stringify({ bio, profileUrl }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to update profile ❌");
  }

  return data;
}
