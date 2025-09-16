import { Container } from "./container";

export function Widget() {
  return (
    <Container>
      <div className="relative w-full aspect-square mx-auto">
        <div className="absolute bg-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 ">
          vacuum chamber
        </div>
        <div
          className="absolute bg-gray-200 top-0 left-1/4 -translate-x-1/2
                     h-24 w-32 flex items-center justify-center
                     [clip-path:polygon(0_0,100%_0,100%_100%,70%_100%)]"
        >
          diffusion
        </div>
        <div
          className="absolute bg-gray-200 top-0 right-1/4 translate-x-1/2
                     h-24 w-32 flex items-center justify-center
                     [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]"
        >
          desorption
        </div>
        <div className="absolute bg-gray-200 top-1/2 left-0 -translate-y-1/2 h-20 w-20">
          adsorption
        </div>
        <div className="absolute bg-gray-200 top-1/2 right-0 -translate-y-1/2 h-20 w-20">
          vaporisation
        </div>
        <div className="absolute bg-gray-200 bottom-0 left-1/4 -translate-x-1/2 h-20 w-20">
          virtual leaks
        </div>
        <div className="absolute bg-gray-200 bottom-0 right-1/4 translate-y-1/2 h-20 w-20">
          real leaks
        </div>
        <div className="absolute bg-gray-200 bottom-1/4 right-0 translate-y-1/2 h-20 w-20">
          backflow vacuum pump
        </div>
        <div className="absolute bg-gray-200 bottom-1/4 left-0 translate-y-1/2 h-20 w-20">
          permeation
        </div>
      </div>
    </Container>
  );
}
