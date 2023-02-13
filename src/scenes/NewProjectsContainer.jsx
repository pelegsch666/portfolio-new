import NewProject from "./NewProject";
import { motion } from "framer-motion";
import  LineGradient  from "../components/LineGradient";

const NewProjectsConatiner = ({projList}) => {
    return (
<section
      id="projects"
      className="flex flex-col pt-48 pb-48 ">
        <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
            There Are My Projects
        </p>
      </motion.div>
        <div className='flex flex-wrap justify-center pt-48 pb-48 gap-10'>
        {projList.map((proj) => {
            const {projName, projGithub, projLive, projPic} = proj
         return ( <NewProject  projName={projName} projGithub={projGithub} projLive={projLive} projPic={projPic}/>)
        })}
        </div>
        </section>
    );
};
export default NewProjectsConatiner;