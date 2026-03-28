import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code, Mail, ExternalLink, Coffee, Heart, Terminal, Play, Package, ChevronDown, ArrowRight, Sun, Moon, Copy, CheckCircle, Menu, X } from 'lucide-react';

const Github = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FadeInSection = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    style={{ willChange: 'transform, opacity' }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  const [typedText, setTypedText] = useState('');
  const [activeNav, setActiveNav] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bounceY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const copyEmail = () => {
    navigator.clipboard.writeText('piyushbhadade27@gmail.com');
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const navItems = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];
  const fullText = 'System.out.println("Access Granted >> Entering Piyush.dev...");';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          i = 0;
          setTypedText('');
        }, 2000);
      }
    }, 80);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'achievements', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveNav(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { icon: '☕', title: 'Java Development', desc: 'Building solid backend systems and enterprise applications', gradient: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30', glow: 'hover:shadow-amber-500/20', code: 'SpringBoot.run()' },
    { icon: '🤖', title: 'Android Development', desc: 'Creating apps people actually enjoy using, with Kotlin & modern tools', gradient: 'from-emerald-500/20 to-green-500/20', border: 'border-emerald-500/30', glow: 'hover:shadow-emerald-500/20', code: 'startActivity()' },
    { icon: '🌐', title: 'Web Development', desc: 'Full-stack web apps with React, Node.js and everything in between', gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', glow: 'hover:shadow-blue-500/20', code: 'React.render()' },
    { icon: '🏗️', title: 'System Design', desc: 'Architecting systems that scale and actually work in production', gradient: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30', glow: 'hover:shadow-violet-500/20', code: 'Microservices.scale()' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Making interfaces intuitive and pleasant to use', gradient: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', glow: 'hover:shadow-pink-500/20', code: 'MaterialDesign.apply()' },
  ];

  const projects = [
    { title: 'LinkUp (Parental Control)', desc: 'Real-time parental control platform with "Backend as the Law" architecture. Features dual-app sync via FCM and resilient app-blocking overlays.', tech: ['Android (Java)', 'Node.js', 'PostgreSQL', 'FCM'], gradient: 'from-orange-600 to-red-500', emoji: '🛡️', link: 'https://github.com/CreativeSpace27/Parental_Control.git' },
    { title: 'ASHA-EHR Backend', desc: 'Rural healthcare data system digitizing rural data collection in India. Features offline-first sync engine and strict hierarchical RBAC.', tech: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL'], gradient: 'from-violet-600 to-fuchsia-500', emoji: '🏥', link: 'https://github.com/Tracebycode/Asha-Ehr-Backend-.git' },
    { title: 'Problem Sphere', desc: 'Collaborative platform for sharing and solving real-world technical problems. Connects industry challenges with global innovators.', tech: ['Next.js', 'JavaScript', 'Firebase', 'API'], gradient: 'from-blue-600 to-indigo-500', emoji: '💡', link: 'https://github.com/CreativeSpace27/Problem_Sphere.git' },
    { title: 'College Campus', desc: 'Integrated management app for libraries, hostels, and departments. Streamlines admissions and student-staff coordination.', tech: ['Android', 'Java', 'XML', 'Firebase'], gradient: 'from-emerald-600 to-teal-500', emoji: '🏫', link: 'https://github.com/CreativeSpace27/College-Campus.git' },
  ];

  const achievements = [
    { title: 'SIH 2025 Finalist', subtitle: 'Smart India Hackathon', desc: 'Reached the national finals of Smart India Hackathon 2025, solving a complex real-world challenge through innovation.', icon: '✨', date: '2025' },
    { title: 'CodeSpark 1st Rank', subtitle: '72 Hour Build Challenge', desc: 'Won the first rank in a rigorous 72-hour building competition, showcasing rapid development and problem-solving skills.', icon: '🏆', date: 'August 2025' },
    { title: 'National Level 2nd Place', subtitle: 'Technical Project Competition', desc: 'Secured 2nd place for the "CollegeSpace" project, recognized for its comprehensive management features and social impact.', icon: '🥈', date: '2024' },
    { title: 'Gondia Conclave 3rd Rank', subtitle: 'Entrepreneurship & Codex', desc: 'Achieved 3rd rank at the Gondia Entrepreneurship Conclave and the Codex Project Competition for innovative ideas.', icon: '🥉', date: '2024' },
    { title: 'Codex 3rd Rank', subtitle: 'Project Competition', desc: 'Earned 3rd rank in the Codex Project Competition (Nov 2023 - Jan 2024) for technical excellence and project execution.', icon: '🎯', date: '2023-2024' },
  ];

  // FadeInSection is now defined outside the component to prevent remounting

  return (
    <div className={isDarkMode ? '' : 'light-theme'} style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", transition: 'all 0.3s' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }

        /* GPU acceleration for animated elements */
        .card, .project-card, .code-window, .btn-primary, .btn-secondary {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        section {
          will-change: auto;
          contain: layout style;
        }
        :root {
          --bg-primary: #09090b;
          --text-primary: #fafafa;
          --text-muted: #71717a;
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.06);
          --card-bg: rgba(255, 255, 255, 0.02);
          --line-color: rgba(255, 255, 255, 0.05);
          --nav-bg: rgba(9, 9, 11, 0.8);
        }

        .light-theme {
          --bg-primary: #ffffff;
          --text-primary: #09090b;
          --text-muted: #52525b;
          --glass-bg: rgba(0, 0, 0, 0.03);
          --glass-border: rgba(0, 0, 0, 0.08);
          --card-bg: rgba(0, 0, 0, 0.02);
          --line-color: rgba(0, 0, 0, 0.08);
          --nav-bg: rgba(255, 255, 255, 0.8);
        }

        body { background: var(--bg-primary); color: var(--text-primary); font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; transition: background 0.3s, color 0.3s; }

        .glass { background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); }
        .glass-strong { background: var(--glass-bg); backdrop-filter: blur(30px); border: 1px solid var(--glass-border); }

        .gradient-text {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 40%, #a855f7 70%, #6366f1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-subtle {
          background: linear-gradient(135deg, #d4d4d8 0%, #a1a1aa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-primary); }
        ::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

        .mono { font-family: 'JetBrains Mono', 'Fira Code', monospace; }

        .glow-line { height: 1px; background: linear-gradient(90deg, transparent, var(--line-color), var(--line-color), transparent); }

        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(3deg); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(1000%); } }
        @keyframes orbit { 0% { transform: rotate(0deg) translateX(300px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(300px) rotate(-360deg); } }

        @keyframes drift1 { 0%,100% { transform: translateY(0) translateX(0) rotate(0deg); } 33% { transform: translateY(-18px) translateX(8px) rotate(5deg); } 66% { transform: translateY(8px) translateX(-6px) rotate(-3deg); } }
        @keyframes drift2 { 0%,100% { transform: translateY(0) translateX(0) rotate(0deg); } 40% { transform: translateY(14px) translateX(-10px) rotate(-6deg); } 70% { transform: translateY(-10px) translateX(12px) rotate(4deg); } }
        @keyframes drift3 { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(8deg); } }

        .bg-icon {
          position: absolute; pointer-events: none; z-index: 0;
          color: var(--line-color);
          will-change: transform;
        }
        .bg-icon svg { width: 100%; height: 100%; }
        .bg-icon.accent-orange { color: rgba(249,115,22,0.06); }
        .bg-icon.accent-purple { color: rgba(168,85,247,0.06); }
        .bg-icon.accent-green { color: rgba(34,197,94,0.05); }
        .bg-icon.accent-blue { color: rgba(59,130,246,0.05); }

        .drift-1 { animation: drift1 12s ease-in-out infinite; }
        .drift-2 { animation: drift2 15s ease-in-out infinite; }
        .drift-3 { animation: drift3 10s ease-in-out infinite; }

        .float-anim { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .gradient-shift { background-size: 200% 200%; animation: gradient-shift 5s ease infinite; }

        .hero-bg { position: relative; overflow: hidden; }
        .hero-bg::before {
          content: ''; position: absolute; top: -50%; left: -50%; right: -50%; bottom: -50%;
          background: radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.08) 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.06) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 80%, rgba(99,102,241,0.05) 0%, transparent 50%);
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }

        .orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; pointer-events: none;
        }

        .code-window {
          background: var(--nav-bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.2), 0 0 0 1px var(--glass-border);
        }
        .code-window .titlebar {
          padding: 14px 18px; display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .code-window .dot { width: 12px; height: 12px; border-radius: 50%; }

        .line-num { color: #3f3f46; user-select: none; text-align: right; width: 32px; flex-shrink: 0; }
        .kw { color: #c792ea; } .cls { color: #ffcb6b; } .str { color: #c3e88d; }
        .fn { color: #82aaff; } .cmt { color: #545c6a; font-style: italic; }
        .var { color: #f78c6c; } .op { color: #89ddff; }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative; overflow: hidden;
        }
        .card::before {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          background: linear-gradient(135deg, var(--glass-bg), transparent);
          opacity: 0; transition: opacity 0.4s;
        }
        .card:hover { border-color: #f97316; transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .card:hover::before { opacity: 1; }

        .section-container {
          max-width: 1200px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative;
        }
        
        .responsive-grid-2 {
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }

        @media (max-width: 1024px) {
          .responsive-grid-2 { gap: 40px; }
          .section-container { padding: 0 24px; }
        }

        @media (max-width: 768px) {
          .responsive-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .desktop-only { display: none !important; }
          .mobile-stack { flex-direction: column !important; align-items: stretch !important; }
          .section-heading { font-size: 32px !important; }
          .hero-text { font-size: 16px !important; }
          section { padding: 60px 0 !important; }
        }

        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          transition: border-color 0.4s, background 0.4s;
          overflow: hidden; position: relative;
        }
        .project-card:hover { 
          border-color: #f97316; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.1), 0 0 20px rgba(249,115,22,0.1); 
        }

        .tag {
          padding: 4px 14px; border-radius: 100px; font-size: 12px; font-weight: 500;
          background: var(--glass-bg); border: 1px solid var(--glass-border);
          color: var(--text-muted); transition: all 0.3s;
        }
        .tag:hover { background: rgba(249,115,22,0.1); border-color: rgba(249,115,22,0.3); color: #f97316; }

        .nav-link { position: relative; padding: 6px 0; color: #71717a; transition: color 0.3s; }
        .nav-link:hover, .nav-link.active { color: #f97316; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: #f97316; transform: scaleX(0); transition: transform 0.3s; border-radius: 1px; }
        .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          background: linear-gradient(135deg, #f97316, #ea580c); color: white; border: none;
          border-radius: 14px; font-weight: 600; font-size: 14px; cursor: pointer;
          transition: all 0.3s; text-decoration: none; position: relative; overflow: hidden;
          box-shadow: 0 4px 15px rgba(249,115,22,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(249,115,22,0.4); }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          background: var(--glass-bg); color: var(--text-primary); border: 1px solid var(--glass-border);
          border-radius: 14px; font-weight: 600; font-size: 14px; cursor: pointer;
          transition: all 0.3s; text-decoration: none;
        }
        .btn-secondary:hover { background: var(--card-bg); border-color: #f97316; transform: translateY(-2px); }

        .section-heading { font-size: clamp(32px, 5vw, 48px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; }
        .section-label { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #f97316; margin-bottom: 12px; }

        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .phone-frame {
          width: 300px; height: 610px; border-radius: 44px;
          background: #18181b; border: 10px solid #27272a;
          position: relative; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.7), inset 0 0 15px rgba(255,255,255,0.05);
          display: flex; flex-direction: column; overflow: hidden;
        }
        .phone-frame::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, rgba(255,255,255,0.05) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.1) 100%);
        }
        .phone-screen {
          flex: 1; background: var(--bg-primary); margin: 6px; border-radius: 34px;
          overflow: hidden; display: flex; flex-direction: column; position: relative;
        }
        .phone-notch {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 120px; height: 26px; background: #18181b; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px;
          z-index: 10;
        }
        .phone-item {
          padding: 18px; border-bottom: 1px solid rgba(255,255,255,0.03);
          cursor: pointer; transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        .phone-item:hover { background: rgba(255,255,255,0.02); }
        .phone-item.active { background: rgba(61,220,132,0.08); }
        .phone-item.active::before {
          content: ''; position: absolute; left: 0; top: 12px; bottom: 12px;
          width: 3px; background: #3DDC84; border-radius: 0 4px 4px 0;
        }
        .phone-navbar {
          padding: 30px 20px 15px; background: rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: 'linear-gradient(90deg, #f97316, #ef4444, #a855f7, #6366f1)', transformOrigin: '0%', scaleX }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(9,9,11,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.a href="#" whileHover={{ scale: 1.02 }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #3DDC84, #2EA05F)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24C14.86 8.35 13.47 8.01 12 8.01s-2.86.34-4.47.9L5.65 5.67c-.19-.29-.55-.38-.84-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="mono" style={{ fontSize: 11, color: '#3DDC84', letterSpacing: '0.05em', opacity: 0.8 }}>public class</span>
              <span className="mono" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginTop: -2 }}>Piyush <span style={{ color: '#3DDC84' }}>{'{'}</span></span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-muted)', opacity: 0.6, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>src / main / java / com.piyush</span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3DDC84', boxShadow: '0 0 6px rgba(61,220,132,0.4)' }} />
              <span style={{ fontSize: 9 }}>JVM: ACTIVE</span>
            </div>
            <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
              {navItems.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link mono ${activeNav === item.toLowerCase() ? 'active' : ''}`} style={{ fontSize: 12, textDecoration: 'none', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  <span style={{ opacity: 0.5, marginRight: 2 }}>@</span>{item}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <motion.a href="#contact" className="desktop-only btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ padding: '10px 24px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
              <Mail size={16} /> Let's Talk
            </motion.a>

            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 40, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)', cursor: 'pointer', outline: 'none'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: 10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-only"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 40, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)', cursor: 'pointer', outline: 'none'
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(30px)', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden' }}
              className="mobile-only"
            >
              <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                {navItems.map(item => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="mono" 
                    style={{ fontSize: 18, textDecoration: 'none', color: activeNav === item.toLowerCase() ? '#f97316' : 'var(--text-primary)', fontWeight: 600 }}
                  >
                    <span style={{ opacity: 0.5, marginRight: 8 }}>@</span>{item}
                  </a>
                ))}
                <motion.a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary" 
                  style={{ justifyContent: 'center', marginTop: 10 }}
                >
                  <Mail size={18} /> Let's Talk
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="orb pulse-glow" style={{ width: 500, height: 500, top: '10%', left: '-5%', background: 'radial-gradient(circle, #f97316, transparent)' }} />
        <div className="orb pulse-glow" style={{ width: 400, height: 400, bottom: '10%', right: '0%', background: 'radial-gradient(circle, #a855f7, transparent)', animationDelay: '1.5s' }} />

        <div className="bg-icon accent-green drift-1" style={{ width: 80, top: '8%', right: '12%' }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24C14.86 8.35 13.47 8.01 12 8.01s-2.86.34-4.47.9L5.65 5.67c-.19-.29-.55-.38-.84-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" /></svg>
        </div>
        <div className="bg-icon accent-orange drift-2" style={{ width: 60, top: '22%', left: '8%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M7 8l-4 4 4 4M17 8l4 4-4 4" /></svg>
        </div>
        <div className="bg-icon drift-3" style={{ width: 50, bottom: '18%', left: '5%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
        </div>
        <div className="bg-icon accent-orange drift-2" style={{ width: 55, bottom: '25%', right: '6%', animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></svg>
        </div>
        <div className="bg-icon accent-purple drift-1" style={{ width: 65, top: '55%', right: '3%', animationDelay: '5s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
        </div>
        <div className="bg-icon drift-3" style={{ width: 45, top: '70%', left: '15%', animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
        </div>
        <div className="bg-icon accent-green drift-2" style={{ width: 50, top: '40%', left: '3%', animationDelay: '4s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s-.3 3.5 1.5 6c1.8 2.5.5 7-3 9" /><path d="M11 20c0-4 2-8 6-10" /></svg>
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="responsive-grid-2">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', marginBottom: 28 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3DDC84', boxShadow: '0 0 8px #3DDC84' }} />
                <span className="mono" style={{ fontSize: 13, color: '#3DDC84', fontWeight: 500 }}>Available for opportunities</span>
              </motion.div>

              <h1 className="section-heading" style={{ lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 20 }}>
                Hey, I'm{' '}<br />
                <span className="gradient-text">Piyush Bhadade</span>
              </h1>

              <p className="hero-text" style={{ fontSize: 18, lineHeight: 1.7, color: '#a1a1aa', maxWidth: 480, marginBottom: 32 }}>
                Software Developer crafting <strong style={{ color: '#d4d4d8' }}>Android apps</strong>,{' '}
                <strong style={{ color: '#d4d4d8' }}>backend systems</strong>, and{' '}
                <strong style={{ color: '#d4d4d8' }}>web experiences</strong> that people love to use.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
                {['Java', 'Kotlin', 'React', 'Node.js', 'Android'].map((tech, i) => (
                  <motion.span key={tech} className="tag mono" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.08 }}>
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 14 }}>
                <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Play size={16} /> View Projects
                </motion.a>
                <motion.a href="#contact" className="btn-secondary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Get in Touch <ArrowRight size={16} />
                </motion.a>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
                {[
                  { Icon: Github, label: 'GitHub', href: 'https://github.com/CreativeSpace27' },
                  { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/piyush-bhadade-18718623b/' },
                  { Icon: Mail, label: 'Email', href: 'mailto:piyushbhadade27@gmail.com' }
                ].map(({ Icon, label, href }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} whileHover={{ scale: 1.15, y: -3 }} style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', transition: 'all 0.3s', textDecoration: 'none' }}>
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <div className="code-window">
                <div className="titlebar">
                  <div className="dot" style={{ background: '#ff5f57' }} />
                  <div className="dot" style={{ background: '#febc2e' }} />
                  <div className="dot" style={{ background: '#28c840' }} />
                  <span className="mono" style={{ marginLeft: 12, fontSize: 12, color: 'var(--text-muted)' }}>Developer.java</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: '#3f3f46' }} className="mono">utf-8</span>
                </div>
                <div style={{ padding: '24px 20px' }} className="mono" >
                  <div style={{ fontSize: 13, lineHeight: 2 }}>
                    {[
                      [1, <><span className="kw">public class</span> <span className="cls">Developer</span> {'{'}</>],
                      [2, <>&nbsp;&nbsp;<span className="kw">private</span> String <span className="var">name</span> = <span className="str">"Piyush Bhadade"</span>;</>],
                      [3, <>&nbsp;&nbsp;<span className="kw">private</span> String <span className="var">role</span> = <span className="str">"Software Developer"</span>;</>],
                      [4, <>&nbsp;&nbsp;<span className="kw">private</span> String <span className="var">location</span> = <span className="str">"India"</span>;</>],
                      [5, <>&nbsp;&nbsp;<span className="kw">private</span> String <span className="var">education</span> = <span className="str">"BE Computer Engg."</span>;</>],
                      [6, <>&nbsp;&nbsp;<span className="kw">private</span> String[] <span className="var">skills</span> = {'{'}</>],
                      [7, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Java"</span>, <span className="str">"Kotlin"</span>, <span className="str">"Android"</span>,</>],
                      [8, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Node.js"</span>, <span className="str">"React"</span>,</>],
                      [9, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"System Design"</span>, <span className="str">"UI/UX"</span></>],
                      [10, <>&nbsp;&nbsp;{'}'};</>],
                      [11, <>&nbsp;&nbsp;<span className="kw">private</span> String <span className="var">passion</span> = <span className="str">"Building things"</span>;</>],
                      [12, <>{'}'}</>],
                    ].map(([num, content]) => (
                      <div key={num} style={{ display: 'flex', gap: 16 }}>
                        <span className="line-num">{num}</span>
                        <span>{content}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span style={{ color: '#22c55e' }}>❯</span>
                      <span style={{ color: '#4ade80' }}>{typedText}<span style={{ display: 'inline-block', width: 2, height: 16, background: '#4ade80', marginLeft: 2, animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} /></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
          <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
        </motion.div>
      </section>

      <div className="glow-line" />

      <section id="about" className="grid-bg" style={{ padding: '120px 0' }}>
        <div className="section-container">
          <FadeInSection>
            <div className="section-label mono">// About Me</div>
            <h2 className="section-heading" style={{ marginBottom: 60 }}>
              A bit about <span className="gradient-text">who I am</span>
            </h2>
          </FadeInSection>

          <div className="responsive-grid-2" style={{ gap: 48 }}>
            <FadeInSection delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { emoji: '👋', text: "Hi! I'm Piyush — a Computer Engineering student who spends most of his time writing code, debugging apps, and wondering why something that worked yesterday is broken today." },
                  { emoji: '📱', text: "I love Android development. There's something uniquely satisfying about building an app from scratch and seeing it run on a real device. Kotlin and Jetpack Compose are my tools of choice." },
                  { emoji: '☕', text: "On the backend side, Java and Node.js are my bread and butter. I build systems designed to be reliable and handle real-world traffic." },
                  { emoji: '🎨', text: "Good design isn't just about aesthetics — it's about making things intuitive. I care deeply about UX because great software should never need a manual." },
                ].map(({ emoji, text }, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: 20, borderRadius: 16, background: 'var(--card-bg)', border: '1px solid var(--glass-border)', transition: 'all 0.3s' }}>
                    <span style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{emoji}</span>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#a1a1aa' }}>{text}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="code-window" style={{ height: '100%' }}>
                <div className="titlebar">
                  <div className="dot" style={{ background: '#ff5f57' }} />
                  <div className="dot" style={{ background: '#febc2e' }} />
                  <div className="dot" style={{ background: '#28c840' }} />
                  <span className="mono" style={{ marginLeft: 12, fontSize: 12, color: 'var(--text-muted)' }}>AboutMe.java</span>
                </div>
                <div style={{ padding: '24px 20px' }} className="mono">
                  <div style={{ fontSize: 13, lineHeight: 2.1 }}>
                    {[
                      [1, <><span className="kw">public class</span> <span className="cls">AboutMe</span> {'{'}</>],
                      [2, <>&nbsp;&nbsp;<span className="cmt">// Personal Info</span></>],
                      [3, <>&nbsp;&nbsp;<span className="kw">private final</span> String education =</>],
                      [4, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"BE Computer Engineering"</span>;</>],
                      [5, <>&nbsp;&nbsp;<span className="kw">private final</span> String focus =</>],
                      [6, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Android & Full-Stack"</span>;</>],
                      [7, <>&nbsp;&nbsp;<span className="kw">private final</span> String status =</>],
                      [8, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Learning & Building"</span>;</>],
                      [9, <></>],
                      [10, <>&nbsp;&nbsp;<span className="cmt">// Core Values</span></>],
                      [11, <>&nbsp;&nbsp;<span className="kw">public void</span> <span className="fn">approach</span>() {'{'}</>],
                      [12, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">println</span>(<span className="str">"Write clean code"</span>);</>],
                      [13, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">println</span>(<span className="str">"Build user-friendly apps"</span>);</>],
                      [14, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">println</span>(<span className="str">"Never stop learning"</span>);</>],
                      [15, <>&nbsp;&nbsp;{'}'}</>],
                      [16, <>{'}'}</>],
                    ].map(([num, content]) => (
                      <div key={num} style={{ display: 'flex', gap: 16 }}>
                        <span className="line-num">{num}</span>
                        <span>{content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="skills" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-icon accent-orange drift-1" style={{ width: 70, top: '10%', right: '5%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
        </div>
        <div className="bg-icon accent-purple drift-3" style={{ width: 55, bottom: '15%', left: '4%', animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>
        </div>
        <div className="bg-icon accent-green drift-2" style={{ width: 45, top: '50%', left: '8%', animationDelay: '4s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1M16 3h1a2 2 0 012 2v5a2 2 0 002 2 2 2 0 00-2 2v5a2 2 0 01-2 2h-1" /></svg>
        </div>
        <div className="section-container">
          <FadeInSection>
            <div className="section-label mono">// Skills & Expertise</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Technologies I <span className="gradient-text">work with</span>
            </h2>
            <p className="mono" style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 60 }}>
              import {'{'} expertise {'}'} from '@piyush/skills'
            </p>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {skills.map((skill, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="card" style={{ padding: 32, height: '100%', cursor: 'default' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{skill.icon}</div>
                  <p className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>.{skill.code}</p>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>{skill.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>{skill.desc}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="projects" className="grid-bg" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-icon accent-orange drift-2" style={{ width: 60, top: '8%', left: '4%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14l5-5-5-5" /><path d="M20 9H9.5A5.5 5.5 0 004 14.5v0A5.5 5.5 0 009.5 20H13" /></svg>
        </div>
        <div className="bg-icon accent-blue drift-1" style={{ width: 55, bottom: '10%', right: '6%', animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
        </div>
        <div className="bg-icon accent-green drift-3" style={{ width: 50, top: '40%', right: '3%', animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" /></svg>
        </div>
        <div className="section-container">
          <FadeInSection>
            <div className="section-label mono">// Featured Work</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Projects I've <span className="gradient-text">built</span>
            </h2>
            <p className="mono" style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 60 }}>
              const projects = await fetchProjects()
            </p>
          </FadeInSection>

          <div className="responsive-grid-2" style={{ gap: 24 }}>
            {projects.map((project, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: -2
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="project-card" 
                  style={{ height: '100%', perspective: 1000 }}
                >
                  <div style={{ height: 3, background: `linear-gradient(90deg, var(--tw-gradient-from, ${project.gradient.split(' ')[0].replace('from-', '#')}), var(--tw-gradient-to, ${project.gradient.split(' ')[1].replace('to-', '#')}))` }} />
                  <div style={{ padding: 32 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                      <span style={{ fontSize: 40 }}>{project.emoji}</span>
                      <span className="mono" style={{ fontSize: 11, color: '#3f3f46' }}>Project {i + 1}</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{project.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 20 }}>{project.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                      {project.tech.map((tech, j) => (
                        <span key={j} className="tag mono">{tech}</span>
                      ))}
                    </div>
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ x: 8, color: '#fb923c' }} 
                      className="mono" 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: 6, 
                        fontSize: 13, 
                        color: '#f97316', 
                        textDecoration: 'none', 
                        fontWeight: 500,
                        transition: 'color 0.2s'
                      }}
                    >
                      View on GitHub <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="achievements" style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-icon accent-orange drift-1" style={{ width: 70, top: '10%', left: '10%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        </div>
        <div className="bg-icon accent-purple drift-2" style={{ width: 60, bottom: '20%', right: '15%', animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
        </div>
        <div className="bg-icon accent-blue drift-3" style={{ width: 50, top: '40%', right: '5%', animationDelay: '4s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0012 0V2z" /></svg>
        </div>

        <div className="section-container">
          <FadeInSection>
            <div className="section-label mono">// Notable Recognition</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Milestones & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="mono" style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 60 }}>
              const milestones = getAchievements()
            </p>
          </FadeInSection>

          <div className="responsive-grid-2" style={{ gap: 60 }}>
            <FadeInSection delay={0.1}>
              <div className="phone-frame" style={{ margin: '0 auto' }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-navbar">
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>Achievements</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{achievements.length} Milestones</div>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 20 }}>
                    {achievements.map((item, i) => (
                      <div
                        key={i}
                        className={`phone-item ${selectedAchievement === i ? 'active' : ''}`}
                        onClick={() => setSelectedAchievement(i)}
                      >
                        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                          <span style={{ fontSize: 24 }}>{item.icon}</span>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: selectedAchievement === i ? '#f97316' : '#e4e4e7' }}>{item.title}</div>
                            <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{item.date}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ height: 4, width: 80, background: 'var(--line-color)', borderRadius: 10, margin: '10px auto' }} />
                </div>
              </div>
            </FadeInSection>

            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAchievement}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="card"
                  style={{ padding: 'clamp(24px, 5vw, 60px)', position: 'relative', overflow: 'visible' }}
                >
                  <div style={{ position: 'absolute', top: -30, right: -20, fontSize: 120, opacity: 0.05, pointerEvents: 'none' }}>
                    {achievements[selectedAchievement].icon}
                  </div>

                  <div className="section-label mono" style={{ marginBottom: 16 }}>
                    // {achievements[selectedAchievement].subtitle}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
                    <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>
                      {achievements[selectedAchievement].icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
                        {achievements[selectedAchievement].title}
                      </h3>
                      <div className="mono" style={{ fontSize: 14, color: '#f97316' }}>
                        {achievements[selectedAchievement].date}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 20, lineHeight: 1.7, color: '#a1a1aa', maxWidth: 600 }}>
                    {achievements[selectedAchievement].desc}
                  </p>

                  <div style={{ marginTop: 40, paddingTop: 30, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 20 }}>
                    <div style={{ padding: '12px 20px', borderRadius: 12, background: 'var(--glass-bg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verification</div>
                      <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>Authentic Credential</div>
                    </div>
                    <div style={{ padding: '12px 20px', borderRadius: 12, background: 'var(--glass-bg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</div>
                      <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>Professional Milestone</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="contact" style={{ padding: '120px 0' }}>
        <div className="section-container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <FadeInSection>
            <div style={{ fontSize: 56, marginBottom: 24 }} className="float-anim">✉️</div>
            <div className="section-label mono">// Get in Touch</div>
            <h2 className="section-heading" style={{ marginBottom: 20 }}>
              Let's build something <span className="gradient-text">amazing</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="code-window" style={{ marginBottom: 40, textAlign: 'left' }}>
              <div className="titlebar">
                <div className="dot" style={{ background: '#ff5f57' }} />
                <div className="dot" style={{ background: '#febc2e' }} />
                <div className="dot" style={{ background: '#28c840' }} />
                <span className="mono" style={{ marginLeft: 12, fontSize: 12, color: 'var(--text-muted)' }}>Contact.java</span>
              </div>
              <div style={{ padding: '24px 20px' }} className="mono">
                <div style={{ fontSize: 13, lineHeight: 2.1 }}>
                  {[
                    [1, <><span className="kw">public static void</span> <span className="fn">collaborate</span>() {'{'}</>],
                    [2, <>&nbsp;&nbsp;String <span className="var">email</span> = <span className="str">"piyushbhadade27@gmail.com"</span>;</>],
                    [3, <>&nbsp;&nbsp;System.out.<span className="fn">println</span>(<span className="str">"Let's build something cool!"</span>);</>],
                    [4, <>&nbsp;&nbsp;<span className="fn">connect</span>(email);</>],
                    [5, <>{'}'}</>],
                  ].map(([num, content]) => (
                    <div key={num} style={{ display: 'flex', gap: 16 }}>
                      <span className="line-num">{num}</span>
                      <span>{content}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 40 }}>
              <motion.a href="mailto:piyushbhadade27@gmail.com?subject=Let%27s%20Connect%21&body=Hi%20Piyush%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Mail size={18} /> Send Email
              </motion.a>
              <motion.button onClick={copyEmail} className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ borderStyle: 'dashed' }}>
                <Copy size={18} /> Copy Email
              </motion.button>
              <motion.a href="https://www.linkedin.com/in/piyush-bhadade-18718623b/" target="_blank" rel="noopener noreferrer" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </div>

            <AnimatePresence>
              {showCopyToast && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'fixed', bottom: 40, left: '50%', transform: 'translateX(-50%)',
                    background: '#22c55e', color: 'white', padding: '12px 24px',
                    borderRadius: 12, fontWeight: 600, fontSize: 14, zIndex: 10000,
                    boxShadow: '0 10px 30px rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', gap: 10
                  }}
                >
                  <CheckCircle size={16} fill="white" stroke="#22c55e" /> Copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
              {[
                { Icon: Github, label: 'GitHub', href: 'https://github.com/CreativeSpace27' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/piyush-bhadade-18718623b/' },
                { Icon: Mail, label: 'Email', href: 'mailto:piyushbhadade27@gmail.com?subject=Let%27s%20Connect%21&body=Hi%20Piyush%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21' }
              ].map(({ Icon, label, href }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} whileHover={{ scale: 1.2, y: -3 }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s', textDecoration: 'none' }}>
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p className="mono" style={{ fontSize: 13, color: '#3f3f46', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          Made with <Heart size={14} style={{ color: '#ef4444' }} fill="#ef4444" /> and <Coffee size={14} style={{ color: '#f59e0b' }} />
        </p>
        <p className="mono" style={{ fontSize: 12, color: '#27272a', marginTop: 8 }}>
          © 2026 Piyush Bhadade — Thanks for visiting!
        </p>
      </footer>
    </div>
  );
}
