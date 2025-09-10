// Calendar data and state
const calendarData = {
  "schoolEvents": {
    "2025-08-19": {"type": "school_start", "description": "First Day of School", "color": "green"},
    "2025-09-01": {"type": "school_break", "description": "Labor Day - NO SCHOOL", "color": "red"},
    "2025-10-13": {"type": "school_break", "description": "Columbus Day/Indigenous Peoples' Day - NO SCHOOL", "color": "red"},
    "2025-10-16": {"type": "conference", "description": "Parent/Teacher Conferences (4:30 PM - 8:00 PM)", "color": "orange"},
    "2025-10-17": {"type": "school_break", "description": "Parent/Teacher Conferences - NO SCHOOL", "color": "red"},
    "2025-10-21": {"type": "school_break", "description": "Institute Day - NO SCHOOL", "color": "red"},
    "2025-11-24": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL", "color": "red"},
    "2025-11-25": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL", "color": "red"},
    "2025-11-26": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL", "color": "red"},
    "2025-11-27": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL", "color": "red"},
    "2025-11-28": {"type": "school_break", "description": "Thanksgiving Break - NO SCHOOL", "color": "red"},
    "2025-12-22": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-23": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-24": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-25": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-26": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-27": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-28": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-29": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-30": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2025-12-31": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2026-01-01": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2026-01-02": {"type": "school_break", "description": "Winter Break - NO SCHOOL", "color": "red"},
    "2026-01-05": {"type": "school_resume", "description": "School Resumes", "color": "green"},
    "2026-01-09": {"type": "semester", "description": "End of Semester", "color": "yellow"},
    "2026-01-12": {"type": "school_break", "description": "SIP/Teacher Work Day - NO SCHOOL", "color": "red"},
    "2026-01-19": {"type": "school_break", "description": "Martin Luther King, Jr. Day - NO SCHOOL", "color": "red"},
    "2026-02-16": {"type": "school_break", "description": "Presidents' Day - NO SCHOOL", "color": "red"},
    "2026-02-27": {"type": "school_break", "description": "Institute Day - NO SCHOOL", "color": "red"},
    "2026-03-16": {"type": "conference", "description": "Parent/Teacher Conferences (12:00 PM - 7:00 PM) - NO SCHOOL", "color": "red"},
    "2026-03-17": {"type": "elearning", "description": "e-Learning Election Day", "color": "orange"},
    "2026-03-30": {"type": "school_break", "description": "Spring Break - NO SCHOOL", "color": "red"},
    "2026-03-31": {"type": "school_break", "description": "Spring Break - NO SCHOOL", "color": "red"},
    "2026-04-01": {"type": "school_break", "description": "Spring Break - NO SCHOOL", "color": "red"},
    "2026-04-02": {"type": "school_break", "description": "Spring Break - NO SCHOOL", "color": "red"},
    "2026-04-03": {"type": "school_break", "description": "Spring Break - NO SCHOOL", "color": "red"},
    "2026-04-06": {"type": "school_break", "description": "SIP Day - NO SCHOOL", "color": "red"},
    "2026-05-25": {"type": "school_break", "description": "Memorial Day - NO SCHOOL", "color": "red"},
    "2026-05-28": {"type": "school_end", "description": "Last Day of School", "color": "yellow"}
  },
  "federalHolidays": {
    "2025-01-01": {"type": "federal_holiday", "description": "New Year's Day", "color": "blue"},
    "2025-01-20": {"type": "federal_holiday", "description": "Martin Luther King Jr. Day", "color": "blue"},
    "2025-02-17": {"type": "federal_holiday", "description": "Presidents' Day", "color": "blue"},
    "2025-05-26": {"type": "federal_holiday", "description": "Memorial Day", "color": "blue"},
    "2025-06-19": {"type": "federal_holiday", "description": "Juneteenth National Independence Day", "color": "blue"},
    "2025-07-04": {"type": "federal_holiday", "description": "Independence Day", "color": "blue"},
    "2025-09-01": {"type": "federal_holiday", "description": "Labor Day", "color": "blue"},
    "2025-10-13": {"type": "federal_holiday", "description": "Columbus Day", "color": "blue"},
    "2025-11-11": {"type": "federal_holiday", "description": "Veterans Day", "color": "blue"},
    "2025-11-27": {"type": "federal_holiday", "description": "Thanksgiving Day", "color": "blue"},
    "2025-12-25": {"type": "federal_holiday", "description": "Christmas Day", "color": "blue"},
    "2026-01-01": {"type": "federal_holiday", "description": "New Year's Day", "color": "blue"},
    "2026-01-19": {"type": "federal_holiday", "description": "Martin Luther King Jr. Day", "color": "blue"},
    "2026-02-16": {"type": "federal_holiday", "description": "Presidents' Day", "color": "blue"},
    "2026-05-25": {"type": "federal_holiday", "description": "Memorial Day", "color": "blue"},
    "2026-06-19": {"type": "federal_holiday", "description": "Juneteenth National Independence Day", "color": "blue"},
    "2026-07-03": {"type": "federal_holiday", "description": "Independence Day (Observed)", "color": "blue"},
    "2026-09-07": {"type": "federal_holiday", "description": "Labor Day", "color": "blue"},
    "2026-10-12": {"type": "federal_holiday", "description": "Columbus Day", "color": "blue"},
    "2026-11-11": {"type": "federal_holiday", "description": "Veterans Day", "color": "blue"},
    "2026-11-26": {"type": "federal_holiday", "description": "Thanksgiving Day", "color": "blue"},
    "2026-12-25": {"type": "federal_holiday", "description": "Christmas Day", "color": "blue"}
  }
};

// Calendar state
let currentMonth = 7; // August (0-indexed)
let currentYear = 2025;

// Utility functions
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

// Event processing functions
function mergeEvents() {
    const mergedEvents = {};
    
    // Add school events (highest priority)
    for (const [date, event] of Object.entries(calendarData.schoolEvents)) {
        if (!mergedEvents[date]) {
            mergedEvents[date] = [];
        }
        mergedEvents[date].push({
            ...event,
            priority: getPriority(event.type),
            cssClass: getCssClass(event.type, event.color)
        });
    }
    
    // Add federal holidays (lower priority, only if no school event exists)
    for (const [date, event] of Object.entries(calendarData.federalHolidays)) {
        if (!mergedEvents[date]) {
            mergedEvents[date] = [];
        }
        // Only add federal holiday if no school break exists for this date
        const hasSchoolBreak = mergedEvents[date].some(e => e.type === 'school_break');
        if (!hasSchoolBreak) {
            mergedEvents[date].push({
                ...event,
                priority: getPriority(event.type),
                cssClass: getCssClass(event.type, event.color)
            });
        }
    }
    
    // Sort events by priority (higher priority first)
    for (const date in mergedEvents) {
        mergedEvents[date].sort((a, b) => b.priority - a.priority);
    }
    
    return mergedEvents;
}

function getPriority(type) {
    const priorities = {
        'school_break': 10,
        'conference': 9,
        'elearning': 8,
        'school_start': 7,
        'school_resume': 7,
        'school_end': 6,
        'semester': 5,
        'federal_holiday': 3
    };
    return priorities[type] || 1;
}

function getCssClass(type, color) {
    if (type === 'school_break' || color === 'red') {
        return 'school-break';
    } else if (type === 'federal_holiday' || color === 'blue') {
        return 'federal-holiday';
    } else if (color === 'orange') {
        return 'school-event';
    } else if (color === 'green') {
        return 'school-milestone';
    } else if (color === 'yellow') {
        return 'academic-milestone';
    }
    return 'federal-holiday';
}

// Calendar rendering functions
function renderCalendar() {
    const events = mergeEvents();
    const calendarDays = document.getElementById('calendarDays');
    const monthYearElement = document.getElementById('currentMonthYear');
    
    if (!calendarDays || !monthYearElement) {
        console.error('Calendar elements not found');
        return;
    }
    
    // Update header
    monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    
    // Clear calendar
    calendarDays.innerHTML = '';
    
    // Get first day of month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayCell = createDayCell(date, events);
        calendarDays.appendChild(dayCell);
    }
}

function createDayCell(date, events) {
    const dayCell = document.createElement('div');
    dayCell.className = 'day-cell';
    
    const isCurrentMonth = date.getMonth() === currentMonth;
    const dateString = formatDate(date);
    const dayEvents = events[dateString] || [];
    
    if (!isCurrentMonth) {
        dayCell.classList.add('other-month');
    }
    
    if (dayEvents.length > 0) {
        dayCell.classList.add('has-events');
        // Use the highest priority event's class for background
        dayCell.classList.add(dayEvents[0].cssClass);
    }
    
    // Day number
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = date.getDate();
    dayCell.appendChild(dayNumber);
    
    // Event indicators
    if (dayEvents.length > 0) {
        const eventIndicators = document.createElement('div');
        eventIndicators.className = 'event-indicators';
        
        // Show up to 3 event dots
        for (let i = 0; i < Math.min(dayEvents.length, 3); i++) {
            const eventDot = document.createElement('div');
            eventDot.className = `event-dot ${dayEvents[i].cssClass}`;
            eventIndicators.appendChild(eventDot);
        }
        
        if (dayEvents.length > 3) {
            const moreDot = document.createElement('div');
            moreDot.className = 'event-dot';
            moreDot.style.backgroundColor = 'var(--color-text-secondary)';
            moreDot.style.fontSize = '6px';
            moreDot.style.textAlign = 'center';
            moreDot.style.lineHeight = '8px';
            moreDot.textContent = '+';
            eventIndicators.appendChild(moreDot);
        }
        
        dayCell.appendChild(eventIndicators);
        
        // Event preview (only show first event description on larger screens)
        if (isCurrentMonth && dayEvents.length > 0) {
            const eventPreview = document.createElement('div');
            eventPreview.className = 'event-preview';
            eventPreview.textContent = dayEvents[0].description;
            dayCell.appendChild(eventPreview);
        }
        
        // Add click handler for events
        dayCell.style.cursor = 'pointer';
        dayCell.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showEventModal(date, dayEvents);
        };
    }
    
    return dayCell;
}

// Modal functions
function showEventModal(date, events) {
    const modal = document.getElementById('eventModal');
    const modalDate = document.getElementById('modalDate');
    const modalEvents = document.getElementById('modalEvents');
    
    if (!modal || !modalDate || !modalEvents) {
        console.error('Modal elements not found');
        return;
    }
    
    // Format date for modal title
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    modalDate.textContent = date.toLocaleDateString('en-US', options);
    
    // Clear and populate events
    modalEvents.innerHTML = '';
    
    events.forEach(event => {
        const eventDetail = document.createElement('div');
        eventDetail.className = 'event-detail';
        
        const eventDot = document.createElement('div');
        eventDot.className = `event-detail-dot ${event.cssClass}`;
        
        const eventContent = document.createElement('div');
        eventContent.className = 'event-detail-content';
        
        const eventTitle = document.createElement('h4');
        eventTitle.textContent = event.description;
        
        const eventType = document.createElement('p');
        eventType.textContent = getEventTypeLabel(event.type);
        
        eventContent.appendChild(eventTitle);
        eventContent.appendChild(eventType);
        
        eventDetail.appendChild(eventDot);
        eventDetail.appendChild(eventContent);
        
        modalEvents.appendChild(eventDetail);
    });
    
    modal.classList.remove('hidden');
}

function hideEventModal() {
    const modal = document.getElementById('eventModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function getEventTypeLabel(type) {
    const labels = {
        'school_break': 'School Break / No School',
        'school_start': 'School Milestone',
        'school_resume': 'School Milestone',
        'school_end': 'Academic Milestone',
        'semester': 'Academic Milestone',
        'conference': 'School Event',
        'elearning': 'School Event',
        'federal_holiday': 'Federal Holiday'
    };
    return labels[type] || 'Event';
}

// Navigation functions
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing calendar...');
    
    // Navigation buttons
    const prevButton = document.getElementById('prevMonth');
    const nextButton = document.getElementById('nextMonth');
    
    if (prevButton) {
        prevButton.onclick = function(e) {
            e.preventDefault();
            previousMonth();
        };
        console.log('Previous button initialized');
    }
    
    if (nextButton) {
        nextButton.onclick = function(e) {
            e.preventDefault();
            nextMonth();
        };
        console.log('Next button initialized');
    }
    
    // Modal close handlers
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.onclick = function(e) {
            e.preventDefault();
            hideEventModal();
        };
    }
    
    if (modalOverlay) {
        modalOverlay.onclick = function(e) {
            e.preventDefault();
            hideEventModal();
        };
    }
    
    // Keyboard navigation
    document.onkeydown = function(e) {
        if (e.key === 'Escape') {
            hideEventModal();
        } else if (e.key === 'ArrowLeft') {
            previousMonth();
        } else if (e.key === 'ArrowRight') {
            nextMonth();
        }
    };
    
    // Initialize calendar
    renderCalendar();
    console.log('Calendar initialized');
});