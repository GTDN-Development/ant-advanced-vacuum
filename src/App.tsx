import { Container } from "./components/ui/container";
import { Card, CardButton, CardImage } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { HeartIcon } from "./components/icons/heart-icon";
import { Collapsible, CollapsibleContent } from "./components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { clipPathValue } from "./components/clip-path-value";
import type { UseCase } from "./lib/usecases";
import { getAllUseCases } from "./lib/usecases";
import { getAllTechnologies } from "./lib/technologies";
import type { Technology } from "./lib/technologies";

import { useEffect, useState } from "react";
import { Widget } from "./components/widget/widget";
import GetInTouch from "./components/get-in-touch-section";
import { Heading, RedBadgeIcon } from "./components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent } from "./components/ui/dialog";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loadingUseCases, setLoadingUseCases] = useState<boolean>(true);

  const [isUseCaseDialogOpen, setIsUseCaseDialogOpen] = useState<boolean>(false);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

  const [isTechnologyDialogOpen, setIsTechnologyDialogOpen] = useState<boolean>(false);
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);

  useEffect(() => {
    getAllTechnologies()
      .then(setTechnologies)
      .catch(console.error)
      .finally(() => setLoadingTechnologies(false));

    getAllUseCases()
      .then(setUseCases)
      .catch(console.error)
      .finally(() => setLoadingUseCases(false));
  }, []);

  return (
    <>
      <div className="space-y-10 py-10">
        <Container className="hidden items-center justify-center lg:flex">
          <Widget />
        </Container>

        {/* Mobile menu */}
        <Container className="mt-16 flex flex-col gap-4 lg:hidden">
          {loadingTechnologies ? (
            <div>Loading menu...</div>
          ) : (
            technologySections.map((section, index) => {
              const filteredTechnologies = technologies.filter((tech) => {
                if (Array.isArray(section.technologySection)) {
                  return section.technologySection.includes(tech.technologySection);
                }
                return tech.technologySection === section.technologySection;
              });

              return (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="w-full bg-gray-100 px-5 py-5 text-center text-2xl font-bold">
                    {section.name}
                  </CollapsibleTrigger>
                  <CollapsibleContent asChild>
                    <div className="py-6">
                      {filteredTechnologies.length > 0 ? (
                        <ul className="flex flex-col gap-5">
                          {filteredTechnologies.map((tech, subIndex) => (
                            <li key={subIndex}>
                              <button
                                style={{ clipPath: clipPathValue }}
                                className="bg-red-600 px-6 py-3 text-lg font-semibold text-red-50"
                                onClick={() => {
                                  setSelectedTechnology(tech);
                                  setIsTechnologyDialogOpen(true);
                                }}
                              >
                                {tech.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="px-5 py-4 text-center text-gray-500">
                          No technologies available for this section
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })
          )}
        </Container>

        <GetInTouch className="md:hidden" />

        <Container className="space-y-10">
          <div className="flex items-center gap-2 sm:hidden">
            <Heading as="h2" className="text-3xl">
              Use Cases
            </Heading>
            <RedBadgeIcon />
          </div>

          <Tabs defaultValue="wishlist">
            <TabsList>
              <TabsTrigger value="wishlist">Matching your wishlist technologies</TabsTrigger>
              <TabsTrigger value="all">Show all use cases</TabsTrigger>
            </TabsList>
            <TabsContent value="wishlist">
              <div className="flex items-center justify-center">
                No useCases available for this section
              </div>
            </TabsContent>
            <TabsContent value="all">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loadingUseCases ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {useCases.map((item, index) => (
                      <Card key={index}>
                        <CardImage src={item.images[0]} alt={item.name} />
                        <Heading as="h3">{item.name}</Heading>
                        <CardButton
                          onClick={() => {
                            setSelectedUseCase(item);
                            setIsUseCaseDialogOpen(true);
                          }}
                        >
                          Learn more
                        </CardButton>
                      </Card>
                    ))}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </Container>

        {/*Cards*/}
        <Container className="flex items-center justify-start sm:justify-center">
          <Button variant="secondary" className="mt-10">
            send wishlist
            <HeartIcon aria-hidden="true" className="size-8 text-red-500" />
          </Button>
        </Container>
      </div>

      <Dialog open={isUseCaseDialogOpen} onOpenChange={setIsUseCaseDialogOpen}>
        <DialogContent>
          {selectedUseCase ? (
            <div>
              <h2 className="mb-4 text-2xl font-bold">{selectedUseCase.name}</h2>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedUseCase.modalContent }}
              />
            </div>
          ) : (
            <div>No use case selected</div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isTechnologyDialogOpen} onOpenChange={setIsTechnologyDialogOpen}>
        <DialogContent>
          {selectedTechnology ? (
            <div>
              <h2 className="mb-4 text-2xl font-bold">{selectedTechnology.name}</h2>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedTechnology.modalContent }}
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary">Detail</Button>
                <Button variant="secondary">Close and continue</Button>
                <Button variant="primary">Add to wish list and continue</Button>
              </div>
            </div>
          ) : (
            <div>No technology selected</div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

type TechnologySection = {
  name: string;
  technologySection: string | string[];
};

const technologySections: TechnologySection[] = [
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
