export type Tour = {
  id: string
  slug: string
  image: string
  duration: string
  difficulty: string
}

export const TOURS: Tour[] = [
  { id: "manta-safari", slug: "manta-safari", image: "/manta-safari.jpg", duration: "4 hours", difficulty: "Easy" },
  { id: "turtle-encounter", slug: "turtle-encounter", image: "/turtle.jpg", duration: "3 hours", difficulty: "Easy" },
  { id: "nurse-shark", slug: "nurse-shark", image: "/nurse-shark.jpg", duration: "3.5 hours", difficulty: "Medium" },
  { id: "snorkeling", slug: "snorkeling", image: "/coral-reef.jpg", duration: "2 hours", difficulty: "Easy" },
  { id: "dolphin", slug: "dolphin", image: "/dolphin.jpg", duration: "2.5 hours", difficulty: "Easy" },
  { id: "sand-bank", slug: "sand-bank", image: "/sandbank.jpg", duration: "4 hours", difficulty: "Easy" },
  { id: "fishing", slug: "fishing", image: "/fishing.jpg", duration: "3 hours", difficulty: "Easy" },
  { id: "island-hopping", slug: "island-hopping", image: "/island-hopping.jpg", duration: "6 hours", difficulty: "Easy" },
]
