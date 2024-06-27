import { ContentSection } from "../CMS/Content";

export const fetchContent = async (fileNames: string[]): Promise<ContentSection[]> => {
    try {
        const fetchPromises = fileNames.map(fileName =>
            fetch(`./src/Pages/Definitions/${fileName}.json`).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${fileName}.json: ${response.statusText}`);
                }
                return response.json() as Promise<ContentSection>;
            })
        );
        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
