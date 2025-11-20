import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

export const Introduction = () => {
    return (
        <div style={{
            padding: '40px',
            height: '100%',
            color: 'white',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,20,40,0.5) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 style={{ fontSize: '48px', marginBottom: '16px', background: 'linear-gradient(to right, #fff, #00d8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Welcome to Windows 12
                </h1>
                <p style={{ fontSize: '18px', color: '#a0a0a0', marginBottom: '40px', maxWidth: '500px' }}>
                    Experience the future of personal portfolios. Explore my world through this interactive operating system interface.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: '24px' }}
            >
                <SocialLink icon={<Github size={24} />} label="GitHub" href="#" />
                <SocialLink icon={<Linkedin size={24} />} label="LinkedIn" href="#" />
                <SocialLink icon={<Facebook size={24} />} label="Facebook" href="#" />
                <SocialLink icon={<Mail size={24} />} label="Email" href="#" />
            </motion.div>
        </div>
    );
};

const SocialLink = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'white',
            textDecoration: 'none',
            padding: '12px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.05)',
            transition: 'all 0.2s',
            width: '80px'
        }}
        onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
    >
        {icon}
        <span style={{ fontSize: '12px' }}>{label}</span>
    </a>
);
