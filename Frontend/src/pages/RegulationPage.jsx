// --- BAGIAN IMPOR YANG SUDAH DIPERBAIKI ---
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  Shield,
  Ban,
  CloudRain,
  Thermometer,
  Wind,
  Phone,
  MapPin,
  Ambulance,
  Backpack,
  Heart,
  Camera,
  CloudSun,
} from "lucide-react";
import { ImageWithFallback } from "../components/helper"; 


export function RegulationPage() {
  const [safetyDialogOpen, setSafetyDialogOpen] = useState(false);
  const [restrictionsDialogOpen, setRestrictionsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#0EA5E9] via-[#10B981] to-[#059669] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTE4IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-white mb-6">General Regulations</h1>
            <p className="text-2xl text-white/90">
              These regulations are designed to protect both visitors and the
              mountain environment. Compliance is mandatory for all mountain
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice Alert */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-900 flex-1">
              <span className="font-semibold">Important:</span> All climbers must
              comply with these regulations. Violations may result in fines,
              permit cancellation, and legal action.
            </p>
          </div>
        </div>
      </section>

      {/* Mountain Regulations Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-gray-800 mb-4">Mountain Regulations</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              These regulations are designed to protect both visitors and the
              mountain environment. Compliance is mandatory for all mountain
              activities.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Safety Requirements Card */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">
                  Safety Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-500" />
                    <span className="text-gray-600 text-left">
                      Emergency beacon or satellite communicator
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-500" />
                    <span className="text-gray-600 text-left">
                      First aid kit and emergency supplies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-500" />
                    <span className="text-gray-600 text-left">
                      Weather-appropriate gear and clothing
                    </span>
                  </li>
                </ul>
                <Dialog
                  open={safetyDialogOpen}
                  onOpenChange={setSafetyDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Safety Checklist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto hide-scrollbar">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        Complete Safety Checklist for Mount Rinjani
                      </DialogTitle>
                      <DialogDescription>
                        Comprehensive safety requirements and equipment checklist
                        for climbing Mount Rinjani
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 pt-4">
                      {/* Essential Equipment */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Backpack className="w-5 h-5 text-amber-500" />
                          Essential Equipment
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-700">
                              Clothing & Footwear
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Waterproof trekking boots (broken in)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Warm jacket (summit temp: 5-10°C)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Rain jacket and pants (waterproof)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Thermal base layers (top & bottom)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Quick-dry trekking pants</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Warm hat, sun hat, and gloves</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Multiple pairs of trekking socks</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-700">
                              Gear & Equipment
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Sleeping bag (comfort rating -5°C)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Headlamp with extra batteries</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Trekking poles (highly recommended)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Backpack 40-50L capacity</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Water bottles (3L total capacity)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Sunglasses (UV protection 400)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Sunscreen (SPF 50+) & lip balm</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Safety & Medical */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          Safety & Medical Supplies
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-700">
                              First Aid Kit
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Bandages and gauze pads</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Antiseptic wipes and cream</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Blister treatment (Compeed)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Pain relievers (ibuprofen, paracetamol)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Altitude sickness medication (Diamox)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Anti-diarrhea medication</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Personal prescription medications</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-700">
                              Emergency Equipment
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Whistle (for emergency signaling)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Emergency blanket (space blanket)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>
                                  Mobile phone + power bank (fully charged)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>GPS device or offline maps</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Lighter or waterproof matches</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Multi-tool or knife</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Personal Items */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Camera className="w-5 h-5 text-blue-500" />
                          Personal Items & Toiletries
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Energy snacks & trail mix</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Electrolyte powder/tablets</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Toiletries & wet wipes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Biodegradable soap</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Plastic bags for waste (pack it out!)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Quick-dry towel</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Insect repellent</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>Camera & extra memory cards</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Important Safety Notes */}
                      <div className="border-t pt-6 bg-amber-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-500" />
                          Important Safety Notes
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>
                              <strong>Altitude Sickness:</strong> Know the
                              symptoms (headache, nausea, dizziness). Descend
                              immediately if symptoms worsen.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>
                              <strong>Hydration:</strong> Drink at least 3-4
                              liters of water per day. Dehydration increases
                              altitude sickness risk.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>
                              <strong>Weather Check:</strong> Always check
                              weather forecast before departure. Turn back if
                              conditions worsen.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>
                              <strong>Licensed Guide:</strong> Hiring a licensed
                              guide is mandatory and ensures your safety.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>
                              <strong>Emergency Contacts:</strong> Save ranger
                              station (0370-987-5543) and rescue
                              (0888-123-4567) numbers.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="border-t pt-6 flex justify-end">
                        <Button
                          onClick={() => setSafetyDialogOpen(false)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-8"
                        >
                          Got it, I'm prepared!
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Restrictions Card */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                  <Ban className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Restrictions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                    <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                    <span className="text-gray-600 text-left">
                      No campfires above 2,500m elevation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                    <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                    <span className="text-gray-600 text-left">
                      Pets prohibited on summit trails
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                    <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                    <span className="text-gray-600 text-left">
                      Drone flights restricted in wilderness areas
                    </span>
                  </li>
                </ul>
                <Dialog
                  open={restrictionsDialogOpen}
                  onOpenChange={setRestrictionsDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white">
                      Full Restrictions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto hide-scrollbar">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center">
                          <Ban className="w-6 h-6 text-white" />
                        </div>
                        Complete Restrictions for Mount Rinjani
                      </DialogTitle>
                      <DialogDescription>
                        Comprehensive restrictions and guidelines for climbing
                        Mount Rinjani
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 pt-4">
                      {/* ... (Konten dialog restrictions tetap sama) ... */}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Weather Conditions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-gray-900 mb-4">Current Weather Conditions</h2>
            <p className="text-lg text-gray-600">
              Real-time weather data and forecasts to help you plan your
              mountain adventure safely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weather Data Cards */}
            <div className="space-y-6">
              {/* Base Camp Weather */}
              <Card className="bg-gray-50 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-700 mb-1">
                        Base Camp (1,280m)
                      </p>
                      <p className="text-blue-600 mb-2">9°C</p>
                      <p className="text-gray-600">Partly Cloudy</p>
                    </div>
                    <div className="w-16 h-16">
                      {/* --- SVG KUSTOM DIGANTI DENGAN IKON LUCIDE --- */}
                      <CloudSun className="w-full h-full text-amber-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mid Station Weather */}
              <Card className="bg-gray-50 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-700 mb-1">
                        Mid Station (2,380m)
                      </p>
                      <p className="text-blue-600 mb-2">-7°C</p>
                      <p className="text-gray-600">Light Snow</p>
                    </div>
                    <div className="w-12 h-12 text-gray-400">
                      <CloudRain className="w-full h-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summit Weather */}
              <Card className="bg-gray-50 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-700 mb-1">
                        Summit (3,726m)
                      </p>
                      <p className="text-blue-600 mb-2">-12°C</p>
                      <p className="text-gray-600">Windy & Cold</p>
                    </div>
                    <div className="w-12 h-12 text-gray-400">
                      <Wind className="w-full h-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weather Monitoring */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  {/* --- LINK GAMBAR FIGMA DIGANTI DENGAN URL ASLI --- */}
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1561553543-e4c83FFd101a?q=80&w=1080&h=600&fit=crop"
                    alt="Weather Monitoring Station"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="text-gray-900 mb-3">Weather Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Our automated weather stations provide real-time data from
                  multiple elevations to ensure accurate forecasting.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Thermometer className="w-4 h-4 mr-2" />
                  7-Day Forecast
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Information Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-red-900 mb-4">Emergency Information</h2>
            <p className="text-lg text-gray-700">
              Critical contact information and emergency procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emergency Hotline */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Emergency Hotline</h3>
                <p className="text-red-600 text-2xl mb-3">911</p>
                <p className="text-sm text-gray-600 mb-2">
                  For immediate assistance
                </p>
                <p className="text-sm text-gray-500">
                  Mountain Rescue: 0888-123-4567
                </p>
              </CardContent>
            </Card>

            {/* Ranger Station */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Ranger Station</h3>
                <p className="text-emerald-600 text-2xl mb-3">
                  (0370) 987-5543
                </p>
                <p className="text-sm text-gray-600 mb-2">Available 24/7</p>
                <p className="text-sm text-gray-500">
                  Located at Senaru Gate, Crater Rim
                </p>
              </CardContent>
            </Card>

            {/* Medical Center */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ambulance className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Medical Center</h3>
                <p className="text-blue-600 text-2xl mb-3">(0370) 456-7890</p>
                <p className="text-sm text-gray-600 mb-2">
                  Fully equipped facility
                </p>
                <p className="text-sm text-gray-500">15 min from Base Camp</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Emergency Info */}
          <Card className="mt-12 bg-white border-2 border-red-200 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Emergency Procedures
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stay calm and assess the situation</li>
                    <li>• Call emergency hotline immediately</li>
                    <li>• Provide exact location and coordinates</li>
                    <li>• Administer first aid if trained</li>
                    <li>• Keep victim warm and comfortable</li>
                    <li>• Do not move injured person unless necessary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Safety Guidelines
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Always hike with a licensed guide</li>
                    <li>• Inform someone of your hiking plan</li>
                    <li>• Check weather forecast before departure</li>
                    <li>• Carry emergency beacon or satellite phone</li>
                    <li>• Know altitude sickness symptoms</li>
                    <li>• Turn back if conditions worsen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Regulations (Keep from original) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Environmental Regulations */}
          <div>
            <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Environmental Protection</h2>
              <p className="text-white/90">
                Preserve the natural beauty for future generations
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 border-2 border-[#10B981]/30 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[#059669] mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Leave No Trace Principles</span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Carry out all trash and waste</li>
                    <li>
                      • Use biodegradable soap (200m from water sources)
                    </li>
                    <li>
                      • Bury human waste 15cm deep, 200m from water
                    </li>
                    <li>• Use designated camping areas only</li>
                    <li>• Do not pick plants or disturb wildlife</li>
                    <li>• Keep noise levels minimal</li>
                  </ul>
                </div>
                <div>
                  <div className="text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    <span>Penalties for Violations</span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Littering: IDR 1,000,000 fine</li>
                    <li>• Illegal camping: IDR 500,000 fine</li>
                    <li>• Damaging flora/fauna: IDR 5,000,000 fine</li>
                    <li>• Climbing without guide: IDR 2,000,000 fine</li>
                    <li>
                      • Serious violations may result in legal prosecution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fees and Permits */}
          <div>
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Fees & Permits</h2>
              <p className="text-white/90">
                Entrance fees and booking information
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#10B981]/10 rounded-xl">
                      <FileText className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">
                      Entrance Fees
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">
                        Domestic Tourist (Weekday)
                      </span>
                      <span className="text-gray-900">IDR 150,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">
                        Domestic Tourist (Weekend)
                      </span>
                      <span className="text-gray-900">IDR 200,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">
                        Foreign Tourist (Weekday)
                      </span>
                      <span className="text-gray-900">IDR 250,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">
                        Foreign Tourist (Weekend)
                      </span>
                      <span className="text-gray-900">IDR 300,000</span>
                    </div>
                    <div className="text-sm text-gray-500 pt-2">
                      * Insurance fee included in entrance ticket
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#10B981]/10 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">
                      Booking Information
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Book online at least 7 days in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>
                        Peak season (July-Sept): Book 14+ days ahead
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Daily quota: 500 climbers maximum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>
                        Cancellation: Full refund if done 3+ days before
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>No refund for weather-related cancellations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}