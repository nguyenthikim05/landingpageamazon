import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Landing Page Visual & Typography Review', () => {
  test('Audit layout, typography, letter-spacing, and screenshots', async ({ page }, testInfo) => {
    // Navigate to local dev server
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const projectName = testInfo.project.name.toLowerCase();
    const screenshotDir = path.resolve('tests/screenshots', projectName);
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // 1. Check Horizontal Overflow (No unwanted horizontal scroll)
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow, `Page should not have horizontal overflow on ${testInfo.project.name}`).toBe(false);

    // 2. Full Page Screenshot
    await page.screenshot({
      path: path.join(screenshotDir, 'full-page.png'),
      fullPage: true,
    });

    // 3. Hero Section Screenshot & Metrics
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    await heroSection.screenshot({
      path: path.join(screenshotDir, 'hero-section.png'),
    });

    // 4. Audit Headings Typography & Font Families
    const headingAudit = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
      return headings.map((h) => {
        const style = window.getComputedStyle(h);
        const rect = h.getBoundingClientRect();
        return {
          tag: h.tagName.toLowerCase(),
          text: (h.textContent || '').trim().replace(/\s+/g, ' '),
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
          color: style.color,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });
    });

    // Write audit findings to JSON for deep review
    fs.writeFileSync(
      path.join(screenshotDir, 'headings-audit.json'),
      JSON.stringify(headingAudit, null, 2),
      'utf-8'
    );

    // Assert that primary H1 exists and uses Serif
    const h1Data = headingAudit.find((item) => item.tag === 'h1');
    expect(h1Data, 'Page should have an H1 headline').toBeDefined();
    if (h1Data) {
      expect(
        h1Data.fontFamily.toLowerCase().includes('serif') ||
        h1Data.fontFamily.toLowerCase().includes('noto')
      ).toBe(true);
    }

    // 5. Audit Section Spacing & Structure
    const sectionMetrics = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.map((sec, idx) => {
        const style = window.getComputedStyle(sec);
        const rect = sec.getBoundingClientRect();
        return {
          index: idx,
          id: sec.id || `section-${idx}`,
          height: Math.round(rect.height),
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
          backgroundColor: style.backgroundColor,
        };
      });
    });

    fs.writeFileSync(
      path.join(screenshotDir, 'sections-audit.json'),
      JSON.stringify(sectionMetrics, null, 2),
      'utf-8'
    );
  });
});

