export function ClockDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape, slightly offset */}
      <ellipse cx="32" cy="32" rx="16" ry="16" fill="#10b981" opacity="0.3" />
      {/* Clock outline */}
      <circle
        cx="30"
        cy="30"
        r="14"
        stroke="#10b981"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Clock hands */}
      <line
        x1="30"
        y1="30"
        x2="30"
        y2="24"
        stroke="#10b981"
        strokeWidth="2.5"
      />
      <line
        x1="30"
        y1="30"
        x2="40"
        y2="30"
        stroke="#10b981"
        strokeWidth="2.5"
      />
      {/* Center dot */}
      <circle cx="30" cy="30" r="2" fill="#10b981" />
    </svg>
  );
}

export function LockDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <rect
        x="32"
        y="32"
        width="20"
        height="16"
        rx="3"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Lock body */}
      <rect x="30" y="30" width="16" height="12" rx="2" fill="#10b981" />
      {/* Lock shackle */}
      <rect
        x="34"
        y="24"
        width="8"
        height="8"
        rx="4"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.5"
      />
      {/* Keyhole */}
      <circle cx="38" cy="36" r="2" fill="white" />
      <rect x="37" y="36" width="2" height="4" fill="white" />
    </svg>
  );
}

export function ShieldDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <path
        d="M32 32 L44 26 L38 42 L26 42 L20 26 Z"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Shield outline */}
      <path
        d="M30 30 L42 24 L36 40 L24 40 L18 24 Z"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.5"
      />
      {/* Shield fill */}
      <path
        d="M30 30 L40 25 L35 38 L25 38 L20 25 Z"
        fill="#10b981"
        opacity="0.1"
      />
      {/* Checkmark */}
      <path
        d="M26 32 L30 36 L36 28"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <path
        d="M32 32 L48 32 L42 44 L30 44 L24 32 Z"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Message bubble */}
      <path d="M30 30 L46 30 L40 42 L28 42 L22 30 Z" fill="#10b981" />
      {/* Message lines */}
      <rect x="26" y="34" width="12" height="2" rx="1" fill="white" />
      <rect x="26" y="37" width="8" height="2" rx="1" fill="white" />
      <rect x="26" y="40" width="10" height="2" rx="1" fill="white" />
    </svg>
  );
}

export function StarDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <path
        d="M32 32 L36 26 L40 32 L36 38 L32 32 Z"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Star outline */}
      <path d="M30 30 L34 24 L38 30 L34 36 L30 30 Z" fill="#10b981" />
      {/* Star center */}
      <circle cx="34" cy="30" r="2" fill="white" />
    </svg>
  );
}

export function HeartDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <path
        d="M32 32 C32 28 36 26 38 28 C40 30 40 34 38 36 C36 38 32 36 32 32 Z"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Heart shape */}
      <path
        d="M30 30 C30 26 34 24 36 26 C38 28 38 32 36 34 C34 36 30 34 30 30 Z"
        fill="#10b981"
      />
      {/* Heart highlight */}
      <path
        d="M32 28 C32 26 34 25 35 26 C36 27 36 29 35 30 C34 31 32 30 32 28 Z"
        fill="white"
        opacity="0.6"
      />
    </svg>
  );
}

export function LocationDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <path d="M32 32 L38 42 L26 42 L32 32 Z" fill="#10b981" opacity="0.3" />
      {/* Pin shape */}
      <path d="M30 30 L36 40 L24 40 L30 30 Z" fill="#10b981" />
      {/* Pin circle */}
      <circle cx="30" cy="28" r="4" fill="#10b981" />
      {/* Pin center */}
      <circle cx="30" cy="28" r="1.5" fill="white" />
    </svg>
  );
}

export function VoiceDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <rect
        x="32"
        y="32"
        width="12"
        height="20"
        rx="6"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Microphone body */}
      <rect x="30" y="30" width="8" height="16" rx="4" fill="#10b981" />
      {/* Microphone top */}
      <rect x="28" y="26" width="12" height="6" rx="3" fill="#10b981" />
      {/* Sound waves */}
      <path
        d="M42 34 Q46 34 46 38 Q46 42 42 42"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M46 36 Q50 36 50 40 Q50 44 46 44"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function NoteDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <rect
        x="32"
        y="32"
        width="20"
        height="24"
        rx="2"
        fill="#10b981"
        opacity="0.3"
      />
      {/* Note paper */}
      <rect
        x="30"
        y="30"
        width="16"
        height="20"
        rx="2"
        fill="white"
        stroke="#10b981"
        strokeWidth="2"
      />
      {/* Lines */}
      <rect x="34" y="34" width="8" height="2" rx="1" fill="#10b981" />
      <rect x="34" y="38" width="10" height="2" rx="1" fill="#10b981" />
      <rect x="34" y="42" width="6" height="2" rx="1" fill="#10b981" />
      <rect x="34" y="46" width="8" height="2" rx="1" fill="#10b981" />
    </svg>
  );
}

export function CheckDoodle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Shadow shape */}
      <circle cx="32" cy="32" r="16" fill="#10b981" opacity="0.3" />
      {/* Circle */}
      <circle cx="30" cy="30" r="14" fill="#10b981" />
      {/* Checkmark */}
      <path
        d="M22 30 L28 36 L38 24"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
