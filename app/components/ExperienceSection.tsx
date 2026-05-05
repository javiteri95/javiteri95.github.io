'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── TYPES ──────────────────────────────────────────────────────── */

type Job = {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  logo: string | null;
  initial: string;
};

type Props = {
  primary: Job[];
  additional: Job[];
};

/* ─── SUB-COMPONENTS ─────────────────────────────────────────────── */

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="card p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center">
          {job.logo ? (
            <Image
              src={job.logo}
              alt={job.company}
              width={56}
              height={56}
              className="object-contain p-1"
            />
          ) : (
            <span className="text-xl font-bold text-primary">{job.initial}</span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
              <p className="text-secondary font-semibold">{job.company}</p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                <LocationIcon /> {job.location}
              </p>
            </div>
            <span className="font-mono text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap self-start">
              {job.period}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed mt-3 mb-4">{job.description}</p>
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-mono font-medium bg-highlight/20 text-primary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function ExperienceSection({ primary, additional }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-primary mb-2">Experience</h2>
      <div className="w-12 h-1 bg-highlight rounded-full mb-8" />

      {/* Primary roles */}
      <div className="space-y-6">
        {primary.map((job) => (
          <JobCard key={`${job.company}-${job.role}-${job.period}`} job={job} />
        ))}
      </div>

      {/* Separator + toggle */}
      <div className="relative mt-10 mb-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-dashed border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="additional-experience"
            className="inline-flex items-center gap-2 bg-background px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-500 hover:border-secondary hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            <ChevronIcon open={open} />
            {open ? 'Show less' : `${additional.length} more roles`}
          </button>
        </div>
      </div>

      {/* Animated additional roles */}
      <div
        id="additional-experience"
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 pt-6">
            {additional.map((job) => (
              <JobCard key={`${job.company}-${job.role}-${job.period}`} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
