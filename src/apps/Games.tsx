

export const Games = () => {
    const games = [
        { name: 'GTA V : ONLINE', platform: 'PC', image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2600&auto=format&fit=crop' },
        { name: 'Free Fire', platform: 'Mobile/PC', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop' },
        { name: 'Genshin Impact', platform: 'Mobile/PC', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2765&auto=format&fit=crop' },
        { name: 'Wuthering Waves', platform: 'Mobile/PC', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop' },
        { name: 'Honkai Star Rail', platform: 'Mobile/PC', image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Brawlhalla', platform: 'Mobile/PC', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2694&auto=format&fit=crop' },
    ];

    return (
        <div style={{ padding: '20px', color: 'white', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {games.map((game, index) => (
                    <div key={index} style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{ height: '120px', overflow: 'hidden' }}>
                            <img src={game.image} alt={game.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h3 style={{ fontSize: '16px', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{game.name}</h3>
                            <p style={{ fontSize: '12px', color: '#a0a0a0' }}>{game.platform}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
