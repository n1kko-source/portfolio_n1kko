import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CONTACT } from "../constants";
import { bloom, sectionHeading } from "../lib/motion";

export const Contact = () => {
  return (
    <section id="contact" className="pb-24 pt-8">
      <motion.h2
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="section-heading my-12 text-center"
      >
        Contact <span className="section-heading-accent">Me</span>
      </motion.h2>

      <motion.div
        variants={bloom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="glass-card mx-auto max-w-md space-y-4 p-8 text-center"
      >
        <p className="flex items-center justify-center gap-3 text-tierra-500">
          <FaMapMarkerAlt className="text-orquidea-500" />
          {CONTACT.address}
        </p>
        <p className="flex items-center justify-center gap-3 text-tierra-500">
          <FaPhone className="text-orquidea-500" />
          <a
            href={`tel:${CONTACT.phoneNu.replace(/\s/g, "")}`}
            className="transition-colors hover:text-orquidea-500"
          >
            {CONTACT.phoneNu}
          </a>
        </p>
        <p className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-orquidea-500" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-orquidea-400/40 text-tierra-700 transition-colors hover:border-orquidea-500 hover:text-orquidea-600"
          >
            {CONTACT.email}
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
