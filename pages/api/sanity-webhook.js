export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token } = req.query;

  // Verify the secret token
  if (token !== process.env.SANITY_WEBHOOK_SECRET) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  try {
    // Revalidate the homepage
    await res.revalidate("/");
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating:", err);
    return res
      .status(500)
      .json({ message: "Error Revalidating", error: err.message });
  }
}
