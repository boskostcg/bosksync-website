const VERIFICATION_TOKEN = "matildakayeburnhamdadlovesyoualwaysandforever";

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);

  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const challengeCode = url.searchParams.get("challenge_code");

  if (!challengeCode) {
    return Response.json({
      message: "BoskSync eBay Marketplace Account Deletion Endpoint",
      status: "OK",
    });
  }

  const endpoint = url.origin + url.pathname;

  const challengeResponse = await sha256Hex(
    challengeCode + VERIFICATION_TOKEN + endpoint
  );

  return Response.json({
    challengeResponse,
  });
}

export async function onRequestPost(context) {
  const body = await context.request.text();

  console.log("eBay Marketplace Deletion Notification");
  console.log(body);

  return new Response("OK", {
    status: 200,
  });
}