// StudyAI - Main JavaScript File
// Core application functionality and interactions

// Application State
const StudyAI = {
    user: {
        name: 'Alex',
        streak: 15,
        totalHours: 247,
        testsCompleted: 42,
        averageScore: 78,
        joinDate: '2025-01-01'
    },
    progress: {
        physics: { completed: 28, total: 40, percentage: 70, lastStudied: 'Today' },
        chemistry: { completed: 32, total: 40, percentage: 80, lastStudied: 'Yesterday' },
        mathematics: { completed: 24, total: 40, percentage: 60, lastStudied: '2 days ago' },
        biology: { completed: 36, total: 40, percentage: 90, lastStudied: 'Today' }
    },
    schedule: [
        { subject: 'Physics', topic: 'Mechanics', time: '9:00 AM - 10:30 AM', status: 'completed' },
        { subject: 'Chemistry', topic: 'Organic Reactions', time: '11:00 AM - 12:30 PM', status: 'current' },
        { subject: 'Mathematics', topic: 'Calculus', time: '2:00 PM - 3:30 PM', status: 'upcoming' },
        { subject: 'Biology', topic: 'Genetics', time: '7:00 PM - 8:30 PM', status: 'upcoming' }
    ],
    memory: {
        longTerm: ['Cell Biology', 'Newton\'s Laws', 'Periodic Table'],
        halfMemory: ['Calculus', 'Organic Chemistry', 'Genetics'],
        deadMemory: ['Thermodynamics', 'Quantum Physics']
    }
};

// Neural Network Background Animation
function setupNeuralNetwork() {
    const sketch = (p) => {
        let nodes = [];
        let connections = [];
        
        p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, 400);
            canvas.parent('neural-network');
            
            // Create nodes
            for (let i = 0; i < 50; i++) {
                nodes.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-1, 1),
                    vy: p.random(-1, 1),
                    size: p.random(2, 6)
                });
            }
        };
        
        p.draw = () => {
            p.clear();
            
            // Update and draw nodes
            for (let node of nodes) {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if (node.x < 0 || node.x > p.width) node.vx *= -1;
                if (node.y < 0 || node.y > p.height) node.vy *= -1;
                
                // Draw node
                p.fill(255, 255, 255, 150);
                p.noStroke();
                p.ellipse(node.x, node.y, node.size);
            }
            
            // Draw connections
            p.stroke(255, 255, 255, 50);
            p.strokeWeight(1);
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    let dist = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                    if (dist < 100) {
                        p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                    }
                }
            }
        };
        
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, 400);
        };
    };
    
    new p5(sketch);
}

// Typewriter Effect
function initializeTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Artificial Intelligence',
            'Personalized Learning',
            'Smart Analytics',
            'Adaptive Testing'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Progress Charts
function initializeCharts() {
    // Weekly Progress Chart
    const progressChart = echarts.init(document.getElementById('progress-chart'));
    const progressOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['Physics', 'Chemistry', 'Mathematics', 'Biology']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100
        },
        series: [
            {
                name: 'Physics',
                type: 'line',
                data: [65, 68, 70, 72, 70, 75, 70],
                smooth: true,
                itemStyle: { color: '#3b82f6' }
            },
            {
                name: 'Chemistry',
                type: 'line',
                data: [75, 78, 80, 82, 85, 80, 80],
                smooth: true,
                itemStyle: { color: '#10b981' }
            },
            {
                name: 'Mathematics',
                type: 'line',
                data: [55, 58, 60, 62, 65, 60, 60],
                smooth: true,
                itemStyle: { color: '#ef4444' }
            },
            {
                name: 'Biology',
                type: 'line',
                data: [85, 88, 90, 92, 90, 95, 90],
                smooth: true,
                itemStyle: { color: '#8b5cf6' }
            }
        ]
    };
    progressChart.setOption(progressOption);

    // Subject Performance Radar Chart
    const subjectChart = echarts.init(document.getElementById('subject-chart'));
    const subjectOption = {
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Physics', max: 100 },
                { name: 'Chemistry', max: 100 },
                { name: 'Mathematics', max: 100 },
                { name: 'Biology', max: 100 },
                { name: 'Overall', max: 100 }
            ],
            radius: '60%'
        },
        series: [{
            name: 'Performance',
            type: 'radar',
            data: [{
                value: [70, 80, 60, 90, 75],
                name: 'Current Performance',
                itemStyle: { color: '#0d7377' },
                areaStyle: { opacity: 0.3 }
            }]
        }]
    };
    subjectChart.setOption(subjectOption);

    // Make charts responsive
    window.addEventListener('resize', () => {
        progressChart.resize();
        subjectChart.resize();
    });
}

// Animation Functions
function animateProgressRings() {
    const rings = document.querySelectorAll('.progress-ring circle:last-child');
    rings.forEach((ring, index) => {
        const percentage = [70, 80, 60, 90][index];
        const circumference = 314;
        const offset = circumference - (percentage / 100) * circumference;
        
        anime({
            targets: ring,
            strokeDashoffset: [circumference, offset],
            duration: 2000,
            delay: index * 200,
            easing: 'easeOutCubic'
        });
    });
}

function animateCards() {
    anime({
        targets: '.card-hover',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
    });
}

function animateHeroContent() {
    anime({
        targets: '.hero-bg .content-overlay > div:first-child > *',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutCubic'
    });
}

// Interactive Functions
function startStudySession() {
    showNotification('Starting study session...', 'info');
    // Simulate session start
    setTimeout(() => {
        showNotification('Study session started! Good luck!', 'success');
    }, 1000);
}

function generateTest() {
    showNotification('Generating AI-powered test...', 'info');
    // Simulate test generation
    setTimeout(() => {
        window.location.href = 'assessment.html';
    }, 1500);
}

function reviewMemoryRoom() {
    window.location.href = 'memory-room.html';
}

function openAITools() {
    window.location.href = 'ai-tools.html';
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-black',
        info: 'bg-blue-500 text-white'
    };
    
    notification.className += ` ${colors[type]}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Progress Ring Interactions
function addProgressRingInteractions() {
    const progressCards = document.querySelectorAll('.card-hover');
    progressCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology'];
            const subject = subjects[index];
            showNotification(`Viewing detailed ${subject} progress...`, 'info');
        });
    });
}

// Quick Action Button Interactions
function initializeQuickActions() {
    const startStudyBtn = document.querySelector('.quick-action-btn');
    const takeTestBtn = document.querySelectorAll('.quick-action-btn')[1];
    
    if (startStudyBtn) {
        startStudyBtn.addEventListener('click', startStudySession);
    }
    
    const quickActionBtns = document.querySelectorAll('button');
    quickActionBtns.forEach(btn => {
        if (btn.textContent.includes('Start Study Session')) {
            btn.addEventListener('click', startStudySession);
        } else if (btn.textContent.includes('Generate AI Test')) {
            btn.addEventListener('click', generateTest);
        } else if (btn.textContent.includes('Review Memory Room')) {
            btn.addEventListener('click', reviewMemoryRoom);
        }
    });
}

// Navigation Interactions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
        });
    });
}

// Study Streak Animation
function animateStudyStreak() {
    const streakElement = document.querySelector('.study-streak');
    if (streakElement) {
        anime({
            targets: streakElement,
            scale: [1, 1.1, 1],
            duration: 1000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    }
}

// Achievement Badge Animation
function animateAchievements() {
    const badges = document.querySelectorAll('.achievement-badge');
    badges.forEach((badge, index) => {
        anime({
            targets: badge,
            scale: [1, 1.05, 1],
            duration: 2000,
            delay: index * 500,
            loop: true,
            easing: 'easeInOutSine'
        });
    });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeTypewriter();
    setupNeuralNetwork();
    initializeCharts();
    initializeQuickActions();
    initializeNavigation();
    addProgressRingInteractions();
    
    // Start animations
    setTimeout(() => {
        animateProgressRings();
        animateCards();
        animateHeroContent();
        animateStudyStreak();
        animateAchievements();
    }, 500);
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('StudyAI Dashboard initialized successfully!');
});

// Export for other modules
window.StudyAI = StudyAI;