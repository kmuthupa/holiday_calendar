// IPSD 204 School Calendar - Official Dates (2025-2026 and 2026-2027)
const calendarData = {
  "schoolEvents": {
    // Current Year Remainder (2025-2026)
    "2026-05-25": {"type": "school_break", "description": "Memorial Day - NO SCHOOL"},
    "2026-05-28": {"type": "school_end", "description": "Last Day of School (Tentative)"},
    "2026-05-29": {"type": "school_break", "description": "Teacher Work Day - NO SCHOOL"},
    "2026-06-19": {"type": "school_break", "description": "Juneteenth - NO SCHOOL"},
    "2026-07-03": {"type": "school_break", "description": "Independence Day (Observed) - NO SCHOOL"},
    
    // Next Year (2026-2027)
    "2026-08-17": {"type": "school_start", "description": "First Day of School"},
    "2026-09-07": {"type": "school_break", "description": "Labor Day - NO SCHOOL"},
    "2026-10-12": {"type": "school_break", "description": "Columbus Day / Indigenous Peoples' Day - NO SCHOOL"},
    "2026-10-22": {"type": "event", "description": "Parent/Teacher Conferences (4:30 PM - 8:00 PM)"},
    "2026-10-23": {"type": "school_break", "description": "Institute Day - NO SCHOOL"},
    "2026-11-02": {"type": "school_break", "description": "Parent/Teacher Conferences - NO SCHOOL"},
    "2026-11-03": {"type": "school_break", "description": "Election Day - NO SCHOOL"},
    "2026-11-11": {"type": "school_break", "description": "Veterans Day - NO SCHOOL"},
    "2026-11-23": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL"},
    "2026-11-24": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL"},
    "2026-11-25": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL"},
    "2026-11-26": {"type": "school_break", "description": "Thanksgiving Day - NO SCHOOL"},
    "2026-11-27": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL"},
    "2026-12-21": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-22": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-23": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-24": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-25": {"type": "school_break", "description": "Christmas Day - NO SCHOOL"},
    "2026-12-28": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-29": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-30": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2026-12-31": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2027-01-01": {"type": "school_break", "description": "New Year's Day - NO SCHOOL"},
    "2027-01-04": {"type": "school_break", "description": "Winter Break - NO SCHOOL"},
    "2027-01-18": {"type": "school_break", "description": "Martin Luther King, Jr. Day - NO SCHOOL"},
    "2027-01-19": {"type": "school_break", "description": "SIP/Teacher Work Day - NO SCHOOL"},
    "2027-02-15": {"type": "school_break", "description": "Presidents' Day - NO SCHOOL"},
    "2027-02-26": {"type": "school_break", "description": "Institute Day - NO SCHOOL"},
    "2027-03-15": {"type": "school_break", "description": "Parent/Teacher Conferences - NO SCHOOL"},
    "2027-03-26": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-03-29": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-03-30": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-03-31": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-04-01": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-04-02": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-04-05": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-04-06": {"type": "school_break", "description": "Spring Break - NO SCHOOL"},
    "2027-04-07": {"type": "school_break", "description": "SIP Day - NO SCHOOL"},
    "2027-05-28": {"type": "school_end", "description": "Last Day of School"},
    "2027-05-31": {"type": "school_break", "description": "Memorial Day - NO SCHOOL"},
    "2027-06-18": {"type": "school_break", "description": "Juneteenth (Observed) - NO SCHOOL"},
    "2027-07-05": {"type": "school_break", "description": "Independence Day (Observed) - NO SCHOOL"}
  }
};

// State
const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();
let isPlanningMode = false;
let personalTrips = JSON.parse(localStorage.getItem('personalTrips')) || [];

// Helpers
const formatDate = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const getMonthName = (m) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][m];

function renderCalendar() {
    const daysContainer = document.getElementById('calendarDays');
    const header = document.getElementById('currentMonthYear');
    if (!daysContainer || !header) return;

    header.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    daysContainer.innerHTML = '';

    const firstDay = new Date(currentYear, currentMonth, 1);
    const start = new Date(firstDay);
    start.setDate(start.getDate() - firstDay.getDay());

    for (let i = 0; i < 42; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        daysContainer.appendChild(createDayCell(date));
    }
    updateCountdown();
}

function createDayCell(date) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    const dateStr = formatDate(date);
    const isCurrentMonth = date.getMonth() === currentMonth;
    const event = calendarData.schoolEvents[dateStr];
    
    // Check if it's today
    const today = new Date();
    today.setHours(0,0,0,0);
    const isToday = date.getTime() === today.getTime();
    
    if (!isCurrentMonth) cell.classList.add('other-month');
    if (isToday) cell.classList.add('today');
    
    // Logic for visual cues: ANY event with "NO SCHOOL" gets the Red break color
    const isBreak = event && (event.type === 'school_break' || event.description.includes('NO SCHOOL'));
    const isLW = isPartOfLongWeekend(date);
    
    if (isBreak) cell.classList.add('school-break');
    if (isLW && !isBreak) cell.classList.add('long-weekend');
    
    // Connection logic for breaks
    if (isBreak) {
        const prev = new Date(date); prev.setDate(prev.getDate() - 1);
        const next = new Date(date); next.setDate(next.getDate() + 1);
        const prevStr = formatDate(prev);
        const nextStr = formatDate(next);
        
        const hasPrev = calendarData.schoolEvents[prevStr] && (calendarData.schoolEvents[prevStr].type === 'school_break' || calendarData.schoolEvents[prevStr].description.includes('NO SCHOOL'));
        const hasNext = calendarData.schoolEvents[nextStr] && (calendarData.schoolEvents[nextStr].type === 'school_break' || calendarData.schoolEvents[nextStr].description.includes('NO SCHOOL'));
        
        if (!hasPrev) cell.classList.add('break-start');
        if (!hasNext) cell.classList.add('break-end');
    }

    if (personalTrips.includes(dateStr)) cell.classList.add('personal-trip');

    cell.innerHTML = `<span class="day-number">${date.getDate()}</span>`;
    
    cell.onclick = () => {
        if (isPlanningMode) {
            const idx = personalTrips.indexOf(dateStr);
            if (idx === -1) personalTrips.push(dateStr);
            else personalTrips.splice(idx, 1);
            localStorage.setItem('personalTrips', JSON.stringify(personalTrips));
            renderCalendar();
        } else if (event) {
            showModal(date, event);
        }
    };
    return cell;
}

function isPartOfLongWeekend(date) {
    const checkOff = (d) => {
        const s = formatDate(d);
        const e = calendarData.schoolEvents[s];
        const day = d.getDay();
        const isDistrictBreak = e && (e.type === 'school_break' || e.description.includes('NO SCHOOL'));
        return (day === 0 || day === 6 || isDistrictBreak);
    };

    if (!checkOff(date)) return false;

    let count = 1;
    let d = new Date(date);
    while (true) { d.setDate(d.getDate() - 1); if (checkOff(d)) count++; else break; }
    d = new Date(date);
    while (true) { d.setDate(d.getDate() + 1); if (checkOff(d)) count++; else break; }
    
    return count >= 3;
}

function updateCountdown() {
    const text = document.getElementById('nextBreakText');
    if (!text) return;

    const today = new Date();
    today.setHours(0,0,0,0);

    const future = Object.keys(calendarData.schoolEvents)
        .filter(d => new Date(d + 'T00:00:00') >= today && (calendarData.schoolEvents[d].type === 'school_break' || calendarData.schoolEvents[d].description.includes('NO SCHOOL')))
        .sort();

    if (future.length > 0) {
        const next = new Date(future[0] + 'T00:00:00');
        const diff = Math.ceil((next - today) / (1000 * 60 * 60 * 24));
        const event = calendarData.schoolEvents[future[0]];
        text.textContent = diff === 0 ? `Today is ${event.description.replace(' - NO SCHOOL', '')}!` : `${diff} days until ${event.description.replace(' - NO SCHOOL', '')}`;
    } else {
        text.textContent = "No more breaks scheduled.";
    }
}

function showModal(date, event) {
    const modal = document.getElementById('eventModal');
    document.getElementById('modalDate').textContent = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('modalEvents').textContent = event.description;
    modal.classList.remove('hidden');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prevMonth').onclick = () => { currentMonth--; if (currentMonth < 0) { currentMonth = 11; currentYear--; } renderCalendar(); };
    document.getElementById('nextMonth').onclick = () => { currentMonth++; if (currentMonth > 11) { currentMonth = 0; currentYear++; } renderCalendar(); };
    
    document.getElementById('goToToday').onclick = () => {
        const today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        renderCalendar();
    };

    document.getElementById('togglePlanningMode').onclick = (e) => {
        isPlanningMode = !isPlanningMode;
        e.target.textContent = `Planning Mode: ${isPlanningMode ? 'On' : 'Off'}`;
        document.querySelector('.minimal-grid-container').classList.toggle('planning-mode', isPlanningMode);
    };

    document.getElementById('modalClose').onclick = () => document.getElementById('eventModal').classList.add('hidden');
    document.getElementById('modalOverlay').onclick = () => document.getElementById('eventModal').classList.add('hidden');

    renderCalendar();
});
