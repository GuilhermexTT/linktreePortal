import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialItem {
  name: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

export const SocialLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const socials: SocialItem[] = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511994061379',
      ariaLabel: 'Fale conosco no WhatsApp',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aethersolutions_/',
      ariaLabel: 'Siga a Aether Solutions no Instagram',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/aethersolutions-tech',
      ariaLabel: 'Conecte-se conosco no LinkedIn',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:contato@aethersolutions.com.br',
      ariaLabel: 'Envie um e-mail para a Aether Solutions',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex items-center justify-center gap-4 py-2" id="social">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target={social.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={social.ariaLabel}
          onClick={(e) => {
            if (social.name === 'Email') {
              navigator.clipboard.writeText('contato@aethersolutions.com.br');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          }}
          className="relative flex items-center justify-center w-11 h-11 rounded-full text-aether-text-muted hover:text-aether-cyan glass-panel border border-white/5 hover:border-aether-cyan/40 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-aether-cyan/60"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Subtle inside glow layer on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-aether-blue/10 to-aether-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <motion.div
            className="z-10"
            whileHover={{ rotate: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {social.icon}
          </motion.div>

          <AnimatePresence>
            {social.name === 'Email' && copied && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-full mb-2.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/95 border border-aether-cyan/30 rounded-lg shadow-[0_0_15px_rgba(0,212,255,0.25)] whitespace-nowrap z-20 pointer-events-none"
              >
                E-mail copiado!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </div>
  );
};
