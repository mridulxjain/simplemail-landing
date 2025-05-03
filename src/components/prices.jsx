export default function Prices() {
    const plans = [
      {
        title: "Free",
        price: "$0",
        features: ["Basic Mail Filtering", "5 GB Storage", "Community Support" , "Limited Email Templates"],
        popular: false,
      },
      {
        title: "Premium",
        price: "$9.99/mo",
        features: ["50 GB Storage","Advanced Mail Filtering","Spam and Promotion Protection", "Advanced Notification System", "All Email Templates","Auto Reply Feature","1 Custom Domain"],
        popular: true,
      },
      {
        title: "Pro",
        price: "$19.99/mo",
        features: ["All Premium Features","Unlimited Storage", "Team Collaboration", "API Access", "Early Access to New Features", "24/7 Support","Unlimited Custom Domains"],
        popular: false,
      },
    ];
  
    return (
      <div className="min-h-screen pb-16 md:pb-4 px-4 py-12 text-white flex flex-col items-center overflow-y-auto">
        <h1 className="text-5xl font-bold font-mono mb-10">Plans</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 border shadow-lg bg-white/10 backdrop-blur-md transition-transform transform hover:scale-105 ${
                plan.popular ? "border-yellow-400 shadow-yellow-300" : "border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="text-sm uppercase bg-yellow-400 text-black px-3 py-1 rounded-full inline-block mb-3">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm text-gray-200">
                {plan.features.map((feature, i) => (
                  <li key={i} className="before:content-['✓'] before:mr-2 before:text-yellow-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }