import { ContentSection } from "../CMS/Content";

export const fetchContent = async (fileNames: string[]): Promise<ContentSection[]> => {
    const basePath = import.meta.env.VITE_API_URL;

    try {
        const fetchPromises = fileNames.map(fileName => {
            const url = `${basePath}/src/Pages/Definitions/${fileName}.json`;
            console.log(`Fetching from URL: ${url}`);  // Debugging log
            return fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${fileName}.json: ${response.statusText}`);
                }
                return response.json() as Promise<ContentSection>;
            });
        });
        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
