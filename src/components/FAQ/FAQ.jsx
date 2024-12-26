import React, { Fragment, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { StyledSection } from "../../assets/styles/styled.components";
import FAQAccordion from "../FAQAccordion/FAQAccordion";

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState("");

  const faqs = [
    {
      id: "1",
      question: "How can I search for a movie or show?",
      answer:
        "You can use the search bar at the top of the app to find movies or shows by their title, genre, or cast.",
    },
    {
      id: "2",
      question: "How do I create a watchlist?",
      answer:
        "To create a watchlist, click the 'Add to Watchlist' button on any movie or show card. You can access your watchlist in your profile section.",
    },
    {
      id: "3",
      question: "Are there filters to find specific types of movies?",
      answer:
        "Yes! Use the filters section to narrow your search by genre, release year, rating, or other criteria.",
    },
    {
      id: "4",
      question: "What devices are supported?",
      answer:
        "The app supports iOS, Android, and web browsers on desktop and mobile devices.",
    },
    {
      id: "5",
      question: "How are movie ratings calculated?",
      answer:
        "Ratings are aggregated from trusted sources like IMDb, Rotten Tomatoes, and reviews from users within the app.",
    },
    {
      id: "6",
      question: "Where can I find trailers for movies?",
      answer:
        "Trailers are available on the details page for most movies and shows. Just click on the title to view more information and watch the trailer.",
    },
    {
      id: "7",
      question: "Is there a way to discover popular or trending movies?",
      answer:
        "The homepage features sections like 'Trending Now' and 'Popular Picks' to help you explore what's hot in the entertainment world.",
    },
    {
      id: "8",
      question: "Can I watch movies directly in the app?",
      answer:
        "Streaming availability depends on the title. We provide links to platforms where you can stream, rent, or buy the movies.",
    },
  ];

  const halfIndex = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, halfIndex);
  const rightFAQs = faqs.slice(halfIndex);

  return (
    <StyledSection id="faq">
      <SectionHeader
        title={"Frequently Asked Questions"}
        description={
          "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about FITBMovies."
        }
      />
      <div className={`grid sm:grid-cols-2 sm:gap-10`}>
        <div>
          {leftFAQs.map((faq, i) => {
            const isLast = i === leftFAQs.length - 1;

            return (
              <Fragment key={i}>
                <FAQAccordion
                  listLength={faqs.length}
                  isLast={isLast}
                  i={faq.id}
                  activeFAQ={activeFAQ}
                  setActiveFAQ={setActiveFAQ}
                  faq={faq}
                />
              </Fragment>
            );
          })}
        </div>
        <div>
          {rightFAQs.map((faq, i) => {
            const isLast = i === rightFAQs.length - 1;

            return (
              <Fragment key={i}>
                <FAQAccordion
                  listLength={faqs.length}
                  isLast={isLast}
                  i={faq.id}
                  activeFAQ={activeFAQ}
                  setActiveFAQ={setActiveFAQ}
                  faq={faq}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </StyledSection>
  );
}

export default FAQ;
