import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Users, MapPin } from "lucide-react";

export function StatisticsSection() {
  return (
    <section className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-8 mb-12 shadow-xl text-center">
          <h2 className="text-white mb-2">Statistik Pendakian</h2>
          <p className="text-white/90">Data kunjungan pendaki Gunung Rinjani tahun 2025</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-4 border-[#10B981] shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gray-900 drop-shadow-md">Total Pendaki 2025</CardTitle>
              <div className="p-2 bg-[#10B981]/10 rounded-lg">
                <Users className="h-6 w-6 text-[#10B981]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-900 drop-shadow-lg">38,050</div>
              <p className="text-sm text-gray-600 mt-1 drop-shadow-sm">
                <span className="text-[#10B981] inline-flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +12.5%
                </span>{" "}
                dari tahun lalu
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-4 border-[#059669] shadow-2xl hover:shadow-[0_20px_50px_rgba(5,150,105,0.3)] transition-all hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gray-900 drop-shadow-md">Rata-rata per Bulan</CardTitle>
              <div className="p-2 bg-[#059669]/10 rounded-lg">
                <Users className="h-6 w-6 text-[#059669]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-900 drop-shadow-lg">3,171</div>
              <p className="text-sm text-gray-600 mt-1 drop-shadow-sm">Pendaki per bulan</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-4 border-[#047857] shadow-2xl hover:shadow-[0_20px_50px_rgba(4,120,87,0.3)] transition-all hover:translate-y-[-4px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gray-900 drop-shadow-md">Jalur Terpopuler</CardTitle>
              <div className="p-2 bg-[#047857]/10 rounded-lg">
                <MapPin className="h-6 w-6 text-[#047857]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-900 drop-shadow-lg">Sembalun</div>
              <p className="text-sm text-gray-600 mt-1 drop-shadow-sm">18,350 pendaki</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}