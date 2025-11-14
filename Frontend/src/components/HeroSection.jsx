import { ImageWithFallback } from "./helper";
import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="informasi" className="relative h-[600px] md:h-[930px]">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1654047624570-3a0c91aadf06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMHJpbmphbmklMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYxMDMzNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mount Rinjani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/85 via-[#059669]/75 to-[#047857]/70"></div>
      </div>
      
      <div className="relative h-full flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-white mb-4">Welcome to Rinja</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl leading-relaxed">
              Discover the majestic beauty of Mount Rinjani and explore one of Indonesia's most spectacular national parks.
            </p>
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-[#047857] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}