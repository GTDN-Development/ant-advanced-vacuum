type TechnologySection = {
  name: string;
  technologySection: string | string[];
};

export const technologySections: TechnologySection[] = [
  {
    name: "Vacuum Chamber",
    technologySection: ["vacuumChamber", "vacuumEnviroment", "vacuumEnvironment"],
  },
  { name: "Adsorption", technologySection: "adsorption" },
  { name: "Vaporisation", technologySection: "vaporisation" },
  { name: "Virtual leaks", technologySection: "virtualLeaks" },
  { name: "Real leaks", technologySection: "realLeaks" },
  { name: "BackFlow vacuum pump", technologySection: "backFlowVacuumPump" },
  { name: "Permeation", technologySection: "permeation" },
  { name: "Diffusion", technologySection: "diffusion" },
  { name: "Desorption", technologySection: ["desorption", "dessorption"] },
];

export type { TechnologySection };
