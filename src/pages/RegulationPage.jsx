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

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Important Notice */}
          <Alert className="bg-red-50 border-2 border-red-300 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-gray-900">
              <span className="font-semibold">Important:</span> All climbers must comply with these regulations. Violations may result in fines, permit cancellation, and legal action.
            </AlertDescription>
          </Alert>

          {/* ... sisa JSX ... */}
          
        </div>
      </section>
    </div>
  );
}