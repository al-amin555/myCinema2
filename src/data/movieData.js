const data = [
  {
    id: crypto.randomUUID(),
    cover: "avatar.png",
    title: "Avatar",
    description:
      "Armed with only the word Tenet, and fighting for the survival of the entire world, CIA operative, The Protagonist, journeys through a twilight world of international espionage on a global mission that unfolds beyond real time.",
    genre: [" Action ", " Sci-Fi ", " Thriller "],
    rating: 5,
    price: "$ 35",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Spider-Man",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
    genre: ["Action ", " Adventure ", " Fantasy ", " Comedy "],
    rating: 3,
    price: "$ 95",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
    genre: ["Action  ", " Adventure ", " Fantasy ", " Comedy "],
    rating: 4,
    price: "$ 65",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once in Hole",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
    genre: ["Action ", " Adventure ", " Fantasy ", " Comedy "],
    rating: 3,
    price: "$ 75",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain and Gain",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
    genre: ["Action ", " Adventure ", " Fantasy ", " Comedy "],
    rating: 2,
    price: "$ 105",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
    genre: ["Actio ", " Adventure ", " Fantasy ", " Comedy "],
    rating: 5,
    price: "$ 35",
    isFavourite: false,
  },
];

function getAllmovies() {
  return data;
}

export { getAllmovies };
