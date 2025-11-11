import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
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
  // ... data berita (tetap sama)
];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(allNews.map(news => news.category)))];

  // Filter and search news
  const filteredNews = useMemo(() => {
    return allNews.filter(news => {
      const matchesCategory = selectedCategory === "All" || news.category === selectedCatery;
      const matchesSearch = searchQuery === "" || 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* ... sisa JSX ... */}
    </div>
  );
}