// services/auth.js
export async function login(username, password) {
  try {
    const body = JSON.stringify({ username, password });

    const myRespon = await fetch("https://blog-api.devnerd.store/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!myRespon.ok) {
      // Handle errors (like 400 or 401)
      const errText = await myRespon.text();
      throw new Error(`HTTP error ${myRespon.status}: ${errText}`);
    }

    const myData = await myRespon.json();
    console.log("Login success:", myData);

    // Save tokens in localStorage for later use
    localStorage.setItem("access_token", myData.access_token);
    localStorage.setItem("refresh_token", myData.refresh_token);

    return myData;
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
}
