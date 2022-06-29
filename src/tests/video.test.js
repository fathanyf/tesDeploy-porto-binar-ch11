import VideoCloud from "../components/media-components/VideoCloud"
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("video", () =>{
    it("open video", () => {
        const {getByTestId} = render(<VideoCloud />);
        const button = getByTestId("openWidget")
        expect(button).toEqual(1)
    })
});