import { PageDefinition } from "../CMS/Page";

export const fetchContent = async (fileNames: string[]): Promise<PageDefinition[]> => {
    const basePath = import.meta.env.VITE_API_URL;

    try {
        const fetchPromises = fileNames.map(fileName => {
            const url = `${basePath}/pageDefinitions/${fileName}.json`;
            console.log(`Fetching from URL: ${url}`);  // Debugging log
            return fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${fileName}.json: ${response.statusText}`);
                }
                return response.json() as Promise<PageDefinition>;
            });
        });
        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
