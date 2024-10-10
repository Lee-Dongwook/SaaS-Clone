import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json(
      { username: "admin", email: "admin@example.com" },
      { status: 200 }
    );
  }),
];
