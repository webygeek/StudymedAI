import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'login.html'),
        survey: resolve(__dirname, 'survey.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        assessment: resolve(__dirname, 'assessment.html'),
        memoryRoom: resolve(__dirname, 'memory-room.html'),
        studySession: resolve(__dirname, 'study-session.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        library: resolve(__dirname, 'library.html'),
        aiTools: resolve(__dirname, 'ai-tools.html'),
        clinicalCase: resolve(__dirname, 'clinical-case-simulator.html'),
        drugChart: resolve(__dirname, 'drug-chart-creator.html'),
        osce: resolve(__dirname, 'osce-practice-partner.html'),
        differential: resolve(__dirname, 'differential-diagnosis.html'),
        examNotes: resolve(__dirname, 'exam-notes-condensor.html'),
        audioNotes: resolve(__dirname, 'audio-to-notes.html'),
        setupDemo: resolve(__dirname, 'setup-demo.html'),
      }
    }
  }
});
