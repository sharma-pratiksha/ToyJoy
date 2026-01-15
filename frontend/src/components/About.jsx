import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-pink-700 flex items-center justify-center py-10 px-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-pink-600">
          About Us
        </h1>

        {/* Brand Story */}
        <p className="text-gray-700 leading-relaxed">
          ToyJoy was founded with a simple yet powerful vision: to bring smiles
          to children through safe, creative, and high-quality toys. We believe
          that play is the first step towards learning, and every toy should
          inspire imagination, curiosity, and joy.
        </p>

        {/* Mission */}
        <p className="text-gray-700 leading-relaxed">
          Our mission is to make childhood more colorful and meaningful by
          offering toys that combine fun with learning. From newborns to young
          kids, we carefully design and select toys that nurture creativity,
          develop skills, and ensure endless hours of happiness.
        </p>

        {/* Values */}
        <p className="text-gray-700 leading-relaxed">
          At ToyJoy, we prioritize safety, innovation, and sustainability. Each
          toy is crafted with love and responsibility, ensuring that parents can
          trust us with their child’s first play experience. We are committed to
          spreading joy while caring for our planet by using eco-friendly
          packaging and materials wherever possible.
        </p>

        {/* Promise */}
        <p className="text-gray-700 leading-relaxed">
          We understand that parents want the very best for their little ones.
          That’s why every ToyJoy product goes through strict quality checks,
          safe material testing, and playful designs that children adore. Our
          promise is simple: toys that create lasting memories.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
