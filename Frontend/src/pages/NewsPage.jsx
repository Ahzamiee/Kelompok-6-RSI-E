import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/helper";
import { Calendar, Clock, User, Search, ExternalLink } from "lucide-react";

// Category color mapping
const getCategoryColors = (category) => {
  const colorMap = {
    "Announcement": {
      badge: "bg-emerald-100 text-emerald-700 border-emerald-300",
      icon: "text-emerald-600"
    },
    "Conservation": {
      badge: "bg-blue-100 text-blue-700 border-blue-300",
      icon: "text-blue-600"
    },
    "Regulation": {
      badge: "bg-orange-100 text-orange-700 border-orange-300",
      icon: "text-orange-600"
    },
    "Safety": {
      badge: "bg-amber-100 text-amber-700 border-amber-300",
      icon: "text-amber-600"
    },
    "Community": {
      badge: "bg-purple-100 text-purple-700 border-purple-300",
      icon: "text-purple-600"
    },
    "Environment": {
      badge: "bg-teal-100 text-teal-700 border-teal-300",
      icon: "text-teal-600"
    }
  };
  
  return colorMap[category] || colorMap["Announcement"];
};

const allNews = [
    {
    id: 1,
    title: "Mount Rinjani Trekking Routes Reopened After Maintenance",
    excerpt: "After several months of closure for maintenance and trail restoration, Mount Rinjani's trekking routes have officially reopened to climbers.",
    content: "The Mount Rinjani National Park management has announced the reopening of all trekking routes following an extensive maintenance period. This comes after several months of dedicated work to restore and improve trail conditions across the mountain.\n\nThe maintenance work included trail reinforcement, installation of new safety markers, repair of camping facilities, and restoration of areas affected by erosion. All major routes including Sembalun, Senaru, and Timbanuh have been thoroughly inspected and cleared for trekking.\n\n'We are excited to welcome climbers back to Mount Rinjani,' said the Park Manager. 'The maintenance work has significantly improved trail safety and sustainability. We encourage all visitors to follow Leave No Trace principles to help preserve this beautiful mountain.'\n\nClimbers can now book their trekking permits through authorized tour operators. The daily quota system remains in effect to ensure sustainable tourism and environmental protection.",
    date: "October 15, 2025",
    time: "09:00 AM",
    author: "Park Management",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1628522983129-0d800408b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA5NzI5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "New Conservation Program Launched at Rinjani",
    excerpt: "Rinjani National Park management launches a comprehensive conservation program to protect the ecosystem and wildlife.",
    content: "A new environmental conservation initiative has been launched to preserve Mount Rinjani's unique ecosystem. The program focuses on protecting endemic species, restoring degraded habitats, and promoting sustainable tourism practices.\n\nKey components of the conservation program include:\n\n• Wildlife Monitoring: Installation of camera traps to monitor endangered species including the endemic Rinjani Scops Owl\n• Habitat Restoration: Reforestation of damaged areas with native tree species\n• Water Quality Protection: Enhanced monitoring of Segara Anak crater lake\n• Community Engagement: Training programs for local communities in conservation practices\n• Research Partnerships: Collaboration with universities for biodiversity studies\n\nThe program is funded through a combination of park entrance fees, international grants, and partnerships with conservation organizations. Local communities will play a crucial role in implementation and monitoring.\n\n'This initiative represents our commitment to preserving Rinjani's natural heritage for future generations,' stated the Conservation Director. 'We believe that sustainable tourism and conservation can work hand in hand.'",
    date: "October 10, 2025",
    time: "02:30 PM",
    author: "Conservation Team",
    category: "Conservation",
    image: "https://images.unsplash.com/photo-1650668300370-3ee2f17d1589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bW1pdCUyMHN1bnJpc2V8ZW58MXx8fHwxNzYxMDMzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Daily Climber Quota Limited to 500 People",
    excerpt: "To preserve the natural environment, park authorities have imposed a daily limit of 500 climbers during peak season.",
    content: "In an effort to reduce environmental impact and ensure sustainable tourism, the Rinjani National Park has implemented a daily quota system limiting climbers to 500 people per day during peak season.\n\nThe new regulation applies to all trekking routes and comes into effect immediately. The decision was made after environmental studies showed signs of trail degradation and ecosystem stress from over-tourism.\n\nQuota Distribution:\n• Sembalun Route: 250 climbers/day\n• Senaru Route: 200 climbers/day\n• Timbanuh Route: 50 climbers/day\n\nAdvance booking is now mandatory through licensed tour operators. The quota system uses a digital booking platform to ensure fair distribution and prevent overbooking. During low season (December-March), quotas may be adjusted based on weather conditions.\n\n'This regulation is essential for the long-term preservation of Mount Rinjani,' explained the Chief Ranger. 'We've seen successful quota systems in other national parks around the world, and we're confident this will help protect our mountain while still allowing people to experience its beauty.'\n\nClimbers are advised to book at least 2 weeks in advance during peak season (July-September) to secure their preferred dates.",
    date: "October 5, 2025",
    time: "11:15 AM",
    author: "Regulation Team",
    category: "Regulation",
    image: "https://images.unsplash.com/photo-1654047624570-3a0c91aadf06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMHJpbmphbmklMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxMDMzNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Emergency Rescue Team Upgraded with New Equipment",
    excerpt: "Mountain rescue team receives state-of-the-art equipment to improve emergency response capabilities.",
    content: "The Mount Rinjani Search and Rescue (SAR) team has been equipped with advanced rescue equipment to enhance their ability to respond to emergencies on the mountain. The upgrade includes modern communication devices, medical equipment, and specialized rescue gear.\n\nNew Equipment Includes:\n• GPS satellite phones for remote communication\n• Advanced stretchers and evacuation systems\n• Thermal imaging cameras for night operations\n• High-altitude medical kits\n• Drone technology for search operations\n• Weather monitoring devices\n\nThe SAR team has undergone extensive training to operate the new equipment effectively. 'This upgrade significantly improves our response time and capability to handle emergencies in challenging conditions,' stated the SAR Team Leader.\n\nThe equipment was funded through a grant from the Ministry of Tourism and donations from international mountaineering organizations. Emergency response times are expected to decrease by 30% with the new technology.\n\nClimbers are reminded to always register with the park office before starting their trek and to carry emergency contact information.",
    date: "September 28, 2025",
    time: "03:45 PM",
    author: "Safety Department",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1615734834255-cb8c5f6a29e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBoaWtpbmd8ZW58MXx8fHwxNzYxMDM4OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Community Training Program for Local Guides",
    excerpt: "Local guides participate in comprehensive training to enhance their skills and knowledge.",
    content: "A two-week intensive training program has been completed for local mountain guides, focusing on advanced navigation, safety protocols, environmental conservation, and customer service excellence.\n\nThe training program covered:\n• Advanced first aid and emergency response\n• Leave No Trace principles and environmental education\n• Customer service and communication skills\n• Weather reading and risk assessment\n• Cultural heritage and storytelling\n• Sustainable tourism practices\n\nA total of 45 local guides from Sembalun, Senaru, and surrounding villages participated in the program. The training was conducted by certified mountaineering instructors and park rangers.\n\n'This program empowers our local guides with professional skills that enhance both safety and visitor experience,' said the Training Coordinator. 'Our guides are ambassadors of Mount Rinjani, and their knowledge and professionalism are crucial to sustainable tourism.'\n\nAll participants received certification upon completion and are now eligible for advanced guiding opportunities. The program will be held annually to maintain high standards and incorporate new best practices.",
    date: "September 20, 2025",
    time: "10:00 AM",
    author: "Training Department",
    category: "Community",
    image: "https://images.unsplash.com/photo-1727640826472-bf7456dc030c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwbW91bnRhaW58ZW58MXx8fHwxNzYxMDM4OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Waste Management System Improved on All Routes",
    excerpt: "New waste collection and disposal system implemented to keep the mountain clean.",
    content: "A comprehensive waste management system has been installed across all trekking routes to combat littering and maintain the pristine beauty of Mount Rinjani. The new system represents a major step forward in environmental protection.\n\nKey Components of the System:\n• Solar-powered waste collection stations at key points\n• Color-coded waste separation bins (organic, recyclable, non-recyclable)\n• Porter-assisted waste removal service\n• Mandatory waste bag distribution to all climbers\n• Real-time monitoring and collection schedules\n• Composting facilities for organic waste at base camps\n\nAll climbers are now required to carry waste bags and must present their waste at checkpoints during descent. A deposit system ensures compliance - climbers receive a refund when they return with their waste.\n\n'We've seen dramatic improvements in trail cleanliness since implementing this system,' reported the Environmental Manager. 'The combination of infrastructure, education, and enforcement has been highly effective.'\n\nData shows a 75% reduction in trail litter since the system was introduced. Local communities are also involved in waste processing, creating employment opportunities while protecting the environment.\n\nThe initiative has been recognized by UNESCO as a best practice model for mountain waste management.",
    date: "September 15, 2025",
    time: "01:20 PM",
    author: "Environmental Team",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1671525178137-14bd5d867cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NjEwMzg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(allNews.map(news => news.category)))];

  // Filter and search news
  const filteredNews = useMemo(() => {
    return allNews.filter(news => {
      const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
           <section className="relative h-[400px] bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-white mb-4">Latest News & Updates</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed about Mount Rinjani National Park developments
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search news by title, content, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 border-2 border-gray-200 focus:border-[#10B981] bg-white text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all ${
                  selectedCategory === category
                    ? "bg-[#10B981] hover:bg-[#059669] text-white shadow-lg"
                    : "border-2 border-gray-200 hover:border-[#10B981] hover:bg-[#10B981] text-gray-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-6">
            <p className="text-black-600">
              Showing <span className="text-gray-900">{filteredNews.length}</span> of <span className="text-gray-900">{allNews.length}</span> news articles
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">No news found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => {
                const colors = getCategoryColors(news.category);
                return (
                  <Dialog key={news.id}>
                    <DialogTrigger asChild>
                      <div className="h-full">
                        <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all group border-2 border-gray-200 hover:border-[#10B981] hover:translate-y-[-4px] bg-white cursor-pointer">
                        <div className="relative h-56 overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                          <div className="absolute bottom-3 right-3">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors">
                                <ExternalLink className="h-5 w-5 text-gray-900" />
                            </div>
                          </div>
                        </div>
                        <CardHeader className="flex-shrink-0">
                          <div className="flex items-center justify-between mb-3">
                            <Badge 
                              variant="secondary" 
                              className={`${colors.badge} border drop-shadow-md`}
                            >
                              {news.category}
                            </Badge>
                          </div>
                          <CardTitle className="group-hover:text-[#10B981] transition-colors line-clamp-2 text-gray-900 drop-shadow-sm">
                            {news.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardDescription className="mb-4 line-clamp-3 text-gray-600">
                            {news.excerpt}
                          </CardDescription>
                          <div className="flex flex-col gap-2 text-sm text-gray-500 border-t-2 border-gray-100 pt-3">
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
                        <DialogDescription className="sr-only">{news.excerpt}</DialogDescription>
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
                          <p className="leading-relaxed">{news.excerpt}</p>
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
          )}
        </div>
      </section>
    </div>
  );
}