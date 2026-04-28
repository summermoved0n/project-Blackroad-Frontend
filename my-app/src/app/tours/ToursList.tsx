import ToursListItem from "./ToursListItem";

type ToursListProps = {
  paginateListData: {
    id: number;
    categories: string;
    title: string;
    img: string;
    stars: 1 | 2 | 3 | 4 | 5;
    desc: string;
    price: number;
  }[];
};

export default function ToursList({ paginateListData }: ToursListProps) {
  return (
    <ul className="grid grid-cols-2 gap-7.5">
      {paginateListData.map((item) => (
        <ToursListItem key={item.id} itemData={item} />
      ))}
    </ul>
  );
}
