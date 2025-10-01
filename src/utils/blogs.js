export async function getBlogs() {
    const myData = await fetch("https://blog-api.srengchipor.dev/blogs?page_size=11&page=1&sort_by=created_at")
        .then((res) => res.json());

    return myData;
}


