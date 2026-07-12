import data from "@/data/inspire.json";
import { InspireVideo } from "@/types/inspire";


function shuffle<T>(array: T[]) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [copy[i], copy[j]] = [
      copy[j],
      copy[i],
    ];
  }

  return copy;
}

export function getInspireFeed(): InspireVideo[] {
  return shuffle(
    data as InspireVideo[]
  );
}

export function getInspireBySlug(
    slug:string
): InspireVideo | undefined {

    return (
        data as InspireVideo[]
    ).find(
        video => video.slug === slug
    );

}