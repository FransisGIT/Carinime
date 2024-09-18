export const ApiAnime = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
}
