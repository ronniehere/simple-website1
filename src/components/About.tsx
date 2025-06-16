
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Simple., we believe that exceptional commercial cleaning shouldn't be complicated. Founded on the principles of reliability, professionalism, and attention to detail, we've built our reputation by delivering consistently outstanding results for businesses of all sizes.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why "Simple."?</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our name reflects our approach to commercial cleaning. We remove the complexity from maintaining pristine commercial spaces, allowing you to focus on what matters most—your business. The period in our name represents our commitment to completing every task with precision and finality.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              We operate with transparency, integrity, and a dedication to excellence. Every member of our team is thoroughly trained, insured, and committed to upholding our high standards. We believe in building lasting relationships with our clients through reliable service and clear communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
