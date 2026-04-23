import ToursHero from "../components/ToursHero";
import ToursSearchForm from "../components/ToursSearchForm";

export default function page() {
  return (
    <main>
      <ToursHero />
      <div className="bg-[#1e1e1f] py-25 px-20">
        <ToursSearchForm />
      </div>
    </main>
  );
}
