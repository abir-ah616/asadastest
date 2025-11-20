
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
    const projects = [
        { name: 'Windows 12 Clone', description: 'A React-based OS simulation.', tech: ['React', 'TypeScript', 'Vite'] },
        { name: 'E-Commerce Dashboard', description: 'Admin panel for online stores.', tech: ['Next.js', 'Tailwind'] },
        { name: 'Portfolio v1', description: 'My previous personal website.', tech: ['HTML', 'CSS', 'JS'] },
    ];

    return (
        <div style={{ padding: '30px', color: 'white', height: '100%', overflowY: 'auto' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>My Projects</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FolderGit2 size={24} color="#00d8ff" />
                            <h3 style={{ fontSize: '18px', margin: 0 }}>{project.name}</h3>
                        </div>

                        <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: '1.5' }}>{project.description}</p>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{
                                    fontSize: '12px',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '12px' }}>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                borderRadius: '6px',
                                border: 'none',
                                background: '#0078d4',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}>
                                <ExternalLink size={14} /> Demo
                            </button>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                borderRadius: '6px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'transparent',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}>
                                <Github size={14} /> Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
