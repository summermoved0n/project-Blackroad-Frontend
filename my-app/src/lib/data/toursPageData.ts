export const includedInTheTour = [
  "Travel on a tourist bus along the entire route",
  "Excursions on the program",
  "Accommodation at the hotel",
  "Breakfasts",
  "Insurance policy 10000 CAD/os, issued to the group. Insurance company Inter-plus.",
];

export const notIncludedInTheTour = [
  "Entrance tickets for the program (predator center - 150 CAD, children under 14 years - 100 CAD)",
  "Museums in Verkhovyna (2-3 per excursion day optional) - approximately from 50-100 CAD per person for each",
  "Guarantee of return in case of illness",
];

export const toursDatesData = [
  {
    id: 1,
    departure: "2026-04-09",
    return: "2026-04-13",
    cityFrom: "Kyiv",
    price: 500,
  },
  {
    id: 2,
    departure: "2026-05-12",
    return: "2026-05-20",
    cityFrom: "Kyiv",
    price: 800,
  },
];

type ToursListDataProps = {
  id: number;
  categories: string;
  title: string;
  img: string;
  stars: 1 | 2 | 3 | 4 | 5;
  desc: string;
  price: number;
}[];

export const toursListData: ToursListDataProps = [
  {
    id: 1,
    categories: "Lakes",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 2,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 3,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 3,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 500,
  },
  {
    id: 4,
    categories: "Lakes",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 5,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 6,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 4,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 7,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 8,
    categories: "Mountains",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
  {
    id: 9,
    categories: "Lakes",
    title: "Rest in the canyon",
    img: "/images/Travel_with_us(canyon).jpg",
    stars: 5,
    desc: "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    price: 3000,
  },
];
