import {
  ApiKeySession,
  ProfileCreateQuery,
  ProfileEnum,
  ProfilesApi,
} from "klaviyo-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = new ApiKeySession(process.env.KLAVIYO_PRIVATE_API_KEY || "");
  const profilesApi = new ProfilesApi(session);
  const res = await req.json();
  console.log(res);

  if (!res.email)
    return NextResponse.json({ error: "Email not found" }, { status: 400 });

  let profile: ProfileCreateQuery = {
    data: {
      type: ProfileEnum.Profile,
      attributes: {
        email: res.email,
      },
    },
  };

  try {
    const result = await profilesApi.createProfile(profile);
    return NextResponse.json(
      { message: "You've subscribed to out newsletter", profile: result },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
