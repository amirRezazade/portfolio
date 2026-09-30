import { NextResponse } from "next/server";

const username = "amirRezazade";
const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

export const revalidate = 21600;

export async function GET() {
  try {
    const response = await fetch(apiUrl, {
      next: { revalidate },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub contribution source responded with ${response.status}`);
    }

    const data = await response.json();
    const contributions = Array.isArray(data.contributions)
      ? data.contributions.map((item) => ({
          date: item.date,
          count: Number(item.count) || 0,
          level: Math.max(0, Math.min(4, Number(item.level) || 0)),
        }))
      : [];

    const total = Number(data.total?.lastYear) || contributions.reduce((sum, item) => sum + item.count, 0);

    return NextResponse.json(
      {
        username,
        total,
        contributions,
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "s-maxage=21600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        username,
        total: 0,
        contributions: [],
        error: error instanceof Error ? error.message : "Unable to load GitHub contributions",
      },
      { status: 502 },
    );
  }
}
