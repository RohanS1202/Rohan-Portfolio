import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./Experience";

describe("Experience", () => {
  it("renders work experience, hackathon wins, and publications", () => {
    render(<Experience />);

    expect(screen.getByText("Data Analyst Intern")).toBeInTheDocument();
    expect(screen.getByText("SRP BizExcell Pvt. Ltd.")).toBeInTheDocument();

    expect(screen.getByText(/4th Place - Code for Climate Hackathon/)).toBeInTheDocument();
    expect(screen.getByText("Project: TideMemory")).toBeInTheDocument();
    expect(screen.getByText("Project: RAGprobe Studio")).toBeInTheDocument();
    expect(screen.getByText("Project: Strategic Doc Red-Teamer")).toBeInTheDocument();

    expect(
      screen.getByText("Gridwise: A Dynamic Dashboard for the Visualization and Monitoring of Renewable Energy Sources")
    ).toBeInTheDocument();
    expect(screen.getByText("Vehicle Detection with Number Plate Recognition")).toBeInTheDocument();
    expect(screen.getByText(/ICHCSC 2024/)).toBeInTheDocument();
    expect(screen.getByText(/ICNDA 2024/)).toBeInTheDocument();

    const paperLinks = screen.getAllByRole("link", { name: /view paper/i });
    expect(paperLinks).toHaveLength(2);
    expect(paperLinks[0]).toHaveAttribute("href", "https://link.springer.com/chapter/10.1007/978-981-96-3420-0_21");
    expect(paperLinks[1]).toHaveAttribute("href", "https://link.springer.com/chapter/10.1007/978-3-031-69146-1_19");
  });
});
