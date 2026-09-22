import { jsPDF } from 'jspdf';
import { AntiGoal, DailyEntry, Goal, PersonalitySnapshot, UserProfile } from '../types';

const PAGE_MARGIN = 18;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_MARGIN * 2;

function addWrappedText(pdf: jsPDF, text: string, x: number, y: number, maxWidth = CONTENT_WIDTH, lineHeight = 5): number {
  const lines = pdf.splitTextToSize(text || '—', maxWidth) as string[];
  pdf.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function addSection(pdf: jsPDF, title: string, y: number): number {
  if (y > 265) {
    pdf.addPage();
    y = PAGE_MARGIN;
  }
  pdf.setFillColor(15, 23, 42);
  pdf.rect(PAGE_MARGIN, y - 4, CONTENT_WIDTH, 8, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.text(title.toUpperCase(), PAGE_MARGIN + 3, y + 1.5);
  pdf.setTextColor(30, 41, 59);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  return y + 12;
}

export function exportDailyLogPdf({
  user,
  entry,
  snapshot,
  goals,
  antiGoals
}: {
  user: UserProfile;
  entry: DailyEntry;
  snapshot: PersonalitySnapshot | null;
  goals: Goal[];
  antiGoals: AntiGoal[];
}): void {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
  let y = PAGE_MARGIN;
  const dateLabel = new Date(`${entry.entry_date}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  pdf.setTextColor(15, 23, 42);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(20);
  pdf.text('LIFE OS · OFF SCRIPT', PAGE_MARGIN, y);
  y += 8;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  pdf.setTextColor(190, 24, 93);
  pdf.text(`Daily Flight Log · ${dateLabel}`, PAGE_MARGIN, y);
  y += 10;
  pdf.setTextColor(71, 85, 105);
  pdf.setFontSize(9);
  y = addWrappedText(pdf, `${user.chaos_name || 'Unruly Sovereign'} · Word of the year: ${user.word_of_the_year || '—'}`, PAGE_MARGIN, y);
  y += 5;

  y = addSection(pdf, 'Launch', y);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Morning intention', PAGE_MARGIN, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  y = addWrappedText(pdf, entry.morning_intention, PAGE_MARGIN, y);
  y += 3;
  pdf.setFont('helvetica', 'bold');
  pdf.text('Today I am', PAGE_MARGIN, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  y = addWrappedText(pdf, entry.today_i_am, PAGE_MARGIN, y);
  y += 3;
  pdf.setFont('helvetica', 'bold');
  pdf.text('Anchor question', PAGE_MARGIN, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  y = addWrappedText(pdf, entry.anchor_question_answer, PAGE_MARGIN, y) + 5;

  y = addSection(pdf, 'Top three priorities', y);
  entry.priorities.forEach((priority, index) => {
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${index + 1}.`, PAGE_MARGIN, y);
    pdf.setFont('helvetica', 'normal');
    y = addWrappedText(pdf, priority, PAGE_MARGIN + 6, y) + 2;
  });
  y += 3;

  y = addSection(pdf, 'Midday and landing', y);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Midday check-in', PAGE_MARGIN, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  y = addWrappedText(pdf, entry.midday_checkin, PAGE_MARGIN, y) + 3;
  pdf.setFont('helvetica', 'bold');
  pdf.text(`Chaos score: ${entry.chaos_score}/10 · Micro-dare: ${entry.micro_dare_completed ? 'completed' : 'not completed'}`, PAGE_MARGIN, y);
  y += 7;
  pdf.text('Evening field notes', PAGE_MARGIN, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  y = addWrappedText(pdf, entry.evening_notes, PAGE_MARGIN, y) + 5;

  if (snapshot) {
    y = addSection(pdf, 'Mei diagnostic', y);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Mood: ${snapshot.detected_mood} · Burnout risk: ${snapshot.burnout_risk}`, PAGE_MARGIN, y);
    y += 6;
    pdf.setFont('helvetica', 'normal');
    y = addWrappedText(pdf, snapshot.ai_feedback, PAGE_MARGIN, y) + 3;
    pdf.setFont('helvetica', 'bold');
    pdf.text('Micro-dare', PAGE_MARGIN, y);
    y += 5;
    pdf.setFont('helvetica', 'normal');
    y = addWrappedText(pdf, snapshot.micro_dare, PAGE_MARGIN, y) + 5;
  }

  y = addSection(pdf, 'Current commitments', y);
  pdf.setFont('helvetica', 'normal');
  goals.slice(0, 6).forEach((goal) => {
    y = addWrappedText(pdf, `□ ${goal.title} (${goal.quarter})`, PAGE_MARGIN, y) + 2;
  });
  antiGoals.filter((goal) => goal.is_completed).slice(0, 6).forEach((goal) => {
    y = addWrappedText(pdf, `☒ Stopped: ${goal.title}`, PAGE_MARGIN, y) + 2;
  });

  const pageCount = pdf.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page);
    pdf.setFontSize(8);
    pdf.setTextColor(100, 116, 139);
    pdf.text(`Life OS Off Script 2027 · ${page}/${pageCount}`, PAGE_MARGIN, 288);
  }

  pdf.save(`life-os-${entry.entry_date}.pdf`);
}
