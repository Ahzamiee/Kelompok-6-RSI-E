import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Mountain, Compass, Calendar } from "lucide-react";

export function InformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1671525178137-14bd5d867cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NjEwMzg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mount Rinjani Information"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-white mb-4">Mount Rinjani Information</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Everything you need to know about Mount Rinjani National Park
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-gray-900 mb-6">About Mount Rinjani</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Mount Rinjani (Gunung Rinjani) is an active volcano on Lombok island in Indonesia. At 3,726 meters (12,224 feet) above sea level, it is the second-highest volcano in Indonesia and offers one of the most spectacular trekking experiences in Southeast Asia.
                </p>
                <p>
                  The mountain is part of the Rinjani National Park, a UNESCO Global Geopark since 2018, covering an area of 41,330 hectares of protected tropical mountain forest. The park is home to diverse flora and fauna, including the endangered Rinjani Scops Owl and the rare Black Ebony tree.
                </p>
                <p>
                  The summit crater contains the stunning Segara Anak lake, a crescent-shaped caldera lake at 2,000 meters above sea level. Within the lake rises Gunung Baru (New Mountain), an active volcanic cone that emerged after a major eruption in 1994.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#10B981]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623622863859-2931a6c3bc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyYWlsJTIwaGlraW5nfGVufDF8fHx8MTc2MTAzODk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rinjani Trail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[#10B981]/10 rounded-xl">
                    <Mountain className="h-6 w-6 text-[#059669]" />
                  </div>
                  <CardTitle className="text-gray-900">Elevation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Summit: 3,726 meters (12,224 feet)<br />
                  Segara Anak Lake: 2,000 meters<br />
                  Base Camp: 600-800 meters
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[#10B981]/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-[#059669]" />
                  </div>
                  <CardTitle className="text-gray-900">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Island: Lombok, West Nusa Tenggara<br />
                  Nearest City: Mataram (70 km)<br />
                  Coordinates: 8.42°S, 116.47°E
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[#10B981]/10 rounded-xl">
                    <Calendar className="h-6 w-6 text-[#059669]" />
                  </div>
                  <CardTitle className="text-gray-900">Recognition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  UNESCO Global Geopark (2018)<br />
                  National Park (1997)<br />
                  Protected Conservation Area
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* ... sisa JSX ... */}
        </div>
      </section>
    </div>
  );
}