import { Button } from "@/components/ui/button";

// Kita akan menerima 'onNavigate' sebagai prop dari HomePage
export function PlanAdventureSection({ onNavigate }) {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kontainer dengan gradient */}
        <div className="bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#059669] rounded-2xl p-16 shadow-2xl text-center">
          
          {/* Judul */}
          <h2 className="text-4xl font-semibold text-white mb-4">
            Plan Your Adventure
          </h2>
          
          {/* Subjudul */}
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Ready to explore Mount Rinjani? Get all the information you need about permits, regulations, and hiking guides.
          </p>

          {/* Kontainer Tombol */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => onNavigate('information')}
              size="lg"
              className="bg-white text-[#059669] hover:bg-gray-100 shadow-lg font-semibold"
            >
              View Information
            </Button>
            
            {/* Tombol "Check Regulations" (Outline Putih) */}
            <Button
              onClick={() => onNavigate('regulation')}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white shadow-lg font-semibold"
            >
              Check Regulations
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}