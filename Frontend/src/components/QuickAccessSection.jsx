import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Info, Newspaper, FileText } from "lucide-react";

const quickAccessItems = [
  {
    id: 1,
    icon: Info,
    title: "Informasi",
    description: "Informasi lengkap tentang Gunung Rinjani",
    link: "#informasi"
  },
  {
    id: 2,
    icon: Newspaper,
    title: "Berita",
    description: "Berita dan update terkini seputar Gunung Rinjani",
    link: "#berita"
  },
  {
    id: 3,
    icon: FileText,
    title: "Regulasi",
    description: "Peraturan dan regulasi pendakian",
    link: "#regulasi"
  }
];

export function QuickAccessSection() {
  return (
    <section id="regulasi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-[#047857] to-[#065F46] rounded-2xl p-8 mb-12 shadow-xl text-center">
          <h2 className="text-white mb-2">Akses Cepat</h2>
          <p className="text-white/90">Informasi penting yang sering dibutuhkan pendaki</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickAccessItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="block"
              >
                <Card className="hover:shadow-2xl transition-all cursor-pointer group hover:border-[#10B981] border-2 border-gray-200 h-full bg-white hover:translate-y-[-4px]">
                  <CardHeader>
                    {/* ... sisa JSX ... */}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}