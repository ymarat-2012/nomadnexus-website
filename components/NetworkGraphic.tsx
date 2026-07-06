const CENTER = 260;

const OUTER_NODES = [
  { angle: -90, radius: 180, size: 9, accent: true, opacity: 0.95 },
  { angle: -42, radius: 225, size: 6, accent: false, opacity: 0.45 },
  { angle: 6, radius: 195, size: 10, accent: true, opacity: 0.6 },
  { angle: 55, radius: 235, size: 6, accent: false, opacity: 0.35 },
  { angle: 100, radius: 205, size: 8, accent: true, opacity: 0.75 },
  { angle: 148, radius: 232, size: 6, accent: false, opacity: 0.45 },
  { angle: -150, radius: 198, size: 9, accent: true, opacity: 0.5 },
  { angle: -113, radius: 238, size: 6, accent: false, opacity: 0.4 },
];

function toPoint(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export function NetworkGraphic({ className }: { className?: string }) {
  const points = OUTER_NODES.map((node) => ({ ...node, ...toPoint(node.angle, node.radius) }));

  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden="true">
      <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1">
        {points.map((point, i) => {
          const next = points[(i + 1) % points.length];
          return <line key={`ring-${point.angle}`} x1={point.x} y1={point.y} x2={next.x} y2={next.y} />;
        })}
      </g>
      <g strokeWidth="1.4">
        {points.map((point) => (
          <line
            key={`spoke-${point.angle}`}
            x1={CENTER}
            y1={CENTER}
            x2={point.x}
            y2={point.y}
            stroke={point.accent ? '#ff6a39' : '#ffffff'}
            strokeOpacity={point.accent ? 0.32 : 0.14}
          />
        ))}
      </g>
      <circle cx={CENTER} cy={CENTER} r="16" fill="#ff6a39" />
      {points.map((point) => (
        <circle
          key={`node-${point.angle}`}
          cx={point.x}
          cy={point.y}
          r={point.size}
          fill={point.accent ? '#ff6a39' : '#ffffff'}
          opacity={point.opacity}
        />
      ))}
    </svg>
  );
}
