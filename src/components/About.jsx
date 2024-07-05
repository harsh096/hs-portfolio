import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap"
      >
        <p>{ABOUT_TEXT}</p>
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src="" alt="" />
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default About;
