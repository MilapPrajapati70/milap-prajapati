import React from "react";
import {motion} from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Milap Prajapati</h1>
    <p>Web Developer</p>
  </motion.header>
);

export default Header;