import React, { SyntheticEvent } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Header from ".";
import userEvent from "@testing-library/user-event";

test("1. caso: exibição do componente <Header />", () => {
    render(<Header title="Nenhum" />);
    const element = screen.getByText(/Nenhum/i);
    expect(element).toBeInTheDocument();
});

test("2. caso: tenha uma ação no <Header />", async () => {
    const id = "123";
    let result = "";
    const onActionClick = (ev: SyntheticEvent, id: string) => {
        result = id;
    };
    render(<Header title="Nenhum" id={id} showRightButton onActionClick={onActionClick} />);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => result === id);

    expect(result === id).toBeTruthy();
});
