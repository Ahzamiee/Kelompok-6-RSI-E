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
  { id: 1,
    title: "Jalur Pendakian Gunung Rinjani Kembali Dibuka",
    description: "Setelah ditutup selama beberapa bulan untuk pemeliharaan, jalur pendakian Gunung Rinjani resmi dibuka kembali untuk para pendaki.",
    content: "Pengelola Taman Nasional Gunung Rinjani mengumumkan pembukaan kembali semua jalur pendakian setelah periode pemeliharaan ekstensif. Pekerjaan pemeliharaan mencakup penguatan jalur, pemasangan penanda keselamatan baru, perbaikan fasilitas berkemah, dan restorasi area yang terkena erosi.\n\nSemua rute utama termasuk Sembalun, Senaru, dan Timbanuh telah diperiksa secara menyeluruh dan dinyatakan aman untuk pendakian. 'Kami senang menyambut para pendaki kembali ke Gunung Rinjani,' kata Pengelola Taman. 'Pekerjaan pemeliharaan telah meningkatkan keamanan dan keberlanjutan jalur secara signifikan.'\n\nPendaki sekarang dapat memesan izin pendakian mereka melalui operator tur resmi. Sistem kuota harian tetap berlaku untuk memastikan pariwisata berkelanjutan dan perlindungan lingkungan.",
    date: "15 Oktober 2025",
    time: "09:00 WIB",
    author: "Pengelola Taman",
    category: "Pengumuman",
    image: "https://images.unsplash.com/photo-1628522983129-0d800408b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA5NzI5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Program Konservasi Lingkungan di Kawasan Rinjani",
    description: "Pengelola Taman Nasional Gunung Rinjani meluncurkan program konservasi baru untuk menjaga kelestarian ekosistem gunung.",
    content: "Inisiatif konservasi lingkungan baru telah diluncurkan untuk melestarikan ekosistem unik Gunung Rinjani. Program ini berfokus pada perlindungan spesies endemik, restorasi habitat yang rusak, dan promosi praktik pariwisata berkelanjutan.\n\nKomponen utama program konservasi meliputi:\n\n• Pemantauan Satwa Liar: Instalasi kamera jebakan untuk memantau spesies langka termasuk Burung Hantu Rinjani yang endemik\n• Restorasi Habitat: Reboisasi area yang rusak dengan spesies pohon asli\n• Perlindungan Kualitas Air: Pemantauan ditingkatkan untuk danau kawah Segara Anak\n• Keterlibatan Masyarakat: Program pelatihan untuk masyarakat lokal dalam praktik konservasi\n\nProgram ini didanai melalui kombinasi biaya masuk taman, hibah internasional, dan kemitraan dengan organisasi konservasi.",
    date: "10 Oktober 2025",
    time: "14:30 WIB",
    author: "Tim Konservasi",
    category: "Konservasi",
    image: "https://images.unsplash.com/photo-1650668300370-3ee2f17d1589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bW1pdCUyMHN1bnJpc2V8ZW58MXx8fHwxNzYxMDMzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Kuota Pendaki Gunung Rinjani Dibatasi",
    description: "Untuk menjaga kelestarian alam, pengelola membatasi jumlah pendaki maksimal 500 orang per hari pada musim ramai.",
    content: "Dalam upaya mengurangi dampak lingkungan dan memastikan pariwisata berkelanjutan, Taman Nasional Rinjani menerapkan sistem kuota harian yang membatasi pendaki hingga 500 orang per hari selama musim ramai.\n\nPeraturan baru ini berlaku untuk semua jalur pendakian dan mulai berlaku segera. Keputusan ini diambil setelah studi lingkungan menunjukkan tanda-tanda degradasi jalur dan tekanan ekosistem akibat over-tourism.\n\nDistribusi Kuota:\n• Jalur Sembalun: 250 pendaki/hari\n• Jalur Senaru: 200 pendaki/hari\n• Jalur Timbanuh: 50 pendaki/hari\n\nPemesanan di muka sekarang wajib melalui operator tur berlisensi. Sistem kuota menggunakan platform pemesanan digital untuk memastikan distribusi yang adil dan mencegah pemesanan berlebihan.\n\nPendaki disarankan untuk memesan setidaknya 2 minggu sebelumnya selama musim puncak (Juli-September) untuk mengamankan tanggal pilihan mereka.",
    date: "5 Oktober 2025",
    time: "11:15 WIB",
    author: "Tim Regulasi",
    category: "Regulasi",
    image: "https://images.unsplash.com/photo-1654047624570-3a0c91aadf06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMHJpbmphbmklMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxMDMzNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function NewsSection() {
  return (
    <section id="berita" className="pb-10 bg-gray-50">
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
                  <div className="h-full">
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all border-2 border-[#10B981]/20 hover:border-[#10B981]/40 hover:translate-y-[-4px] bg-white cursor-pointer group">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className="absolute bottom-3 right-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors">
                          <ExternalLink className="h-4 w-4 text-gray-900" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className={`${colors.badge} border drop-shadow-md`}>
                          {news.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className={`h-4 w-4 ${colors.icon}`} />
                          <span>{news.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-gray-900 group-hover:text-[#10B981] transition-colors drop-shadow-sm">{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600">{news.description}</CardDescription>
                    </CardContent>
                  </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <DialogHeader>
                    <div className="relative h-72 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <Badge className={`${colors.badge} border-2 mb-3 drop-shadow-lg`}>
                          {news.category}
                        </Badge>
                      </div>
                    </div>
                    <DialogTitle className="text-gray-900 pr-8">{news.title}</DialogTitle>
                    <DialogDescription className="sr-only">{news.description}</DialogDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4 pb-4 border-b-2 border-gray-100">
                      <div className="flex items-center gap-2">
                        <Calendar className={`h-4 w-4 ${colors.icon}`} />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className={`h-4 w-4 ${colors.icon}`} />
                        <span>{news.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className={`h-4 w-4 ${colors.icon}`} />
                        <span>{news.author}</span>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="bg-gray-50 text-gray-900 rounded-xl p-6 mb-6 border-2 border-gray-200">
                      <p className="leading-relaxed">{news.description}</p>
                    </div>
                    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                      {news.content}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}