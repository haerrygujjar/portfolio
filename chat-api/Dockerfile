FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt && useradd --system --no-create-home app
COPY app.py .
COPY knowledge ./knowledge
USER app
EXPOSE 8000
CMD ["python", "app.py"]
