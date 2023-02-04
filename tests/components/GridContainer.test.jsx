import { render, screen } from "@testing-library/react";
import { GridContainer } from "../../src/components/GridContainer";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GridContainer />", () => {
    const category = "One Punch";

    test("debe de mostrar el loading inicialmente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GridContainer category={category} />);
        expect(screen.getByText("Cargando...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test("debe de mostrar items cuando se cargan las imagenes useFetchGifs()", () => {

        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://saitama.com/saitama.jpg'
            },
            {
            id: 'ABCD',
            title: 'Goku',
            url: 'https://Goku.com/Goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });
        render(<GridContainer category={category} />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});
