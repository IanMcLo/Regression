// ============================================================
// DATA — Paste your updated CSV rows here as {x, y} objects
// ============================================================
const RAW_DATA = [
    {x:68,y:4.559},{x:134,y:4.300},{x:201,y:4.268},{x:226,y:4.326},
    {x:229,y:4.337},{x:233,y:4.246},{x:244,y:4.207},{x:254,y:4.177},
    {x:266,y:3.965},{x:274,y:3.917},{x:287,y:3.951},{x:294,y:4.003},
    {x:305,y:4.075},{x:310,y:4.027},{x:317,y:4.058},{x:324,y:4.033},
    {x:331,y:4.066},{x:338,y:4.040},{x:345,y:3.917},{x:359,y:3.741},
    {x:366,y:3.735},{x:373,y:3.711},{x:380,y:3.704},{x:387,y:3.696},
    {x:394,y:3.722},{x:401,y:3.760},{x:408,y:3.725},{x:415,y:3.773},
    {x:422,y:3.748},{x:429,y:3.743},{x:436,y:3.704},{x:443,y:3.681},
    {x:450,y:3.690},{x:457,y:3.748},{x:464,y:3.755},{x:471,y:3.770},
    {x:478,y:3.757},{x:485,y:3.761},{x:492,y:3.725},{x:499,y:3.689},
    {x:506,y:3.714},{x:513,y:3.689},{x:520,y:3.737},{x:527,y:3.719},
    {x:534,y:3.774},{x:541,y:3.763},{x:548,y:3.746},{x:555,y:3.698},
    {x:562,y:3.738},{x:569,y:3.703},{x:576,y:3.681},{x:583,y:3.668},
    {x:590,y:3.662},{x:597,y:3.623},{x:604,y:3.592},{x:611,y:3.626},
    {x:618,y:3.624},{x:625,y:3.613},{x:632,y:3.580},{x:639,y:3.609},
    {x:646,y:3.614},{x:653,y:3.567},{x:660,y:3.493},{x:667,y:3.381},
    {x:674,y:3.459},{x:681,y:3.486},{x:688,y:3.454},{x:695,y:3.478},
    {x:702,y:3.444},{x:709,y:3.546},{x:716,y:3.540},{x:723,y:3.532},
    {x:730,y:3.523},{x:737,y:3.501},{x:744,y:3.542},{x:751,y:3.544},
    {x:758,y:3.536},{x:765,y:3.549},{x:772,y:3.559},{x:779,y:3.574},
    {x:786,y:3.570},{x:793,y:3.612},{x:800,y:3.613},{x:807,y:3.615},
    {x:814,y:3.623},{x:821,y:3.626},{x:828,y:3.617},{x:835,y:3.554},
    {x:842,y:3.518},{x:849,y:3.556},{x:856,y:3.540},{x:863,y:3.570},
    {x:870,y:3.569},{x:877,y:3.576},{x:884,y:3.559},{x:891,y:3.561},
    {x:898,y:3.548},{x:905,y:3.544},{x:912,y:3.530},{x:919,y:3.529},
    {x:926,y:3.555},{x:933,y:3.535},{x:940,y:3.491},{x:947,y:3.409},
    {x:954,y:3.389},{x:961,y:3.410},{x:968,y:3.414},{x:975,y:3.447},
    {x:982,y:3.379},{x:989,y:3.387},{x:996,y:3.367},{x:1003,y:3.356},
    {x:1010,y:3.390},{x:1017,y:3.372},{x:1024,y:3.385},{x:1031,y:3.417},
    {x:1038,y:3.299},{x:1045,y:3.408},{x:1052,y:3.425},{x:1059,y:3.550},
    {x:1066,y:3.547},{x:1073,y:3.572},{x:1080,y:3.520},{x:1087,y:3.435},
    {x:1094,y:3.378},{x:1101,y:3.460},{x:1108,y:3.407},{x:1115,y:3.483},
    {x:1122,y:3.445},{x:1129,y:3.393},{x:1136,y:3.354},{x:1143,y:3.431},
    {x:1150,y:3.408},{x:1157,y:3.497},{x:1164,y:3.382},{x:1171,y:3.381},
    {x:1178,y:3.381},{x:1185,y:3.331},{x:1192,y:3.276},{x:1199,y:3.299},
    {x:1206,y:3.321},{x:1213,y:3.379},{x:1220,y:3.384},{x:1227,y:3.405},
    {x:1234,y:3.451},{x:1241,y:3.341},{x:1248,y:3.374},{x:1255,y:3.387},
    {x:1262,y:3.401},{x:1269,y:3.386},{x:1276,y:3.377},{x:1283,y:3.431},
    {x:1290,y:3.441},{x:1297,y:3.462},{x:1304,y:3.461},{x:1311,y:3.421},
    {x:1318,y:3.466},{x:1325,y:3.535},{x:1332,y:3.558},{x:1339,y:3.496},
    {x:1346,y:3.489},{x:1353,y:3.498},{x:1360,y:3.507},{x:1367,y:3.526},
    {x:1374,y:3.557},{x:1381,y:3.501},{x:1388,y:3.525},{x:1395,y:3.568},
    {x:1402,y:3.387},{x:1409,y:3.368},{x:1416,y:3.362},{x:1423,y:3.334},
    {x:1430,y:3.329},{x:1437,y:2.956},{x:1444,y:2.936},{x:1451,y:2.957},
    {x:1458,y:2.916},{x:1465,y:2.941},{x:1472,y:2.870},{x:1479,y:2.920},
    {x:1486,y:2.910},{x:1493,y:2.890},{x:1500,y:2.888},{x:1507,y:2.915},
    {x:1514,y:2.905},{x:1521,y:2.892},{x:1535,y:2.878},{x:1542,y:2.860},
    {x:1549,y:2.836},{x:1556,y:2.863},{x:1563,y:2.887},{x:1577,y:2.919},
    {x:1584,y:2.952},{x:1591,y:2.968},{x:1598,y:2.954},{x:1605,y:2.966},
    {x:1612,y:2.958},{x:1619,y:2.949},{x:1626,y:2.950},{x:1633,y:2.942},
    {x:1640,y:2.930},{x:1647,y:2.971},{x:1654,y:2.939},{x:1661,y:2.941},
    {x:1668,y:2.912},{x:1675,y:2.935},{x:1689,y:2.948},{x:1696,y:2.946},
    {x:1703,y:2.973},{x:1710,y:2.971}
];

const OUTLIER_DAYS = [1437];
const LAST_DAY = 1710;

// ============================================================
// REGRESSION ENGINE
// ============================================================
function exponentialRegression(data) {
    const n = data.length;
    let sumX = 0, sumLnY = 0, sumXLnY = 0, sumX2 = 0, sumY = 0;
    for (const d of data) {
        const lnY = Math.log(d.y);
        sumX += d.x;
        sumLnY += lnY;
        sumXLnY += d.x * lnY;
        sumX2 += d.x * d.x;
        sumY += d.y;
    }
    const b = (n * sumXLnY - sumX * sumLnY) / (n * sumX2 - sumX * sumX);
    const lnA = (sumLnY - b * sumX) / n;
    const a = Math.exp(lnA);

    // R² and RMSE on original scale
    let ssRes = 0, ssTot = 0;
    const meanY = sumY / n;
    for (const d of data) {
        const pred = a * Math.exp(b * d.x);
        ssRes += (d.y - pred) ** 2;
        ssTot += (d.y - meanY) ** 2;
    }
    return { a, b, r2: 1 - ssRes / ssTot, rmse: Math.sqrt(ssRes / n) };
}
function linearRegression(data) {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
    for (const d of data) {
        sumX += d.x;
        sumY += d.y;
        sumXY += d.x * d.y;
        sumX2 += d.x * d.x;
        sumY2 += d.y * d.y;
    }
    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const c = (sumY - m * sumX) / n;

    // Calculate R²
    let ssRes = 0, ssTot = 0;
    const meanY = sumY / n;
    for (const d of data) {
        const pred = m * d.x + c;
        ssRes += (d.y - pred) ** 2;
        ssTot += (d.y - meanY) ** 2;
    }
    return { m, c, r2: 1 - ssRes / ssTot };
}
function forecastDay(target, a, b) {
    return (Math.log(target) - Math.log(a)) / b;
}

// ============================================================
// STATE
// ============================================================
let chart = null;
let targets = [2.75, 2.50, 2.00];
let excludeOutlier = true;

// ============================================================
// RENDER
// ============================================================
function getFilteredData() {
    return excludeOutlier
        ? RAW_DATA.filter(d => !OUTLIER_DAYS.includes(d.x))
        : [...RAW_DATA];
}

function update() {
    const data = getFilteredData();
    const model = exponentialRegression(data);

    // KPIs
    document.getElementById('kpiLatest').textContent = data[data.length - 1].y.toFixed(3) + 'M';
    document.getElementById('kpiDecay').textContent = (model.b * 100).toFixed(4) + '% / day';
    document.getElementById('kpiR2').textContent = model.r2.toFixed(4);
    document.getElementById('kpiRMSE').textContent = model.rmse.toFixed(4);

    // Stats
    document.getElementById('statFormula').textContent =
        `y = ${model.a.toFixed(4)} × e^(${model.b.toFixed(6)} × x)`;
    document.getElementById('statA').textContent = model.a.toFixed(6);
    document.getElementById('statB').textContent = model.b.toFixed(8);
    document.getElementById('statN').textContent = data.length;
    document.getElementById('statRange').textContent = `Day ${data[0].x} → Day ${data[data.length - 1].x}`;

    // Forecast table
    const tbody = document.getElementById('forecastBody');
    tbody.innerHTML = '';
    targets.forEach(t => {
        const day = forecastDay(t, model.a, model.b);
        const daysFrom = day - LAST_DAY;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${t.toFixed(2)}M</strong></td>
            <td>~ ${Math.round(day).toLocaleString()}</td>
            <td>${daysFrom > 0 ? '+' : ''}${Math.round(daysFrom).toLocaleString()} days</td>
            <td><button class="remove-btn" data-target="${t}">Remove</button></td>`;
        tbody.appendChild(tr);
    });
    tbody.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            targets = targets.filter(t => t !== parseFloat(btn.dataset.target));
            update();
        });
    });

    // Build chart datasets
    const maxForecastDay = targets.length
        ? Math.max(...targets.map(t => forecastDay(t, model.a, model.b)), LAST_DAY + 100)
        : LAST_DAY + 100;

    // Regression line
    const regLine = [];
    for (let x = data[0].x; x <= maxForecastDay; x += 10) {
        regLine.push({ x, y: model.a * Math.exp(model.b * x) });
    }

    // Forecast extension (dashed)
    const forecastLine = regLine.filter(p => p.x >= LAST_DAY);

    // Annotation lines for targets
    const annotations = {};
    targets.forEach((t, i) => {
        const day = forecastDay(t, model.a, model.b);
        annotations[`line${i}`] = {
            type: 'line',
            xMin: day, xMax: day,
            borderColor: 'rgba(253,203,110,0.5)',
            borderWidth: 1,
            borderDash: [6, 4],
            label: {
                display: true,
                content: `${t.toFixed(2)}M @ Day ${Math.round(day)}`,
                position: 'start',
                backgroundColor: 'rgba(253,203,110,0.8)',
                color: '#000',
                font: { size: 11 }
            }
        };
        annotations[`hline${i}`] = {
            type: 'line',
            yMin: t, yMax: t,
            borderColor: 'rgba(253,203,110,0.25)',
            borderWidth: 1,
            borderDash: [4, 4]
        };
    });

    // Destroy & rebuild
    if (chart) chart.destroy();
    const ctx = document.getElementById('mainChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Actual Data',
                    data: data,
                    backgroundColor: 'rgba(116,185,255,0.6)',
                    borderColor: 'rgba(116,185,255,1)',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    order: 2
                },
                {
                    label: 'Exponential Fit',
                    data: regLine.filter(p => p.x <= LAST_DAY),
                    type: 'line',
                    borderColor: '#6c5ce7',
                    borderWidth: 2.5,
                    pointRadius: 0,
                    fill: false,
                    tension: 0,
                    order: 1
                },
                {
                    label: 'Forecast',
                    data: forecastLine,
                    type: 'line',
                    borderColor: 'rgba(253,203,110,0.7)',
                    borderWidth: 2,
                    borderDash: [8, 5],
                    pointRadius: 0,
                    fill: false,
                    tension: 0,
                    order: 1
                }
                // --- ADD THIS BLOCK ---
    const linModel = linearRegression(data);
    const linLine = [];
    for (let x = data[0].x; x <= maxForecastDay; x += 10) {
        linLine.push({ x, y: linModel.m * x + linModel.c });
    }
    // ----------------------
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Day', color: '#8b8fa3' },
                    grid: { color: 'rgba(46,51,71,0.5)' },
                    ticks: { color: '#8b8fa3' }
                },
                y: {
                    title: { display: true, text: 'Baht (M)', color: '#8b8fa3' },
                    grid: { color: 'rgba(46,51,71,0.5)' },
                    ticks: { color: '#8b8fa3' },
                    min: 0
                }
            },
            plugins: {
                legend: { labels: { color: '#e4e6f0', usePointStyle: true, padding: 20 } },
                tooltip: {
                    callbacks: {
                        label: ctx => `Day ${ctx.parsed.x}: ${ctx.parsed.y.toFixed(3)}M`
                    }
                },
                annotation: { annotations }
            }
        }
    });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById('excludeOutlier').addEventListener('change', e => {
    excludeOutlier = e.target.checked;
    update();
});

document.getElementById('addTargetBtn').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('targetInput').value);
    if (!isNaN(val) && val > 0 && !targets.includes(val)) {
        targets.push(val);
        targets.sort((a, b) => b - a);
        update();
    }
});

document.getElementById('targetInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('addTargetBtn').click();
});

// Footer timestamp
document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
});

// Initial render
update();
