import HomeImage from "./components/images/HomeImage";

export default function Home() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <div style={{ backgroundImage: "url('/background.jpg')" }} className="w-full h-full bg-no-repeat bg-cover"></div>
    </div>
  );
}
