// ============================================
// DIVIDENDSTRIKE — STOCK DATABASE (45 NSE Stocks)
// ============================================

const STOCK_DATABASE = [
    {s:'RELIANCE',n:'Reliance Industries Ltd.',sec:'Oil & Gas',p:2850.50,pe:28.5,dps:9.00,dy:0.32,dg:8.5,dc:20,bh:2,pr:12,ph:50.33,fi:'Very Strong',mc:'₹19.3L Cr',dd:9.2,hl:72,fc:85000,de:0.45,roe:9.5,eps:100.5},
    {s:'TCS',n:'Tata Consultancy Services Ltd.',sec:'IT',p:4250.00,pe:32.5,dps:73.00,dy:1.72,dg:16.5,dc:24,bh:6,pr:85,ph:72.30,fi:'Very Strong',mc:'₹15.5L Cr',dd:9.7,hl:88,fc:42000,de:0,roe:48.5,eps:130.8},
    {s:'HDFCBANK',n:'HDFC Bank Ltd.',sec:'Banking',p:1720.50,pe:22.8,dps:20.50,dy:1.19,dg:14.8,dc:26,bh:0,pr:25,ph:25.52,fi:'Very Strong',mc:'₹13.1L Cr',dd:8.8,hl:76,fc:55000,de:0,roe:16.5,eps:75.5},
    {s:'INFY',n:'Infosys Ltd.',sec:'IT',p:1850.00,pe:26.5,dps:40.50,dy:2.19,dg:17.2,dc:22,bh:4,pr:78,ph:15.10,fi:'Strong',mc:'₹7.7L Cr',dd:9.3,hl:83,fc:28000,de:0,roe:38.2,eps:69.8},
    {s:'ICICIBANK',n:'ICICI Bank Ltd.',sec:'Banking',p:1150.00,pe:18.5,dps:10.00,dy:0.87,dg:15.5,dc:22,bh:0,pr:18,ph:0,fi:'Very Strong',mc:'₹8.1L Cr',dd:8.5,hl:75,fc:48000,de:0,roe:19.2,eps:62.2},
    {s:'HINDUNILVR',n:'Hindustan Unilever Ltd.',sec:'FMCG',p:2850.00,pe:58.2,dps:42.00,dy:1.47,dg:14.5,dc:30,bh:1,pr:90,ph:61.90,fi:'Very Strong',mc:'₹6.7L Cr',dd:9.8,hl:86,fc:8500,de:0,roe:25.8,eps:48.9},
    {s:'ITC',n:'ITC Ltd.',sec:'FMCG',p:485.30,pe:28.5,dps:15.50,dy:3.19,dg:12.8,dc:28,bh:3,pr:82,ph:29.40,fi:'Strong',mc:'₹6.1L Cr',dd:9.2,hl:87,fc:16000,de:0.01,roe:30.5,eps:17.0},
    {s:'SBIN',n:'State Bank of India',sec:'Banking',p:780.00,pe:10.5,dps:11.30,dy:1.45,dg:18.2,dc:18,bh:0,pr:15,ph:57.54,fi:'Strong',mc:'₹7.0L Cr',dd:8.0,hl:74,fc:35000,de:0,roe:18.5,eps:74.3},
    {s:'NTPC',n:'NTPC Ltd.',sec:'Power',p:285.00,pe:14.5,dps:7.25,dy:2.54,dg:10.5,dc:25,bh:1,pr:38,ph:51.10,fi:'Strong',mc:'₹2.8L Cr',dd:9.0,hl:82,fc:15000,de:1.2,roe:19.5,eps:19.7},
    {s:'ONGC',n:'Oil & Natural Gas Corp Ltd.',sec:'Oil & Gas',p:220.00,pe:7.5,dps:11.50,dy:5.23,dg:9.0,dc:22,bh:2,pr:40,ph:58.89,fi:'Strong',mc:'₹2.8L Cr',dd:8.8,hl:79,fc:28000,de:0.55,roe:16.8,eps:29.3},
    {s:'COALINDIA',n:'Coal India Ltd.',sec:'Mining',p:325.00,pe:8.2,dps:25.50,dy:7.85,dg:8.2,dc:15,bh:2,pr:65,ph:63.13,fi:'Neutral',mc:'₹2.0L Cr',dd:7.8,hl:92,fc:18000,de:0.05,roe:42.5,eps:39.6},
    {s:'POWERGRID',n:'Power Grid Corp of India Ltd.',sec:'Power',p:285.00,pe:15.8,dps:12.50,dy:4.39,dg:15.9,dc:20,bh:1,pr:60,ph:51.34,fi:'Strong',mc:'₹2.7L Cr',dd:8.5,hl:82,fc:12000,de:1.5,roe:22.0,eps:18.0},
    {s:'HCLTECH',n:'HCL Technologies Ltd.',sec:'IT',p:1680.00,pe:28.9,dps:40.00,dy:2.38,dg:18.5,dc:22,bh:5,pr:75,ph:60.30,fi:'Strong',mc:'₹4.6L Cr',dd:8.9,hl:78,fc:15000,de:0.05,roe:28.5,eps:58.1},
    {s:'BAJAJ-AUTO',n:'Bajaj Auto Ltd.',sec:'Auto',p:4980.00,pe:22.1,dps:140.00,dy:2.81,dg:22.4,dc:25,bh:4,pr:68,ph:53.70,fi:'Strong',mc:'₹1.4L Cr',dd:9.5,hl:91,fc:6500,de:0,roe:24.5,eps:225.3},
    {s:'NESTLEIND',n:'Nestlé India Ltd.',sec:'FMCG',p:12350.00,pe:72.5,dps:225.00,dy:1.82,dg:18.7,dc:30,bh:2,pr:88,ph:62.76,fi:'Strong',mc:'₹1.2L Cr',dd:9.8,hl:85,fc:2800,de:0,roe:42.5,eps:170.3},
    {s:'SUNPHARMA',n:'Sun Pharmaceutical Inds.',sec:'Pharma',p:1550.00,pe:38.0,dps:13.00,dy:0.84,dg:25.5,dc:20,bh:2,pr:30,ph:54.50,fi:'Strong',mc:'₹3.7L Cr',dd:8.5,hl:80,fc:7500,de:0.15,roe:16.5,eps:40.8},
    {s:'TITAN',n:'Titan Company Ltd.',sec:'Consumer Durables',p:3850.00,pe:92.0,dps:10.00,dy:0.26,dg:18.0,dc:18,bh:1,pr:22,ph:52.90,fi:'Strong',mc:'₹3.4L Cr',dd:8.5,hl:68,fc:4200,de:0.55,roe:32.5,eps:41.8},
    {s:'BEL',n:'Bharat Electronics Ltd.',sec:'Defense',p:250.00,pe:35.0,dps:3.00,dy:1.20,dg:20.0,dc:18,bh:2,pr:40,ph:66.10,fi:'Very Strong',mc:'₹1.8L Cr',dd:8.5,hl:76,fc:4800,de:0,roe:25.5,eps:7.14},
    {s:'IOC',n:'Indian Oil Corporation Ltd.',sec:'Oil & Gas',p:135.00,pe:8.5,dps:6.50,dy:4.81,dg:7.5,dc:20,bh:3,pr:42,ph:51.50,fi:'Moderate',mc:'₹1.9L Cr',dd:8.5,hl:76,fc:18000,de:0.9,roe:15.5,eps:15.9},
    {s:'BPCL',n:'Bharat Petroleum Corp Ltd.',sec:'Oil & Gas',p:410.00,pe:12.0,dps:21.00,dy:5.12,dg:8.0,dc:20,bh:2,pr:45,ph:52.98,fi:'Moderate',mc:'₹1.8L Cr',dd:8.3,hl:74,fc:9500,de:0.7,roe:22.5,eps:34.2},
    {s:'VEDL',n:'Vedanta Ltd.',sec:'Metals',p:285.00,pe:7.5,dps:35.70,dy:12.53,dg:-5.2,dc:8,bh:1,pr:95,ph:56.10,fi:'Weak',mc:'₹1.1L Cr',dd:4.2,hl:40,fc:15000,de:2.5,roe:8.5,eps:38.0},
    {s:'NMDC',n:'NMDC Ltd.',sec:'Mining',p:158.00,pe:9.8,dps:7.80,dy:4.94,dg:10.5,dc:18,bh:1,pr:55,ph:68.30,fi:'Moderate',mc:'₹46.5K Cr',dd:7.5,hl:79,fc:5500,de:0.02,roe:28.5,eps:16.1},
    {s:'HINDZINC',n:'Hindustan Zinc Ltd.',sec:'Metals',p:420.00,pe:12.0,dps:75.00,dy:17.86,dg:-10.0,dc:12,bh:3,pr:95,ph:64.92,fi:'Weak',mc:'₹1.8L Cr',dd:5.5,hl:45,fc:12000,de:0.1,roe:35.0,eps:35.0},
    {s:'HEROMOTOCO',n:'Hero MotoCorp Ltd.',sec:'Auto',p:4500.00,pe:22.0,dps:110.00,dy:2.44,dg:10.0,dc:22,bh:2,pr:55,ph:34.75,fi:'Strong',mc:'₹90K Cr',dd:9.0,hl:78,fc:4200,de:0,roe:22.0,eps:204.5},
    {s:'BRITANNIA',n:'Britannia Industries Ltd.',sec:'FMCG',p:5200.00,pe:48.0,dps:80.00,dy:1.54,dg:16.0,dc:25,bh:2,pr:65,ph:50.55,fi:'Strong',mc:'₹1.3L Cr',dd:9.0,hl:80,fc:2500,de:0.1,roe:38.5,eps:108.3}
];

// Process stocks
const stocks = STOCK_DATABASE.map(st => ({
    symbol: st.s, name: st.n, sector: st.sec, price: st.p, pe: st.pe,
    divPerShare: st.dps, divYield: st.dy, divGrowth3Y: st.dg, divConsistency: st.dc,
    buybackHistory: st.bh, payoutRatio: st.pr, promoter: st.ph, fiidii: st.fi,
    mcap: st.mc, ddt: st.dd, health: st.hl, fcf: st.fc, de: st.de, roe: st.roe, eps: st.eps,
    paysDividend: st.dps > 0.01 && st.dy > 0.01 && st.pr > 0,
    dividendHistory: []
}));

// Generate dividend history
function generateDividendHistory(baseDPS, growthRate, years = 6) {
    const history = [];
    const now = new Date();
    let dps = baseDPS / Math.pow(1 + Math.max(0, growthRate) / 100, years);
    for (let i = years; i >= 0; i--) {
        const d = new Date(now.getFullYear() - i, Math.floor(Math.random() * 12), Math.min(28, Math.floor(Math.random() * 28) + 1));
        history.push({
            date: d.toISOString().split('T')[0],
            dividendPerShare: Math.round(Math.max(0, dps) * 100) / 100,
            yield: Math.round((Math.max(0, dps) / (Math.random() * 800 + 200)) * 10000) / 100,
            type: i === 0 ? 'Final' : Math.random() > 0.4 ? 'Interim' : 'Final'
        });
        dps *= (1 + Math.max(0, growthRate) / 100);
    }
    return history;
}

stocks.forEach(s => {
    if (s.paysDividend) {
        s.dividendHistory = generateDividendHistory(s.divPerShare, Math.max(0, s.divGrowth3Y), 6);
    }
});

const payers = stocks.filter(s => s.paysDividend);
const nonPayers = stocks.filter(s => !s.paysDividend);

console.log(`📊 Database loaded: ${stocks.length} stocks (${payers.length} payers)`);
