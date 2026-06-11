import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Work from "./Work";

describe("Work", () => {
  it("shows RAGprobe Studio as the first project with its GitHub link and badges", () => {
    render(<Work />);
    expect(screen.getByText("RAGprobe Studio")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view on github/i })).toHaveAttribute(
      "href",
      "https://github.com/RohanS1202/ragprobe"
    );
    expect(screen.getByText("Hackathon")).toBeInTheDocument();
  });

  it("links to the Adversarial Robustness repo on the second slide", () => {
    render(<Work />);
    fireEvent.click(screen.getByRole("button", { name: /next project/i }));
    expect(screen.getByText("Adversarial Robustness in Deep Learning")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view on github/i })).toHaveAttribute(
      "href",
      "https://github.com/RohanS1202/Adversarial-Robustness-in-Deep-Learning"
    );
  });
});
