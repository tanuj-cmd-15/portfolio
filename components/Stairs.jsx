import { animate, motion } from "framer-motion";

// Colors from the palette for stair panels
const stairColors = ["#cfdcdb", "#80909b", "#4b5a66", "#29343e", "#4b5a66", "#80909b"];

const stairAnimation = {
    initial: {
        top: "0% ", 
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) =>{
    const totalSteps =6;
    return totalSteps - index -1;
};

const Stairs = () =>{
    return (
    <>
    
    { /* render component*/ }
    {[...Array(6)].map((_, index)=> {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="inital"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            style={{ backgroundColor: stairColors[index] }}
            className="h-full w-full relative"
          />
        );
    })}
    </>
    );
};

export default Stairs