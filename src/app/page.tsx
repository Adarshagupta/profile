import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      <div className="ml-80 pt-20">
        <MainContent />
      </div>
    </div>
  );
}
