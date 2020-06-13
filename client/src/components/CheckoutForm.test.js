import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const wrapper = rtl.render(<CheckoutForm />);
    const header = wrapper.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const wrapper = rtl.render(<CheckoutForm />);

    const firstName = wrapper.getByLabelText(/first name/i);
    const lastName = wrapper.getByLabelText(/last name/i);
    const address = wrapper.getByLabelText(/address/i);
    const city = wrapper.getByLabelText(/city/i);
    const state = wrapper.getByLabelText(/state/i);
    const zip = wrapper.getByLabelText(/zip/i);

    wrapper.fireEvent.change(firstName, { target: {value: 'Kadeem'}});
    wrapper.fireEvent.change(lastName, { target: {value: 'Beckford'}});
    wrapper.fireEvent.change(address, { target: {value: '960 E 232'}});
    wrapper.fireEvent.change(city, { target: {value: 'Bronx'}});
    wrapper.fireEvent.change(state, { target: {value: 'NY'}});
    wrapper.fireEvent.change(zip, { target: {value: '11111'}});

    expect(firstName.value).toBe('Kadeem');
    expect(lastName.value).toBe('Beckford');
    expect(address.value).toBe('960 E 232');
    expect(city.value).toBe('Bronx');
    expect(state.value).toBe('NY');
    expect(zip.value).toBe('11111');

    const checkoutButton = wrapper.getByText('Checkout')
    fireEvent.click(checkoutButton)

    const getMyName = wrapper.getByText(/tasha/i);
    expect(getMyName).toBeInTheDocument();

    const success = wrapper.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});
