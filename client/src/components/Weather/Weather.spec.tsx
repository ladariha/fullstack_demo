import { render, waitFor } from "@testing-library/react";
import { Props, Weather } from "./Weather";
import { BrowserRouter } from "react-router";
import { WeatherPageObject } from "./Weather.pageObject";
import * as getWeatherUtils from "./utils";

describe("Demo component", () => {
  const baseProps: Props = {
    location: "Praha",
  };

  const renderComponent = (props = baseProps) => {
    return new WeatherPageObject(render(<BrowserRouter><Weather {...props} /></BrowserRouter>));
  };

  let getWeatherMock: jest.SpyInstance;

  beforeEach(() => {

  });

  afterEach(() => {
    getWeatherMock?.mockRestore();
  });

  it("should render", async () => {
    getWeatherMock = jest.spyOn(getWeatherUtils, "getWeather").mockImplementation(() => Promise.resolve("23"));
    const weather = renderComponent();
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(weather.getValue()).toEqual("Praha 23");
    });
  });
});
