import { useRef } from 'react';
import { motion } from 'framer-motion';

import { LineWrapper } from './ui/Animations';
import { SectionHeader, SectionTitle } from './ui/Section';
import { Link } from 'react-router-dom';
import { About, SocialHandle } from '../utils/interfaces';
import Button from './ui/Button';

interface IContact {
    email: string;
    socialHandles: SocialHandle[];
    about: About;
}

const Contact = ({ email, socialHandles, about }: IContact) => {
    const containerRef = useRef(null);
    const MotionLink = motion(Link);
    return (
        <section className="pt-10 relative" id="contact" ref={containerRef}>
            <SectionHeader className="relative">
                <SectionTitle>Let's Connect</SectionTitle>
            </SectionHeader>
            <div className="pt-10 px-2 md:px-4">
                <div className=" bg-black p-4 md:p-8 rounded-2xl text-white/90 flex justify-between flex-col">
                    <div>
                        <p className="text-white/40 tracking-tighter pb-2">Have a cool idea? lets collaborate</p>
                        <LineWrapper className=" group pt-10 mb-10 w-min">
                            <MotionLink to={`mailto:${email}`} className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                                {email.split('').map((char, index) => (
                                    <motion.span
                                        initial={{ x: 16 }}
                                        whileInView={{ x: 0 }}
                                        transition={{ delay: 0.1 * index, type: 'spring' }}
                                        viewport={{ once: true }}
                                        key={index}
                                        className="whitespace-pre"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </MotionLink>
                        </LineWrapper>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            viewport={{ once: true }}
                            className="text-white/50"
                        >
                            {about.phoneNumber}
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            viewport={{ once: true }}
                            className="text-white/50"
                        >
                            {about.address}
                        </motion.p>
                    </div>
                    <div className="flex items-center text-white/50 pt-10 flex-wrap gap-4">
                        {socialHandles.map((social, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 * index, type: 'spring' }}
                                viewport={{ once: true }}
                                key={index}
                            >
                                <Button className="size-auto">
                                    <Link to={social.url} target="_blank" className="p-2 border border-white/10 rounded-full px-4 z-10">
                                        {social.platform}
                                    </Link>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
