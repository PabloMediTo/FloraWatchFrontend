import { getPlantCare } from '../data/plantCare';
import { getRandomFact } from '../data/plantFacts';

const API_BASE = 'https://florawatch-uwjf.onrender.com';

/**
 * Wake up the backend (Render free tier spins down after inactivity).
 * Call this early so the server is ready by the time the user scans.
 * Resolves true if backend is awake, false otherwise.
 */
export async function warmupBackend() {
  try {
    const res = await fetch(`${API_BASE}/warmup`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Send a captured frame to the backend for plant identification.
 * @param {Blob} imageBlob - JPEG/PNG image blob from canvas capture
 * @returns {Promise<Object>} Normalized result with unknown flag and top3
 */
export async function predictPlant(imageBlob) {
  const formData = new FormData();
  formData.append('file', imageBlob, 'capture.jpg');

  const res = await fetch(`${API_BASE}/predict`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Server error (${res.status})`);
  }

  const data = await res.json();

  /* Normalize into the shape the UI expects */
  if (data.unknown) {
    return {
      unknown: true,
      top3: (data.top3 || []).map((t) => ({
        name: t.label,
        confidence: Math.round(t.probability * 100),
      })),
    };
  }

  const label = data.prediction || data.top1?.label || 'Unknown';
  const care = getPlantCare(label);

  return {
    unknown: false,
    name: label,
    commonName: care?.commonName || null,
    confidence: data.top1 ? Math.round(data.top1.probability * 100) : 0,
    care: care ? { water: care.water, frequency: care.frequency, sunlight: care.sunlight } : null,
    toxicity: care?.toxicity || null,
    funFact: getRandomFact(label),
    top3: (data.top3 || []).map((t) => ({
      name: t.label,
      confidence: Math.round(t.probability * 100),
    })),
  };
}
