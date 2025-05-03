function TestimonialsPage() {
    const testimonials = [
      {
        name: "Ananya Sharma",
        role: "Startup Founder",
        text: "SimpleMail made my inbox manageable again. The spam filter is absolutely magical!",
      },
      {
        name: "Rohit Verma",
        role: "Freelancer",
        text: "Sleek UI, no distractions — exactly what I wanted from a modern email client.",
      },
      {
        name: "Priya Singh",
        role: "Marketing Manager",
        text: "Smart notifications are a game-changer. I never miss important emails anymore.",
      },
      {
        name: "Amit Desai",
        role: "UI/UX Designer",
        text: "Obsessed with the minimal design and themes. Clean and professional.",
      },
      {
        name: "Neha Kapoor",
        role: "Business Analyst",
        text: "Priority inbox and scheduled emails help me stay on top of my work effortlessly.",
      },
      {
        name: "Karan Joshi",
        role: "Developer",
        text: "Multi-account support in one place? Love it. Switched from topMail instantly.",
      },
    ];
  
    return (
      <div className="min-h-screen px-6 py-16 flex flex-col items-center text-white">
        <h1 className="text-5xl font-bold font-mono mb-12 text-white text-center">
          What Our Users Say
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-yellow-400">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm italic">"{t.text}"</p>
            </div>
          ))}
        </div>
        <div className="md:block hidden mt-10 text-lg font-mono font-extralight">and much more loving users ❤️</div>
      </div>
    );
  }
  
  export default TestimonialsPage;