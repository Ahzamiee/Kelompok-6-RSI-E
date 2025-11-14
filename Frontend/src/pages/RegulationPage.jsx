import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  FileText, 
  Users, 
  ShieldAlert,
  Package,
  Clock,
  DollarSign,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export function RegulationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-white mb-4">Regulations & Requirements</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Important rules and guidelines for climbing Mount Rinjani
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Important Notice */}
          <Alert className="bg-red-50 border-2 border-red-300 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-gray-900">
              <span className="font-semibold">Important:</span> All climbers must comply with these regulations. Violations may result in fines, permit cancellation, and legal action.
            </AlertDescription>
          </Alert>

          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">General Requirements</h2>
              <p className="text-white/90">Essential documents and requirements for all climbers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#10B981]/10 rounded-xl">
                      <FileText className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">Required Documents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Valid identification (ID card or passport)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Climbing permit (obtained online or at park office)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Health certificate (recommended for ages 60+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Travel insurance with mountain rescue coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#10B981]/10 rounded-xl">
                      <Users className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">Guide Requirements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold text-gray-900">Mandatory:</span> All climbers must hire a licensed guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Guides must be certified by park authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Maximum 4 climbers per guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Porters available for equipment and supplies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Safety Regulations */}
          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Safety Regulations</h2>
              <p className="text-white/90">Rules to ensure your safety and protect the environment</p>
            </div>
            <Card className="border-2 border-gray-200 shadow-xl bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <ShieldAlert className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-gray-900">Safety Rules & Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[#059669] mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Mandatory Requirements</span>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Follow your guide's instructions at all times</li>
                      <li>• Stay on marked trails</li>
                      <li>• Carry sufficient water (minimum 3 liters)</li>
                      <li>• Bring appropriate warm clothing and rain gear</li>
                      <li>• Carry a first aid kit and personal medications</li>
                      <li>• Register at all checkpoints</li>
                      <li>• Report to park office upon return</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-red-600 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      <span>Strictly Prohibited</span>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Climbing during park closure (Dec-March)</li>
                      <li>• Solo climbing without a guide</li>
                      <li>• Climbing under the influence of alcohol/drugs</li>
                      <li>• Littering or leaving waste on trails</li>
                      <li>• Disturbing wildlife or removing plants</li>
                      <li>• Making fires outside designated areas</li>
                      <li>• Loud noise and music that disturbs nature</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Equipment Requirements */}
          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#047857] to-[#065F46] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Required Equipment</h2>
              <p className="text-white/90">Essential gear for a safe and comfortable trek</p>
            </div>
            <Card className="border-2 border-gray-200 shadow-xl bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[#10B981]/10 rounded-xl">
                    <Package className="h-6 w-6 text-[#059669]" />
                  </div>
                  <CardTitle className="text-gray-900">Essential Gear Checklist</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-[#059669] mb-3">Clothing</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Trekking boots (waterproof)</li>
                      <li>• Warm jacket (summit temperature: 5-10°C)</li>
                      <li>• Rain gear / poncho</li>
                      <li>• Thermal underwear</li>
                      <li>• Trekking pants</li>
                      <li>• Hat and gloves</li>
                      <li>• Extra socks</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#059669] mb-3">Equipment</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Sleeping bag (comfort rating -5°C)</li>
                      <li>• Headlamp with extra batteries</li>
                      <li>• Trekking poles</li>
                      <li>• Backpack (40-50L)</li>
                      <li>• Water bottles (3L capacity)</li>
                      <li>• Sunglasses (UV protection)</li>
                      <li>• Sunscreen (SPF 50+)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#059669] mb-3">Personal Items</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• First aid kit</li>
                      <li>• Personal medications</li>
                      <li>• Energy snacks / food</li>
                      <li>• Toiletries</li>
                      <li>• Plastic bags for waste</li>
                      <li>• Whistle (emergency signal)</li>
                      <li>• Mobile phone + power bank</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fees and Permits */}
          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 mb-8 shadow-xl text-center">
              <h2 className="text-white mb-2">Fees & Permits</h2>
              <p className="text-white/90">Entrance fees and booking information</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#10B981]/10 rounded-xl">
                      <DollarSign className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">Entrance Fees</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">Domestic Tourist (Weekday)</span>
                      <span className="text-gray-900">IDR 150,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">Domestic Tourist (Weekend)</span>
                      <span className="text-gray-900">IDR 200,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">Foreign Tourist (Weekday)</span>
                      <span className="text-gray-900">IDR 250,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
                      <span className="text-gray-600">Foreign Tourist (Weekend)</span>
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
                      <Clock className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle className="text-gray-900">Booking Information</CardTitle>
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
                      <span>Peak season (July-Sept): Book 14+ days ahead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Daily quota: 500 climbers maximum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Cancellation: Full refund if done 3+ days before</span>
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

          {/* Environmental Regulations */}
          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-6 mb-6 shadow-xl text-center">
              <h3 className="text-white">Environmental Protection Regulations</h3>
            </div>
            
            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 border-2 border-[#10B981]/30 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-[#059669] mb-3">Leave No Trace Principles</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Carry out all trash and waste</li>
                    <li>• Use biodegradable soap (200m from water sources)</li>
                    <li>• Bury human waste 15cm deep, 200m from water</li>
                    <li>• Use designated camping areas only</li>
                    <li>• Do not pick plants or disturb wildlife</li>
                    <li>• Keep noise levels minimal</li>
                  </ul>
                </div>
                <div>
                  <div className="text-red-600 mb-3">Penalties for Violations</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Littering: IDR 1,000,000 fine</li>
                    <li>• Illegal camping: IDR 500,000 fine</li>
                    <li>• Damaging flora/fauna: IDR 5,000,000 fine</li>
                    <li>• Climbing without guide: IDR 2,000,000 fine</li>
                    <li>• Serious violations may result in legal prosecution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            {/* Section Header */}
            <div className="bg-gradient-to-r from-[#047857] to-[#065F46] rounded-2xl p-6 mb-6 shadow-xl text-center">
              <h3 className="text-white">Contact Information</h3>
            </div>
            
            <Card className="bg-gray-50 border-2 border-gray-200 shadow-xl">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                  <div>
                    <div className="text-gray-900 mb-3 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#10B981]" />
                      <span>Email</span>
                    </div>
                    <p>info@rinja.id</p>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-3 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#10B981]" />
                      <span>Phone</span>
                    </div>
                    <p>+62 123 458 789</p>
                    <p className="text-sm">Available 24/7</p>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#10B981]" />
                      <span>Location</span>
                    </div>
                    <p>Lombok, Indonesia</p>
                    <p className="text-sm">Open: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}