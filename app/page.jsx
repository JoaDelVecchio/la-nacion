import MainContent from "@/components/MainContent";
import SidebarAds from "@/components/SidebarAds";

export default function Home() {
  return (
    <main>
      <div className="lay-sidebar">
        <MainContent />
        <SidebarAds />
      </div>
    </main>
  );
}
