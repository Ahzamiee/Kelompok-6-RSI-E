import { ImageWithFallback } from "./helper";
import { Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-12 shadow-xl text-center">
          <h2 className="text-white mb-2">About Mount Rinjani</h2>
          <p className="text-white/90">Indonesia's Second Highest Volcano & UNESCO Global Geopark</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Gunung Rinjani adalah gunung berapi aktif dengan ketinggian 3.726 meter di atas permukaan laut, menjadikannya puncak tertinggi kedua di Indonesia. Terletak di Pulau Lombok, gunung megah ini merupakan pusat Taman Nasional Rinjani, sebuah Geopark Global UNESCO yang menunjukkan keanekaragaman hayati dan signifikansi geologis yang luar biasa.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Taman Nasional Rinjani mencakup 41.330 hektar hutan pegunungan tropis yang dilindungi, berfungsi sebagai habitat penting bagi spesies yang terancam punah dan daerah aliran sungai yang vital bagi masyarakat di sekitarnya. Ekosistem taman yang beragam, mulai dari hutan dataran rendah hingga padang rumput alpine, menciptakan lingkungan yang unik bagi satwa liar dan pengunjung untuk dijelajahi.
            </p>
          </div>

          {/* ... sisa JSX ... */}
          
        </div>
      </div>
    </section>
  );
}