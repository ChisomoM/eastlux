import { Footer } from '@/components/footer';
import { SmartNavigation } from '@/components/SmartNavigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SmartNavigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
