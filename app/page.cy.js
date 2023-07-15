import MainPage from "./page.tsx";

describe("<MainPage/>", () => {
  it("should render and display expected content", () => {
    cy.mount(<MainPage />);
    cy.get("h1").contains("Main Page 2");
  });
});
