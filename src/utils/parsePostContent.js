export function parsePostContent(content) {
  if (!content) return { intro: '', sections: [] };

  // نقسم النص لأسطر ونشيل الأسطر الفاضية
  const lines = content.split('\n').filter((line) => line.trim().length > 0);

  const sections = [];
  let intro = '';
  let currentSection = null;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      // عنوان جديد -> نقفل القديم ونفتح واحد جديد
      if (currentSection) sections.push(currentSection);
      currentSection = {
        title: trimmed.slice(3).trim(), // بنشيل "## " بس
        paragraphs: [],
      };
    } else if (currentSection) {
      currentSection.paragraphs.push(trimmed);
    } else {
      // ده الكلام قبل أول عنوان (المقدمة)
      intro += (intro ? ' ' : '') + trimmed;
    }
  });

  if (currentSection) sections.push(currentSection);

  return { intro, sections };
}