import React, { SyntheticEvent } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Card from "./";
import userEvent from "@testing-library/user-event";

test("1. caso: exibição do componente <Card />", () => {
    render(<Card title="Nenhum" />);
    const element = screen.getByText(/Nenhum/i);
    expect(element).toBeInTheDocument();
});

test("2. caso: tenha uma ação no card <Card />", async () => {
    const id = "123";
    let result = "";
    const onActionClick = (ev: SyntheticEvent, id: string) => {
        result = id;
    }
    render(<Card title="Nenhum" id={id} hasAction onActionClick={onActionClick} />);

    userEvent.click(screen.getByTitle(`Show more for ${id}`));

    await waitFor(() => result === id);

    expect(result === id).toBeTruthy();
});
