const { render, screen, fireEvent } = require("@testing-library/react")
const { GifGridApp } = require("../src/GifGridApp")


describe('Pruebas en <GifGridApp />', () => { 
    const inputValue = 'Mario Car';
    const SecondinputValue = 'Demon Slayer';

    test('should add new categories the function onAddCategory', () => { 
        
        render(<GifGridApp /> )
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit(form); // Add Mario Car
        fireEvent.input( input, { target: {value: SecondinputValue} } );
        fireEvent.submit(form); // Add Demon Slayer
        const titles = screen.getAllByRole('heading', { level: 3 });

        expect( titles.length ).toBe(3)
    })
    test('shouldnt add new categories if the category already exist', () => { 
        
        render(<GifGridApp /> )
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit(form); // Add Mario Car
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit(form); // Add Mario Car
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit(form); // Add Mario Car

        const titles = screen.getAllByRole('heading', { level: 3 });
        
        expect( titles.length ).toBe(2)
    })

})