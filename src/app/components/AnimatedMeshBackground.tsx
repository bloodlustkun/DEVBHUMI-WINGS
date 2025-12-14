export function AnimatedMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Mesh Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04121f] via-[#071d29] to-[#0f2233]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            top: '60%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            bottom: '10%',
            left: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            animation: 'float 18s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}
