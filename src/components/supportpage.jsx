function SupportPage() {
    return (
      <div className="min-h-screen px-6 py-16 text-white max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold font-mono mb-10 text-center">Support</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="font-semibold mb-1">How do I reset my password?</h3>
              <p className="text-sm text-white/80">Go to the login page, click “Forgot Password”, and follow the instructions in the email.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="font-semibold mb-1">Can I cancel my subscription anytime?</h3>
              <p className="text-sm text-white/80">Yes, you can cancel or downgrade from the billing settings at any time.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="font-semibold mb-1">Is my data secure?</h3>
              <p className="text-sm text-white/80">Absolutely. We use end-to-end encryption and industry-grade security practices.</p>
            </div>
          </div>
        </div>
  
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="text-white/80">
            Contact our support team anytime at{" "}
            <a href="mailto:support@simplemail.com" className="text-yellow-400 underline hover:text-yellow-500">
              support@simplemail.com
            </a>
          </p>
        </div>
  
        <div className="flex flex-wrap gap-6 text-sm text-white/70 justify-center border-t border-white/10 pt-6">
          <a href="https://www.example.com" rel="noopener noreferrer" target="_blank" className="hover:text-yellow-400 underline">Terms & Conditions</a>
          <a href="https://www.example.com" rel="noopener noreferrer" target="_blank" className="hover:text-yellow-400 underline">Privacy Policy</a>
        </div>
      </div>
    );
  }
  
  export default SupportPage;