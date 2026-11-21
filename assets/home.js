// Drives the animated examples on the home page. No data leaves the page.
class Component {
  componentDidMount() {
    this._t0 = performance.now();
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) { this.setState({ t: 136, r: 40 }); return; }
    var self = this;
    this._timer = setInterval(function () {
      var t = ((self.state && self.state.t) || 0) + 1;
      self.setState({ t: t > 176 ? 0 : t, r: ((self.state && self.state.r) || 0) + 1 });
    }, 65);
  }
  componentWillUnmount() { if (this._timer) clearInterval(this._timer); }
  bar(lit, color, size, n, delay) {
    var out = [];
    var count = n || 20;
    for (var i = 0; i < count; i++) {
      var c = i < lit ? color : '#24272A';
      var an = delay === undefined ? '' : ';animation:pop .5s cubic-bezier(.2,.9,.3,1.4) both;animation-delay:' + (delay + i * 45) + 'ms';
      out.push({
        style: 'width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + c + ';flex:none' + an,
        small: 'width:6px;height:6px;border-radius:50%;background:' + c + ';flex:none' + an
      });
    }
    return out;
  }
  gauge(lo, hi, at, color, S) {
    var out = [], r = S * 0.42, cx = S / 2, cy = S * 0.5, big = S > 120;
    for (var i = 0; i < 19; i++) {
      var a = (215 - i * (250 / 18)) * Math.PI / 180;
      var x = cx + r * Math.cos(a), y = cy - r * Math.sin(a);
      var size = i === at ? (big ? 15 : 12) : (i >= lo && i <= hi ? (big ? 8 : 6) : (big ? 6 : 5));
      var st = 'position:absolute;border-radius:50%;width:' + size + 'px;height:' + size + 'px;left:' + (x - size / 2).toFixed(1) + 'px;top:' + (y - size / 2).toFixed(1) + 'px;';
      if (i === at) st += 'background:' + color + ';box-shadow:0 0 0 2px #F5F7F8';
      else if (i >= lo && i <= hi) st += 'background:' + color + ';opacity:0.55';
      else st += 'background:#2A2D30';
      out.push({ style: st });
    }
    return out;
  }
  hr() {
    return [103,103,105,105,108,109,107,108,109,108,112,115,118,122,123,124,124,130,129,128,129,127,131,133,148,156,161,167,168,170,168,167,169,164,167,170,162,155,150,145,140,137,138,151,157,163,168,173,175,174,176,175,173,175,174,162,154,151,146,143,143,142,156,162,165,168,172,172,170,171,172,179,178,177,166,157,152,146,139,138,137,152,160,168,172,177,179,179,177,178,175,177,178,167,160,156,151,149,148,146,158,165,169,173,177,177,176,179,177,182,185,183,170,162,156,148,145,144,144,160,168,174,178,183,182,180,180,184,185,182,182,175,169,165,159,156,152,149,147,143,141,141,144,144,142,142,139,141,141,139,140,139,138];
  }
  bars(hs, color) {
    return hs.map(function (h) { return { style: 'flex:1;border-radius:2px;background:' + color + ';height:' + h + 'px' }; });
  }
  fixed() {
    if (this._fixed) return this._fixed;
    function line(i) { return i === 0 ? 'none' : '1px solid #1E2124'; }
    function sq(c) { return 'width:30px;height:30px;border-radius:9px;background:' + c + ';display:flex;align-items:center;justify-content:center;flex:none'; }
    function gd(c) { return 'width:10px;height:10px;border-radius:50%;background:' + c + ';flex:none'; }
    var self = this;
    function wm(lit, c) { return self.bar(lit, c, 6).map(function (d) { return { style: d.small }; }); }
    function osq(c) { return 'width:44px;height:44px;border-radius:13px;background:' + c + ';display:flex;align-items:center;justify-content:center;flex:none'; }
    function sp(name, note, pts, max, l) { return { name: name, note: note, pts: pts, max: max, line: l ? '1px solid #1E2124' : 'none', fill: 'height:6px;border-radius:3px;background:#8B9BFF;width:' + Math.round(pts / max * 100) + '%' }; }
    var tf = 'font-size:11px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;color:#55D6F2;background:rgba(85,214,242,0.10);padding:6px 10px;border-radius:999px';
    var tp = 'font-size:11px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;color:#8EA8FF;background:rgba(79,123,255,0.14);padding:6px 10px;border-radius:999px';
    var B = '';
    var I = { bolt: B + 'assets/icons/bolt.svg', target: B + 'assets/icons/target.svg', moon: B + 'assets/icons/moon.svg', flame: B + 'assets/icons/flame.svg', heart: B + 'assets/icons/heart.svg', steps: B + 'assets/icons/steps.svg', history: B + 'assets/icons/w-history.svg', trends: B + 'assets/icons/w-trends.svg', training: B + 'assets/icons/w-training.svg', fitness: B + 'assets/icons/w-fitness.svg', journal: B + 'assets/icons/w-journal.svg', report: B + 'assets/icons/w-report.svg', widgets: B + 'assets/icons/w-widgets.svg' };
    var tl = this.bar(14, '#6CB8F5', 9, 20, 700);
    for (var i = 14; i < 20; i++) tl[i] = { style: 'width:9px;height:9px;border-radius:50%;border:1.5px solid #6CB8F5;box-sizing:border-box;flex:none;' + (i < 16 ? 'background:radial-gradient(circle,#6CB8F5 0 1.5px,rgba(108,184,245,0) 2px);' : '') + 'animation:pop .5s both;animation-delay:' + (700 + i * 45) + 'ms' };
    var rd = this.bar(12, '#F5C542', 9, 20, 300);
    for (var m = 12; m < 17; m++) rd[m] = { style: 'width:9px;height:9px;border-radius:50%;flex:none;background:radial-gradient(circle,#5FD068 0 2.2px,rgba(95,208,104,0) 2.8px);animation:pop .5s both;animation-delay:' + (300 + m * 45) + 'ms' };
    var nb = 'position:relative;height:15px;margin-top:-2px', ns = 'position:absolute;top:0;font-size:13px;line-height:15px;color:#8E969C;white-space:nowrap;';
    var btn = 'width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;';
    var off = btn + 'background:#24272A;color:#8E969C', on = btn + 'background:#F5F7F8;color:#000000';
    var up = 'font-size:15px;font-weight:800;color:#3DDC97;white-space:nowrap', down = 'font-size:15px;font-weight:800;color:#E08A3C;white-space:nowrap';
    var names = ['Readiness', 'Target load', 'Sleep score', 'Sleep debt', 'Bedtime advice', 'Recovery', 'HRV', 'Resting heart rate', 'Stress', 'Vitals', 'Steps', 'Energy', 'Heart rate zones', 'Effort', 'Training load', 'VO2 max', 'Fitness age', 'Race times', 'Running power', 'Cadence', 'Records', 'Trends', 'Journal'];
    this._fixed = {
      pillars: [
        { name: 'Readiness', word: 'Solid', value: '60%', icon: I.bolt, dots: rd, note: '85', noteBox: nb, noteStyle: ns + 'left:calc(4.5px + 16 * (100% - 9px) / 19);transform:translateX(-50%)' },
        { name: 'Target load', word: 'In range', value: '82%', icon: I.target, dots: tl, note: 'Range 67 to 100%', noteBox: nb, noteStyle: ns + 'left:0' },
        { name: 'Sleep score', word: 'Usual', value: '74%', icon: I.moon, dots: this.bar(15, '#F5C842', 9, 20, 1100), note: '', noteBox: 'display:none', noteStyle: '' }
      ],
      cards: [
        { name: 'Energy', word: '', value: '1,842 kcal', icon: I.flame, bars: this.bars([6, 6, 6, 7, 6, 8, 9, 12, 10, 9, 22, 24, 11, 10, 9, 8], '#E58A3A') },
        { name: 'Steps', word: '', value: '8,214', icon: I.steps, bars: this.bars([2, 2, 3, 6, 9, 4, 7, 5, 8, 12, 15, 11, 20, 14, 6, 3], '#7BD88F') },
        { name: 'HRV', word: 'Usual', value: '52 ms', icon: I.heart, bars: [] },
        { name: 'Sleep debt', word: '', value: '1 h 10 min', icon: I.moon, bars: [] }
      ],
      ticker: names.concat(names),
      parts: [
        { name: 'Recovery this morning', value: '+74', nameStyle: 'font-size:16px', valStyle: 'font-size:18px;font-weight:800', line: 'none' },
        { name: 'Leftover effort from yesterday', value: '−6', nameStyle: 'font-size:16px', valStyle: 'font-size:18px;font-weight:800', line: line(1) },
        { name: 'You start the day at', value: '68', nameStyle: 'font-size:15px;color:#8E969C', valStyle: 'font-size:18px;font-weight:800;color:#A8D95B', line: line(1) }
      ],
      freeList: [
        { icon: I.bolt, text: 'Readiness, Target load, Sleep score and Recovery, every part explained' },
        { icon: I.moon, text: 'Sleep, sleep debt, sleep need and bedtime advice' },
        { icon: I.heart, text: 'HRV, resting heart rate, vitals and stress' },
        { icon: I.steps, text: 'Workouts with heart rate, zones, effort and route map' },
        { icon: I.flame, text: 'Steps, energy and your own Today screen' },
        { icon: I.target, text: 'Watch app, Readiness widget, 7 days of history' }
      ],
      proList: [
        { icon: I.history, square: sq('#3D63E0'), text: 'Your full history, and trends over 30 and 90 days' },
        { icon: I.training, square: sq('#1F7A54'), text: 'Training load, training status, intensity minutes' },
        { icon: I.fitness, square: sq('#6A55D9'), text: 'VO2 max, fitness age, race times, running stats, records' },
        { icon: I.journal, square: sq('#B9791F'), text: 'Journal and insights, caffeine and food' },
        { icon: I.report, square: sq('#1F7A54'), text: 'A summary of your day, morning and evening report' },
        { icon: I.widgets, square: sq('#C24D74'), text: 'Every widget, Watch complications, Siri' }
      ],
      overview: [
        { name: 'Readiness', tag: 'Free', tagStyle: tf, icon: I.bolt, square: osq('#12211A'), text: 'Starts from last night\u2019s recovery, then moves with your day. Training, stress and long days awake take points off. A good nap gives some back.' },
        { name: 'Target load', tag: 'Free', tagStyle: tf, icon: I.target, square: osq('#111C26'), text: 'How much training today can take, as a range. Useful whether you train five times a week or just walk.' },
        { name: 'Sleep', tag: 'Free', tagStyle: tf, icon: I.moon, square: osq('#16172B'), text: 'A score out of 100 with every part shown, plus sleep debt, sleep need and bedtime advice.' },
        { name: 'Heart and body', tag: 'Free', tagStyle: tf, icon: I.heart, square: osq('#261420'), text: 'HRV, resting heart rate, overnight vitals, stress, steps and energy, each next to your own normal.' },
        { name: 'Workouts', tag: 'Free', tagStyle: tf, icon: I.training, square: osq('#1F7A54'), text: 'Every workout from your Watch with heart rate, zones, effort, weather and the route map.' },
        { name: 'Trends and more', tag: 'Pro', tagStyle: tp, icon: I.trends, square: osq('#3D63E0'), text: 'Everything over 30 and 90 days, training load, VO2 max, the full running stats and a journal.' }
      ],
      sleepDots: this.bar(15, '#F5C842', 9),
      sleepParts: [
        sp('Duration', '7 h 12 min of your 8 h need', 31, 40, 0), sp('Sleep debt', '3 h 20 min short over the 14 nights before', 6, 10, 1), sp('Regularity', '80 of 100', 12, 15, 1),
        sp('Interruptions', '2 times, awake 14 min', 11, 15, 1), sp('Heart rate dip', '16%, usual 14 to 26%', 11, 15, 1), sp('Stages', 'Deep 9%, REM 21%', 3, 5, 1)
      ],
      diffs: [
        { n: '01', name: 'Scores show their working', text: 'You see every change in Readiness and every part of your sleep score. No black box.' },
        { n: '02', name: 'Effort counts', text: 'Strength and HIIT sessions get the load your effort says they had, not only what heart rate saw.' },
        { n: '03', name: 'The core is free', text: 'Readiness, Target load, Sleep score and Recovery are free, with no time limit. And they stay free.' },
        { n: '04', name: 'Pro is cheap', text: '\u20ac19.99 a year or \u20ac2.99 a month, with 14 days to try it first.' },
        { n: '05', name: 'No account', text: 'Nothing to sign up for. Your health data and scores stay on your iPhone.' },
        { n: '06', name: 'Works on older Watches', text: 'Series 6 and newer, SE 2 and newer, and every Ultra. You don\u2019t need this year\u2019s Watch.' }
      ],
      soon: ['Goals', 'Export', 'Share cards', 'Yearly recap'],
      gauges: [
        { name: 'Cadence', value: '172', unit: 'spm', usual: 'Usual 166 to 176', dot: gd('#F28BC4'), dots: this.gauge(7, 12, 10, '#F28BC4', 150) },
        { name: 'Stride length', value: '1.18', unit: 'm', usual: 'Usual 1.08 to 1.24', dot: gd('#6CB8F5'), dots: this.gauge(6, 11, 9, '#6CB8F5', 150) },
        { name: 'Ground contact', value: '248', unit: 'ms', usual: 'Usual 240 to 262', dot: gd('#F2A65A'), dots: this.gauge(7, 12, 8, '#F2A65A', 150) },
        { name: 'Vertical oscillation', value: '8.9', unit: 'cm', usual: 'Usual 8.4 to 9.6', dot: gd('#7BD8B0'), dots: this.gauge(7, 12, 9, '#7BD8B0', 150) }
      ],
      ageDots: this.gauge(2, 5, 4, '#B79CF2', 104),
      ageRows: [
        { name: 'VO2 max', value: '−3.9', line: 'none' },
        { name: 'Resting heart rate', value: '−0.4', line: line(1) },
        { name: 'Training minutes', value: '−0.3', line: line(1) }
      ],
      tags: [
        { name: 'Screens before bed', no: on, yes: off, line: 'none' },
        { name: 'Late meal', no: off, yes: on, line: line(1) },
        { name: 'Sauna', no: on, yes: off, line: line(1) },
        { name: 'Cold bath', no: off, yes: off, line: line(1) }
      ],
      insights: [
        { name: 'Sauna', nights: '11 nights with, 38 without', value: '▲ 6 points', valStyle: up, line: 'none' },
        { name: 'Late meal', nights: '14 nights with, 35 without', value: '▼ 5 points', valStyle: down, line: line(1) },
        { name: 'Screens before bed', nights: '22 nights with, 27 without', value: '▼ 2 points', valStyle: down, line: line(1) }
      ],
      watch: [
        { value: '60%', word: 'Solid', icon: I.bolt, marks: wm(12, '#A8D95B') },
        { value: '64', word: 'Below range', icon: I.target, marks: wm(13, '#6CB8F5') },
        { value: '74%', word: 'Usual', icon: I.moon, marks: wm(15, '#F5C842') },
        { value: '74%', word: 'Usual', icon: I.heart, marks: wm(15, '#3DDC97') },
        { value: '1,842', word: 'kcal', icon: I.flame, marks: this.bars([3, 3, 3, 4, 3, 4, 5, 7, 6, 5, 11, 12, 6, 5, 5, 4, 4, 3, 0, 0], '#E58A3A') }
      ]
    };
    return this._fixed;
  }
  renderVals() {
    var f = this.fixed();
    var t = ((this.state && this.state.t) || 0) / 1.7;
    function ease(p) { p = Math.max(0, Math.min(1, p)); return 1 - Math.pow(1 - p, 3); }
    var step = t < 12 ? 1 : t < 28 ? 2 : t < 50 ? 3 : 4;
    var picked = t < 12 ? 0 : Math.min(8, Math.floor((t - 12) / 1.6) + 1);
    var load = Math.round(34 + 78 * ease((t - 28) / 20));
    var ready = Math.round(78 - 24 * ease((t - 50) / 26));
    var lit = Math.round(ready / 5);
    var color = ready >= 75 ? '#3DDC97' : '#F5C542';
    var pills = [];
    for (var i = 1; i <= 10; i++) {
      var on = i === picked;
      pills.push({ n: i, style: 'flex:1;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;' + (on ? 'background:#3DDC97;color:#000000;transform:scale(1.14);box-shadow:0 0 0 5px rgba(61,220,151,0.18),0 0 28px rgba(61,220,151,0.65)' : 'background:#1A1C1E;color:#8E969C') });
    }
    var drain = [];
    for (var j = 0; j < 20; j++) drain.push({ style: 'border-radius:50%;flex:none;background-color:' + (j < lit ? color : '#24272A') + (j >= lit && j < 16 ? ';transform:scale(.7)' : '') });
    var titles = [
      ['You finish a heavy session', 'Low heart rate between sets, so heart rate alone calls it a 34.'],
      ['You rate it 1 to 10', 'On your Watch when Apple’s Workout app asks, or later in Throttle.'],
      ['It counts as hard', 'Throttle takes the higher of the two. Here that is your effort.'],
      ['Readiness drops with it', 'So the advice you get fits what you actually did.']
    ];
    var steps = titles.map(function (s, k) {
      var act = k + 1 === step;
      return {
        n: k + 1, title: s[0], text: s[1],
        style: 'display:flex;gap:16px;align-items:flex-start;padding:18px 20px;border-radius:22px;border:1px solid ' + (act ? '#24382E' : 'transparent') + ';background-color:' + (act ? '#0E1512' : 'transparent') + ';opacity:' + (act ? 1 : 0.45),
        numStyle: 'width:30px;height:30px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;' + (act ? 'background:#3DDC97;color:#000000' : 'background:#1A1C1E;color:#8E969C')
      };
    });
    var dropped = 78 - ready;
    var raw = (this.state && this.state.t) || 0;
    var still = this.state && this.state.r === 40;
    var rp = still ? 1 : Math.min(1, (((performance.now() - (this._t0 || performance.now())) % 5200) / 5200) / 0.8);
    var P = [[60,200],[112,150],[172,158],[212,100],[292,80],[352,122],[380,182],[312,216],[232,204],[152,226],[60,200]], segs = [], total = 0;
    for (var a = 1; a < P.length; a++) { var L = Math.hypot(P[a][0] - P[a - 1][0], P[a][1] - P[a - 1][1]); segs.push(L); total += L; }
    var want = rp * total, rx = P[0][0], ry = P[0][1];
    for (var b = 0; b < segs.length; b++) {
      if (want <= segs[b]) { var q = want / segs[b]; rx = P[b][0] + (P[b + 1][0] - P[b][0]) * q; ry = P[b][1] + (P[b + 1][1] - P[b][1]) * q; break; }
      want -= segs[b]; rx = P[b + 1][0]; ry = P[b + 1][1];
    }
    var runBpm = Math.round(128 + 32 * rp + 3 * Math.sin(rp * 18));
    var H = this.hr(), N = H.length, k = Math.min(N - 1, Math.floor((raw / 176) * N));
    function zc(v) { return v < 125 ? '#8E969C' : v < 140 ? '#6CD3F2' : v < 155 ? '#A8D95B' : v < 168 ? '#F5C842' : '#F2604A'; }
    function zn(v) { return v < 125 ? 'Zone 1' : v < 140 ? 'Zone 2' : v < 155 ? 'Zone 3' : v < 168 ? 'Zone 4' : 'Zone 5'; }
    var mins = Math.floor(k / N * 38), secs = Math.floor((k / N * 38 - mins) * 60);
    var cx = k / (N - 1) * 100, cy = (205 - (H[k] - 100) / 85 * 190) / 220 * 200;
    var tipLeft = Math.max(0, Math.min(66, cx - 16));
    var zcol = rp < 0.35 ? '#6CD3F2' : rp < 0.8 ? '#A8D95B' : '#F5C842';
    var elev = Math.round(12 + 8 * Math.sin(rp * 6.0) + 5 * Math.sin(rp * 14 + 1));
    var rs = Math.round(rp * 1625), rm = Math.floor(rs / 60), rsec = rs % 60;

    return Object.assign({}, f, {
      routeStyle: 'stroke-dasharray:1;stroke-dashoffset:' + (1 - rp).toFixed(4),
      runner: 'transform:translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px)',
      runTime: rm + ':' + (rsec < 10 ? '0' : '') + rsec, runPace: (rp < 0.35 ? '5:24' : rp < 0.7 ? '5:08' : '4:56') + ' /km', runBpm: runBpm + ' bpm', runElev: elev + ' m',
      runnerGlow: 'fill:' + zcol + ';opacity:0.28', runnerDot: 'fill:' + zcol + ';filter:drop-shadow(0 0 6px ' + zcol + ')',
      elevLit: 'position:absolute;inset:0;width:100%;height:100%;clip-path:inset(0 ' + ((1 - rp) * 100).toFixed(1) + '% 0 0)',
      elevCursor: 'position:absolute;top:-3px;bottom:-3px;width:2px;border-radius:1px;background:#F5F7F8;left:' + (rp * 100).toFixed(1) + '%',
      runBpmStyle: 'font-size:18px;font-weight:900;color:' + zcol,
      chartLit: 'position:absolute;inset:0;width:100%;height:100%;clip-path:inset(0 ' + (100 - cx).toFixed(1) + '% 0 0)',
      cursorLine: 'position:absolute;top:0;bottom:0;width:1.5px;background:rgba(245,247,248,0.45);left:' + cx.toFixed(1) + '%',
      cursorDot: 'position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;border:2px solid #F5F7F8;background:' + zc(H[k]) + ';box-shadow:0 0 18px ' + zc(H[k]) + ';left:' + cx.toFixed(1) + '%;top:' + cy.toFixed(1) + 'px',
      tipTime: mins + ':' + (secs < 10 ? '0' : '') + secs, tipBpm: H[k], tipZone: zn(H[k]),
      tipBpmStyle: 'font-size:15px;font-weight:900;color:' + zc(H[k]),
      tipStyle: 'position:absolute;top:-46px;' + (cx > 55 ? 'right:' + Math.max(0, 100 - cx - 16).toFixed(1) + '%' : 'left:' + Math.max(0, cx - 16).toFixed(1) + '%') + ';display:flex;flex-direction:column;background:#17191B;border:1px solid #2A2F33;border-radius:12px;padding:6px 12px;white-space:nowrap',
      sports: ['Strength', 'HIIT', 'Cycling', 'Swimming', 'Hiking', 'Rowing', 'Yoga', 'Walking'],
      caption: titles[step - 1][0] + '. ' + titles[step - 1][1],
      steps: steps, pills: pills, load: load, ready: ready, drain: drain,
      loadStyle: 'font-size:30px;font-weight:900;line-height:1;color:' + (load > 34 ? '#3DDC97' : '#F5F7F8') + (load > 34 && load < 112 ? ';text-shadow:0 0 22px rgba(61,220,151,0.8)' : ''),
      readyCard: 'border-radius:22px;padding:20px 22px;display:flex;flex-direction:column;gap:12px;border:1px solid ' + (dropped > 0 ? '#4A3620' : '#24382E') + ';background-color:' + (dropped > 0 ? '#17130E' : '#101A15') + ';box-shadow:0 0 ' + (dropped > 0 && dropped < 24 ? 46 : 0) + 'px rgba(242,154,74,0.28)',
      drop: dropped > 0 ? 'Load −' + dropped : 'Before training',
      dropStyle: 'font-size:15px;font-weight:800;color:' + (dropped > 0 ? '#E08A3C' : '#8E969C')
    });
  }
}

(function () {
  var c = new Component();
  c.state = { t: 136, r: 40 };
  var nodes = Array.prototype.map.call(document.querySelectorAll('[data-bind]'), function (el) {
    return { el: el, binds: JSON.parse(el.getAttribute('data-bind')), last: [] };
  });
  function get(v, path) {
    var ks = path.split('.');
    for (var i = 0; i < ks.length && v != null; i++) v = v[ks[i]];
    return v == null ? '' : v;
  }
  function render() {
    var v = c.renderVals();
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      for (var j = 0; j < n.binds.length; j++) {
        var val = n.binds[j][1].replace(/\{\{([\w.]+)\}\}/g, function (m, p) { return get(v, p); });
        if (n.last[j] === val) continue;
        n.last[j] = val;
        if (n.binds[j][0] === 'text') n.el.textContent = val; else n.el.setAttribute(n.binds[j][0], val);
      }
    }
  }
  c.setState = function (s) { for (var k in s) c.state[k] = s[k]; if (!document.hidden) render(); };
  c.componentDidMount();
  render();
})();
