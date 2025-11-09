import React, { useState } from 'react';

const RSVPSection = () => {
  const [form, setForm] = useState({ name: '', email: '', attending: 'Yes', meal: 'Chicken', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // No backend connected in this template; mimic success UX
      await new Promise((res) => setTimeout(res, 600));
      setStatus('Thank you! Your RSVP has been received.');
      setForm({ name: '', email: '', attending: 'Yes', meal: 'Chicken', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900 text-center">RSVP</h2>
        <p className="mt-2 text-center text-rose-700">We7d love to know if you can join us.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-rose-700">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-label="Full Name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-rose-700">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-label="Email"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm text-rose-700">Attending</span>
              <select
                name="attending"
                value={form.attending}
                onChange={handleChange}
                className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-rose-700">Meal Preference</span>
              <select
                name="meal"
                value={form.meal}
                onChange={handleChange}
                className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option>Chicken</option>
                <option>Beef</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Fish</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-rose-700">Guests</span>
              <input
                type="number"
                min="1"
                max="6"
                name="guests"
                value={form.guests || ''}
                onChange={handleChange}
                className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm text-rose-700">Message (optional)</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="rounded-md border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              aria-label="Message"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex justify-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-200 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
          >
            Send RSVP
          </button>

          {status && (
            <div role="status" className="text-center text-rose-700">{status}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
