const API_URL = "https://translate.astian.org/translate";

export async function translateText(
  text: string,
  target: string,
  source: string = "auto"
): Promise<string> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, source, target, format: "text" }),
    });

    const data = await res.json();
    return data.translatedText;
  } catch (e) {
    console.error("Translation failed", e);
    return "Translation failed";
  }
}