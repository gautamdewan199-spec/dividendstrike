// ============================================
// DIVIDENDSTRIKE — AI SCORING ENGINE
// ============================================

const AI = {
    health(s) {
        if (!s.paysDividend) return Math.min(25, s.health || 5);
        let sc = 0;
        sc += Math.min(1, (s.divConsistency || 0) / 28) * 22;
        sc += Math.min(1, s.payoutRatio > 0 ? Math.min(s.payoutRatio, 80) / 80 : 0.5) * 14;
        sc += ((s.promoter || 0) / 75) * 13;
        sc += ((s.ddt || 0) / 10) * 10;
        sc += ((s.buybackHistory || 0) / 6) * 8;
        const cm = { 'Very Strong': 1, 'Strong': 0.82, 'Moderate': 0.55, 'Neutral': 0.38, 'Weak': 0.18 };
        sc += (cm[s.fiidii] || 0.4) * 11;
        sc += ((s.pe || 30) < 25 ? 0.8 : (s.pe || 30) < 50 ? 0.5 : 0.3) * 7;
        sc += Math.min(1, Math.max(0, (s.fcf || 0)) / 50000) * 8;
        sc += Math.max(0, 1 - (s.de || 1) / 3) * 7;
        return Math.min(98, Math.round(sc));
    },

    growth(s) {
        if (!s.paysDividend) return { cagr: 0, conf: 0, sig: '⚪ No Dividend' };
        const pf = (s.promoter || 30) > 55 ? 1.12 : (s.promoter || 30) > 30 ? 1.05 : 0.95;
        const pof = (s.payoutRatio || 50) < 65 ? 1.08 : (s.payoutRatio || 50) > 88 ? 0.88 : 1;
        const cm = { 'Very Strong': 1.15, 'Strong': 1.07, 'Moderate': 0.97, 'Neutral': 0.9, 'Weak': 0.8 };
        const cf = cm[s.fiidii] || 0.95;
        const pg = (s.divGrowth3Y || 0) * pf * pof * cf;
        return {
            cagr: Math.round(pg * 10) / 10,
            conf: Math.min(95, Math.round(55 + ((s.divConsistency || 0) / 28) * 25)),
            sig: pg > 20 ? '🚀 High Growth' : pg > 10 ? '✅ Steady' : pg > 3 ? '📊 Moderate' : '⚠️ Low'
        };
    },

    rec(s) {
        if (!s.paysDividend) return { t: 'No Dividend', c: 'gray' };
        const h = this.health(s), p = this.growth(s);
        if (h >= 85 && p.cagr > 15) return { t: 'Strong Buy', c: 'green' };
        if (h >= 72 && p.cagr > 8) return { t: 'Buy', c: 'blue' };
        if (h >= 60 && p.cagr > 3) return { t: 'Hold', c: 'yellow' };
        return { t: 'Review', c: 'red' };
    },

    sustain(s) {
        if (!s.paysDividend) return { sc: 0, r: 'N/A', c: 'gray' };
        const fc = (s.fcf || 0) > 0 ? Math.min(2, ((s.fcf || 0) / 1000) / ((s.divPerShare || 1) * 100)) : 0;
        const pc = (s.payoutRatio || 50) < 40 ? 1 : (s.payoutRatio || 50) < 65 ? 0.8 : (s.payoutRatio || 50) < 85 ? 0.5 : 0.2;
        const ds = Math.max(0, 1 - (s.de || 1) / 2);
        const cf = (s.divConsistency || 0) / 30;
        const score = Math.round((fc * 0.35 + pc * 0.25 + ds * 0.2 + cf * 0.2) * 100);
        return {
            sc: Math.min(98, score),
            r: score >= 75 ? 'Highly Sustainable' : score >= 55 ? 'Sustainable' : score >= 35 ? 'Moderate' : 'At Risk',
            c: score >= 75 ? 'green' : score >= 55 ? 'blue' : score >= 35 ? 'yellow' : 'red'
        };
    }
};

console.log('🤖 AI Engine loaded');
