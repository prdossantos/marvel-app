import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterForm from "./CharacterForm";

test('1. caso: exibição do componente <CharacterForm />', () => {
    render(<CharacterForm />);
    const element = screen.getByText(/Salvar/i);
    expect(element).toBeInTheDocument();
});

test('2. caso: erro de validação <CharacterForm />', async () => {

    render(<CharacterForm />);

    userEvent.click(screen.getByText("Salvar"));

    await waitFor(() => expect(screen.getAllByText("Campo obrigatório")).toHaveLength(2));
});
