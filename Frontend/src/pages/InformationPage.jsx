import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/helper";
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
          <div className="mb-16">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Trekking Routes</h2>
              <p className="text-white/90">Choose your path to the summit</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-2xl transition-all hover:translate-y-[-4px] bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Compass className="h-6 w-6 text-[#059669]" />
                    <CardTitle className="text-gray-900">Senaru Route</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="space-y-2 text-gray-600">
                    <p><span className="text-gray-900">Starting Point:</span> Senaru Village (North)</p>
                    <p><span className="text-gray-900">Duration:</span> 3-4 days</p>
                    <p><span className="text-gray-900">Difficulty:</span> Moderate to Hard</p>
                    <p className="pt-2">Most popular route with stunning waterfalls and lush forest scenery. Offers the best views of Segara Anak lake.</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-2xl transition-all hover:translate-y-[-4px] bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Compass className="h-6 w-6 text-[#059669]" />
                    <CardTitle className="text-gray-900">Sembalun Route</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="space-y-2 text-gray-600">
                    <p><span className="text-gray-900">Starting Point:</span> Sembalun Village (East)</p>
                    <p><span className="text-gray-900">Duration:</span> 3-4 days</p>
                    <p><span className="text-gray-900">Difficulty:</span> Hard</p>
                    <p className="pt-2">Steeper ascent but shorter distance to summit. Features spectacular savanna landscapes and sunrise views.</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#10B981]/30 shadow-lg hover:shadow-2xl transition-all hover:translate-y-[-4px] bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Compass className="h-6 w-6 text-[#059669]" />
                    <CardTitle className="text-gray-900">Timbanuh Route</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="space-y-2 text-gray-600">
                    <p><span className="text-gray-900">Starting Point:</span> Timbanuh Village (West)</p>
                    <p><span className="text-gray-900">Duration:</span> 2-3 days</p>
                    <p><span className="text-gray-900">Difficulty:</span> Moderate</p>
                    <p className="pt-2">Less crowded route, ideal for those seeking a quieter trekking experience with beautiful forest trails.</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="mb-16">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#047857] to-[#065F46] rounded-2xl p-6 mb-6 shadow-xl text-center">
              <h3 className="text-white">Best Time to Visit</h3>
            </div>
            
            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 border-2 border-[#10B981]/30 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#10B981]/30 rounded-xl">
                  <Calendar className="h-8 w-8 text-[#059669]" />
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-[#059669] mb-2">Dry Season (April - November)</div>
                      <p className="text-gray-600">
                        The best time for trekking with clear skies, minimal rainfall, and excellent visibility. July and August are peak months with optimal conditions.
                      </p>
                    </div>
                    <div>
                      <div className="text-[#059669] mb-2">Wet Season (December - March)</div>
                      <p className="text-gray-600">
                        Park may be closed during heavy rainfall due to safety concerns. Trails become slippery and dangerous. Not recommended for trekking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flora & Fauna */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-[#047857] to-[#065F46] rounded-2xl p-6 mb-6 shadow-xl text-center">
              <h3 className="text-white">Biodiversity of Mount Rinjani</h3>
            </div>
            
            {/* Fauna Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-8 shadow-xl">
                <h3 className="text-white text-center">FAUNA - Wildlife Species</h3>
                <p className="text-white/90 text-center mt-2">
                  Discover the diverse animal species that call Mount Rinjani home
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Long-tailed Macaque */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1709483924260-59be1dcf08a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwdGFpbGVkJTIwbWFjYXF1ZSUyMG1vbmtleXxlbnwxfHx8fDE3NjEwNTMwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Long-tailed Macaque"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Long-tailed Macaque</CardTitle>
                    <div className="text-sm italic text-[#059669]">Macaca fascicularis</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Lowland to mid-altitude forests (600-1,500m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Highly social primates often seen in groups along trekking routes. Known for their intelligence and curiosity.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Rinjani Scops Owl */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1639032256492-b8ab54e4689e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBmb3Jlc3R8ZW58MXx8fHwxNzYxMDUzMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Rinjani Scops Owl"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Endemic</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Rinjani Scops Owl</CardTitle>
                    <div className="text-sm italic text-[#059669]">Otus jolandae</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Montane forests (1,500-2,500m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Endemic nocturnal species discovered in 2003. Rare and critically important to Rinjani's ecosystem.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Javan Deer */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1729250830876-ef3d3e32cd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVyJTIwd2lsZGxpZmUlMjBmb3Jlc3R8ZW58MXx8fHwxNzYwOTY4MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Javan Deer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Javan Rusa Deer</CardTitle>
                    <div className="text-sm italic text-[#059669]">Rusa timorensis</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Grasslands and forest edges (800-2,000m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Large herbivores often spotted grazing in savanna areas. Males have impressive antlers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Black Ebony Leaf Monkey */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1691409035401-f3795e036bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1vbmtleSUyMGZvcmVzdHxlbnwxfHx8fDE3NjEwNTMxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Black Ebony Leaf Monkey"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Ebony Leaf Monkey</CardTitle>
                    <div className="text-sm italic text-[#059669]">Trachypithecus auratus</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Dense rainforests (600-1,800m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Arboreal primates with distinctive black fur. Feed primarily on leaves and fruits in canopy.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Green Tree Python */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1672697823081-7bbae6d25c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHB5dGhvbiUyMHNuYWtlfGVufDF8fHx8MTc2MTA1MzEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Green Tree Python"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Green Tree Python</CardTitle>
                    <div className="text-sm italic text-[#059669]">Morelia viridis</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Rainforest canopy (600-1,200m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Non-venomous constrictor with vibrant green coloration. Nocturnal and rarely seen by trekkers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Oriental Pied Hornbill */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1569372329934-3c03b4174aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JuYmlsbCUyMGJpcmQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjEwNTMxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Oriental Pied Hornbill"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Oriental Pied Hornbill</CardTitle>
                    <div className="text-sm italic text-[#059669]">Anthracoceros albirostris</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Forest canopy and edges (600-1,500m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Large bird with distinctive casque on bill. Known for loud calls echoing through the forest.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Flora Section */}
            <div>
              <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-8 mb-8 shadow-xl">
                <h3 className="text-white text-center">FLORA - Plant Species</h3>
                <p className="text-white/90 text-center mt-2">
                  Explore the unique vegetation zones of Mount Rinjani National Park
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Edelweiss */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1570877233715-ce10fcc7036e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGVsd2Vpc3MlMjBmbG93ZXIlMjBtb3VudGFpbnxlbnwxfHx8fDE3NjEwNTMxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Edelweiss"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Protected</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Javanese Edelweiss</CardTitle>
                    <div className="text-sm italic text-[#059669]">Anaphalis javanica</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Alpine zones (2,000-3,000m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Iconic mountain flower with white woolly appearance. Symbol of eternal love, legally protected from picking.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Black Ebony Tree */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1652689994763-4cd3510a3a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9ueSUyMHRyZWUlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjEwNTMxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Black Ebony Tree"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Rare</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Black Ebony Tree</CardTitle>
                    <div className="text-sm italic text-[#059669]">Diospyros celebica</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Montane forests (1,200-2,000m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Rare hardwood tree with extremely dense black heartwood. Protected species critical to forest ecosystem.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Wild Orchid */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758157911403-a66f0bf25aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjB0cm9waWNhbCUyMGZsb3dlcnxlbnwxfHx8fDE3NjEwNTMxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Wild Orchid"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Wild Orchids</CardTitle>
                    <div className="text-sm italic text-[#059669]">Various Orchidaceae species</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Forest understory and trees (800-2,200m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Over 30 species of wild orchids found throughout park. Epiphytic varieties grow on tree trunks and branches.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Casuarina Pine */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1671720339867-e4863c51b07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lJTIwZm9yZXN0JTIwbW91bnRhaW58ZW58MXx8fHwxNzYxMDUzMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mountain Pine"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Casuarina Pine</CardTitle>
                    <div className="text-sm italic text-[#059669]">Casuarina junghuhniana</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Sub-alpine zones (2,200-2,800m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Hardy coniferous trees adapted to high altitude. Creates distinctive landscape near treeline.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Rafflesia */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1654180467454-64cadaf95b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWZmbGVzaWElMjBmbG93ZXIlMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxMDUzMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Rafflesia"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Rare</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Rafflesia</CardTitle>
                    <div className="text-sm italic text-[#059669]">Rafflesia arnoldii</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Lowland rainforests (600-1,000m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        World's largest flower, parasitic on vines. Extremely rare to encounter, blooms unpredictably for only a few days.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mountain Ferns */}
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-2xl group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1667715334735-2b57152373c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJuJTIwcGxhbnQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjEwNTMxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mountain Ferns"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900">Tree Ferns</CardTitle>
                    <div className="text-sm italic text-[#059669]">Cyathea spp.</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-900">Habitat:</div>
                      <p className="text-sm text-gray-600">Moist montane forests (1,000-2,200m)</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Description:</div>
                      <p className="text-sm text-gray-600">
                        Ancient tree-like ferns with large fronds. Create prehistoric atmosphere in misty forest sections.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}