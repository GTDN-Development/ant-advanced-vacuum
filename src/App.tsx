import { Container } from "./components/ui/container";
import { Card, CardButton, CardImage } from "./components/ui/card";
import { Button, ButtonLink } from "./components/ui/button";
import { HeartIcon } from "./components/icons/heart-icon";
import { Collapsible, CollapsibleContent } from "./components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { clipPathValue } from "./components/clip-path-value";
import type { UseCase } from "./lib/usecases";
import { getAllUseCases } from "./lib/usecases";
import { getAllTechnologies } from "./lib/technologies";
import type { Technology } from "./lib/technologies";
import { technologySections } from "./constants/technology-sections";
import { useEffect, useState, useMemo } from "react";
import { Widget } from "./components/widget/widget";
import GetInTouch from "./components/get-in-touch-section";
import { Heading, RedBadgeIcon } from "./components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent } from "./components/ui/dialog";
import { WishlistProvider } from "./context/wishlist-context";
import { useWishlist } from "./hooks/use-wishlist";
import { Badge } from "./components/ui/badge";
import { TechButton } from "./components/ui/tech-button";
import { Carousel } from "./components/ui/carousel";

import { SendWishlistForm } from "./components/send-wishlist-form";

function AppContent() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loadingUseCases, setLoadingUseCases] = useState<boolean>(true);

  const [isUseCaseDialogOpen, setIsUseCaseDialogOpen] = useState<boolean>(false);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

  const [isTechnologyDialogOpen, setIsTechnologyDialogOpen] = useState<boolean>(false);
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);

  const [isWishlistFormDialogOpen, setIsWishlistFormDialogOpen] = useState<boolean>(false);

  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount } =
    useWishlist();

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

  // Filter and sort use cases for wishlist tab
  const wishlistUseCases = useMemo(() => {
    if (wishlist.length === 0) return [];

    return useCases
      .map((useCase) => {
        const matchingTechCount = useCase.technologies.filter((techSlug) =>
          wishlist.some((tech) => tech.slug === techSlug)
        ).length;
        return { useCase, matchingTechCount };
      })
      .filter(({ matchingTechCount }) => matchingTechCount > 0)
      .sort((a, b) => b.matchingTechCount - a.matchingTechCount)
      .map(({ useCase }) => useCase);
  }, [useCases, wishlist]);

  return (
    <>
      <div className="space-y-10 py-10">
        <Container className="text-center">
          <div className="flex items-start justify-center gap-4">
            <RedBadgeIcon />
            <Heading className="text-3xl sm:text-5xl">Technologies and Use cases</Heading>
          </div>
          <p className="mx-auto mt-10 max-w-xl">
            Choose one or more technologies, add them to your wishlist and explore many use cases
            below how Advanced Vacuum can help.
          </p>
        </Container>

        <Container className="hidden items-center justify-center lg:flex">
          <Widget
            technologies={technologies}
            isInWishlist={isInWishlist}
            onTechnologyClick={(technology) => {
              setSelectedTechnology(technology);
              setIsTechnologyDialogOpen(true);
            }}
          />
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
                              <TechButton
                                style={{ clipPath: clipPathValue }}
                                isSelected={isInWishlist(tech.slug)}
                                onClick={() => {
                                  setSelectedTechnology(tech);
                                  setIsTechnologyDialogOpen(true);
                                }}
                              >
                                {tech.name}
                              </TechButton>
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
              <TabsTrigger value="wishlist">
                Matching your wishlist technologies ({wishlistCount})
              </TabsTrigger>
              <TabsTrigger value="all">Show all use cases</TabsTrigger>
            </TabsList>
            <TabsContent value="wishlist">
              {wishlistCount === 0 ? (
                <div className="flex items-center justify-center py-8 text-gray-500">
                  No technologies in wishlist yet
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-center">Use cases matching your wishlist technologies:</p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {/* Render badges for wishlist technologies */}
                    {wishlist.map((techItem, index) => (
                      <Badge
                        key={index}
                        onCloseButtonClick={() => removeFromWishlist(techItem.slug)}
                      >
                        {techItem.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {wishlistCount !== 0 && (
                <>
                  {wishlistUseCases.length === 0 ? (
                    <div className="flex items-center justify-center py-8 text-gray-500">
                      No use cases match your wishlist technologies
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {wishlistUseCases.map((item, index) => (
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
                      </div>
                    </div>
                  )}
                </>
              )}
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
          <Button onClick={() => setIsWishlistFormDialogOpen(true)} className="mt-10">
            send wishlist
            <span className="flex items-center gap-0.5">
              <span className="block">{wishlist.length}</span>
              <HeartIcon aria-hidden="true" className="size-5 text-white" />
            </span>
          </Button>
        </Container>
      </div>

      {/* Technology dialog */}
      <Dialog open={isTechnologyDialogOpen} onOpenChange={setIsTechnologyDialogOpen}>
        <DialogContent>
          {selectedTechnology ? (
            <div className="pt-3 pb-6">
              <div className="flex h-72 w-full items-center justify-center">
                <img
                  src={selectedTechnology.image}
                  alt={selectedTechnology.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <Heading as="h4" className="mt-6 text-xl font-bold">
                {selectedTechnology.name}
              </Heading>
              <div
                className="prose mt-4 max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedTechnology.modalContent }}
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button variant="secondary" onClick={() => setIsTechnologyDialogOpen(false)}>
                  Close and continue
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (isInWishlist(selectedTechnology.slug)) {
                      removeFromWishlist(selectedTechnology.slug);
                    } else {
                      addToWishlist(selectedTechnology);
                    }
                    setIsTechnologyDialogOpen(false);
                  }}
                >
                  {isInWishlist(selectedTechnology.slug)
                    ? "Remove from wish list"
                    : "Add to wish list and continue"}
                </Button>
                <ButtonLink
                  href={`/technology/${selectedTechnology.slug}`}
                  variant="secondary"
                  onClick={() => setIsTechnologyDialogOpen(false)}
                  className="sm:col-span-2"
                >
                  More info about {selectedTechnology.name}
                </ButtonLink>
              </div>
            </div>
          ) : (
            <div>No technology selected</div>
          )}
        </DialogContent>
      </Dialog>

      {/* useCase dialog */}
      <Dialog open={isUseCaseDialogOpen} onOpenChange={setIsUseCaseDialogOpen}>
        <DialogContent>
          {selectedUseCase ? (
            <div className="pt-3 pb-6">
              {selectedUseCase.images.length === 0 && (
                <p className="text-center text-gray-500">No images available</p>
              )}

              {selectedUseCase.images.length === 1 && (
                <div className="flex h-72 w-full items-center justify-center">
                  <img
                    src={selectedUseCase.images[0]}
                    alt={selectedUseCase.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
              {selectedUseCase.images.length > 1 && (
                <Carousel
                  slides={selectedUseCase.images.map((image, index) => ({
                    children: (
                      <img
                        src={image}
                        alt={`${selectedUseCase.name} - Image ${index + 1}`}
                        className="h-auto w-full object-cover"
                      />
                    ),
                  }))}
                  options={{ loop: true }}
                />
              )}
              <Heading as="h4" className="mt-6 text-xl font-bold">
                {selectedUseCase.name}
              </Heading>
              <div
                className="prose mt-4 max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedUseCase.modalContent }}
              />

              {selectedUseCase.technologies.length !== 0 && (
                <div className="mt-12">
                  <Heading as="h5" className="text-sm">
                    Used technology:
                  </Heading>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {selectedUseCase.technologies.map((technologySlug, index) => {
                      const technology = technologies.find((tech) => tech.slug === technologySlug);
                      return (
                        <Badge key={index} isSmall isGray={!isInWishlist(technologySlug)}>
                          {technology?.name || technologySlug}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}

              <Button className="mt-8">Contact us</Button>
            </div>
          ) : (
            <div>No use case selected</div>
          )}
        </DialogContent>
      </Dialog>

      {/* Submit wishlist with form dialog */}
      <Dialog open={isWishlistFormDialogOpen} onOpenChange={setIsWishlistFormDialogOpen}>
        <DialogContent>
          <SendWishlistForm wishlist={wishlist} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function App() {
  return (
    <WishlistProvider>
      <AppContent />
    </WishlistProvider>
  );
}
