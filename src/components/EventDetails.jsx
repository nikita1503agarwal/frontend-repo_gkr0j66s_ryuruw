import React from 'react';
import { MapPin, Clock, GlassWater } from 'lucide-react';

const DetailCard = ({ title, time, address, extra }) => (
  <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-rose-900">{title}</h3>
    <div className="mt-3 flex items-center gap-2 text-rose-700">
      <Clock className="w-4 h-4" aria-hidden />
      <span>{time}</span>
    </div>
    <div className="mt-2 flex items-start gap-2 text-rose-700">
      <MapPin className="w-4 h-4 mt-1" aria-hidden />
      <address className="not-italic leading-snug">{address}</address>
    </div>
    {extra && <p className="mt-3 text-rose-700">{extra}</p>}
  </div>
);

const EventDetails = () => {
  return (
    <section id="details" className="py-20 bg-rose-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <GlassWater className="w-5 h-5 text-rose-600" aria-hidden />
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Event Details</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <DetailCard
            title="Wedding Ceremony"
            time="3:00 PM"
            address={
              <>St. Helena Chapel<br />
              123 Vineyard Lane, Napa Valley, CA</>
            }
            extra="Dress code: Garden formal"
          />
          <DetailCard
            title="Reception"
            time="6:00 PM"
            address={
              <>Harvest Moon Estate<br />
              456 Terrace Road, Napa Valley, CA</>
            }
            extra="Shuttle provided from ceremony to reception"
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
