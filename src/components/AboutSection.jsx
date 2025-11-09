import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-10 mx-auto h-24 w-24 rounded-full bg-rose-100 opacity-60 blur-2xl" aria-hidden />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Our Story</h2>
        <p className="mt-4 text-rose-700 leading-relaxed">
          We met on a sunlit afternoon in a little bookstore, both reaching for the same novel. What
          began as a shared smile turned into countless coffee dates, laughter-filled adventures, and a
          partnership built on love, patience, and joy. From city strolls to starry road trips, our journey
          has been a tapestry of small moments that mean everything. We7re so excited to celebrate this next chapter
          with the people who have supported and loved us along the way.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
