"""Build the public, one-page portfolio résumé from verified portfolio claims."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import SimpleDocTemplate, Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/resume/Marvellous-Olabode-Resume.pdf"
INK = colors.HexColor("#1f2925")
MUTED = colors.HexColor("#45584c")
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("DejaVu", str(FONT_DIR / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
pdfmetrics.registerFontFamily("DejaVu", normal="DejaVu", bold="DejaVu-Bold")

styles = {
    "name": ParagraphStyle("name", fontName="DejaVu-Bold", fontSize=15.2, leading=19, textColor=INK, spaceAfter=3),
    "tag": ParagraphStyle("tag", fontName="DejaVu-Bold", fontSize=8, leading=11, textColor=MUTED, spaceAfter=9),
    "contact": ParagraphStyle("contact", fontName="DejaVu", fontSize=7.45, leading=10, textColor=MUTED, spaceAfter=12),
    "section": ParagraphStyle("section", fontName="DejaVu-Bold", fontSize=8.5, leading=12, textColor=MUTED, spaceBefore=11, spaceAfter=6),
    "body": ParagraphStyle("body", fontName="DejaVu", fontSize=8.15, leading=12.35, textColor=INK, spaceAfter=4),
    "job": ParagraphStyle("job", fontName="DejaVu-Bold", fontSize=8.3, leading=12, textColor=INK, spaceAfter=5),
    "bullet": ParagraphStyle("bullet", fontName="DejaVu", fontSize=8.0, leading=12, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=3),
}


def p(value, kind="body"):
    return Paragraph(value, styles[kind])


def section(label):
    return p(label.upper(), "section")


story = [
    p("MARVELLOUS OLABODE", "name"),
    p("REVENUE OPERATIONS &amp; CRM AUTOMATION | BUSINESS OPERATIONS &amp; DIGITAL SYSTEMS", "tag"),
    p('Lagos, Nigeria · Remote | <link href="mailto:Marvellousolabode@gmail.com">Marvellousolabode@gmail.com</link> | +234 807 189 5503 | <link href="https://www.linkedin.com/in/marvellousolabode/">LinkedIn</link> | <link href="https://mavl-portfolio-wg6f.vercel.app/">Portfolio</link>', "contact"),
    section("Profile"),
    p("Operations and digital systems specialist with 5+ years of remote experience supporting BNI Alberta South across 18 chapters. I work across CRM administration, member lifecycle workflows, data reconciliation, automation, reporting, events, and executive support. I also design live website concepts for hospitality, healthcare, and wellness."),
    section("Professional experience"),
    p("BNI Alberta South | Executive Administrative Assistant / Digital Operations Support | Remote, Calgary, Canada | Nov 2021–Present", "job"),
    p("• Supported visitor, member, and renewal workflows across 18 chapters, maintaining CRM records, follow-up processes, forms, and operational handoffs.", "bullet"),
    p("• Supported the Keap to GoHighLevel transition and member-facing CRM workflows using Zapier and Alchemer where appropriate.", "bullet"),
    p("• Reconciled contact exports across Keap and HubSpot, checking matched records, source-only records, duplicates, and missing keys before producing a unified working list.", "bullet"),
    p("• Coordinated meetings, registrations, Zoom and Eventbrite logistics, member inquiries, permissions, technical issues, and team documentation.", "bullet"),
    p("• Supported recurring reporting and QuickBooks reconciliation workflows for regional leaders.", "bullet"),
    section("Selected systems work"),
    p("<b>Member lifecycle and CRM:</b> Organized pipeline stages, follow-up tasks, forms, automation, and team handoffs for visitor, member, and renewal activity."),
    p("<b>Regional OS:</b> Built role-based workspaces for regional staff, chapter leaders, and members, with weekly report readiness, follow-up actions, and finance exception review. <link href=\"https://mavl-portfolio-wg6f.vercel.app/regional-os-demo\">Explore the fictional public walkthrough</link>."),
    section("Web and digital projects"),
    p('COSMO Bar — multi-page hospitality concept and occasion pairing | <link href="https://cosmo-bar-frontend.vercel.app/">View live</link>'),
    p('Skye Medical Aesthetics — treatment discovery and consultation journey | <link href="https://skye-weight-loss-clinic-frontend.vercel.app/">View live</link>'),
    p('FitLunge — wellness website concept and program journey | <link href="https://fitlunge-frontend-kappa.vercel.app/">View live</link>'),
    section("Tools and capabilities"),
    p("<b>CRM and automation:</b> GoHighLevel, Keap, HubSpot, Salesforce, Zapier, Alchemer, BNI Connect | <b>Operations:</b> Google Workspace, Asana, ClickUp, Zoom, Eventbrite, QuickBooks Online | <b>Web and reporting:</b> React, Next.js, WordPress, Vercel, SQL, Tableau"),
    section("Education"),
    p("University of Ilorin | Bachelor of Science (B.Sc.) | 2023"),
]

doc = SimpleDocTemplate(str(OUTPUT), pagesize=(612, 792), rightMargin=54, leftMargin=54, topMargin=48, bottomMargin=42, title="Marvellous Olabode | Revenue Operations and CRM Automation", author="Marvellous Olabode")
doc.build(story)
print(OUTPUT)
