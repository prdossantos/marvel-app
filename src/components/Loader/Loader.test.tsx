import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './';

test(`1. caso: exibição do componente <Loader />`, () => {
    render(<Loader isActive={true} />);
    const element = screen.getByText(/processando/i);
    expect(element).toBeInTheDocument();
});

test(`2. caso: verifica se o loader page é exibido <Loader isLoaderPage={true} />`, () => {
    const { container } = render(<Loader isActive={true} isPageLoader={true} />);

    expect( container.firstElementChild?.classList.contains('loader-page')).toBeTruthy();
});

test(`3. caso: verifica se o loader está inativo <Loader isActive={false} />`, () => {
    render(<Loader isActive={false} />);
    const element = screen.getByText(/processando/i);
    expect(element).not.toBeNull();
});
