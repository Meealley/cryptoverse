import Accordion from "./Accordion";
/* import data to use */
import { accordions } from "./AccordionData";

function FAQ() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-br from-[#5c2234] to-orange-600">
        FAQ
      </h1>
      <div>
        <p className="text-center font-abc text-[16px]">
          The frequently asked questions (FAQ) section aims to provide answers
          to common queries about RocketLaunchPad and its services. If you have any
          questions that are not addressed here, please do not hesitate to reach
          out to our support team via the contact form or using our AI assitant
          for further help.
        </p>
      </div>

      {/* main content here */}
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {/* passing two props to this component */}
              <Accordion question={question} answer={answer}></Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
