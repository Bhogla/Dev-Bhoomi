// BLOCKED: awaiting 6-10 real project photos with kW + location from client.
// Component builds against this shape. Do not ship placeholder entries.

export interface Project {
  id: string;
  title: string;
  location: string;
  capacityKw: number;
  type: "Rooftop" | "Ground-mount";
  segment: "Residential" | "Commercial" | "Industrial" | "Agricultural";
  image: string;
  year?: number;
}

export const projects: Project[] = [];
export const projectsAwaitingClientAssets = true;
