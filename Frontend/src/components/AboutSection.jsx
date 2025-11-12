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
              Gunung Rinjani adalah gunung berapi aktif dengan ketinggian 3.726 meter di atas permukaan laut, menjadikannya puncak tertinggi kedua di Indonesia. 
              Terletak di Pulau Lombok, gunung megah ini merupakan pusat Taman Nasional Rinjani, sebuah Geopark Global UNESCO yang menunjukkan keanekaragaman hayati dan signifikansi geologis yang luar biasa.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Taman Nasional Rinjani mencakup 41.330 hektar hutan pegunungan tropis yang dilindungi, berfungsi sebagai habitat penting bagi spesies yang terancam punah dan daerah aliran sungai yang vital bagi masyarakat di sekitarnya. 
              Ekosistem taman yang beragam, mulai dari hutan dataran rendah hingga padang rumput alpine, menciptakan lingkungan yang unik bagi satwa liar dan pengunjung untuk dijelajahi.
            </p>
          </div>

          {/* Right Column - Image with Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#10B981]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710168833758-3cdceee3b8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5qYW5pJTIwdm9sY2FubyUyMGFlcmlhbHxlbnwxfHx8fDE3NjEwMzQ0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mount Rinjani Aerial View"
                className="w-full h-[400px] object-cover"
              />
              
              {/* UNESCO Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border-2 border-[#10B981]/30">
                <div className="bg-[#10B981]/20 rounded-full p-2">
                  <Award className="h-5 w-5 text-[#059669]" />
                </div>
                <div>
                  <div className="text-gray-900">UNESCO Geopark</div>
                  <div className="text-sm text-gray-600">Since 2018</div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] border-2 border-[#059669] rounded-xl p-6 shadow-lg">
                <div className="text-white">3,726m</div>
                <div className="text-sm text-white/90 mt-1">Elevation</div>
              </div>
              <div className="bg-gradient-to-br from-[#059669] to-[#047857] border-2 border-[#047857] rounded-xl p-6 shadow-lg">
                <div className="text-white">41,330ha</div>
                <div className="text-sm text-white/90 mt-1">Park Area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}