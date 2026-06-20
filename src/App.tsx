import { motion } from 'framer-motion';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SocialLinks } from './components/SocialLinks';
import { LinkCard } from './components/LinkCard';
import { ConnectionFlow } from './components/ConnectionFlow';
import { ecosystemModules } from './data/ecosystem';

export default function App() {
  // Container stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // Hero child animation
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center text-white font-sans selection:bg-adisea-cyan/30 selection:text-white px-4 sm:px-6 md:px-8 py-12 md:py-16">
      {/* 1. Global high-end background animations & glows */}
      <BackgroundEffects />

      {/* 2. Main Portal Container */}
      <motion.main
        className="w-full max-w-4xl flex flex-col items-center z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* HERO SECTION */}
        <motion.div 
          className="flex flex-col items-center text-center mb-8 md:mb-10 w-full"
          variants={itemVariants}
        >
          {/* Logo official */}
          <div className="relative mb-6 flex items-center justify-center">
            {/* Ambient blue aura behind the logo */}
            <div className="absolute inset-0 bg-adisea-cyan/15 blur-2xl rounded-full scale-75 pointer-events-none" />
            <img
              src="/LogoAdisea_SemFundo.png"
              alt="Adisea Logo"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,212,255,0.4)] relative"
              draggable="false"
            />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-adisea-text-muted/95 max-w-xl leading-relaxed mt-2 font-display">
            Construindo o futuro através de tecnologia, automação e inteligência.
          </p>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div className="mb-10 w-full flex justify-center" variants={itemVariants}>
          <SocialLinks />
        </motion.div>

        {/* ECOSYSTEM CONNECTED MODULES (CARDS) */}
        <motion.div 
          className="w-full flex flex-col items-center gap-5 sm:gap-6 mb-6"
          variants={containerVariants}
        >
          {ecosystemModules.map((module) => (
            <LinkCard key={module.id} module={module} />
          ))}
        </motion.div>

        {/* INTEGRATED ECOSYSTEM FLOW SCHEMATIC */}
        <motion.div className="w-full flex justify-center" variants={itemVariants}>
          <ConnectionFlow />
        </motion.div>
      </motion.main>

      {/* FOOTER */}
      <motion.footer 
        className="w-full text-center mt-12 md:mt-16 z-10 select-none border-t border-white/5 pt-6 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-xs sm:text-sm text-adisea-text-muted/80 font-medium">
          Feito com <span className="text-adisea-cyan drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">tecnologia</span> e <span className="text-adisea-blue">propósito</span>.
        </p>
        <p className="text-[11px] sm:text-xs text-adisea-text-muted/65 font-medium tracking-wide">
          &copy; 2026 Adisea. Todos os direitos reservados.
        </p>
      </motion.footer>
    </div>
  );
}
