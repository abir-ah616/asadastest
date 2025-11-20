import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Search } from 'lucide-react';

export const Browser = () => {
    const [url, setUrl] = useState('https://www.google.com/webhp?igu=1');
    const [inputUrl, setInputUrl] = useState('https://www.google.com');

    const handleNavigate = (e: React.FormEvent) => {
        e.preventDefault();
        let target = inputUrl;
        if (!target.startsWith('http')) {
            target = 'https://' + target;
        }
        // For demo purposes, we might need to handle iframe restrictions
        // But we'll just set it for now
        setUrl(target);
    };

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}>
            {/* Address Bar */}
            <div style={{
                padding: '8px 16px',
                background: '#f0f0f0',
                borderBottom: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}>
                <div style={{ display: 'flex', gap: '8px', color: '#5f6368' }}>
                    <ArrowLeft size={18} />
                    <ArrowRight size={18} />
                    <RotateCw size={18} />
                </div>

                <form onSubmit={handleNavigate} style={{ flex: 1 }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '6px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: '1px solid #ddd',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                    }}>
                        <Search size={14} color="#5f6368" />
                        <input
                            type="text"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            style={{
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                                fontSize: '14px',
                                color: '#202124'
                            }}
                        />
                    </div>
                </form>
            </div>

            {/* Content */}
            <div style={{ flex: 1, position: 'relative' }}>
                <iframe
                    src={url}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Browser"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                />
            </div>
        </div>
    );
};
