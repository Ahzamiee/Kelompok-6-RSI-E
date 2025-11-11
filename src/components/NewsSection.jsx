import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar, ExternalLink, Clock, User } from "lucide-react";
import { ImageWithFallback } from "./helper";

// Category color mapping
const getCategoryColors = (category) => {
  const colorMap = {
    "Pengumuman": {
      badge: "bg-emerald-100 text-emerald-700 border-emerald-300",
      icon: "text-emerald-600"
    },
    "Konservasi": {
      badge: "bg-blue-100 text-blue-700 border-blue-300",
      icon: "text-blue-600"
    },
    "Regulasi": {
      badge: "bg-orange-100 text-orange-700 border-orange-300",
      icon: "text-orange-600"
    }
  };
  
  return colorMap[category] || colorMap["Pengumuman"];
};

const newsData = [
  // ... data berita (tetap sama)
];

export function NewsSection() {
  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-12 shadow-xl text-center">
          <h2 className="text-white mb-2">Berita Terbaru</h2>
          <p className="text-white/90">Informasi dan update terkini seputar Gunung Rinjani</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => {
            const colors = getCategoryColors(news.category);
            return (
              <Dialog key={news.id}>
                <DialogTrigger asChild>
                  {/* ... sisa JSX ... */}
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* ... sisa JSX ... */}
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}