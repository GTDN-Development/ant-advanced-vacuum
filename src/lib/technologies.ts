export interface Technology {
  name: string;
  slug: string;
  technologySection: string;
  image: string;
  modalContent: string;
}

export type TechnologiesResponse = Technology[];

// API function to fetch all technologies
export async function getAllTechnologies(): Promise<TechnologiesResponse> {
  // const url = "https://private-84d45-advancedvacuum.apiary-mock.com/technologies";
  const url = "https://advancedvacuum.antstudio.dev/wp-json/wp/v2/react/technologies";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch technologies: ${response.status} ${response.statusText}`);
    }

    const result: TechnologiesResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching technologies:", error);
    throw error;
  }
}
