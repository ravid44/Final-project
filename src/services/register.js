export async function regis(username, email, password, profileUrl, bio) {
    const body2 = JSON.stringify({
        username,
        email,
        password,
        profileUrl,
        bio
    });

    const respon2 = await fetch("https://blog-api.devnerd.store/register", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body2

    });

    const data2 = await respon2.json();

    if (!respon2.ok) {
        // throw error so caller can catch
        throw new Error(data2.error || "Registration failed ❌");
    }

    return data2;
}