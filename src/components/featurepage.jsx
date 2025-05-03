function FeaturePage() {
    return (
      <div className="min-h-screen px-6 py-16 flex flex-col items-center overflow-y-auto">
        <h1 className="text-5xl font-bold font-mono mb-12 text-white">Features</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            "Auto Reply with Customisation",
            "Smart Notifications",
            "Custom Themes",
            "End-to-End Encrypted Mails",
            "Priority Inbox",
            "AI-based Spam Filter",
            "Custom Domain Support",
            "Advanced Analytics",
            "Team Collaboration",
            "Email Templates",
            "Multi-Account Support",
            "Scheduled Emails",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black/40 to-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-center text-yellow-400 font-semibold text-md shadow-md hover:shadow-white/20 hover:-translate-y-1 hover:shadow-lgtransition-all duration-300 ease-in-out"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default FeaturePage;