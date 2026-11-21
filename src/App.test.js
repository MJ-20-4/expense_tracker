import React, { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  act(() => root.render(<App />));
  act(() => root.unmount());
});

it("shows setup instructions when Google configuration is missing", () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const sheetId = process.env.REACT_APP_SHEET_ID;
  delete process.env.REACT_APP_GOOGLE_CLIENT_ID;
  delete process.env.REACT_APP_SHEET_ID;

  const div = document.createElement("div");
  const root = createRoot(div);
  let mounted = false;
  try {
    act(() => root.render(<App />));
    mounted = true;
    expect(div.textContent).toContain(
      "Set REACT_APP_GOOGLE_CLIENT_ID and REACT_APP_SHEET_ID"
    );
    expect(div.querySelector('[aria-label="Sign in"]')).toBeNull();
  } finally {
    if (mounted) {
      act(() => root.unmount());
    }
    if (clientId === undefined) {
      delete process.env.REACT_APP_GOOGLE_CLIENT_ID;
    } else {
      process.env.REACT_APP_GOOGLE_CLIENT_ID = clientId;
    }
    if (sheetId === undefined) {
      delete process.env.REACT_APP_SHEET_ID;
    } else {
      process.env.REACT_APP_SHEET_ID = sheetId;
    }
  }
});
