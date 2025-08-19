import { motion } from "framer-motion"
import education1 from "../AboutImages/1.png";
import education2 from "../AboutImages/2.png";
import education3 from "../AboutImages/3.png";
import education4 from "../AboutImages/4.png";
import education5 from "../AboutImages/5.png";
import education6 from "../AboutImages/6.png";

const programItems = [
  { id: 1, src: education1, alt: "Teacher Training Programs", description: "Comprehensive teacher preparation courses" },
  { id: 2, src: education2, alt: "Academic Library", description: "Extensive educational resources and research materials" },
  { id: 3, src: education3, alt: "Science Laboratories", description: "Modern facilities for science education training" },
  { id: 4, src: education4, alt: "Computer Labs", description: "Digital literacy and educational technology" },
  { id: 5, src: education5, alt: "Graduation Ceremonies", description: "Celebrating educational achievements" },
  { id: 6, src: education6, alt: "Professional Development", description: "Continuing education and skill enhancement" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const Facilities = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            <span className="text-blue-600">Our</span> Programs & Facilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive teacher education programs and state-of-the-art facilities
          </p>
        </motion.div>

        {/* Cards Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="simple-card p-0 overflow-hidden shadow-lg rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={i}
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.alt}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
