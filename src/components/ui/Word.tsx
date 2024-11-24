import { useScroll, motion, progress, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styles from '@/app/page.module.css'


export default function Paragraph({ value }) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    const words = value.split(" ");

    return (

        <p
            className={styles.paragraph}
            ref={element}
        >
        {
          words.map( (word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length)
            console.log([start, end]);
            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
          })
        }
        </p>
    )
}

const Word = ({children, range, progress}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return(
    <motion.span 
    style={{opacity}}
    className={styles.word}
    > 
    {children} 
    </motion.span>
  )
}