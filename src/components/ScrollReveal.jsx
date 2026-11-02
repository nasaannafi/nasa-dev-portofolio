  import { motion } from 'motion/react'
  function ScrollReveal({ children, delay = 0, className = '' }) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay,
              ease: 'easeOut',
            },
          },
        }}
      >
        {children}
      </motion.div>
    )
  }

  export default ScrollReveal