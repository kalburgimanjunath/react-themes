import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Experience from './Experience';
import References from './References';
export default function CoverContent() {
  return (
    <div className="content">
      <Hero />
      <div className="main-container">
        <pre>
          July 20, 2020 Jane Smith Director, Human Resources Fit Living 123
          Business Rd. Business City, NY 54321 Dear Ms. Smith: I’m writing to
          apply for the position of Social Media Manager for Fit Living, as
          advertised on your website careers page. I have three years of
          experience as a Social Media Assistant for Young Living, and I believe
          I am ready to move up to the manager position. In your job posting,
          you mention that you want to hire a Social Media Manager who
          understands the Internet and social media trends. During my time at
          Young Living, I was given the responsibility of increasing follower
          numbers on Instagram. I explained to my manager that I would be happy
          to do so and that I would also work hard to increase follower
          participation because engagement has become an important metric.
          Within six months, I increased our followers by over 50% and increased
          engagement by 400%. I’m very proud of that accomplishment. Currently,
          I’m working to build a following with the best influencers in our
          niche. When I saw the job opening, I knew it was the perfect
          opportunity to offer you both my social media marketing skills and
          people skills. I’ve included my resume so you can learn more about my
          educational background and all of my work experience. Thank you for
          your time and consideration. Please feel free to email me at
          josephq@email.com or call my cell phone at 555-555-5555. I hope to
          hear from you soon. Sincerely, Your Signature (hard copy letter)
          Joseph Q. Applicant
        </pre>
      </div>
    </div>
  );
}
