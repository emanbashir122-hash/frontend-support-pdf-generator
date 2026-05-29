# main.py
from reportlab.lib.pagesizes import LETTER
from reportlab.pdfgen import canvas
from datetime import datetime
import hashlib

# Example evidence files (replace with real paths)
evidence_files = ["evidence1.png", "evidence2.png"]

def generate_hash_chain(files):
    """Generate SHA-256 hash chain for evidence files."""
    chain = []
    prev_hash = ""
    for f in files:
        with open(f, "rb") as file:
            data = file.read()
            file_hash = hashlib.sha256(data + prev_hash.encode()).hexdigest()
            chain.append((f, file_hash))
            prev_hash = file_hash
    return chain

def create_pdf(output_file="complaint.pdf"):
    c = canvas.Canvas(output_file, pagesize=LETTER)
    width, height = LETTER

    # Header
    c.setFont("Helvetica-Bold", 16)
    c.drawString(72, height - 72, "FTC Complaint Form")

    # Timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    c.setFont("Helvetica", 12)
    c.drawString(72, height - 100, f"Generated on: {timestamp}")

    # Evidence screenshots
    y_position = height - 150
    for img in evidence_files:
        try:
            c.drawImage(img, 72, y_position - 120, width=200, height=120)
            c.drawString(72, y_position - 140, f"Screenshot: {img}")
            y_position -= 160
        except Exception as e:
            c.drawString(72, y_position, f"Error loading {img}: {e}")
            y_position -= 40

    # Hash chain
    chain = generate_hash_chain(evidence_files)
    c.setFont("Courier", 10)
    y_position -= 40
    c.drawString(72, y_position, "SHA-256 Hash Chain:")
    y_position -= 20
    for fname, h in chain:
        c.drawString(72, y_position, f"{fname}: {h}")
        y_position -= 20

    c.save()
    print(f"PDF generated: {output_file}")

if __name__ == "__main__":
    create_pdf()
