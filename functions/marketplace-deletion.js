export async function onRequestGet(context) {
  const url = new URL(context.request.url);

  const challengeCode = url.searchParams.get("challenge_code");

  if (!challengeCode) {
    return new Response(
      JSON.stringify({
        message: "BoskSync eBay Marketplace Account Deletion Endpoint",
        status: "OK"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  // We'll calculate the real challenge response next.
  return new Response(
    JSON.stringify({
      challengeResponse: "PLACEHOLDER"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function onRequestPost(context) {
  const body = await context.request.text();

  console.log("eBay notification:");
  console.log(body);

  return new Response("OK", {
    status: 200
  });
}