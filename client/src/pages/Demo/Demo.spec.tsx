import { render } from "@testing-library/react";
import { Demo, Props } from "./Demo";
import { DemoPageObject } from "./Demo.pageObject";

describe("Demo component", () => {
  const baseProps: Props = {
    name: "Lada"
  };

  const renderComponent = (props = baseProps) => {
    return new DemoPageObject(render(<Demo {...props} />));
  };

  it("should render", async () => {
    const demo = renderComponent();
    await demo.assertName(baseProps.name);
  });
});
