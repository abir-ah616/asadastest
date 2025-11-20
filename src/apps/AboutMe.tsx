import React from 'react';
import { User, Heart, MapPin, Briefcase, Globe, GraduationCap, Target, Gamepad, Palette, Music, Film } from 'lucide-react';

export const AboutMe = () => {
    return (
        <div style={{ padding: '30px', color: 'white', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                {/* Profile Image Placeholder */}
                <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '20px',
                    background: 'linear-gradient(45deg, #333, #666)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <span style={{ fontSize: '60px' }}>👤</span>
                </div>

                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Hasanuzzaman Oppy</h1>
                    <p style={{ color: '#00d8ff', fontSize: '18px', marginBottom: '24px' }}>Front-end Web Developer</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <InfoItem icon={<User size={16} />} label="Age" value="23" />
                        <InfoItem icon={<Heart size={16} />} label="Status" value="Single" />
                        <InfoItem icon={<MapPin size={16} />} label="Location" value="Dhaka, Bangladesh" />
                        <InfoItem icon={<Globe size={16} />} label="Languages" value="Bangla, English, Hindi, Urdu" />
                    </div>
                </div>
            </div>

            <Section title="Professional Journey">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <Card icon={<Briefcase size={24} color="#00d8ff" />} title="Experience" value="6+ Months" sub="Web Development" />
                    <Card icon={<Target size={24} color="#ff0055" />} title="Specialization" value="Front-end" sub="React, Next.js" />
                    <Card icon={<GraduationCap size={24} color="#ffcc00" />} title="Education" value="Diploma" sub="Civil Engineering" />
                    <Card icon={<Target size={24} color="#00ff99" />} title="Goal" value="SEO" sub="Optimization" />
                </div>
            </Section>

            <Section title="Personal Interests">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                    <InterestCard icon={<Gamepad size={20} />} title="Gaming" sub="Competitive & Casual" />
                    <InterestCard icon={<Palette size={20} />} title="Anime" sub="Somewhat Regular" />
                    <InterestCard icon={<Music size={20} />} title="Music" sub="All Genres" />
                    <InterestCard icon={<Film size={20} />} title="Movies" sub="Sci-fi, Fantasy" />
                </div>
            </Section>
        </div>
    );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e0e0e0' }}>
        <span style={{ color: '#888' }}>{icon}</span>
        <span style={{ color: '#888' }}>{label}:</span>
        <span style={{ fontWeight: 500 }}>{value}</span>
    </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{title}</h2>
        {children}
    </div>
);

const Card = ({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub: string }) => (
    <div style={{
        background: 'rgba(255,255,255,0.05)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <div style={{ marginBottom: '12px' }}>{icon}</div>
        <div style={{ fontSize: '14px', color: '#888', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2px' }}>{value}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>{sub}</div>
    </div>
);

const InterestCard = ({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) => (
    <div style={{
        background: 'rgba(255,255,255,0.03)',
        padding: '16px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    }}>
        <div style={{ color: '#00d8ff' }}>{icon}</div>
        <div>
            <div style={{ fontWeight: 500 }}>{title}</div>
            <div style={{ fontSize: '12px', color: '#888' }}>{sub}</div>
        </div>
    </div>
);
