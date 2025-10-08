export interface UseCase {
  name: string;
  technologies: string[];
  images: string[];
  modalContent: string;
}

export type UseCasesResponse = UseCase[];

// API function to fetch all use cases
export async function getAllUseCases(): Promise<UseCasesResponse> {
  const url = "https://private-84d45-advancedvacuum.apiary-mock.com/usecases";
  // const url = "https://advancedvacuum.antstudio.dev/wp-json/wp/v2/react/usecases";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch use cases: ${response.status} ${response.statusText}`);
    }

    const result: UseCasesResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching use cases:", error);
    throw error;
  }
}
